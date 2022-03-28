import Web3 from "web3";
import { IDOSaleABI_ } from "../config/abi/IDOSaleContract";
import { PayoutTokenABI } from "../config/abi/PayoutTokenContract";
import {
  InfinityFactoryContractABI,
  Pay,
} from "../config/abi/InfinityFactoryContract";
import { PayoutTokenContractAddress } from "../config/constants/Contracts";
import { InfinityFactoryContractAddress } from "../config/constants/Contracts";

import { InfinityStackingABI } from "../config/abi/InfinityStacking";
//import { TokenContractABI } from "../config/abi/TokenContract";

import { InfinityStackingAddress } from "../config/abi/InfinityStackingconstants/Contracts";
//export { TokenContractAddress } from "../config/constants/Contracts";

export const web3_ = new Web3(window.ethereum);
const _InfinityFactoryContract = new web3_.eth.Contract(
  InfinityFactoryContractABI,
  InfinityFactoryContractAddress
);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Infinity Stacking Contract Address and ABI Definitions
const _InfinityStackingsContract = new web3_.eth.Contract(
  InfinityStackingABI,
  InfinityStackingAddress
);

// Infinity Stacking function

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*----------------------------------------------------------------------------------------------------------------------------- */
// Infinity factory Contract:

export const _InfinityFactoryContractGetAllDataByAddress = async () => {
  let data = await _InfinityFactoryContract.methods
    .getAllIntractionDetails()
    .call();
  return data;
};
export const _InfinityFactoryContractGetDataByAddress = async (address) => {
  let data = await _InfinityFactoryContract.methods
    .getDataByAddress(address)
    .call();
  return data;
};
export const _IDOSaleContractData = async (address) => {
  const Contract = new web3_.eth.Contract(IDOSaleABI_, address);
  let data = Contract._jsonInterface;
  return { data: data, Contract: Contract };
};

export const _IDOSaleGetWhiteListed = async (address) => {
  const Contract = new web3_.eth.Contract(IDOSaleABI_, address);
  return await Contract.methods.GetAllWhiteListed().call();
};

export const _IDOSaleTotalCollectedFunds = async (address) => {
  const Contract = new web3_.eth.Contract(IDOSaleABI_, address);
  return await Contract.methods.TotalCollectedFund().call();
};

export const _IDOSaleUserClaim = async (address) => {
  const Contract = new web3_.eth.Contract(IDOSaleABI_, address);
  return await Contract;
};

export const _IDOLaunchPadParticipate = async (contract, address, value) => {
  const Contract = new web3_.eth.Contract(IDOSaleABI_, contract);
  console.log(Contract);
  console.log(address);
  console.log(
    await Contract.methods.SaleIDOToken(address, value).send({ from: address })
  );
  // return await Contract.methods
  //   .SaleIDOToken(address, 12313)
  //   .send({ from: address });
};

export const _INFP_Stack_btn = async (contract, address, value) => {
  const Contract = new web3_.eth.Contract(IDOSaleABI_);
};

export const _PayoutContract = async () => {
  const Contract = new web3_.eth.Contract(
    PayoutTokenABI,
    PayoutTokenContractAddress
  );

  console.log(Contract);
  return Contract;
};
