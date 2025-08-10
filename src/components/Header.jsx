export default function Header({ darkMode, setDarkMode }){
  return (
    <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md sticky top-0 z-50 shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold">Arun Lama</h1>
        <nav className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
          <a href="/ATSversion.pdf" download className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Resume</a>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={()=> setDarkMode(!darkMode)} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button className="md:hidden p-2" onClick={()=>{
            const nav = document.querySelector('nav.hidden');
            if(nav) nav.classList.toggle('hidden--mobile');
          }}>☰</button>
        </div>
      </div>
    </header>
  )
}
