import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='logo'>OpenEcho NEXT</div>
        <div className={['social-links']}>
          <a href="https://www.linkedin.com/in/priyanshu-ag4206/"><FaLinkedinIn /></a>
          <a href="https://github.com/Priyanshu4206"><FaGithub /></a>
          <a href="https://www.instagram.com/priyanshu_ag1/"><FaInstagram /></a>
        </div>
      </div>
      <div className='copyright'>© 2024 Developed by Priyanshu Agarwal. All rights reserved.</div>
    </footer>
  );
}
