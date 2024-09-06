import React from 'react';
import resumePDF from '../assets/Profile.pdf';

const ResumeDownload = () => {
  return (
    <a href={resumePDF} download="Resume.pdf">
      <button>Download Resume</button>
    </a>
  );
};

export default ResumeDownload;