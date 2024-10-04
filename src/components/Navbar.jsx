import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/LogoForProj.png";
const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <>
            <img
              src={logo}
              alt="logo"
              className="mx-2"
              width={50}
              height={33}
            />
          </>
        </a>
      </div>
      <div className=" m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/aayush-nandan-b39bb025a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AayushNandan623"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
