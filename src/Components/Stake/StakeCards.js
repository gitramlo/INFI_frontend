import React from "react";
import { Link } from "react-router-dom";
import { store } from "../../Redux/store";
import { getAllAccountDetails } from "../../Services/Index";

export default function StakeCards(props) {
  async function _HandleConnect() {
    await getAllAccountDetails()
      .then(async (res) => {
        if (res.result !== "") {
          props.setConnect(true);
          store.getState().ConnectivityReducer.metamaskConnect = true;
          console.log(store.getState().ConnectivityReducer);
        }
      })
      .catch((err) => alert(err));
  }

  async function _HandleDisconnect() {
    props.setConnect(false);
    store.dispatch({ type: "WALLET_DISCONNECT" });
    console.log(store.getState().ConnectivityReducer);
  }

  return (
    <>
      <div className="container">
        <div
          class="row mb-5 mt-3 paddingclass"
          style={{ justifyContent: "space-between" }}
        >
          <div style={{ minWidth: "-webkit-fill-available" }}>
            <div data-v-cbeecb6c="" data-v-5b46e2aa="" class="pool">
              <div data-v-cbeecb6c="" class="pool__container">
                <div data-v-cbeecb6c="" class="pool__top">
                  <div data-v-cbeecb6c="" class="pool__ava">
                    <img
                      data-v-cbeecb6c=""
                      src="https://samurai.cyberfi.tech/_nuxt/img/metamafia.72f2449.png"
                      alt="ava"
                    />
                  </div>
                  <Link to="/active">
                    <div data-v-cbeecb6c="" class="pool__network">
                      <span className="text-warning">APY 72%</span>
                    </div>
                  </Link>
                  <div data-v-cbeecb6c="" class="pool__network">
                    <img
                      data-v-cbeecb6c=""
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAGFBMVEUAAAD/xwD/xwD/xwD/zwD/yAD/xgD/xwAOl1etAAAAB3RSTlMAgN8gEM+gZtFyLwAAAHBJREFUCNddj7EJQCEMRCNmADsHsLCVTJDGDQRbV1BQ1//6gwhedTyS3AW2lIEjW49Tc5oD56wHNr+wQEeCMbeg/diWo0OmgmvSYYhJAxmwLWDurH0VO2BZGSiaycgaUEJY+o91vhFvsNS5JZ/q96EPRwgaUSdfEDoAAAAASUVORK5CYII="
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div data-v-cbeecb6c class="pool__scroll">
                <div data-v-cbeecb6c class="pool__title">
                  Infp 30-Day Staking Pool
                </div>
                <div data-v-cbeecb6c class="pool__sub" style={{ opacity: 1 }}>
                  {" "}
                  Available Balance:0.000 INFP
                  <br />
                  <input
                    type="number"
                    style={{ width: "96%", padding: 6, borderRadius: 10 }}
                    placeholder="Enter amount to buy"
                  />
                  <div
                    className="mr-5"
                    style={{
                      color: "white",
                      display: "flex",
                      margin: "",
                      justifyContent: "space-between",
                    }}
                  >
                    <a href="#" target="_blank">
                      <p
                        className="text-white"
                        style={{ fontFamily: "Industry-Medium, serif" }}
                      >
                        View Contract
                      </p>
                    </a>
                    <a href="#" target="_blank">
                      <p
                        className="text-white mr-4"
                        style={{ fontFamily: "Industry-Medium, serif" }}
                      >
                        See Token Info
                      </p>
                    </a>
                  </div>
                  {/* <div style={{ }}>
                      <p style={{ color: "white", opacity: 1, }}>
                        See Token Info
                      </p>
                    </div> */}
                  <div
                    className="mr-5"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div
                      data-v-cbeecb6c
                      className="pool__label"
                      style={{ opacity: 1 }}
                    >
                      <h6
                        style={{
                          color: "white",
                          fontFamily: "Industry-Medium, serif",
                        }}
                      >
                        Staked Balance
                      </h6>
                      <p
                        style={{
                          color: "white",
                          fontFamily: "Industry-Medium, serif",
                        }}
                      >
                        2.02222
                      </p>
                    </div>{" "}
                    <div
                      data-v-cbeecb6c
                      className="pool__label"
                      style={{ opacity: 1 }}
                    >
                      <h6
                        style={{
                          color: "white",
                          fontFamily: "Industry-Medium, serif",
                        }}
                      >
                        Total Infp Rewards
                      </h6>
                      <p
                        style={{
                          color: "white",
                          fontFamily: "Industry-Medium, serif",
                        }}
                      >
                        3.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexGrow: "grow",
                  width: "96%",
                  alignItems: "end",
                }}
              >
                {!props.Connect ? (
                  <button
                    onClick={_HandleConnect}
                    style={{
                      padding: 5,
                      marginBottom: 10,
                      textAlign: "center",
                      borderRadius: 30,
                      background: "#dd6f20",
                      width: "49%",
                      fontFamily: "Industry-Medium, serif",
                    }}
                  >
                    connect wallet
                  </button>
                ) : (
                  <button
                    onClick={_HandleDisconnect}
                    style={{
                      padding: 5,
                      marginBottom: 10,
                      textAlign: "center",
                      borderRadius: 30,
                      background: "#dd6f20",
                      width: "49%",
                      fontFamily: "Industry-Medium, serif",
                    }}
                  >
                    Disconnect wallet
                  </button>
                )}
                <button
                  className=""
                  style={{
                    minWidth: "49%",
                    marginBottom: 10,
                    padding: 6,
                    borderRadius: 30,
                    background: "#dd6f20",
                    textAlign: "center",
                    fontFamily: "Industry-Medium, serif",
                    fontSize: 14,
                  }}
                >
                  Stack
                </button>
              </div>

              <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexGrow: "grow",
                  width: "96%",
                  alignItems: "end",
                }}
              >
                <button
                  className="mx-0"
                  style={{
                    minWidth: "49%",
                    padding: 6,
                    borderRadius: 30,
                    background: "#dd6f20",
                    textAlign: "center",
                    fontFamily: "Industry-Medium, serif",
                    fontSize: 14,
                  }}
                >
                  Initialize Unstake
                </button>
                <button
                  className=""
                  style={{
                    minWidth: "49%",
                    padding: 6,
                    borderRadius: 30,
                    background: "#dd6f20",
                    textAlign: "center",
                    fontFamily: "Industry-Medium, serif",
                    fontSize: 14,
                  }}
                >
                  Claim Rewards
                </button>
              </div>
            </div>
            {/* -----bottom content------- */}
            <div className="bottomcard">
              <div
                data-v-cbeecb6c=""
                class="pool__cover cover d-flex flex-column"
              >
                <div data-v-cbeecb6c="" class="cover__item ">
                  <div
                    data-v-cbeecb6c=""
                    class="cover__label"
                    style={{ marginLeft: "-103px" }}
                  >
                    <span
                      className="text-white"
                      style={{
                        fontWeight: "600",
                        fontSize: "20px",
                        fontFamily: "Industry-Medium, serif",
                      }}
                    >
                      Total Staked
                    </span>
                    <span
                      className="text-white"
                      style={{
                        fontWeight: "600",
                        fontSize: "20px",
                        fontFamily: "Industry-Medium, serif",
                      }}
                    >
                      0.000 INFP
                    </span>
                  </div>{" "}
                  {/* <div data-v-cbeecb6c="" class="cover__value">
                    0.000 INFP
                  </div> */}
                </div>{" "}
              </div>
            </div>
            {/* ----close bottom content----- */}
          </div>
        </div>
      </div>
    </>
  );
}
