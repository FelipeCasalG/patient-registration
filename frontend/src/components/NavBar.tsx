import React from "react";
import { Navbar, Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function NavList() {
  const navigate = useNavigate();
  return (
    <ul className='my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography
        onClick={() => navigate("/patients")}
        as='li'
        variant='small'
        color='white'
        className='p-1 font-medium cursor-pointer'
      >
        Patients
      </Typography>
      <Typography
        onClick={() => navigate("/about-us")}
        as='li'
        variant='small'
        color='white'
        className='p-1 font-medium cursor-pointer'
      >
        About us
      </Typography>
      <Typography
        onClick={() => navigate("/products")}
        as='li'
        variant='small'
        color='white'
        className='p-1 font-medium cursor-pointer'
      >
        Products
      </Typography>
      <Typography
        onClick={() => navigate("/our-work")}
        as='li'
        variant='small'
        color='white'
        className='p-1 font-medium cursor-pointer'
      >
        Our work
      </Typography>
      <Typography
        onClick={() => navigate("/contact")}
        as='li'
        variant='small'
        color='white'
        className='p-1 font-medium cursor-pointer'
      >
        Contact
      </Typography>
    </ul>
  );
}

export function NavBar() {
  const navigate = useNavigate();

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
        <Typography variant='h6' onClick={() => navigate("/")} className='mr-4 cursor-pointer py-1.5'>
          Patient Management System
        </Typography>
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
