import {createContext,useState} from 'react';

const LoadingContext = createContext();

function LoadingProvider({children}) {
const [isLoading, setIsLoading] = useState(false);

const sharedStates = {isLoading,setIsLoading};
  return (
    <LoadingContext.Provider value={sharedStates}>{children}</LoadingContext.Provider>
  )
}

export {LoadingProvider};
export default LoadingContext;