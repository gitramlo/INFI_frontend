import React from "react";
import { Link } from "react-router-dom";

const Listactive = () => {
  return (
    <>
      <div class="row">
        <div className="col-md-12">
          <div data-v-5b46e2aa="" class=" col-md-6 header all__header">
            <div data-v-5b46e2aa="" class="header__top-taber">
              <div data-v-5b46e2aa="" class="top-taber ml-3">
                <Link to="/launchpad">
                  <a
                    data-v-5b46e2aa=""
                    href="/projects?type=launch"
                    class="top-taber__label nuxt-link-exact-active nuxt-link-active top-taber__label_active"
                    aria-current="page"
                  >
                    Active/
                  </a>{" "}
                </Link>
                <Link to="/launchpad">
                  <a
                    data-v-5b46e2aa=""
                    href="/projects?type=stake"
                    class="top-taber__label nuxt-link-active"
                  >
                    Upcoming/
                  </a>{" "}
                </Link>

                <Link to="/launchpad">
                  <a
                    data-v-5b46e2aa=""
                    href="/projects?type=stake"
                    class="top-taber__label nuxt-link-active"
                  >
                    Ended
                  </a>{" "}
                </Link>
              </div>
              <div className="col-md-12">
                <div data-v-5b46e2aa="" class=" top-taber__break"></div>
                <div data-v-5b46e2aa="" class="  top-taber__line"></div>
                <div
                  data-v-7107b216=""
                  class="top-taber__line top-taber__line_left"
                ></div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Listactive;
