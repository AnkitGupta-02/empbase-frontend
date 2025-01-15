import { useContext } from "react";
import LoadingContext from "../context/loading-context";

function useLoadingContext() {
  return useContext(LoadingContext);
    
  
}

export default useLoadingContext;