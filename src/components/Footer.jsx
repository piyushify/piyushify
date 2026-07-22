function Footer() {
  return (
    <footer className="fixed bottom-0 shadow-[0_-1px_2px_rgba(0,0,0,0.05)] backdrop-blur-xs justify-between p-1 text-lg  md:text-3xl lg:text-5xl">
      <ul className="flex w-screen overflow-scroll snap-both *:font-bold *:px-3 *:py-2 *:snap-start">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Experiences</li>
        <li>Contacts</li>
      </ul>
    </footer>
  )
}

export default Footer
