export default function Skills(){
  const skills = ['Python','SQL','Pandas','NumPy','Scikit-learn','TensorFlow','Tableau','Power BI','ETL','Data Wrangling'];
  return (
    <section id="skills" className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Core Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map(s => <span key={s} className="bg-white p-2 rounded shadow text-sm dark:bg-gray-800">{s}</span>)}
      </div>
    </section>
  )
}
