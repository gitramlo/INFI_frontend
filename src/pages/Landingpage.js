import React, { useState } from "react";
// import Launchpage from './Launchpage';
import "./CSS/Landingpage.css";

import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg  ">
        <img
          src={process.env.PUBLIC_URL + "assets/images/logo.png"}
          class="img-fluid ml-5 logolandingpage"
          alt="..."
          width="10%"
          height="10%"
        />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mr-5 navbar-right">
            <li class="nav-item active">
              <a class="nav-link text-white" href="#Home">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#Features">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#InfinityPad">
                InfinityPad
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#Roadmap">
                Roadmap
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#FAQ">
                Whitepaper
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#Partners">
                Partners
              </a>
            </li>
            <Link to="launchpad">
              <li class="nav-item">
                <a class="nav-link text-white buttonapp" href="#">
                  Enter App
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>

      <section class="s-banner js-scroll ativo" id="Home">
        <div class="box-banner">
          <div class="left aos-init aos-animate" data-aos="fade-right">
            <div class="text-banner">
              <h1>
                <span class="shine">Cross-chain</span> liquidity Integration
                platform Powered By InfinityPad
              </h1>
              <p class="text-banner">
                Faster, cheaper, interoperable and more than just trading
              </p>
            </div>
            <div class="info">
              <Link to="/form">
                <a
                  class="whitelist"
                  href="#"
                  target="_blank"
                  rel="Apply For IDO"
                >
                  Apply For IDO
                </a>
              </Link>
              <div class="date">
                <a
                  href="https://github.com/InfinityPad "
                  target="_blank"
                  class="medium_link"
                  rel="Medium"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "assets/images/githublogo.png"
                    }
                    alt="icon-date"
                  />
                </a>
                <a
                  href="https://InfinityPad .medium.com/"
                  target="_blank"
                  class="medium_link"
                  rel="Medium"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "assets/images/mediumlogo.png"
                    }
                    alt="icon-date"
                  />
                </a>
                <a
                  href="https://t.me/InfinityPad group"
                  target="_blank"
                  class="medium_link"
                  rel="Medium"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "assets/images/Telegramlogo.png"
                    }
                    alt="icon-date"
                  />
                </a>
                <a
                  href="https://twitter.com/InfinityPad Official"
                  target="_blank"
                  class="medium_link"
                  rel="Medium"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "assets/images/twitterlogo.png"
                    }
                    alt="icon-date"
                  />
                </a>
              </div>
            </div>
          </div>

          <span class="text-criado">
            Powered By
            <strong>InfinityPad</strong>
          </span>
        </div>
      </section>

      <section class="s-features js-scroll ativo" id="Features">
        <div class="top">
          <h2 data-aos="fade-right" class="aos-init aos-animate">
            Features
          </h2>
          <span data-aos="fade-right" class="p-modulo aos-init aos-animate">
            The Future of Decentralized Trading
          </span>
        </div>

        <div class="grid-perguntas aos-init aos-animate" data-aos="fade-up">
          <div class="item">
            <img
              src={process.env.PUBLIC_URL + "assets/images/icon1.svg"}
              alt="icon"
            />
            <p class="title-features">Powered by InfinityPad</p>
            <p class="text-features">
              We decided to join this quick growing ecosystem
            </p>
          </div>
          <div class="item">
            <img
              src={process.env.PUBLIC_URL + "assets/images/icon4.svg"}
              alt="icon"
            />
            <p class="title-features">Built on Astar Network</p>
            <p class="text-features">
              Astar supports EVM, ECDSA, and Solidity. We can deploy Ethereum
              compatible smart contracts easily.
            </p>
          </div>

          <div class="item">
            <img
              src={process.env.PUBLIC_URL + "assets/images/icon6.svg"}
              alt="icon"
            />
            <p class="title-features">Cross-chain liquidity pool</p>
            <p class="text-features">
              Users can trade tokens from different chains
            </p>
          </div>

          <div class="item">
            <img
              src={process.env.PUBLIC_URL + "assets/images/icon5.svg"}
              alt="icon"
            />
            <p class="title-features">Layer 2 scaling solution</p>
            <p class="text-features">
              Astar Network brings fast and low transaction costs
            </p>
          </div>

          <div class="item">
            <img
              src={process.env.PUBLIC_URL + "assets/images/icon7.svg"}
              alt="icon"
            />
            <p class="title-features">Token launchpad</p>
            <p class="text-features">
              Create cross-chain token pools and raise capital for projects
            </p>
          </div>

          <div class="item">
            <img
              src={process.env.PUBLIC_URL + "assets/images/icon2.svg"}
              alt="icon"
            />
            <p class="title-features">Governance</p>
            <p class="text-features">
              On-Chain governance will be created to make InfinityPad a DAO
            </p>
          </div>
        </div>
      </section>

      <div data-scrollmagic-pin-spacer="" class="scrollmagic-pin-spacer">
        <section
          class="s-mentor aos-init aos-animate"
          data-aos="fade-up"
          id="Roadmap"
        >
          <div class="box-about">
            <h2>InfinityPad Cross-chain Liquidity Pool</h2>
            <img src={process.env.PUBLIC_URL + "assets/images/aboutpad.jpg"} />
          </div>
        </section>

        <section class="s-mentor aos-init aos-animate" data-aos="fade-up">
          <div class="box-about">
            <h2>Built on Astar Network</h2>
            <img
              src={
                process.env.PUBLIC_URL + "assets/images/buildinfinitypad.png"
              }
            />
          </div>
        </section>

        <section
          class="s-mentor aos-init aos-animate"
          data-aos="fade-up"
          id="InfinityPad"
        >
          <div class="box-about">
            <h2>InfinityPad Launchpad</h2>
            <img
              src={process.env.PUBLIC_URL + "assets/images/aboutlaunchpad.png"}
            />
          </div>
        </section>

        <section
          className="s-mentor aos-init aos-animate"
          data-aos="fade-up"
          id="tier-system"
        >
          <div className="box-about">
            <h2 style={{ marginBottom: 120 }}>Tier System</h2>
          </div>
          <div className="tier-system-content">
            <div className="tier-system-item">
              <p className="title">TIER 1</p>
              <p>Requirement</p>
              <p className="bold">Complete Social Tasks</p>
              <p>Allocation Guaranteed</p>
              <p className="bold">YES</p>
              <p>Lock Period (days)</p>
              <p className="bold">0</p>
              <p>Pool Weight</p>
              <p className="bold last">5</p>
            </div>
            <div className="tier-system-item">
              <p className="title">TIER 2</p>
              <p>Requirement</p>
              <p className="bold">Stake INFP 1,000</p>
              <p>Allocation Guaranteed</p>
              <p className="bold">YES</p>
              <p>Lock Period (days)</p>
              <p className="bold">20</p>
              <p>Pool Weight</p>
              <p className="bold last">20</p>
            </div>
            <div className="tier-system-item">
              <p className="title">TIER 3</p>
              <p>Requirement</p>
              <p className="bold">Stake INFP 2,500</p>
              <p>Allocation Guaranteed</p>
              <p className="bold">YES</p>
              <p>Lock Period (days)</p>
              <p className="bold">20</p>
              <p>Pool Weight</p>
              <p className="bold last">60</p>
            </div>
            <div className="tier-system-item">
              <p className="title">TIER 4</p>
              <p>Requirement</p>
              <p className="bold">Stake INFP 8,000</p>
              <p>Allocation Guaranteed</p>
              <p className="bold">YES</p>
              <p>Lock Period (days)</p>
              <p className="bold">20</p>
              <p>Pool Weight</p>
              <p className="bold last">200</p>
            </div>
            <div className="tier-system-item">
              <p className="title">TIER 5</p>
              <p>Requirement</p>
              <p className="bold">Stake INFP 15,000</p>
              <p>Allocation Guaranteed</p>
              <p className="bold">YES</p>
              <p>Lock Period (days)</p>
              <p className="bold">20</p>
              <p>Pool Weight</p>
              <p className="bold last">400</p>
            </div>
          </div>
        </section>

        <section
          className="s-projetos js-scroll aos-init aos-animate ativo"
          data-aos="fade-up"
          id="FAQ"
        >
          <div className="box-projetos">
            <div className="top">
              <h2 data-aos="fade-right" className="aos-init aos-animate">
                FAQ
              </h2>
              <span
                data-aos="fade-right"
                className="p-modulo aos-init aos-animate"
              >
                Please refer to relevant issues
              </span>
            </div>
            <div className="content">
              <a rel="noopener">
                <div className="item">
                  <div className="title">
                    <span className="number-projeto">01</span>
                    <h2 className="title-projetos">
                      What can users do on InfinityPad ?
                    </h2>
                  </div>
                  <p className="p-projetos">
                    Users can trade tokens cross-chain, participate in IDOs and
                    more additional features in future.
                  </p>
                  <div className="icon" />
                </div>
              </a>
              <a rel="noopener">
                <div className="item">
                  <div className="title">
                    <span className="number-projeto">02</span>
                    <h2 className="title-projetos">
                      What is InfinityPad ’s token utility ($INFP)?
                    </h2>
                  </div>
                  <p className="p-projetos">
                    INFP can be used to farm, to earn revenue share and to
                    participate in governance.
                  </p>
                  <div className="icon" />
                </div>
              </a>
              <a rel="noopener">
                <div className="item">
                  <div className="title">
                    <span className="number-projeto">03</span>
                    <h2 className="title-projetos">
                      How can I contact the InfinityPad team?
                    </h2>
                  </div>
                  <p className="p-projetos">
                    Email: business@InfinityPad .io. You can also find us on
                    Twitter and Telegram.
                  </p>
                  <div className="icon" />
                </div>
              </a>
              <a rel="noopener">
                <div className="item">
                  <div className="title">
                    <span className="number-projeto">04</span>
                    <h2 className="title-projetos">
                      Are there risks in using InfinityPad ?
                    </h2>
                  </div>
                  <p className="p-projetos">
                    The InfinityPad smart contracts will be audited to ensure
                    they are safe.
                  </p>
                  <div className="icon" />
                </div>
              </a>
              <a rel="noopener">
                <div className="item">
                  <div className="title">
                    <span className="number-projeto">05</span>
                    <h2 className="title-projetos">Where can I buy $INFP?</h2>
                  </div>
                  <p className="p-projetos">
                    $INFP will be initially available for purchase via an IDO
                    soon - follow our medium, Twitter and telegram posts to find
                    out when the whitelist is announced and how t apply. Shortly
                    after the IDO, $INFP will be available on Uniswap, followed
                    by other exchanges.
                  </p>
                  <div className="icon" />
                </div>
              </a>
              <a rel="noopener">
                <div className="item">
                  <div className="title">
                    <span className="number-projeto">06</span>
                    <h2 className="title-projetos">
                      How are asset prices determined on InfinityPad ?
                    </h2>
                  </div>
                  <p className="p-projetos">
                    InfinityPad doesn’t use an order book to derive the price of
                    an asset. InfinityPad will work in the same way as Uniswap’s
                    AMM. The larger the order relative to the pool, the worst
                    the rate you will receive as the ratio moves along the
                    curve.
                  </p>
                  <div className="icon" />
                </div>
              </a>
              <a rel="noopener">
                <div className="item">
                  <div className="title">
                    <span className="number-projeto">07</span>
                    <h2 className="title-projetos">
                      What is the future of InfinityPad ?
                    </h2>
                  </div>
                  <p className="p-projetos">
                    The future of InfinityPad is not only a fast, low fee
                    cross-chain liquidity pool trading platform but also an
                    integrated platform to serve the multiple needs of traders
                    and DeFi as a whole.
                  </p>
                  <div className="icon" />
                </div>
              </a>
            </div>
            <div className="date">
              <a
                className="telegram_link"
                href="https://t.me/InfinityPad io"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={
                    process.env.PUBLIC_URL + "assets/images/Telegramlogo.png"
                  }
                />
                <span className="text-date">
                  <strong>Follow on Telegram</strong>
                </span>
              </a>
              <a
                className="twitter_link"
                href="https://twitter.com/InfinityPad Official"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "assets/images/twitterlogo.png"}
                />
                <span className="text-date">
                  <strong>Follow on Twitter</strong>
                </span>
              </a>
            </div>
          </div>
        </section>

        <section
          className="s-parceiros js-scroll aos-init aos-animate ativo"
          data-aos="fade-up"
          id="Partners"
        >
          <div className="box-parceiros">
            <h2 data-aos="fade-right" className="aos-init aos-animate">
              Partners
            </h2>
            <div className="empresas">
              <ul>
                <a href="#" target="_blank">
                  <li>
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/mme.png"}
                      alt="the_crypto_lifestyle"
                      className="lozad"
                      data-loaded="true"
                    />
                  </li>
                </a>

                <a href="#" target="_blank">
                  <li>
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/eagle.png"}
                      alt="trendsetter_ventures"
                      className="lozad"
                      data-loaded="true"
                    />
                  </li>
                </a>

                <a href="#" target="_blank">
                  <li>
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/tcs.png"}
                      alt="skybridge_ventures"
                      className="lozad"
                      data-loaded="true"
                    />
                  </li>
                </a>
                <a href="#" target="_blank">
                  <li>
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/mmic.png"}
                      alt="crypto_legendary"
                      className="lozad"
                      data-loaded="true"
                    />
                  </li>
                </a>

                <a href="#" target="_blank">
                  <li>
                    <img
                      src={
                        process.env.PUBLIC_URL + "assets/images/cryptoon.png"
                      }
                      alt="RAY_PAKA"
                      className="lozad"
                      data-loaded="true"
                    />
                  </li>
                </a>
                <a href="#" target="_blank">
                  <li>
                    <img
                      src={
                        process.env.PUBLIC_URL + "assets/images/milkyway.png"
                      }
                      alt="netvrk"
                      className="lozad"
                      data-loaded="true"
                    />
                  </li>
                </a>
                <a href="#" target="_blank">
                  <li>
                    <img
                      src={
                        process.env.PUBLIC_URL + "assets/images/daostarter.png"
                      }
                      alt="gms"
                      className="lozad"
                      data-loaded="true"
                    />
                  </li>
                </a>

                <a href="#" target="_blank">
                  <li>
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/gami.png"}
                      alt="any-swap"
                      className="lozad"
                      data-loaded="true"
                    />
                  </li>
                </a>

                <a href="#" target="_blank">
                  <li>
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/interfi.png"}
                      alt="any-swap"
                      className="lozad"
                      data-loaded="true"
                    />
                  </li>
                </a>

                <a href="#" target="_blank">
                  <li>
                    <img
                      src={
                        process.env.PUBLIC_URL + "assets/images/kommunitas.png"
                      }
                      alt="any-swap"
                      className="lozad"
                      data-loaded="true"
                    />
                  </li>
                </a>

                <a href="#" target="_blank">
                  <li>
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/crypt.png"}
                      alt="any-swap"
                      className="lozad"
                      data-loaded="true"
                    />
                  </li>
                </a>

                <a href="#" target="_blank">
                  <li>
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/tugou.png"}
                      alt="any-swap"
                      className="lozad"
                      data-loaded="true"
                    />
                  </li>
                </a>
                {/* <li>
         <img src="" alt="any-swap" className="lozad" data-loaded="true" />
       </li> */}

                <a href="#" target="_blank">
                  <li>
                    <img
                      src={
                        process.env.PUBLIC_URL + "assets/images/astronaut.png"
                      }
                      alt="any-swap"
                      className="lozad"
                      data-loaded="true"
                    />
                  </li>
                </a>

                <a href="#" target="_blank">
                  <li>
                    <img
                      src={
                        process.env.PUBLIC_URL + "assets/images/launchzone.png"
                      }
                      className="lozad"
                      data-loaded="true"
                    />
                  </li>
                </a>

                <a href="#" target="_blank">
                  <li>
                    <img
                      src={
                        process.env.PUBLIC_URL + "assets/images/mhventures.png"
                      }
                      alt="any-swap"
                      className="lozad"
                      data-loaded="true"
                    />
                  </li>
                </a>

                <a href="#" target="_blank">
                  <li>
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/zig.png"}
                      alt="any-swap"
                      className="lozad"
                      data-loaded="true"
                    />
                  </li>
                </a>

                <a href="#" target="_blank">
                  <li>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "assets/images/cryptoxplorer.png"
                      }
                      alt="any-swap"
                      className="lozad"
                      data-loaded="true"
                    />
                  </li>
                </a>

                <a href="#" target="_blank">
                  <li>
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/phoenix.png"}
                      alt="any-swap"
                      className="lozad"
                      data-loaded="true"
                    />
                  </li>
                </a>

                <a href="#" target="_blank">
                  <li>
                    <img
                      src={
                        process.env.PUBLIC_URL + "assets/images/moonstarter.png"
                      }
                      alt="any-swap"
                      className="lozad"
                      data-loaded="true"
                    />
                  </li>
                </a>

                <a href="#" target="_blank">
                  <li>
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/alien.png"}
                      alt="any-swap"
                      className="lozad"
                      data-loaded="true"
                    />
                  </li>
                </a>
              </ul>
            </div>
            <h2>Audit</h2>
            <div className="empresas">
              <ul>
                <a href="#" target="_blank">
                  <li>
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/inter.png"}
                      alt="the_crypto_lifestyle"
                      className="lozad"
                      data-loaded="true"
                    />
                  </li>
                </a>
              </ul>
            </div>
            <div className="selo aos-init aos-animate" data-aos="fade-left">
              <img
                src={process.env.PUBLIC_URL + "assets/images/infinityselo.png"}
                alt="selo-uiBoost"
                className="lozad"
              />
            </div>
          </div>
        </section>

        <footer
          className="js-scroll aos-init ativo aos-animate"
          data-aos="fade-up"
        >
          <img
            src={process.env.PUBLIC_URL + "assets/images/bubbles.svg"}
            className="bubbles"
            alt="bubbles"
          />
          <div className="top aos-init aos-animate" data-aos="fade-down">
            <a>
              <img
                src={process.env.PUBLIC_URL + "assets/images/logo.png"}
                alt="logo InfinityPad "
              />
            </a>
          </div>
          <div className="box-informacoes">
            <div className="left">
              <p className="title-footer">
                Cross-chain liquidity Integration platform - Powered by
                InfinityPad
              </p>
              <div className="info">
                <span className="ui-text">Contact us:</span>
                <div className="text">
                  Email:business@InfinityPad .io | martin@InfinityPad .io
                </div>
              </div>
              <a className="abrir-modal" href="#" rel="noreferrer">
                InfinityPad{" "}
              </a>
            </div>
            <div className="textwidget custom-html-widget">
              <ul className="footer-share share-list list-unstyled">
                <li>
                  <a href="" target="_blank">
                    <img
                      src={
                        process.env.PUBLIC_URL + "assets/images/twitterlogo.png"
                      }
                    />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "assets/images/Telegramlogo.png"
                      }
                    />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <img
                      src={
                        process.env.PUBLIC_URL + "assets/images/mediumlogo.png"
                      }
                    />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <img
                      src={
                        process.env.PUBLIC_URL + "assets/images/githublogo.png"
                      }
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="box-informacoes "
            style={{ marginBottom: "6rem!important" }}
          >
            <div className="info_menu">
              <span className="ui-text_h1">Company</span>
              <div className="ui-text_menu">
                <ul>
                  <li>
                    <a href="#" target="_blank">
                      Apply for IDO on InfinityPad{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      Apply for listing on InfinityPad Pools
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="info_menu">
              <span className="ui-text_h1">Help</span>
              <div className="ui-text_menu" style={{ color: "white" }}>
                Comming soon
              </div>
            </div>
            <div className="info_menu">
              <span className="ui-text_h1">Projects &amp; Developers</span>
              <div className="ui-text_menu" style={{ color: "white" }}>
                Comming soon
              </div>
            </div>
          </div>
          {/* <div className="bottom">
   <div className="info">
     <span className="ui-text">Copyright © 2022 InfinityPad . All rights reserved.</span>
   </div>
   <div className="topo">
     <a href="#home" className="top-text">
       <img src="img/arrow-up.svg" alt="arrow-up" />
       TOP
     </a>
   </div>
 </div>  */}
        </footer>

        <section className="s-email fixed-bar">
          <div className="email">
            <Link to="launchpad">
              <a className="btn" target="_blank" href="#">
                Enter App
              </a>
            </Link>
            <a target="_blank" href="#">
              <img
                src={process.env.PUBLIC_URL + "assets/images/infinityselo.png"}
                alt
                className="exs"
              />
            </a>
            <a target="_blank" href="#">
              <img
                src={process.env.PUBLIC_URL + "assets/images/uniswap.png"}
                alt
                className="exs"
              />
            </a>
            <a target="_blank" href="#">
              <img
                src={process.env.PUBLIC_URL + "assets/images/mexec.png"}
                alt
                className="exs"
              />
            </a>
          </div>
          <a href="#" target="_blank" className="top-text">
            <div className="email">
              <p className="text-email" tabIndex={17}>
                Dear InfinityPad Supporters, The Token Contract address is:
                0xe6f143a0e0a8f24f6294ce3432ea10fad0206920
              </p>
              {/* <img className="arrowrightimg" src={Arrow} alt="arrow-right" />  */}
            </div>
          </a>
        </section>
      </div>

      {/* <Launchpage />  */}
    </>
  );
};

export default Landingpage;
