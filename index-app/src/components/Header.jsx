import { useNavigate } from 'react-router-dom';
// import ft_logo_black from '../assets/42wolfsburg_black_1.png'
import ft_logo_white from '../assets/42wolfsburg_white_1.png'

export default function Header() {
  const navigate = useNavigate()
  return (
    <header className="flex justify-between items-center text-[#F2F2F2] px-6 py-4 bg-black shadow-sm">
      <img src={ft_logo_white} className="w-32 h-10" />
      <span className="text-lg">Index</span>
      <button 
      className="px-4 py-2 rounded-md text-sm font-medium bg-[#67BDE4] transition hover:opacity-90"
      onClick={() => navigate('/staff')}
      >
        Staff area
      </button>
    </header>
  )
}