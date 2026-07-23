import { useState } from "react"
import dp from "../assets/safebites.png"
import Caret from "./icons/Caret.jsx"

function Projectcard(){
  const [showDesc, setshowDesc] = useState(false);
  return (
    <ul>
      <li>
        <article className="shadow-md rounded-xl p-5 inset-shadow-sm">
          <img src={dp} className=" rounded-xl shadow-md inset-shadow-sm"/>
          <h3 className="flex items-center justify-center font-bold text-xl md:text-2xl lg:text-3xl pt-4">Safebites 
            <button onClick={() => setshowDesc(!showDesc)}>
              <Caret className={`transition-transform duration-300 w-5 h-5 fill-current 
              ${ showDesc ? "rotate-180" : ""}`} />
            </button></h3>
          {showDesc && (
            <p className="text-lg md:text-xl lg:text-2xl p-3 inset-shadow-sm rounded-xl">It is a website intended to provide safe eating experience by giving a hygiene rating to each restraurants, hotels ,cafes etc.</p>
          )}
          </article>
      </li>
    </ul>
  )
}

export default Projectcard