import { useEffect } from "react"
import QuoteBox from "./components/QuoteBox";
import "./assets/styles/QuoteBox.css";

function App() {
   useEffect(()=>{
    document.title = "Random Quote Machine"
   })
  return (
    <div className="flex justify-center items-center bg-sky-500 h-svh w-full">
      <QuoteBox />
    </div>
  )
}

export default App
