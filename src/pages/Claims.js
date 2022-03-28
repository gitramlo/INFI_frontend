import React from "react";
import Header from "../Components/Header";
import Tokeninformation from "../Components/Tokeninformation";

const Claims = () => {
  return (
    <>
    <div className="bgimg">
      <Header />
      <div className="container">
        <div className="col-md-2 mt-4 buttontxt d-flex ml-5 mt-5">
          {/* <button type="button" class="btn btn-warning activebtn" style={{height:'30'}}>Active</button> */}
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAGFBMVEUAAAD/xwD/xwD/xwD/zwD/yAD/xgD/xwAOl1etAAAAB3RSTlMAgN8gEM+gZtFyLwAAAHBJREFUCNddj7EJQCEMRCNmADsHsLCVTJDGDQRbV1BQ1//6gwhedTyS3AW2lIEjW49Tc5oD56wHNr+wQEeCMbeg/diWo0OmgmvSYYhJAxmwLWDurH0VO2BZGSiaycgaUEJY+o91vhFvsNS5JZ/q96EPRwgaUSdfEDoAAAAASUVORK5CYII="
            class="img-fluid ml-2"
            alt="Responsive image"
          ></img>
        </div>
        <div className="row">
          <div class="col-md-2 col-xs-12 ">
            <img
              src="https://samurai.cyberfi.tech/_nuxt/img/hodl.0d60172.png"
              alt="..."
              class="rounded-circle "
            />
          </div>

          <div class="col-md-4  col-xs-12">
            <h1 className="texth mt-4 ">META MAFIA NFT</h1>
          </div>
          <div class="col-md-6 col-xs-12">
          <span className="text-warning">starts in</span>
          <span className=" text-warning datadesc">jan 11, 2022 4:30pm</span>
            <div data-v-4d680cc1>
              <div data-v-4d680cc1 className="score__container">
                <div
                  data-v-4d680cc1
                  className="score__filler score__filler_sub"
                  style={{ width: "100%" }}
                />{" "}
                <div
                  data-v-4d680cc1
                  className="score__filler"
                  style={{ width: "83.1729%" }}
                >
                  <div data-v-4d680cc1 className="score__plank" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div class="col-md-6 col-xs-12 mt-5 claimdesc">
            <h5 className="text-warning">Short Deascription</h5>
            <span className=" text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum. industry. Lorem Ipsum
              has been the industry's standard dummy text and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </span>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="gruobuttons">
              <button
                type="button"
                class="btn btn-warning bsccons btn-lg  mt-4"
              >
                View Bscscon
              </button>
              <button
                type="button"
                class="btn btn-outline-warning bsccconss btn-lg ml-2 mt-4"
              >
                View Bscscon
              </button>
            </div>
          </div>
        </div>
        <Tokeninformation />
      </div>
      </div>
    </>
  );
};

export default Claims;
