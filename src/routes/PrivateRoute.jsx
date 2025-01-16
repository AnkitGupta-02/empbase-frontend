import React from "react";
import LoadingPage from "../pages/LoadingPage";
import MainPage from "../pages/MainPage";
import useLoadingContext from "../hooks/use-LoadingContext";

export default function PrivateRoute() {
  const { isLoading, setIsLoading } = useLoadingContext();
  return <>
  {isLoading ? <LoadingPage /> : <MainPage setIsLoading={setIsLoading}/>}
  </>;
}
