import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Logo = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/HeaderImages/TECHSYN+(2).svg";
const Lupa = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/HeaderImages/Search_icon.png";
import ModalLogin from "./ModalLogin";
import ModalRegistro from "./ModalRegistro";
const Micf = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/HeaderImages/icons8-microphone-48.png";
import DarkModeToggle from "react-dark-mode-toggle";

const PublicHeader = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [tipoModal, setTipoModal] = useState("");
  const [termoBusca, setTermoBusca] = useState("");
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("isDark") === "true";
  });
  const [isFixed, setIsFixed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("isDark", isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const abrirModal = (tipo) => {
    setTipoModal(tipo);
    setModalAberto(true);
    setMobileMenuOpen(false); // Fecha o menu mobile ao abrir um modal
  };

  const fecharModal = () => {
    setModalAberto(false);
    setTipoModal("");
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Sobre Nós", href: "/SobreNos" },
    { label: "Suporte", href: "/Suporte" },
    { label: "Ajuda", href: "/FAQ" },
  ];

  return (
    <>
      <header
        className={`z-50 transition-all duration-300 ${
          isFixed
            ? `fixed top-0 left-0 w-full shadow-md h-20 md:h-30 ${
                isDark ? "bg-[#2A2A2A]" : "bg-white"
              }`
            : `relative ${isDark ? "" : "bg-transparent"}`
        }`}
      >
        {/* Mobile Header */}
        <div className="flex justify-between items-center px-4 py-4 md:hidden">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-10" />
          </Link>
          <button
            className="menu-public text-white focus:outline-none invert"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="dropdown-public md:hidden flex flex-col gap-4 bg-white shadow-xl text-gray-800 px-4 pb-6 transition-all duration-300">
            {/* Navegação */}
            <nav className="menu-links-public flex flex-col gap-6 text-sm font-bold">
              {navLinks.map(({ label, href }, index) => (
                <Link
                  key={index}
                  to={href}
                  className="hover:text-indigo-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Busca */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Buscar por:", termoBusca);
              }}
              className="relative flex items-center mt-2"
            >
              <input
                type="text"
                value={termoBusca}
                onChange={(e) => setTermoBusca(e.target.value)}
                placeholder="Buscar eventos..."
                className="w-full h-10 pl-10 pr-9 rounded-full text-sm text-gray-800 bg-gray-100 outline-none"
              />
              <img
                src={Lupa}
                alt="Buscar"
                className="absolute left-3 w-5 h-5 pointer-events-none invert opacity-50"
              />
              <div className="absolute right-3">
                <img
                  src={Micf}
                  alt="Microfone"
                  className="w-5 h-5 opacity-50"
                />
              </div>
            </form>

            {/* Modo escuro */}
            <div className="flex justify-center items-center mt-3 gap-2 ">
              <h1 className="font-extrabold">Modo de Cor:</h1>
              <DarkModeToggle
                onChange={toggleTheme}
                checked={isDark}
                size={60}
              />
            </div>

            {/* BOTÕES DE LOGIN E REGISTRO PARA MOBILE (ADICIONADOS AQUI) */}
            <div className="flex justify-center items-center gap-6 mt-4 text-sm font-semibold">
              <button
                className="text-[rgb(94,94,94)] cursor-pointer"
                onClick={() => abrirModal("login")} // Usar abrirModal para fechar o menu
              >
                Log In
              </button>
              <button
                className="bg-gradient-to-r from-purple-500 to-indigo-600 !text-white px-7 py-1.5 rounded-full shadow-md hover:opacity-90 transition-all cursor-pointer"
                onClick={() => abrirModal("register")} // Usar abrirModal para fechar o menu
              >
                Sign Up
              </button>
            </div>
          </div>
        )}

        {/* Desktop Header */}
        <div className="hidden md:flex justify-between items-center 2xl:px-10 lg:px-16 py-11 m-auto text-sm font-Poppins 2xl:w-[84%] xl:w-[100%] md:w-full">
          {/* Esquerda */}
          <div className="flex items-center gap-8">
            <div
              id="Logo_sphere"
              className="flex items-center h-[21px] w-[240px] relative md:w-[180px]"
            >
              <Link to="/" title="Home">
                <img src={Logo} alt="Logo" className="h-[50px] w-[230px]" />
              </Link>
            </div>

            <div className="w-px h-10 bg-gray-300 hidden md:block opacity-35"></div>

            <nav className="hidden xl:flex gap-3 xl:gap-6 text-sm font-Poppins  text-[rgb(94,94,94)] tracking-[1.5px] flex-shrink-2 ">
              {navLinks.map(({ label, href }, index) => (
                <Link
                  key={index}
                  to={href}
                  className="relative group overflow-hidden whitespace-nowrap"
                >
                  <span className="relative z-10">{label}</span>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-l from-purple-500 to-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Centro (busca) */}
          <div className="search_mode flex lg:w-[25%] justify-center items-center md:w-[277px] 2xl:w-[27%]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Buscar por:", termoBusca);
              }}
              className="relative flex items-center w-full"
            >
              <input
                type="text"
                value={termoBusca}
                onChange={(e) => setTermoBusca(e.target.value)}
                placeholder="Buscar eventos..."
                id="Search_input"
                className="w-full h-[2.5em] pl-10 pr-9 rounded-full text-[14px] text-gray-800 outline-none placeholder:opacity-100 bg-white shadow-md transition-all duration-300 border-[#21212107] border-1"
              />
              <img
                src={Lupa}
                alt="Buscar"
                className="absolute left-3 w-5 h-5 pointer-events-none invert opacity-50"
              />
              <div className="microfone absolute right-3  flex items-center border-[#8484856f] bg-white cursor-pointer">
                <img
                  src={Micf}
                  alt="Microfone"
                  className="w-5 h-5 opacity-50"
                />
              </div>
            </form>
          </div>

          {/* Direita */}
          <div className="flex items-center gap-6 md:gap-3">
            <DarkModeToggle onChange={toggleTheme} checked={isDark} size={66} />

            <div className="w-px h-10 bg-gray-300 ml-4.5 hidden md:block opacity-35"></div>

            <div className="flex items-center gap-6 text-sm font-Poppins ml-3 w-[188px]">
              <button
                className="text-[rgb(94,94,94)] cursor-pointer"
                onClick={() => abrirModal("login")}
              >
                Log In
              </button>
              <button
                className="bg-gradient-to-r from-purple-500 to-indigo-600 !text-white px-7 py-1.5 rounded-full shadow-md hover:opacity-90 transition-all cursor-pointer"
                onClick={() => abrirModal("register")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Modais */}
      {modalAberto && tipoModal === "login" && (
        <ModalLogin
          onClose={fecharModal}
          onSignUpClick={() => setTipoModal("register")}
        />
      )}

      {modalAberto && tipoModal === "register" && (
        <ModalRegistro onClose={fecharModal} />
      )}
    </>
  );
};

export default PublicHeader;
