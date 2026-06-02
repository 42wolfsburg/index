import ft_logo_white from '../assets/42wolfsburg_white_2.png'

export default function Footer() {
  return (
    <footer className="
    flex 
    fixed 
    bottom-0 
    w-screen 
    h-12 
    justify-between 
    items-center 
    px-6 
    text-sm 
    text-gray-500
    bg-black
    ">
      <img src={ft_logo_white} className="h-8 w-14" />
      <div className="text-[#F2F2F2]">{`Don't pan`}<a href="https://www.youtube.com/watch?v=ygr5AHufBN4&list=RDygr5AHufBN4&start_radio=1" className="text-[#F2F2F2]">i</a>{`c`}</div>  
    </footer>   
  )
}