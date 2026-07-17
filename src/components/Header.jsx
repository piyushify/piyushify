import Menuicon from "./Menuicon.jsx"

function Header() {
  return (
    <header className="fixed top-0 flex w-screen shadow-xs backdrop-blur-xs justify-between p-3 text-3xl md:text-4xl lg:text-5xl">
      <h1 className=" font-black">Piyushify</h1>
      <button onClick={() => alert("clicked")}>
        <Menuicon/>
      </button>
    </header>
  )
}

export default Header
