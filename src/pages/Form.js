import React from 'react';

const Form = () => {
  return <>
 <div className="login-root">
  <div className="box-root flex-flex flex-direction--column" style={{minHeight: '100vh', flexGrow: 1}}>
    <div className="loginbackground box-background--white padding-top--64">
      <div className="loginbackground-gridContainer">
        <div className="box-root flex-flex" style={{gridArea: 'top / start / 8 / end'}}>
          <div className="box-root" style={{backgroundImage: 'linear-gradient(white 0%, rgb(247, 250, 252) 33%)', flexGrow: 1}}>
          </div>
        </div>
        <div className="box-root flex-flex" style={{gridArea: '4 / 2 / auto / 5'}}>
          <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{flexGrow: 1}} />
        </div>
        <div className="box-root flex-flex" style={{gridArea: '6 / start / auto / 2'}}>
          <div className="box-root box-background--blue800" style={{flexGrow: 1}} />
        </div>
        <div className="box-root flex-flex" style={{gridArea: '7 / start / auto / 4'}}>
          <div className="box-root box-background--blue animationLeftRight" style={{flexGrow: 1}} />
        </div>
        <div className="box-root flex-flex" style={{gridArea: '8 / 4 / auto / 6'}}>
          <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{flexGrow: 1}} />
        </div>
        <div className="box-root flex-flex" style={{gridArea: '2 / 15 / auto / end'}}>
          <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{flexGrow: 1}} />
        </div>
        <div className="box-root flex-flex" style={{gridArea: '3 / 14 / auto / end'}}>
          <div className="box-root box-background--blue animationRightLeft" style={{flexGrow: 1}} />
        </div>
        <div className="box-root flex-flex" style={{gridArea: '4 / 17 / auto / 20'}}>
          <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{flexGrow: 1}} />
        </div>
        <div className="box-root flex-flex" style={{gridArea: '5 / 14 / auto / 17'}}>
          <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{flexGrow: 1}} />
        </div>
      </div>
    </div>
    <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{flexGrow: 1, zIndex: 9}}>
      <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
        <h1 className='formheader'><a href="" rel="dofollow">InfinityPad: Token Sale Application</a></h1>
      </div>
      <div className="formbg-outer">
        <div className="formbg">
          <div className="formbg-inner padding-horizontal--48">
            {/* <span className="padding-bottom--15">Sign in to your account</span> */}
            <form id="stripe-login">
              <div className="field padding-bottom--24">
                <label htmlFor="name">Name - Person of Contact </label>
                <input type="name" name="name" />
              </div>
              <div className="field padding-bottom--24">
                <div className="grid--50-50">
                  <label htmlFor="email">Email - Person of Contact </label>
                
                </div>
                <input type="email" name="email" />
              </div>

              <div className="field padding-bottom--24">
                <label htmlFor="name">Please provide a two to three sentence summary on what your project does </label>
                <input type="name" name="name" />
              </div>
              <div className="field padding-bottom--24">
                <div className="grid--50-50">
                  <label htmlFor="name">Whitepaper Link </label>
                
                </div>
                <input type="name" name="name" />
              </div>

              <div className="col-md-12 mt-2  tokenheadersinfinity"style={{fontWeight:'600',fontSize:'14px'}} >

              Your Project Build on 
              </div>
              <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  Ethereum
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  Polkadot
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  BSC
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  Solana
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  Polygon
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  Cardano
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  Other
  </label>
</div>
              

              <div className="col-md-12 mt-2  tokenheadersinfinity"style={{fontWeight:'600',fontSize:'14px'}} >

              Fundraising Stage 
</div>
<div class="form-check">
<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
<label class="form-check-label" for="flexRadioDefault1">
Haven't raised any fund to date
</label>
</div>

<div class="form-check">
<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
<label class="form-check-label" for="flexRadioDefault1">
Seed Round
</label>
</div>

<div class="form-check">
<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
<label class="form-check-label" for="flexRadioDefault1">
Private sale round
</label>
</div>

<div class="form-check">
<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
<label class="form-check-label" for="flexRadioDefault1">
Presale round
</label>
</div>

<div class="form-check">
<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
<label class="form-check-label" for="flexRadioDefault1">
Public sale round
</label>
</div>



              <div className="field padding-bottom--24 mt-2">
                <label htmlFor="name">The Total Amount of Funds You Raised To Date  </label>
                <input type="name" name="name" />
              </div>
              <div className="field padding-bottom--24">
                <div className="grid--50-50">
                  <label htmlFor="name">How Much You Aim to Raise? </label>
                
                </div>
                <input type="name" name="name" />
              </div>

              <div className="field padding-bottom--24">
                <label htmlFor="name">What date do you want to launch your token </label>
                <input type="name" name="name" />
              </div>
              <div className="field padding-bottom--24">
                <div className="grid--50-50">
                  <label htmlFor="name">Token Economics Link </label>
                
                </div>
                <input type="name" name="name" />
              </div>

              
              
              <div className="d-flex justify-content-center">
              <button type="button" class="btn btn-primary">Submit</button>
              </div>
              <div className="field">
                {/* <a className="ssolink" href="#">Use single sign-on (Google) instead</a> */}
              </div>
            </form>
          </div>
        </div>
        <div className="footer-link padding-top--24">
          {/* <span>Don't have an account? </span> */}
          <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
            <span><a href="#">Privacy &amp; terms</a></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </>;
};

export default Form;
