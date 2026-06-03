export default function Card({ title, description, link }) {
  return (
    <a href={link}>
    <div className="rounded-xl font-silka border p-4 bg-white shadow-md hover:shadow-lg transition">
      <h2 className="font-medium text-base mb-1">{title}</h2>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
    </a>
  )
}