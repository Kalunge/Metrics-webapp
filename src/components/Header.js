/* eslint-disable */
import React from 'react';
import { MdKeyboardVoice, MdSettings } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

const Header = ({ metric }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };
  return (
    <div className="navBar mt-3 mb-3">
      <button type="button" onClick={handleClick}>
        <IoIosArrowBack size={42} color={'pink'} />
      </button>
      <h2>{metric} </h2>
      <MdKeyboardVoice size={42} color={'pink'} />
      <MdSettings size={42} color={'pink'} />
    </div>
  );
};

export default Header;
