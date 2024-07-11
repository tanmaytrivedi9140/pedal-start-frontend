import { createContext, useState } from "react";



export const TaskContext = createContext(null);

export const TaskProvider = (props) =>{
    const [id ,setid] = useState(null);
    return (
        <TaskContext.Provider value={{id , setid}}>
            {props.children}
        </TaskContext.Provider>
    )
};

