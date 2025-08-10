import profile from '/profile.jpg';

export default function Hero(){
  return (
    <section id="hero" className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Hi — I'm Arun <span className="inline-block animate-wave">👋</span></h1>
          <p className="mb-6 text-lg opacity-90">Detail-oriented Data Analyst. I turn messy data into clear insights using Python, SQL, and ML.</p>
          <div className="flex gap-4">
            <a href="#projects" className="bg-white text-gray-900 px-4 py-2 rounded shadow hover:bg-gray-100">View Projects</a>
            <a href="/ATSversion.pdf" download className="border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-900">Get Resume (PDF)</a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={profile} alt="Arun Lama" className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-white" />
        </div>
      </div>
    </section>
  )
}
