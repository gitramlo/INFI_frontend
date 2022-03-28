import React from "react";
import { Link } from "react-router-dom";


const Lauuch = () => {
  return (
    <>
    {/* <div className="bgimg"> */}
      <div className="container">
      <div class="row">
       <div className="col-md-12">
          <div data-v-5b46e2aa="" class=" col-md-6 header all__header">
            <div data-v-5b46e2aa="" class="header__top-taber">
              <div data-v-5b46e2aa="" class="top-taber ml-3">
              <Link to='/launchpad'>
                <a
                  data-v-5b46e2aa=""
                  href="/projects?type=launch"
                  class="top-taber__label nuxt-link-exact-active nuxt-link-active top-taber__label_active"
                  aria-current="page"
                >
                  LaunchPad/
                </a>{" "}
                </Link>
                <Link to='/claim'>
           
                <a
                  data-v-5b46e2aa=""
                  href="/projects?type=stake"
                  class="top-taber__label nuxt-link-active"
                >
                  Claims
                </a>{" "}
                </Link>
              </div>
              <div className='col-md-12'>
              <div data-v-5b46e2aa="" class=" top-taber__break"></div>
                <div data-v-5b46e2aa="" class="  top-taber__line"></div>
                <div data-v-7107b216="" class="top-taber__line top-taber__line_left"></div>
              </div>
            </div>{" "}
          </div>
          </div>
          </div>
          {/* ------------------------open Search--------------*/}
          <div className="col-md-12">
          <div data-v-5b46e2aa="" class="all__search search">
            <div data-v-5b46e2aa="" class="d-flex p-2 justify-content-center search__field">
              <div data-v-5b46e2aa="">
                <img
                  data-v-5b46e2aa=""
                  alt="seacrh"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjI4MjYgMTcuMTc3OEwyMyAyMy44OTUyTTE5LjE3MzkgMTAuMzQzMUMxOS4xNzM5IDE1LjUwMzEgMTUuMTA1NSAxOS42ODYyIDEwLjA4NyAxOS42ODYyQzUuMDY4MzcgMTkuNjg2MiAxIDE1LjUwMzEgMSAxMC4zNDMxQzEgNS4xODMwNSA1LjA2ODM3IDEgMTAuMDg3IDFDMTUuMTA1NSAxIDE5LjE3MzkgNS4xODMwNSAxOS4xNzM5IDEwLjM0MzFaIiBzdHJva2U9IiNGRjI4NEMiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K"
                />
              </div>{" "}
              <div data-v-5b46e2aa="" class="search__input">
                <input data-v-5b46e2aa="" placeholder="Search" type="text" />
              </div>
            </div>
          
          {/* -----------------Close Search------------------ */}
        </div>
        </div>
   
      </div>
      {/* </div> */}
    </>
  );
};

export default Lauuch;
