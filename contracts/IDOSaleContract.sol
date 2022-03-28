// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/access/Ownable.sol";

library SafeMath {
 
    function tryAdd(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            uint256 c = a + b;
            if (c < a) return (false, 0);
            return (true, c);
        }
    }

    function trySub(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b > a) return (false, 0);
            return (true, a - b);
        }
    }

    function tryMul(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (a == 0) return (true, 0);
            uint256 c = a * b;
            if (c / a != b) return (false, 0);
            return (true, c);
        }
    }

    function tryDiv(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b == 0) return (false, 0);
            return (true, a / b);
        }
    }

    function tryMod(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b == 0) return (false, 0);
            return (true, a % b);
        }
    }

    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        return a + b;
    }

    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return a - b;
    }

    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        return a * b;
    }

    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return a / b;
    }

    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        return a % b;
    }

    function sub(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        unchecked {
            require(b <= a, errorMessage);
            return a - b;
        }
    }

    function div(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        unchecked {
            require(b > 0, errorMessage);
            return a / b;
        }
    }

    function mod(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        unchecked {
            require(b > 0, errorMessage);
            return a % b;
        }
    }
}

interface IBEP20 {
   
    function totalSupply() external view returns (uint256);

    function balanceOf(address account) external view returns (uint256);

    function transfer(address recipient, uint256 amount) external returns (bool);

    function allowance(address owner, address spender) external view returns (uint256);

    function approve(address spender, uint256 amount) external returns (bool);

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);

    event Approval(address indexed owner, address indexed spender, uint256 value);
}


contract IDOSale is Ownable {
    using SafeMath for uint256;
    IBEP20 token;               // Token Contract Object
    IBEP20 payoutToken;         // Payout Token Object
    uint256 public price;       // Sell Price (input price should be multiply with 10 to the power 18)
    uint256 public startTime;   // IDO start time
    uint256 public endTime;     // IDO End Time
    uint256 public softCap;     // Soft Cap for the IDO
    uint256 public hardCap;     // Hard Cap for the IDo
    address private TokenMakerAddress;      // SoldOut Token Contract Address
    address private PayoutContractAddress;  // Payout Contract Address
    address payable private owner_;         // Contract Owner
    address[] private _airaddress;          // Particepant's Addresses 
    address public AddrOwnerMetamask;       // Owner Metamask Address
    uint256 public TotalCollectedFund;      // Total Collected Payout Fund

    
    // Is Sell for All (true or false)
    bool public sellForAll;

    // Creating an enumerator to set Sell On Off Status
    enum sellStatus
    { 
      SellOn, 
      SellOff
    }
    // Declaring variables of type enumerator
    sellStatus public is_sellStatus;  


    // white listed user dataset
    struct whiteListData {
            bool isListed;
        }
    address[] public WhiteListed; // capture all the address who are whiteListed
    mapping(address=>whiteListData) whiteListDataset;


    // maxbuy dataset 
    struct MaxBuyData {
            uint256 maxBuyAmount;
        }
    mapping(address=>MaxBuyData) MaxBuyDataset;


    // dataset for tracking all the trades of the user 
    struct SellTrackData {
            // address uAddr;
            uint256 amount;
        }
    address[] public SellTrackAddr; // capture all the addresses who perform trades
    uint256[] public SellTrackAddrAmount; // capture all the addresses amount who perform trades

    address[] public AddrTradeHistory; // capture all the addresses who perform trades , for History
    uint256[] public AmountTradeHistory; // capture all the addresses amount who perform trades , for History

    mapping(address=>SellTrackData) SellTrackDataset;

    // // Transaction History
    // struct SaleHistory {
    //     uint256 amount;
    // }
    // mapping(address => SaleHistory) SaleHistoryDataset;


    // Token Claim Track
    struct ClaimTrackData {
        bool isClaim;
    }
    mapping(address=>ClaimTrackData) ClaimTrackDataset;


    // Constructor for the SaleIDOToken
    constructor(address _TokenMakerAddress,address _PayoutContractAddress, uint256 _price, address _AddrOwnerMetamask, uint _startTime, uint _endTime, uint _softCap, uint _hardCap) {
        token = IBEP20(_TokenMakerAddress);
        payoutToken = IBEP20(_PayoutContractAddress);
        TokenMakerAddress = _TokenMakerAddress;
        PayoutContractAddress = _PayoutContractAddress;
        price = _price;
        AddrOwnerMetamask = _AddrOwnerMetamask;
        startTime = _startTime;
        endTime = _endTime;
        softCap = _softCap;
        hardCap = _hardCap;

    }


    // SaleIDOToken function that will use to sell the SoldOut Token
    function SaleIDOToken(address _refaddress, uint256 amount) public virtual returns(bool) {
        // check current time is in range of IDO Time (start time to end time)
        require((block.timestamp > startTime) && (block.timestamp < endTime) , "This function can only call in between start and End Time");
        
        // check this contract has the available blance to transfer 
        require(token.balanceOf(address(this))>=(amount  * price)/10**18,"No more Supply of SoldOut Token");

        // check whitelisted
        require(whiteListDataset[_refaddress].isListed, "User is not White Listed");

        // check max buy for the user
        require(MaxBuyDataset[_refaddress].maxBuyAmount >= amount, "Amount is more than the Max Buy Set to the user");

        // Collect PayoutToken only in this step
        payoutToken.transferFrom(msg.sender, address(this) , amount);
        // token.transfer(_refaddress, (amount  * price)/10**18);

        // and capture transaction maker address into _airaddress array
        _airaddress.push(msg.sender);
        
        // set sell track after the transaction
        SetSellTrack(msg.sender, amount);

        // PayOutCoin Fund Count Update
        TotalCollectedFund = TotalCollectedFund + amount;
        
        return true;
        }



    // Anyone can check Balance of the current contract
    function Balance() public view  returns(uint256) {
            return token.balanceOf(address(this));
    }



    // balance of input address
    function BalanceOfAddr(address addr) public view returns(uint) {
        return token.balanceOf(addr);
    }


    // Admin can add White List and MaxBuy. Same MaxBuy value will be set for all the users into the dataset
    function setWhiteListMaxByArray(address[] memory _addresses, uint256 _amount) public  onlyOwner {
        for (uint i = 0; i < _addresses.length; i++) { 
                whiteListDataset[_addresses[i]].isListed = true;
                // Set Max Buy Limit
                MaxBuyDataset[_addresses[i]].maxBuyAmount = _amount;

                // push address into WhiteListed array
                WhiteListed.push(_addresses[i]);
      }
    }



    // Add White Listed and MaxBuy for individual User
    function setWhiteListMaxBuy(address _addr, uint256 _amount) public  onlyOwner {
        
        // Set Whitelisted
        whiteListDataset[_addr].isListed = true;
        // Set Max Buy Limit
        MaxBuyDataset[_addr].maxBuyAmount = _amount;

        // push address into WhiteListed array
        WhiteListed.push(_addr);
    }



    // Anyone can check given address is White listed or not (Output : true or false)
    function getCheckWhiteListed (address _addresses) public view returns(bool) {
        return whiteListDataset[_addresses].isListed;
    }



    // Anyone can check max buy for individual person by passing address (Output : uint256)
    function GetMaxBuy(address _addresses) public view returns(uint) {
        return MaxBuyDataset[_addresses].maxBuyAmount;
    }


    // Admin can Change sell status (0 to 1 and 1 to 0)
    function SetIDOStatus() public  onlyOwner {
        if (uint(is_sellStatus)==1) {
            is_sellStatus = sellStatus.SellOn;
        }else{
            is_sellStatus = sellStatus.SellOff;
        }
    }


    // Admin can set sell is available for all wallets during the sale is going on to achieve the sale target.
    // Output : true or false
    function SetIDOForAll() public onlyOwner  {
        if (sellForAll==false){
            sellForAll = true;
        }else{
            sellForAll = false;
        }
    }



    // It will mark entry in client SellTrack (it should be private)
    function SetSellTrack(address _addresses, uint256 _amount) private {
 
        SellTrackDataset[_addresses].amount = _amount + SellTrackDataset[_addresses].amount;
        // SaleHistoryDataset[_addresses].amount = _amount + SaleHistoryDataset[_addresses].amount;
        
        uint x = 0;
        for (uint i = 0; i < SellTrackAddr.length; i++) { 
            
            if(SellTrackAddr[i] == _addresses){
                // address already present 
                x = 1; 

                // update SellTrackAddrAmount value when value already present   
                SellTrackAddrAmount[i] = SellTrackAddrAmount[i] + _amount;
            }
        }
        if (x == 0){
            // address not present then insert
            SellTrackAddr.push(_addresses);

            // When address not present or first entry then push amount at last place
            SellTrackAddrAmount.push(_amount);

        }

        // Save every Transaction
        AddrTradeHistory.push(_addresses);
        AmountTradeHistory.push(_amount);
    }



    
    // Anyone can check sell detial by passing address (Output : uint256)
    function getSellTrack(address _addr) public view returns(uint256) {
        return SellTrackDataset[_addr].amount;
    }


    // Anyone can check Cuttent Time Stamp by this funtion (Output : uint256 (Epoch & Unix Timestamp))
    function CurrentTime() public view returns(uint256) {
        // require((block.timestamp > startTime) && (block.timestamp < endTime) , "This function can only call in between start and End Time");
        return block.timestamp;
    }
   
    // Admin can Change Start Time and End Time for IDO
    function ChangeTime(uint256 _startTime, uint256 _endTime) public onlyOwner {
        startTime = _startTime;
        endTime = _endTime;
    }




    // List of all the particepants with their trade
    // Return two array first is the address of the trades and second is the amount list for that
    // Anyone can check All Trades
    function showAllTrade() public view returns(address[] memory, uint[] memory){
        require(SellTrackAddr.length > 0, "Trade data not found");
        return (SellTrackAddr, SellTrackAddrAmount);

    }


    // Admin can mark WhiteListed and Set different MaxBuy Limit for multiple addresses at a time
    function SetWhiteListMaxByArrayDiff(address[] memory addr, uint[] memory uintList) public payable onlyOwner {
        require(addr.length == uintList.length, "Lenght of both the arrays are not same");
        for (uint i = 0; i < addr.length; i++) {
            // Set Whitelisted
            whiteListDataset[addr[i]].isListed = true;

            // Set MaxBuy
            MaxBuyDataset[addr[i]].maxBuyAmount = uintList[i];      

            // push address into WhiteListed array
            WhiteListed.push(addr[i]);
      } 
    }



    // Admin can Refund their PayOut Currency to all clinets
    function Refund() public onlyOwner {
        require(SellTrackAddr.length > 0, "No Previous transaction found");
        require(block.timestamp > endTime, "You cannot call this function before the end time.");
        // hardCap not reached
        require(isHardCapReach() == false, "Hard Cap is reached");
        
        for (uint i = 0; i < SellTrackAddr.length; i++) {
            // payoutToken.transferFrom(address(this),  SellTrackAddr[i], SellTrackDataset[SellTrackAddr[i]].amount);
            
            payoutToken.transfer(SellTrackAddr[i], SellTrackDataset[SellTrackAddr[i]].amount);
            // payoutToken.transfer(AddrOwnerMetamask, TotalCollectedFund);

            // modify sell tracker dataset
            SellTrackDataset[SellTrackAddr[i]].amount = 0; 
      }

      // modity SellTrackAddr and SellTrackAddrAmount Array
        for(uint256 i=0; i<SellTrackAddr.length; i++) {
            SellTrackAddr[i] = address(0);
            SellTrackAddrAmount[i] = 0;
        }

    }


    // Admin can remove individual Whitelisted User,  and  MaxBuy autometically set to 0
    
    function RemoveWhiteListed(address _addr) public onlyOwner {
        whiteListDataset[_addr].isListed = false;
        MaxBuyDataset[_addr].maxBuyAmount = 0;

        // put address zero when address found
        for(uint i=0; i<WhiteListed.length; i++){
            if(WhiteListed[i] == _addr){
                WhiteListed[i] = address(0);
            }
        }

    }



     // Admin can change SoftCap and HardCap Amount
    function ChangeSoftHardCap(uint256 _softCap, uint256 _hardCap) public onlyOwner {
        softCap = _softCap;
        hardCap = _hardCap;
    }


    // Anyone can get Soft Cap and HardCap data (Output : uint256, uint256)
    function GetSoftHardCap() public view returns(uint256, uint256) {
        return (softCap, hardCap);
    }


    // Admin can change Token Price
    function ChangePrice(uint256 _price) public  onlyOwner {
        price = _price;
    }


    // Admin can Transfer all the Fund to Admin Address After IDO Completions  
    function TransferFundToAdmin() public  onlyOwner returns(bool) {
        // 1. onlyOwner
        // 2. hardCap Reached
        require(isHardCapReach() == true, "Hard Cap is not reached");

        // 3. Sale end time > current Time
        require(endTime > block.timestamp, "You cann't transfer fund before sale end.");

        // BUSD fund transfer to owner or admin
        payoutToken.transfer(AddrOwnerMetamask, TotalCollectedFund);
        // token.transferFrom();


        // Set TotalCollectedFund as zero
        TotalCollectedFund = 0;

        return true;
    }


    // Anyone can check Soft Cap reached or not
    function isSoftCapReach() public view returns(bool) {

        // count total sell amount for token 
        uint256 countTotalSellAmount;
        for (uint i = 0; i < SellTrackAddr.length; i++) {
            countTotalSellAmount = countTotalSellAmount + SellTrackDataset[SellTrackAddr[i]].amount;
            } 

        // check soft cap
        if(countTotalSellAmount >= softCap){
            return true;
        }else{
            return false;
        }
    }

    // Anyone can check Hard Cap reached or not
    function isHardCapReach() public view returns(bool) {

        // count total sell amount for token 
        uint256 countTotalSellAmount;
        for (uint i = 0; i < SellTrackAddr.length; i++) {
            countTotalSellAmount = countTotalSellAmount + SellTrackDataset[SellTrackAddr[i]].amount;
            } 

        // check hard cap
        if(countTotalSellAmount >= hardCap){
            return true;
        }else{
            return false;
        }
    }


    // Check Address Present or not in given Address Array
    function isAddressInArray(address[] memory _addrArray, address _addr) public pure returns(bool) {
        bool tempbool=false;
        uint j=0;

        while(j < _addrArray.length) {
            if(_addrArray[j] == _addr){
                tempbool = true;
                break;
            }
        j++;
     }
     return tempbool;
    }


    // Found Index of array 
    function getIndexValue(address[] memory _addrs, address _addr) public pure returns(bool, uint256) {
        for(uint256 i=0; i<_addrs.length; i++) {
            if(_addrs[i] == _addr){
                return (true, i);
            }
        }
        return (false, 0);
    }



    // Anyone can claim their Sold Out Token after Successful IDO completion
    function TokenClaim(address _refaddress) public  returns(bool) {
        // 2. hardCap Reached
        require(isHardCapReach() == true, "Hard Cap is not reached");

        // 3. Sale end time > current Time
        require(endTime > block.timestamp, "You cann't transfer claim before sale end.");

        // client claims only themself token
        require(msg.sender == _refaddress, "Inputed address not matching with your address.");

        // address present in selltrack data array
        require(isAddressInArray(SellTrackAddr, _refaddress), "You does not  have token to claim.");


        // Token(BTCH) fund transfer to user
        token.transfer(_refaddress, (SellTrackDataset[_refaddress].amount  * price)/10**18);
        // mark in claim track dataset
        ClaimTrackDataset[_refaddress].isClaim = true;



        // modify sell tracker dataset
        SellTrackDataset[_refaddress].amount = 0; 


        // modity SellTrackAddr and SellTrackAddrAmount Array
        // get location
        uint i = 0;
        for(i; i<SellTrackAddr.length; i++) {
            if(SellTrackAddr[i] == _refaddress){
                // return (true, i);
                break;
            }
        }
        // pass location
        SellTrackAddr[i] = address(0);
        SellTrackAddrAmount[i] = 0;


        return true;
    }


    // Anyone can check token claim or not by the user address
    function getTokenClaimByAddr(address _addr) public view returns(bool) {
        return ClaimTrackDataset[_addr].isClaim;        
    }


    // Admin can change Owner Metamask Address
    function ChangeOwnerMetamaskAddr(address newAddr) public onlyOwner {
        AddrOwnerMetamask = newAddr;
    }


    // Anyone can get a list of all the whitelist addresses list
    function GetAllWhiteListed() public view returns(address[] memory){
        return WhiteListed;
    }


    // AnyOne can check All the Transactions History even after Refund, TokenClaim and all that.
    function ShowTradeHistory() public view returns(address[] memory, uint256[] memory) {
        return (AddrTradeHistory, AmountTradeHistory);
    }

}