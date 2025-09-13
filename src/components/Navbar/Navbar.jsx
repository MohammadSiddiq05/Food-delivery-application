import nav_logo from '../../assets/navlogo.png'
const Navbar = () => {
  return (
    <div>
      <nav className='flex flex-wrap justify-between items-center bg-black text-white [&>*]:p-3'>
        <div className='w-[160px]'>
          <img className='w-[100%]' src={nav_logo} alt="" />
        </div>
        <div>
          <ul className='flex items-center justify-between gap-6 [&>*]:flex' >
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <button className='p-2'>Login</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar