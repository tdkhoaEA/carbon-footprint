import Logo from 'assets/logo-color.svg'

function Header() {

return (

<header className='bg-white shadow-md py-4 px-6 md:flex md:items-center md:justify-between'>
    
    <div className='flex items-center justify-center md:justify-start'>
    <img src={Logo} alt='Logo' className='h-16 w-16' />
    </div>
    
    
    <nav className='flex justify-center items-center md:items-start  space-x-4'>
        <a href='#' className='text-gray-600 hover:text-primary'>Home</a>
        <a href='#' className='text-gray-600 hover:text-primary'>Carbon</a>
        <a href='#' className='text-gray-600 hover:text-primary'>Paper</a>
    </nav>
    
    
    <div className='hidden md:block md:ml-4'>
        {/* <button className='bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md'>Login</button> */}
    </div>
</header>

)
}

export default Header