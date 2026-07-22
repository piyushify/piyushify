import Menuicon from "./Menuicon.jsx"


function Header() {
  return (
    <header className="fixed top-0 flex w-screen shadow-xs backdrop-blur-xs justify-between px-4 py-3 text-3xl md:text-4xl lg:text-5xl">
      <div>
        <h1 className="font-black">Piyushify</h1>
        <h2 className="text-xs font-semibold text-center">Growing with the flow</h2>
      </div>
      <button onClick={() => alert("clicked")}>
        <Menuicon/>
      </button>
    </header>
  )
}

export default Header
