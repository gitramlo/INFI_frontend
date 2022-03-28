import "./App.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Claim from "./pages/Claim";
import LaunchpadPage from "./pages/LaunchpadPage";
import DescriptionPage from "./pages/DescriptionPage";
import Claims from "./pages/Claims";
import Landingpage from "./pages/Landingpage";
import Form from "./pages/Form";

function App() {
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/launchpad" element={<LaunchpadPage />} />
          <Route path="/launchpad/:status" element={<DescriptionPage />} />
          <Route exact path="/form" element={<Form />} />

          {/* These are Hide Route  */}
          {/* <Route exact path="/claim" element={<Claim />} />
          <Route exact path="/claims" element={<Claims />} />
          <Route exact path="/stake" element={<Stake />} /> */}
          <Route exact path="/claim" element={<Claim />} />
          <Route exact path="/claims" element={<Claims />} />
        </Routes>
      </div>

      {/* <Header />
  <Launch />
  <Launchcard />  */}
    </>
  );
}

export default App;
