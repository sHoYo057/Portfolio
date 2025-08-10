export default function Footer(){
  return (
    <footer className="py-6 border-t text-center text-sm text-gray-600 dark:text-gray-400">
      <div className="max-w-6xl mx-auto px-4">
        © {new Date().getFullYear()} Arun Lama — Built with clarity for recruiters.
      </div>
    </footer>
  )
}
