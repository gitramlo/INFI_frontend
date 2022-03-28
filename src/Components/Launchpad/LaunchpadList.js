import React, { useEffect, useState } from "react";
import LaunchpadComponent from "./LaunchpadComponent";
import { _InfinityFactoryContractGetAllDataByAddress } from "../../Services/Web3Connection";
export default function LaunchpadList() {
  const [FactoryContract, setFactoryContract] = useState(null);
  useEffect(async () => {
    let data = await _InfinityFactoryContractGetAllDataByAddress();
    setFactoryContract(data);
    console.log(data);
  }, []);

  return (
    <>
      {FactoryContract === null ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          ... Loading
        </div>
      ) : (
        <div className="container cardlist">
          {FactoryContract.map((data) => (
            <LaunchpadComponent data={data} />
          ))}
        </div>
      )}
    </>
  );
}

const Data = [
  {
    status: "Upcoming",
    url: "/launchpad/upcoming",
  },
  {
    status: "Active",
    url: "/launchpad/active",
  },
  {
    status: "Ended",
    url: "/launchpad/ended",
  },
];
