export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
      <span className="font-semibold text-lg">Logo</span>
      <span className="text-lg">Index</span>
      <nav className="flex gap-6 text-sm text-gray-600">
        <a href="/staff">For staff</a>
      </nav>
    </header>
  )
}