import { createContext,useState } from "react";

const SharedDataContext = createContext();

function SharedProvider({children}) {
 const [empData, setEmpData] = useState({});

 const sharedEmpData = {empData, setEmpData};
  return <SharedDataContext.Provider value={sharedEmpData}>{children}</SharedDataContext.Provider>
}

export {SharedProvider};
export default SharedDataContext;