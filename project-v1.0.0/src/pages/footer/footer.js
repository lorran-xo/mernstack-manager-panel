import React from "react";
import "./footer.scss"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__social">
        <a href="https://www.linkedin.com/in/lorran-oliveira-38194b117" target="_blank">
          <AiFillLinkedin size="30"  color="#fff"/>
        </a>
        <a href="https://github.com/lorran-xo" target="_blank">
          <AiFillGithub size="30"  color="#fff"/>
        </a>  
      </div>
      <p className="footer__copyright">Desenvolvido por Lorran Oliveira</p>
    </footer>
  )
}

export default Footer;