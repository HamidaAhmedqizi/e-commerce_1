import React, { useContext } from 'react';
import { SlidebarContext } from '../Contexts/SlidebarContext';
import { BsBag } from 'react-icons/bs';

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SlidebarContext);

  return (
    <header className='bg-pink-200'>
      <div>Header</div>
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
        <BsBag  className='text-2xl'/>
        </div>
    </header>
  );
};

export default Header;
