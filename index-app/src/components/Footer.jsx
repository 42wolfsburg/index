// Footer.jsx
export default function Footer() {
  return (
    <footer className="flex justify-between items-center px-6 py-4 bg-gray-100 text-sm text-gray-500">
      <span>© 2026 ACME</span>
      <div className="flex gap-4">
        <a href="/privacy" className="hover:text-gray-800 transition">Privacy</a>
        <a href="/terms" className="hover:text-gray-800 transition">Terms</a>
      </div>
    </footer>
  )
}