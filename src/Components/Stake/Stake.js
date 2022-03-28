import React from "react";
import Header from "../Header";

import { store } from "../../Redux/store";
import StakeCards from "./StakeCards";

export default function () {
  const [Connect, setConnect] = React.useState(
    store.getState().ConnectivityReducer.metamaskConnect
  );
  return (
    <div className="bgimg">
      <Header Connect={Connect} setConnect={setConnect} />
      <StakeCards Connect={Connect} setConnect={setConnect} />
    </div>
  );
}
