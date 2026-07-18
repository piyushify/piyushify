function Intro() {
  let greet = "Hello 👋🏼";
  let info = "A BCA student."
  return (
    <section className="h-dvh flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl md:text-5xl lg:text-7xl w-screen p-6 font-semibold">{greet}</h1>
      <p className="text-3xl md:text-5xl lg:text-7xl">I'm Piyush Sharma. <br/> {info} </p>
    </section>
  )
}

export default Intro
