import Intro from "./Intro.jsx"
import About from "./About.jsx"
import Skills from "./Skills.jsx"
import Projects from "./Projects.jsx"
function Main() {
  return (
    <main className="pb-14 bg-[#f6f6f6] scroll-smooth *:text-shadow-md">
      <Intro/>
      <About/>
      <Skills/>
      <Projects/>
    </main>
  )
}

export default Main
