import React, { useState, useEffect } from 'react';
import { Logo } from '../ui/Logo';
import useActiveSection from '../../hooks/useActiveSection';
import '../styles/Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const activeSection = useActiveSection(['features', 'eva', 'vision', 'ecosistema'], 80);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = window.innerHeight * 0.9;
            const hasScrolledPast = window.scrollY > scrollThreshold;
            setIsScrolled(hasScrolledPast);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            const headerOffset = 80; // Altura aproximada del header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            closeMenu();
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <div className="header-left">
                    <Logo showLerna={isScrolled} />
                </div>

                <nav className="nav-menu desktop-nav">
                    <a href="#features" 
                       className={`nav-link ${activeSection === 'features' ? 'active' : ''}`} 
                       onClick={(e) => handleNavClick(e, 'features')}>
                        Herramientas
                    </a>
                    <a href="#eva" 
                       className={`nav-link ${activeSection === 'eva' ? 'active' : ''}`} 
                       onClick={(e) => handleNavClick(e, 'eva')}>
                        Eva
                    </a>
                    <a href="#ecosistema" 
                       className={`nav-link ${activeSection === 'ecosistema' ? 'active' : ''}`} 
                       onClick={(e) => handleNavClick(e, 'ecosistema')}>
                        Ecosistema
                    </a>
                    <a href="#vision" 
                       className={`nav-link ${activeSection === 'vision' ? 'active' : ''}`} 
                       onClick={(e) => handleNavClick(e, 'vision')}>
                        Visión
                    </a>
                </nav>

                <div className="header-right">
                    <a href="https://app.lerna.override.com.mx" target="_blank" rel="noopener noreferrer">
                        <button className="cta-button desktop-cta">
                            Empezar
                        </button>
                    </a>
                    <button 
                        className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>

                <nav className={`nav-menu mobile-nav ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#features" 
                       className={`nav-link ${activeSection === 'features' ? 'active' : ''}`} 
                       onClick={(e) => handleNavClick(e, 'features')}>
                        Herramientas
                    </a>
                    <a href="#eva" 
                       className={`nav-link ${activeSection === 'eva' ? 'active' : ''}`} 
                       onClick={(e) => handleNavClick(e, 'eva')}>
                        Eva
                    </a>
                    <a href="#ecosistema" 
                       className={`nav-link ${activeSection === 'ecosistema' ? 'active' : ''}`} 
                       onClick={(e) => handleNavClick(e, 'ecosistema')}>
                        Ecosistema
                    </a>
                    <a href="#vision" 
                       className={`nav-link ${activeSection === 'vision' ? 'active' : ''}`} 
                       onClick={(e) => handleNavClick(e, 'vision')}>
                        Visión
                    </a>
                    <a href="https://app.lerna.override.com.mx" target="_blank" rel="noopener noreferrer">
                        <button className="cta-button mobile-cta" onClick={closeMenu}>
                            Empezar
                        </button>
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
