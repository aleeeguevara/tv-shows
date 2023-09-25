import React from "react";
import { UseApi } from "../hooks/useApi";

export default function Home() {
  const { payload } = UseApi();
  console.log("payload", payload);
  return <></>;
}
