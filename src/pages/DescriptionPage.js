import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Modal from "@material-ui/core/Modal";
import "./CSS/DescriptionPage.css";
import { useParams } from "react-router-dom";
import { store } from "../Redux/store";
import moment from "moment";
import { AiOutlineClose } from "react-icons/ai";
import {
  web3_,
  _InfinityFactoryContractGetDataByAddress,
  _PayoutContract,
} from "../Services/Web3Connection";
import {
  connectToWallet,
  getAccountBalance,
  getAllAccountDetails,
} from "../Services/Index";
import Swal from "sweetalert2";
import { _IDOLaunchPadParticipate } from "../Services/Web3Connection";
import { PayoutTokenContractAddress } from "../config/constants/Contracts";
// import Header from "../Header";

const DescriptionPage = () => {
  const [ContractData, setContractData] = useState([]);
  const [totalAmount, setTotalAmount] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [isBalance, setBalance] = useState(false);
  const [isPayoutToken, setPayoutToken] = useState([]);
  const { status } = useParams();
  console.log(status);
  const [open, setOpen] = useState(false);

  useEffect(async () => {
    let data = await _InfinityFactoryContractGetDataByAddress(status);
    setContractData(data);
    setPayoutToken(await _PayoutContract());
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  async function Participate(data) {
    await isPayoutToken.methods
      .approve(status, web3_.utils.toWei(data.toString(), "ether"))
      .send({ from: store.getState().ConnectivityReducer.metamaskAddress })
      .on("transactionHash", function (transactionHash) {
        console.log(transactionHash);
      })
      .on("confirmation", () => {})
      // get New Contract Address
      .then(async () => {
        await _IDOLaunchPadParticipate(
          status,
          store.getState().ConnectivityReducer.metamaskAddress,
          web3_.utils.toWei(data.toString(), "ether")
        );
      })
      .catch((err) => console.log(err));
  }

  const handleAmountChange = (e) => {
    setTotalAmount(e.target.value);
  };
  // const walletBalance = () => {
  //   const balance = getAccountBalance();
  //   setBalance(balance);
  // };

  const handleOpen = () => {
    setOpen(true);
  };

  async function handleClick() {
    await getAllAccountDetails();
    setIsConnected(true);
    connectWallet();
  }

  function connectWallet() {
    // console.log("datatatattata");
    // getAccountBalance();
    // setBalance(true);
    if (isConnected === true) {
      handleOpen();
    }
  }

  return (
    <>
      {ContractData.length === 0 ? (
        <div>...fgsdgf</div>
      ) : (
        <div className="bgimg">
          <Header />
          <Modal
            //  onClose={handleClose}
            open={open}
            style={{
              border: "2px solid #000",
              backgroundColor: "black",
              boxShadow: "2px solid black",
              height: 400,
              width: 500,
              margin: "auto",
              color: "white",
            }}
          >
            <div className="card">
              <div className="card-body">
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <div
                    className="inputtxts ml-3 mt-4"
                    style={{ fontFamily: "Industry-Bold, serif" }}
                  >
                    Allocation
                  </div>
                  <button
                    class="cry-modal-new__x"
                    onClick={handleClose}
                    style={{ outine: "none" }}
                  >
                    <img
                      alt="logo"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjM2NCA3LjA1MDQ4TDE2Ljk0OTcgNS42MzYyN0wxMiAxMC41ODZMNy4wNTAyNSA1LjYzNjI3TDUuNjM2MDQgNy4wNTA0OEwxMC41ODU4IDEyLjAwMDJMNS42MzYwNCAxNi45NUw3LjA1MDI1IDE4LjM2NDJMMTIgMTMuNDE0NEwxNi45NDk3IDE4LjM2NDJMMTguMzY0IDE2Ljk1TDEzLjQxNDIgMTIuMDAwMkwxOC4zNjQgNy4wNTA0OFoiIGZpbGw9IiNGRjI4NEMiLz4KPC9zdmc+Cg=="
                    />
                    {/* <div >
                      <AiOutlineClose />
                    </div> */}
                  </button>
                </div>
                <div className="container">
                  {/* <div className="modalalloc d-flex   mt-3" style={{justifyContent:'space-between'}}>
            <span className="ml-3 " style={{color:"gray",fontSize:"16px",fontWeight:'700'}}>Min/Max Allocation</span>
            <span className="  " style={{color:"#dd6f20",fontSize:"16px",fontWeight:'700'}}>300/10000 BUSD</span>
          </div> */}
                </div>
                <div className="container">
                  <div
                    className="d-flex  mt-3"
                    style={{ justifyContent: "space-between" }}
                  >
                    <span
                      className="ml-3 "
                      style={{
                        color: "white",
                        fontSize: "15px",
                        fontWeight: "700",
                        fontFamily: "Industry-Bold, serif",
                      }}
                    >
                      Min/Max Allocation
                    </span>
                    <span
                      className=""
                      style={{
                        color: "#dd6f20",
                        fontSize: "15px",
                        fontWeight: "700",
                        fontFamily: "Industry-Bold, serif",
                      }}
                    >
                      300/10000 BUSD
                    </span>
                  </div>
                </div>

                <div className="container">
                  <div
                    className="modalall  mt-3"
                    style={{ justifyContent: "space-between" }}
                  >
                    <span
                      className="ml-3 "
                      style={{
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "700",
                        fontFamily: "Industry-Bold, serif",
                      }}
                    >
                      Your Current Balance
                    </span>
                    <span
                      className=""
                      style={{
                        color: "#dd6f20",
                        fontSize: "16px",
                        fontWeight: "700",
                        fontFamily: "Industry-Bold, serif",
                      }}
                    >
                      {isConnected
                        ? parseFloat(
                            store.getState().ConnectivityReducer.metamaskBalance
                          ).toFixed(4) + " BNB"
                        : "0 BNB"}
                    </span>
                  </div>
                </div>

                <div className="container">
                  <div className="col-md-12 mt-3">
                    <span
                      className="alloctext"
                      style={{
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "700",
                        fontFamily: "Industry-Bold, serif",
                      }}
                    >
                      Your Allocation
                    </span>
                  </div>
                </div>
                <div className="container">
                  <div
                    className="modalall mt-2"
                    style={{ justifyContent: "space-between" }}
                  >
                    <input
                      onChange={handleAmountChange}
                      type="number"
                      style={{
                        color: "white",
                        width: "100%",
                        outline: "none",
                        backgroundColor: "#00000000",
                        padding: "0  10px",
                        cursor: "pointer",
                      }}
                    />

                    <span
                      className=" "
                      style={{
                        color: "#dd6f20",
                        fontSize: "16px",
                        fontWeight: "700",
                        fontFamily: "Industry-Bold, serif",
                      }}
                    >
                      {" "}
                      BUSD
                    </span>
                  </div>
                </div>
                <div className="container">
                  <div className="totalam mt-3">
                    {/* <span className="ml-3 modeldesc">Min/Max Allocation</span> */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        className="ml-3 modeldescs "
                        // value={totalAmount}
                        style={{
                          fontSize: "16px",
                          fontWeight: "700",
                          fontFamily: "Industry-Bold, serif",
                        }}
                      >
                        Total Amount
                      </span>
                      <div
                        style={{
                          color: "#fff",
                          outline: "none",
                          backgroundColor: "#00000000",
                          padding: "0  10px",
                          cursor: "pointer",
                        }}
                      ></div>
                    </div>
                    <span
                      className=" modeldescnumss "
                      style={{
                        color: "gray",
                        fontSize: "16px",
                        fontWeight: "700",
                      }}
                    >
                      {totalAmount} BUSD
                    </span>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    onClick={() => Participate(totalAmount)}
                    type="button"
                    class="participatebtn mt-2 btn btn-warning"
                  >
                    Participate
                    {}
                  </button>
                  {/* <button className="participatebtn mt-2 d-flex justify-content-center" style={{fontSize:"16px",fontWeight:'700'}}>Participate</button> */}
                </div>
              </div>
            </div>
          </Modal>

          {/*---------------- Active content---------- */}

          <div className="container">
            <div className="buttontxt d-flex ml-5 mt-5">
              <button type="button" class="btn butttons text-white ">
                Active
              </button>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAGFBMVEUAAAD/xwD/xwD/xwD/zwD/yAD/xgD/xwAOl1etAAAAB3RSTlMAgN8gEM+gZtFyLwAAAHBJREFUCNddj7EJQCEMRCNmADsHsLCVTJDGDQRbV1BQ1//6gwhedTyS3AW2lIEjW49Tc5oD56wHNr+wQEeCMbeg/diWo0OmgmvSYYhJAxmwLWDurH0VO2BZGSiaycgaUEJY+o91vhFvsNS5JZ/q96EPRwgaUSdfEDoAAAAASUVORK5CYII="
                class="img-fluid ml-2 logoimgs"
                alt="Responsive image"
              ></img>
            </div>

            <div class="mt-2">
              <div
                class="d-flex detailsactive"
                style={{ justifyContent: "space-between" }}
              >
                <div className="d-flex flex-column">
                  <div className="d-flex activelogo">
                    <img
                      className="mmlogo"
                      src="https://samurai.cyberfi.tech/_nuxt/img/metamafia.72f2449.png"
                      alt="..."
                      class="rounded-circle rounded-circles"
                    />

                    <h1 className=" texth mt-4 ml-3">{ContractData[0][0]}</h1>
                  </div>

                  <div className="d-flex flex-column">
                    <h5 className="hrading ">Short Description</h5>

                    <span className="w-75 textdesc text-white">
                      {ContractData[0][0]} is a play-to-earn (P2E) game that
                      combines fun GameFi action with incredible NFTs.{" "}
                      {ContractData[0][0]} players enjoy collecting, breeding,
                      and evolving many varieties of
                      {ContractData[0][0]}mon on their journeys. Along the way,
                      players will come across an abundance of unique,
                      cool-looking NFTs.
                    </span>
                  </div>
                </div>

                <div
                  className="activedetails"
                  style={{ justifyContent: "space-between" }}
                >
                  <div
                    className=" underline d-flex"
                    style={{ justifyContent: "space-between" }}
                  >
                    <span
                      className=" "
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "#dd6f20",
                        fontFamily: "Industry-Medium,serif",
                      }}
                    >
                      Start in
                    </span>
                    <span
                      className=""
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "#dd6f20",
                        fontFamily: "Industry-Medium,serif",
                      }}
                    >
                      {moment(ContractData[1][3] * 1000).format(
                        "MMM Do YYYY, h:mm:ss a"
                      )}
                    </span>
                  </div>
                  <div
                    className="underline d-flex mt-3"
                    style={{ justifyContent: "space-between" }}
                  >
                    <span
                      className=" "
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "#dd6f20",
                        fontFamily: "Industry-Medium,serif",
                      }}
                    >
                      Ends in
                    </span>
                    <span
                      className=""
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "#dd6f20",
                        fontFamily: "Industry-Medium,serif",
                      }}
                    >
                      {moment(ContractData[1][4] * 1000).format(
                        "MMM Do YYYY, h:mm:ss a"
                      )}
                    </span>
                  </div>

                  {/* <div
                    className="underline d-flex mt-3"
                    style={{ justifyContent: "space-between" }}
                  >
                    <span
                      className=" "
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "#dd6f20",
                        fontFamily: "Industry-Medium,serif",
                      }}
                    >
                      Min/Max Allocation
                    </span>
                    <span
                      className=""
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "#dd6f20",
                        fontFamily: "Industry-Medium,serif",
                      }}
                    >
                      200/200 BUSD
                    </span>
                  </div> */}

                  <div className="underliness mt-3">
                    <span
                      className=" textin"
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        fontFamily: "Industry-Medium,serif",
                      }}
                    >
                      Access
                    </span>
                    <span
                      className=" namedesc"
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        fontFamily: "Industry-Medium,serif",
                      }}
                    >
                      Public
                    </span>
                  </div>
                  <div className="d-flex">
                    <span
                      className="text-white"
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        fontFamily: "Industry-Medium,serif",
                      }}
                    >
                      {ContractData[1][1] / Math.pow(10, 18)}
                    </span>
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        fontFamily: "Industry-Medium,serif",
                        color: "white",
                        opacity: "50%",
                      }}
                    >
                      /{ContractData[1][2] / Math.pow(10, 18)}
                    </span>
                  </div>
                  {/* <div className="progress" style={{ height: "0.5rem" }}>
                    <div
                      className="progress-bar style={{backgroundColor:'green'}}"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div> */}
                  {/* <div>
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        fontFamily: "Industry-Medium,serif",
                        color: "green",
                      }}
                    >
                      1 GOLD = 0.02BUSD
                    </span>
                  </div> */}
                  <div className="underline mt-4"></div>
                  <div className="mt-2">
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        fontFamily: "Industry-Medium,serif",
                        color: "#dd6f20",
                      }}
                    >
                      Your alloted allocation
                      <span>{totalAmount}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/*--------------Links and buttons contents  */}

            <div className="headtext d-flex flex-column ">
              <span
                className="text-warning linkactive d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    fontFamily: "Industry-Medium,serif",
                    color: "#dd6f20",
                  }}
                >
                  Links
                </div>
                <div className="activegroupbuttons">
                  <div className="gruobuttons mt-2">
                    <button
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        fontFamily: "Industry-Medium,serif",
                      }}
                      type="button"
                      onClick={handleClick}
                      class="btn btn-warning bscccon btn-lg  mt-2> "
                    >
                      {isConnected === true ? "Particpate" : "Connect"}
                    </button>

                    <a
                      href={
                        "https://testnet.bscscan.com/address/" + `${status}`
                      }
                      target="_blank"
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        fontFamily: "Industry-Medium,serif",
                      }}
                      type="button"
                      class="btn btn-outline-warning bscccons btn-lg mx-2 mt-1 "
                    >
                      View Bscscan
                    </a>
                  </div>
                </div>
              </span>

              <div class="d-flex flex-column">
                <div className="d-flex  socialmdialink">
                  <a href="/#" target="_blank">
                    <img
                      style={{ padding: "6px" }}
                      src="https://samurai.cyberfi.tech/_nuxt/img/website.edbded8.svg"
                      alt="..."
                      class="rounded-circle border border-warning"
                    />
                  </a>
                  <a href="/#" target="_blank">
                    <img
                      style={{ padding: "6px" }}
                      src="https://samurai.cyberfi.tech/_nuxt/img/twitter.19a9591.svg"
                      alt="..."
                      class="rounded-circle border border-warning ml-3"
                    />
                  </a>

                  <a href="/#" target="_blank">
                    <img
                      style={{ padding: "6px" }}
                      src="https://samurai.cyberfi.tech/_nuxt/img/twitter.19a9591.svg"
                      alt="..."
                      class="rounded-circle border border-warning ml-3"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/*--------------Links and buttons contents  */}
            {/* ------------About---------- */}

            <div class="row">
              <div class="col-md-12 col-xs-12 mt-5">
                <h1 className="hrading text-white">About Projects</h1>
                <h5 className="textdesc text-white">
                  {ContractData[0][0]} is a play-to-earn (P2E) game that
                  combines fun GameFi action with incredible NFTs.
                  {ContractData[0][0]} players enjoy collecting, breeding, and
                  evolving many varieties of {ContractData[0][0]}mon on their
                  journeys. Along the way, players will come across an abundance
                  of unique, cool-looking NFTs.
                </h5>
              </div>
            </div>

            <div class="row">
              <div class="col-md-7 col-xs-12 mt-5">
                <h5 className="textdesc text-white">
                  ‘Alisia’, a massive magical planet in the {ContractData[0][0]}
                  verse, is home to the majestic {ContractData[0][0]}mon
                  creatures. These creatures each possess their own magical
                  abilities known as ‘elements’. There are a number of said
                  elements including fire, water, wind, metal, and nature. The
                  potency of the {ContractData[0][0]}mon is determined by their
                  rarity and their genes. Some of these genes include luck,
                  accuracy, attack, intelligence and many more. These genes all
                  add up to {ContractData[0][0]}mon that have thirty different
                  levels of strength within the Bronze, Silver, and Gold stages.
                </h5>
              </div>

              <div class="col-md-5 col-xs-12 mt-4">
                <img
                  src="https://samurai.cyberfi.tech/_nuxt/img/1.468c228.png"
                  class="img-fluid ml-3"
                  alt="Responsive image"
                ></img>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 col-xs-12 mt-4">
                <img
                  src="https://samurai.cyberfi.tech/_nuxt/img/2.dff53aa.png"
                  class="img-fluid ml-3"
                  alt="Responsive image"
                ></img>
              </div>

              <div class="col-md-6 col-xs-12 mt-5">
                <h5 className="textdesc text-white">
                  One of the main objectives of {ContractData[0][0]} is to
                  collect as many
                  {ContractData[0][0]}mon as you can- a so-called
                  ‘Play-to-catch’ game. You can find standard{" "}
                  {ContractData[0][0]}mon in the {ContractData[0][0]}verse on
                  either Alisia or later on {ContractData[0][0]}land. Players
                  can also earn $BLUC by playing and stake the $BLUC to yield
                  the secondary token, $SCRL, which will be used to summon new{" "}
                  {ContractData[0][0]}mon at the Summoning Altar.
                </h5>
              </div>
            </div>

            {/* -----------close About------------ */}

            {/*---------Description---------- */}
            <div className="headingtext col-lg-6 col-md-6 col-xs-12 d-flex">
              <img
                src={process.env.PUBLIC_URL + "assets/images/logo.png"}
                alt="..."
                class="rounded-circle roundlogo mt-2"
              ></img>
              <h3 className="text-white ml-3 mt-2">PROJECT DETAILS</h3>
            </div>

            <div className="row">
              <div className="col-md-6 col-xs-12">
                <div
                  className="card  m-3 mb-5"
                  style={{ width: "21rem", height: "17rem" }}
                >
                  <span className="titlehead">USER INFORMATION</span>
                  <div className="card-body">
                    <div class="form-group ">
                      <div class="underlines">
                        <label for="name" class="control-labels">
                          Tier
                        </label>
                      </div>

                      <div class="underlines mt-3">
                        <label for="name" class="control-labels">
                          Is Wishlisted
                        </label>
                        <label for="name" class="descs ">
                          Not Connected
                        </label>
                      </div>

                      <div class="underlines mt-3">
                        <label for="name" class="control-labels ">
                          Allocation left
                        </label>
                        <label for="name" class="descs ">
                          Not Connected
                        </label>
                      </div>
                      <div class="underlines mt-3">
                        <label for="name" class="control-labels">
                          FCFS allocation left
                        </label>
                        <label for="name" class="descs  ">
                          Not Connected
                        </label>
                      </div>
                      <div class="underlines mt-3">
                        <label for="name" class="control-labels">
                          PURCHASED
                        </label>
                        <label for="name" class="descs ">
                          Not Connected
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="card m-3  mb-5" style={{ width: "21rem" }}>
                  <span className="titlehead">TOKEN INFORMATION</span>
                  <div className="card-body">
                    <div class="form-group ">
                      <div class="underlines">
                        <label for="name" class="control-labels">
                          Tocken Ticker
                        </label>
                        <label for="name" class="descs ml-5 ">
                          GLINT
                        </label>
                      </div>

                      <div class="underlines mt-3">
                        <label for="name" class="control-labels">
                          Tocken Chain
                        </label>
                      </div>

                      <div class="underlines mt-3">
                        <label for="name" class="control-labels">
                          Tocken Price
                        </label>
                        <label for="name" class="descs ml-5 ">
                          1 BUSD=50GLINT
                        </label>
                      </div>
                      <div class="underlines mt-3">
                        <label for="name" class="control-labels">
                          Vesting
                        </label>
                      </div>
                      <div class="underlines mt-3">
                        <label for="name" class="control-labels">
                          Total Supply
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*---------Close Description---------- */}
          </div>
          {/* -------------Close Active cintent------------ */}
        </div>
      )}
    </>
  );
};

export default DescriptionPage;
