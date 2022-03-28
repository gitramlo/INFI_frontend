import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  _IDOSaleTotalCollectedFunds,
  _IDOSaleUserClaim,
} from "../../Services/Web3Connection";
export default function ClaimCard(props) {
  const [RaisedAmmount, setRaisedAmmount] = useState(0);
  useEffect(async () => {
    let data = await _IDOSaleTotalCollectedFunds(props.data[2][1]);

    console.log(data);
    setRaisedAmmount(data);
  }, []);

  async function _userClaim() {
    let Contract = await _IDOSaleUserClaim(props.data[2][1]);

    Contract.methods
      .UserClaim(props.data[2][0])
      .call()
      .then(() => Swal.fire("Transaction Completed"))
      .catch((e) =>
        Swal.fire("Investors can only claim in between start time and end Time")
      );
    // .catch((err) => {
    //   alert(err.code);
    // });
  }
  return (
    <>
      <div class=" col-xs-12 pt-4">
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
              {props.data[0][0]}
            </div>
            <div data-v-cbeecb6c class="pool__sub">
              Enter the metaverse, in your own style! {props.data[0][0]} is the
              metaverse's first gaming hub in which players will be able to own
              and personalize an NFT gaming room in order to: play multitude of
              P2E games, earn passively with in-room ads, socialize with their
              friends - in both a desktop and VR setting.
            </div>
          </div>
          <div className=" cardbtn">
            <button class="button" onClick={_userClaim}>
              Claim
            </button>
            {/* <button type="button" className="cartbt">Claim</button> */}
          </div>
          <div data-v-cbeecb6c className="pool__launch-info">
            <div data-v-cbeecb6c className="pool__label">
              Raised Amount
            </div>
            <div data-v-cbeecb6c className="pool__values">
              <div data-v-cbeecb6c className="pool__value">
                {RaisedAmmount / Math.pow(10, 18)}
              </div>
              <div data-v-cbeecb6c className="pool__value pool__value_grey">
                {/* /200000 USDC */}
              </div>
            </div>

            <div data-v-cbeecb6c className="pool__progress">
              Min goal 20000 USDC
            </div>
          </div>
        </div>
        <div className="bottomcard">
          <div data-v-cbeecb6c="" class="pool__cover cover">
            <div data-v-cbeecb6c="" class="cover__item">
              <div data-v-cbeecb6c="" class="cover__label">
                Per AKITAX
              </div>{" "}
              <div data-v-cbeecb6c="" class="cover__value">
                0.001 USDC
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
