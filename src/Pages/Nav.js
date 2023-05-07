import React,{ useState } from 'react'


const Nav = () => {

  const [navIsShown, setnavIsShown] = useState(false);
  const toggleNavIsShown = () => {
    setnavIsShown((navIsShown) => !navIsShown);
  };


  return (
    <div className="nav">
      <div className="text-white shadow shadow-neutral-700">
        <div className="container mx-auto py-4">
          <nav className='flex justify-between items-center px-4'>
            {/* Top Nav */}
            <div className="p-2">
              <h2><b><span className="text-blue-900">S</span>wing <span className="text-blue-900">W</span>izards</b></h2>
            </div>
            <div>
              <ul className='hidden md:flex text-xl p-2'>
                <li>
                  <a href="/" className="hover:text-[#4F5DEC] px-3 py-2 ">Investment</a>
                </li>
                <li>
                  <a href="/cars" className="hover:text-[#4F5DEC] px-3 py-2 ">Web School</a>
                </li>
                <li>
                  <a href="/about" className="hover:text-[#4F5DEC] px-3 py-2 ">Community</a>
                </li>
                <li>
                  <a href="/services" className="hover:text-[#4F5DEC] px-3 py-2 ">About Us</a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-[#4F5DEC] px-3 py-2">Create Account</a>
                </li>
              </ul>
            </div>

            
            {/* Responsive Nav */}
            {!navIsShown ? (
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 md:hidden' onClick={toggleNavIsShown} >
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25' />
              </svg>
              
            ) : (          
              <svg
                xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-7 h-7 z-50' onClick={toggleNavIsShown} >
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25' />
              </svg>
            )}
            {navIsShown && (
              <div className='md:hidden absolute z-10 top-12 left-0  w-full text-black'>
                <ul className='text-center mb-2 bg-white p-2 mx-4'>
                  <li>
                    <a href="/" className="hover:text-[#4F5DEC] px-3 py-2 ">Investment</a>
                  </li>
                  <li>
                    <a href="/cars" className="hover:text-[#4F5DEC] px-3 py-2 ">Web School</a>
                  </li>
                  <li>
                    <a href="/about" className="hover:text-[#4F5DEC] px-3 py-2 ">Community</a>
                  </li>
                  <li>
                    <a href="/services" className="hover:text-[#4F5DEC] px-3 py-2 ">About Us</a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-[#4F5DEC] px-3 py-2">Create Account</a>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Nav
