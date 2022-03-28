import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Lauuch from "../pages/Lauuch";
import ClaimList from "../Components/Claim/ClaimList";
import { _InfinityFactoryContractGetAllDataByAddress } from "../Services/Web3Connection";
const Claim = () => {
  const [FactoryContract, setFactoryContract] = useState(null);
  useEffect(async () => {
    let data = await _InfinityFactoryContractGetAllDataByAddress();
    setFactoryContract(data);
    console.log(data);
  }, []);

  return (
    <>
      <div className="bgimg">
        <Header />
        <div className="container">
          <Lauuch />
          <div class="row mt-5">
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
              <div className="container">
                <ClaimList data={FactoryContract} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Claim;
