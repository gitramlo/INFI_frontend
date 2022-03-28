import React from "react";
import ClaimCard from "./ClaimCard";
export default function ClaimList(props) {
  return (
    <>
      {props.data.map((data) => (
        <ClaimCard data={data} />
      ))}
    </>
  );
}
