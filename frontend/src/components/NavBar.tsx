import React from "react";
import { Navbar, Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function NavList() {
  return (
    <ul className='my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Link to='/patients' className='flex items-center'>
        <Typography as='li' variant='small' color='white' className='p-1 font-medium'>
          Patients
        </Typography>
      </Link>
      <Link to='/about-us' className='flex items-center'>
        <Typography as='li' variant='small' color='white' className='p-1 font-medium'>
          About us
        </Typography>
      </Link>
      <Link to='/products' className='flex items-center'>
        <Typography as='li' variant='small' color='white' className='p-1 font-medium'>
          Products
        </Typography>
      </Link>
      <Link to='/our-work' className='flex items-center'>
        <Typography as='li' variant='small' color='white' className='p-1 font-medium'>
          Our work
        </Typography>
      </Link>
      <Link to='/contact' className='flex items-center'>
        <Typography as='li' variant='small' color='white' className='p-1 font-medium'>
          Contact
        </Typography>
      </Link>
    </ul>
  );
}

export function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar
      variant='gradient'
      color='blue-gray'
      className='mx-auto max-w-screen-xl from-blue-gray-900 to-blue-gray-800 px-4 py-3'
    >
      <div className='flex items-center justify-between text-white'>
        <Link to='/' className='flex items-center'>
          <Typography variant='h6' className='mr-4 cursor-pointer py-1.5'>
            Patient Management System
          </Typography>
        </Link>
        <div className='hidden lg:block'>
          <NavList />
        </div>
        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className='h-6 w-6' strokeWidth={2} />
          ) : (
            <Bars3Icon className='h-6 w-6' strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
