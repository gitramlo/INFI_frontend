// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TOKIN is ERC20, ERC20Burnable, Pausable, Ownable {
    uint256 private airdropAmount = 10 ;
    uint256 private ManagementAmount = 10;
    uint256 private MarketingAmount = 5;
    uint256 private privateAmount = 15 ;
    uint256 private PublicRound1Amount = 25;
    uint256 private PublicRound2Amount = 20;
    uint256 private PublicRound3Amount = 15;

    constructor() ERC20("TOKIN", "TKI") {
        _mint(msg.sender, 1000000000 * 10 ** decimals());
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, amount);
    }



    function getAirDropAmmount() public view virtual returns(uint256) {
        return airdropAmount;
    }

     function getManagementAmount() public view virtual returns(uint256) {
        return ManagementAmount;
    }
       function getMarketingAmount() public view virtual returns(uint256) {
        return MarketingAmount;
    }

    function  getPrivateAmount() public view virtual returns(uint256) {
        return privateAmount;
    }

     function getPublicRound1Amount() public view virtual returns(uint256) {
        return PublicRound1Amount;
    }
       function getPublicRound2Amount() public view virtual returns(uint256) {
        return PublicRound2Amount;
    }

    function getPublicRound3Amount() public view virtual returns(uint256) {
        return PublicRound3Amount;
    }
}