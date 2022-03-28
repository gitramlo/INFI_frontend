import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { _IDOSaleTotalCollectedFunds } from "../../Services/Web3Connection";
export default function LaunchpadComponent(props) {
  const [RaisedAmmount, setRaisedAmmount] = useState(0);
  useEffect(async () => {
    let data = await _IDOSaleTotalCollectedFunds(props.data[2][1]);
    console.log(data);
    setRaisedAmmount(data);
  }, []);
  return (
    <>
      <div className="container">
        <div className="mb-5">
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
                <Link to={`/launchpad/${props.data[2][1]}`}>
                  <div data-v-cbeecb6c="" class="pool__network">
                    <span className="text-warning">{props.data[0][1]}</span>
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
                {props.data[0][0]}
              </div>
              <div data-v-cbeecb6c class="pool__sub">
                Enter the metaverse, in your own style! iv data-v-cbeecb6c
                {props.data[0][0]} is the metaverse's first gaming hub in which
                players will be able to own and personalize an NFT gaming room
                in order to: play multitude of P2E games, earn passively with
                in-room ads, socialize with their friends - in both a desktop
                and VR setting.
              </div>
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
                Min goal {props.data[1][2] / Math.pow(10, 18)} BNB
              </div>
            </div>{" "}
          </div>
          {/* -----bottom content------- */}
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
              {/* <div data-v-cbeecb6c="" class="cover__item">
                  <div data-v-cbeecb6c="" class="cover__label">
                    Per AKpxz
                  </div>{" "}
                  <div data-v-cbeecb6c="" class="cover__value">
                    0.021 USDC
                  </div>
                </div> */}
            </div>
          </div>
          {/* ----close bottom content----- */}
        </div>
      </div>
    </>
  );
}
