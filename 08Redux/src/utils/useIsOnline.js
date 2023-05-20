import { useState,useEffect } from "react"
const useIsOnLine = ()=>{
    const [isOnLine,setIsOnLine] = useState(true)
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setIsOnLine(true);
        })
        window.addEventListener("offline",()=>{
            setIsOnLine(false);
        })
    },[])    
    return isOnLine;
}
export default useIsOnLine;