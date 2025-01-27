import { useContext } from "react";
import SharedDataContext from '../context/sharedData-context';

function useSharedDataContext() {
    return useContext(SharedDataContext);
}

export default useSharedDataContext;