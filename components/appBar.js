import SocialMediaLinks from "./socialMediaLink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function AppBar() {
    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = (evt) => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        window.addEventListener('resize', (evt) => {
            // Sempre que o usuário redimensionar o navegador
            // para a versão para tables e superiores (>= 768px), 
            // vai resetar o estado do menu para que quando o 
            // usuário voltar à versão para mobile o menu esteja fechado
            if(window.innerWidth >= 768) {
                setShowMenu(false)
            }
        })
    }, [])

    return (
        <header className="bg-primary text-white">
            <div className="flex justify-center md:justify-end px-12 py-2">
            <span>
                Telefone: &nbsp;
                <a href="tel:+5531983489321"
                className="text-secondary"
                >
                +55 (31) 9 8348-9321
                </a>
            </span>
            <SocialMediaLinks />
            </div>
            <nav className="flex flex-col md:flex-row justify-between items-center px-12 py-6 border-t border-border">
                <div className="flex justify-between w-full md:w-auto">
                    <h1>
                        <a href="#">
                        <img className="h-16" src="assets/images/logo/logo_dark.png" alt="HenriqueFelix.dev logo" />
                        </a>
                    </h1>
                    <button className="md:hidden" onClick={handleShowMenu}>
                        <FontAwesomeIcon icon={faBars} size="2x" />
                    </button>
                </div>
                <ul className={`${showMenu ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0 text-lg font-light text-gray-300 uppercase`}>
                    <li>
                        <a className="hover:text-slate-400" href="#home-section">Início</a>
                    </li>
                    <li>
                        <a className="hover:text-slate-400" href="#about-section">Como Trabalhamos</a>
                    </li>
                    <li>
                        <a className="hover:text-slate-400" href="#portfolio-section">Trabalhos</a>
                    </li>
                    <li>
                        <a className="hover:text-slate-400" href="#contact-section">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}