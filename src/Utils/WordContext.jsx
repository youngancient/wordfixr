import { createContext, useState } from "react";

export const WordContext = createContext();

const WordContextProvider =(props)=>{
    //  shared word state
    const [sharedWord, setSharedWord] = useState();
    return (
        <WordContext.Provider value={[sharedWord, setSharedWord]}>
            {props.children}
        </WordContext.Provider>
    )
}
export default WordContextProvider;
 