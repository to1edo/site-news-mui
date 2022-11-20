import { useContext } from "react"
import MainContext from "../context/MainProvider"

const useMainContext = () => {
  
  return useContext(MainContext)
}

export default useMainContext