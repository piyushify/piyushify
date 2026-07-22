import dp from "../assets/dp.png"
function Intro() {
  let greet = "Hello 👋🏼";
  let info = "A BCA student."
  return (
    <section className="h-dvh flex items-center flex-col justify-center p-6">
      <img src={dp} className="w-32 h-32 self-start rounded-full inset-shadow-sm shadow-sm"/>
      <h1 className="text-3xl md:text-5xl lg:text-7xl w-screen p-4 px-6 font-semibold">{greet}</h1>
      <p className="text-3xl md:text-5xl lg:text-7xl">I'm <b>Piyush Sharma</b>. <br/> {info} </p>
    </section>
  )
}

export default Intro
