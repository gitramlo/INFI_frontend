// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

library SafeMath {
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        if (a == 0) {
            return 0;
        }
        uint256 c = a * b;
        assert(c / a == b);
        return c;
    }

    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        // assert(b > 0); // Solidity automatically throws when dividing by 0
        uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold
        return c;
    }

    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        assert(b <= a);
        return a - b;
    }

    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        assert(c >= a);
        return c;
    }
}


contract Ownable  {
    address payable public _owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
     * @dev Initializes the contract setting the deployer as the initial owner.
     */
    constructor () {
        _owner = payable(msg.sender);
        emit OwnershipTransferred(address(0), msg.sender);
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() public view returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(_owner == msg.sender, "Ownable: caller is not the owner");
        _;
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address payable newOwner) public onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        emit OwnershipTransferred(_owner, newOwner);
        _owner = newOwner;
    }
}


interface Token {
    function transfer(address to, uint256 value) external returns (bool);
    function transferFrom(address from, address to, uint256 value) external returns (bool);
    function balanceOf(address who) external view returns (uint256);
    function decimals() external view returns(uint256);
}


contract INFP_StakePool_1 is Ownable{
    
    using SafeMath for uint;

    struct User {
        uint256 poolBal;
        uint40 pool_deposit_time;
        uint256 total_deposits;
        uint256 pool_payouts;
        uint256 rewardEarned;
        uint256 coolingTime;
    }
    
    address public tokenAddr;
    uint256 public Pool = 20000000;
    uint256 public PoolBalance;
    uint256 public tokenDecimal;
    uint256 public totalStaked;

    uint256 public poolNumber = 1;
    uint256 public poolRewardPercent = 12;
    uint256 public poolDays = 30;
    uint256 public fullMaturityTime = 30 days; 
    uint256 public coolingPeriod = 7 days;
    uint256 public divisorDays = 1 days;


    // In Cooling Period
    uint coolingPeriod14 = 1209600;  // 14 days
    uint coolingPeriod21 = 1814400;  // 21 days
    uint coolingPeriod30 = 2592000;  // 30 days
    
    // Stake address and amount store
    address[] StakeAddr;
    uint[] StakeAmount;

   

    mapping(address => User) public users;

    event TokenTransfer(address beneficiary, uint amount);
    event PoolTransfer(address beneficiary, uint amount);
    event RewardClaimed(address beneficiary, uint amount);
    
    mapping (address => uint256) public balances;


    constructor(address _tokenAddr) {
        tokenAddr = _tokenAddr;
        tokenDecimal = Token(tokenAddr).decimals();
    }
    
    /* Recieve Accidental BNB Transfers */
    receive() payable external {
        _owner.transfer(msg.value);
        balances[msg.sender] = balances[msg.sender].add(msg.value);
    }


    /* Stake Token Function */
    function PoolStake(uint256  _amount) public returns (bool) {
        
        require(_amount <= Token(tokenAddr).balanceOf(msg.sender),"Token Balance of user is less");
        require(Token(tokenAddr).transferFrom(msg.sender,address(this), _amount),"BEP20: Amount Transfer Failed Check id Amount is Approved");
        PoolBalance += _amount;
        totalStaked += _amount;
        require(PoolBalance <= Pool * (10**tokenDecimal),"Pool is Full, Enter Amount Equal to Pool Holding or remaining pool balance");
        require(users[msg.sender].poolBal == 0,"Already Staked");
        users[msg.sender].poolBal = _amount;
        users[msg.sender].total_deposits += _amount;
        users[msg.sender].pool_deposit_time = uint40(block.timestamp);

        // Store address and amount
        StakeAddr.push(msg.sender);
        StakeAmount.push(_amount);


        emit PoolTransfer(msg.sender, _amount);
        return true;
    }

    // /*Testign funtions*/
    // function ChangeCoolingPeriod(uint _time) public {
    //         coolingPeriod = _time;
    // }
    // function Change14CoolingPeriod(uint _time) public {
    //         coolingPeriod14 = _time;
    // }
    // function Change21CoolingPeriod(uint _time) public {
    //         coolingPeriod21 = _time;
    // }
    // function Change30CoolingPeriod(uint _time) public {
    //         coolingPeriod30 = _time;
    // }
    // function CurrentTime() public view returns(uint){
    //         return block.timestamp;
    // }
    // function ChangefullMaturityTime(uint _time) public {
    //     fullMaturityTime = _time;
    // }

    event TestString(string testString);

    /* Claims Principal Token and Rewards Collected */
    function claimPool() public returns(bool){
        require(users[msg.sender].poolBal > 0,"There is no deposit for this address in Pool");
        uint256 calculatedRewards = rewardsCalculate(msg.sender);
        uint256 amount = users[msg.sender].poolBal;

        // Before FullMaturity Time -> 30 days; 
        if(block.timestamp < users[msg.sender].pool_deposit_time + fullMaturityTime)
        {
            // when user cooling time is zero then  set cooling time
            if(users[msg.sender].coolingTime == 0)
            {
                users[msg.sender].coolingTime = block.timestamp;
            }
            // otherwise
            else
            {
                if(block.timestamp > users[msg.sender].coolingTime + coolingPeriod)
                {
                    if(block.timestamp < users[msg.sender].coolingTime + coolingPeriod14){
                        // current time less than 14 days

                         // Principle fund transfer
                        require(Token(tokenAddr).transfer(msg.sender, amount - (amount*25)/100),"Cannot Transfer Principal Funds");
                        // penalty fund transfer
                        require(Token(tokenAddr).transfer(0xCB66366d92B7FC72652c4635C80cdfe9E1CD6e8b, (amount*25)/100),"Cannot Transfer Penalty Funds");
                        uint256 totalReward= 0;
                        users[msg.sender].rewardEarned += totalReward;
                        emit RewardClaimed(msg.sender, totalReward);
                        PoolBalance -= amount - (amount*25)/100;
                        users[msg.sender].poolBal = 0;
                        users[msg.sender].pool_deposit_time = 0;
                        users[msg.sender].pool_payouts += amount - (amount*25)/100;
                        
                        emit TokenTransfer(msg.sender, amount - (amount*25)/100);
                        emit TestString(" current time less than 14 days");
                        

                    }else if(block.timestamp < users[msg.sender].coolingTime + coolingPeriod21){
                        // current time less than 21 days

                    
                         // Principle fund transfer
                        require(Token(tokenAddr).transfer(msg.sender, amount - (amount*125)/1000),"Cannot Transfer Principal Funds");
                        // penalty fund transfer
                        require(Token(tokenAddr).transfer(0xCB66366d92B7FC72652c4635C80cdfe9E1CD6e8b, (amount*125)/1000),"Cannot Transfer Penalty Funds");
                        uint256 totalReward= 0;
                        users[msg.sender].rewardEarned += totalReward;
                        emit RewardClaimed(msg.sender, totalReward);
                        PoolBalance -= amount - (amount*125)/1000;
                        users[msg.sender].poolBal = 0;
                        users[msg.sender].pool_deposit_time = 0;
                        users[msg.sender].pool_payouts += amount - (amount*125)/1000;
                        
                        emit TokenTransfer(msg.sender, amount - (amount*125)/1000);
                        emit TestString(" current time less than 21 days");

                    }else if(block.timestamp < users[msg.sender].coolingTime + coolingPeriod30) {
                        // current time less than 30 days

                      
                        // Principle fund transfer
                        require(Token(tokenAddr).transfer(msg.sender, amount - (amount) * 6/100),"Cannot Transfer Principal Funds");
                        // penalty fund transfer
                        require(Token(tokenAddr).transfer(0xCB66366d92B7FC72652c4635C80cdfe9E1CD6e8b, (amount) * 6/100),"Cannot Transfer Penalty Funds");
                        uint256 totalReward= 0;
                        users[msg.sender].rewardEarned += totalReward;
                        emit RewardClaimed(msg.sender, totalReward);
                        PoolBalance -= amount - (amount) * 6/100;
                        users[msg.sender].poolBal = 0;
                        users[msg.sender].pool_deposit_time = 0;
                        users[msg.sender].pool_payouts += amount - (amount) * 6/100;
                        
                        emit TokenTransfer(msg.sender, amount - (amount) * 6/100);
                        emit TestString(" current time less than 30 days");

                    }
                   
                }else{
                    require(block.timestamp > users[msg.sender].coolingTime + coolingPeriod,"Cooling Period not reached");
                }
            }
        }
        else
        {  // After FullMaturity Time; 
            require(Token(tokenAddr).transfer(msg.sender, amount),"Cannot Transfer Principal Funds");
            require(Token(tokenAddr).transfer(msg.sender, calculatedRewards),"Cannot Transfer Reward Funds");
            uint256 totalReward= calculatedRewards;
            users[msg.sender].rewardEarned += totalReward;
            emit RewardClaimed(msg.sender, totalReward);
            PoolBalance -= amount;
            users[msg.sender].poolBal = 0;
            users[msg.sender].pool_deposit_time = 0;
            users[msg.sender].pool_payouts += amount;
            
            emit TokenTransfer(msg.sender, amount);
        }
        
        return true;

            
    }

    function calculateRewards(uint256 _amount,address userAdd) internal view returns(uint256){
        return (((_amount*poolRewardPercent)/100)/360)* ((block.timestamp - users[userAdd].pool_deposit_time)/divisorDays);
    }

    function rewardsCalculate(address userAddress) public view returns(uint256){
        uint256 rewards;
        uint256 max_payout = this.maxPayoutOf(users[userAddress].poolBal);
        uint256 calculatedRewards = calculateRewards(users[userAddress].poolBal,userAddress);
        if(users[userAddress].poolBal>0){
            if(calculatedRewards>max_payout){
                rewards = max_payout;
            }else{
                rewards = calculatedRewards;
            }
            
        }
        return rewards;
    }

    function maxPayoutOf(uint256 _amount) external view returns(uint256) {
        return (((_amount * poolRewardPercent)/100)/360) * poolDays;
    }


    
    /* Check Token Balance inside Contract */
    function tokenBalance() public view returns (uint256){
        return Token(tokenAddr).balanceOf(address(this));
    }

    /* Check BSC Balance inside Contract */
    function bnbBalance() public view returns (uint256){
        return address(this).balance;
    }

    function retrieveBnbStuck(address payable wallet) public onlyOwner() returns(bool){
        wallet.transfer(address(this).balance);
        return true;
    }

    function retrieveBEP20TokenStuck(address _tokenAddr,uint256 amount,address toWallet) public onlyOwner() returns(bool){
        Token(_tokenAddr).transfer(toWallet, amount);
        return true;
    }


    /* Calculate Remaining Staking Claim time of Users */
    function stakeTimeRemaining(address _userAdd) public view returns (uint256){
        if(users[_userAdd].pool_deposit_time > 0){
            uint256 stakeTime = users[_userAdd].pool_deposit_time + fullMaturityTime;
            if(stakeTime > block.timestamp){
                return (stakeTime - block.timestamp);
            }else{
                return 0;
            }
        }else{
            return 0;
        }
    }
    

    /* Admin function to update the Pool Total Stake Capacity */
    function updatePoolCapacity(uint256 PoolAmount) public onlyOwner() returns(bool){
        Pool = PoolAmount;
        return true;
    }
    
    /* Maturity Date */
    function maturityDate(address userAdd) public view returns(uint256){
        return (users[userAdd].pool_deposit_time + fullMaturityTime);
    }


    /*Staked Addresses and Amount*/
    function getStakeCSV() public view returns(address[] memory, uint[] memory) {
        return (StakeAddr, StakeAmount);
    }


    // 6 Values are dynamic 
    function setPoolNumber(uint _poolNumber) public onlyOwner {
        poolNumber = _poolNumber;
    }
    function setPoolRewardPercent(uint _poolRewardPercent) public onlyOwner {
        poolRewardPercent = _poolRewardPercent;
    }
    function setPoolDays(uint _poolDays) public onlyOwner {
        poolDays = _poolDays;
    }
    function setFullMaturityTime(uint _fullMaturityTime) public onlyOwner {
        fullMaturityTime = _fullMaturityTime;
    }
    function setCoolingPeriod(uint _coolingPeriod) public onlyOwner {
        coolingPeriod = _coolingPeriod;
    }
    function setDivisorDays(uint _divisorDays) public onlyOwner {
        divisorDays = _divisorDays;
    }


    // function getDivisionDays() public view returns(uint){
    //     return divisorDays;
    // }
    
    


}