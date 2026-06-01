// Header.jsx
export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
      <span className="font-semibold text-lg">Logo</span>
      <nav className="flex gap-6 text-sm text-gray-600">
        Any links that might go on the corner (use anchors)
      </nav>
    </header>
  )
}