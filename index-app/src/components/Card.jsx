// Card.jsx
export default function Card({ title, description }) {
  return (
    <div className="rounded-xl border p-4 bg-white shadow-md hover:shadow-lg transition">
      <div className="w-full h-32 bg-gray-100 rounded-md mb-4" />
      <h2 className="font-medium text-base mb-1">{title}</h2>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  )
}