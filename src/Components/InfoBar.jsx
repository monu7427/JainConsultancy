import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function InfoBar() {
  return (
    <div className="bg-gray-600 text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
       
        </div>
      
      <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-2 mr-3">
            <FontAwesomeIcon icon={faPhone} />
            <span>+91 7737263901</span>
          </div>
        <FontAwesomeIcon icon={faEnvelope} />
        <a href="mailto:info@akgvg.com" className="underline">info@akgvg.com</a>
      </div>
    </div>
  );
}

export default InfoBar;
