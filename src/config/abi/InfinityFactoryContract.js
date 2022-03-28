export const InfinityFactoryContractABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_TokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_TokenSymbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_PresaleRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_SoftCap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_HardCap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_StartTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_EndTime",
        type: "uint256",
      },
      {
        internalType: "string[]",
        name: "_Links",
        type: "string[]",
      },
      {
        internalType: "address",
        name: "_OwnerMetamaskAddr",
        type: "address",
      },
      {
        internalType: "address",
        name: "_IntractionContractAddr",
        type: "address",
      },
      {
        internalType: "address",
        name: "_PayoutContractAddress",
        type: "address",
      },
    ],
    name: "CollectIDOData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllIntractionDetails",
    outputs: [
      {
        components: [
          {
            internalType: "string[]",
            name: "S1",
            type: "string[]",
          },
          {
            internalType: "uint256[]",
            name: "U1",
            type: "uint256[]",
          },
          {
            internalType: "address[]",
            name: "A1",
            type: "address[]",
          },
          {
            internalType: "string[]",
            name: "Links",
            type: "string[]",
          },
          {
            internalType: "address",
            name: "IntractionContractAddr",
            type: "address",
          },
        ],
        internalType: "struct IDOFactoryContract.IDOFactory[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddr",
        type: "address",
      },
    ],
    name: "getDataByAddress",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getIntractionAddrs",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_IntractionContractAddr",
        type: "address",
      },
    ],
    name: "getStructByAddress",
    outputs: [
      {
        components: [
          {
            internalType: "string[]",
            name: "S1",
            type: "string[]",
          },
          {
            internalType: "uint256[]",
            name: "U1",
            type: "uint256[]",
          },
          {
            internalType: "address[]",
            name: "A1",
            type: "address[]",
          },
          {
            internalType: "string[]",
            name: "Links",
            type: "string[]",
          },
          {
            internalType: "address",
            name: "IntractionContractAddr",
            type: "address",
          },
        ],
        internalType: "struct IDOFactoryContract.IDOFactory",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "round",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "__interationAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "setIDOPresaleRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "__interationAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_softCap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_hardCap",
        type: "uint256",
      },
    ],
    name: "setIDOSoftHardCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "__interationAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_stime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_etime",
        type: "uint256",
      },
    ],
    name: "setIDOStartEndTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_TokenMakerAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_IntractionContractAddr",
        type: "address",
      },
    ],
    name: "setTokenAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
