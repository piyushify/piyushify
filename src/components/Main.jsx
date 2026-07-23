import Intro from "./Intro.jsx"
import About from "./About.jsx"
import Skills from "./Skills.jsx"
function Main() {
  return (
    <main className="pb-14 bg-[#f6f6f6] scroll-smooth *:text-shadow-md">
      <Intro/>
      <About/>
      <Skills/>
    </main>
  )
}

export default Main
