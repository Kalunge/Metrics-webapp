/* eslint-disable */
import React from 'react';
import { MdKeyboardVoice, MdSettings } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
const Header = () => (
  <div className="navBar mt-3 mb-3">
    <IoIosArrowBack size={42} color={'pink'} />
    <h2>Old Testament </h2>
    <MdKeyboardVoice size={42} color={'pink'} />
    <MdSettings size={42} color={'pink'} />
  </div>
);

export default Header;