import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function InfoBar() {
  return (
    <div className="bg-gray-600 text-white p-4 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center space-x-4 mb-2 md:mb-0">
        {/* You can add more information here if needed */}
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faPhone} />
          <span>+91 9414646365</span>
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:jain.consultancy92@gmail.com" className="underline">jain.consultancy92@gmail.com</a>
        </div>
      </div>
    </div>
  );
}

export default InfoBar;
