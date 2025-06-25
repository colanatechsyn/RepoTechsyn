import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Logo = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/HeaderImages/TECHSYN+(2).svg";
const Lupa = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/HeaderImages/Search_icon.png";
const Micf = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/HeaderImages/icons8-microphone-48.png";
const Materials = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/HeaderImages/Icon.png";
const Events = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/HeaderImages/Heart.png";
const Notifications=  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/HeaderImages/Notifications.png";
import Notificacoes from "../layout/Notificações";
import UserProfileModal from "../layout/UserProfileModal";
const Woman = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/UsuarioPagina/woman.png";
import DarkModeToggle from "react-dark-mode-toggle";

const HeaderPrivate = () => {
  const [termoBusca, setTermoBusca] = useState("");
  const [isFixed, setIsFixed] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("isDark") === "true";
  });
  const [modalPerfilAberto, setModalPerfilAberto] = useState(false);
  const [modalNotificacaoAberto, setModalNotificacaoAberto] = useState(false);
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

  const abrirModalPerfil = () => {
    setModalNotificacaoAberto(false);
    setModalPerfilAberto(true);
  };

  const fecharModalPerfil = () => setModalPerfilAberto(false);

  const abrirModalNotificacao = () => {
    setModalPerfilAberto(false);
    setModalNotificacaoAberto(true);
  };

  const fecharModalNotificacao = () => setModalNotificacaoAberto(false);

  const navLinks = [
    { label: "Home", to: "/private" },
    { label: "Sobre Nós", to: "/private/Sobrenos" },
    { label: "Ranking", to: "/private/Ranking" },
    { label: "Loja", to: "/private/loja" },
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
          <Link to="/private">
            <img src={Logo} alt="Logo" className="h-10" />
          </Link>
          <div className="flex items-center gap-4">
            {" "}
            {/* Added a div to group menu and profile buttons */}
            <button
              className="menu-private text-white focus:outline-none invert"
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
            <div className="bg-gradient-to-b from-purple-500 to-indigo-600 p-[2px] rounded-full">
              <button
                onClick={() => {
                  setMobileMenuOpen(false); // Close mobile menu if open when profile is clicked
                  abrirModalPerfil();
                }}
                className="user w-8 h-8 rounded-full flex justify-center items-center cursor-pointer bg-white shadow-md overflow-hidden dark:bg-[#2A2A2A]"
                title="Perfil do usuário"
              >
                <img
                  src={Woman}
                  alt="Foto de perfil"
                  className="w-full h-full object-cover rounded-full p-[0.10px] brightness-110"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="dropdown-private md:hidden flex flex-col gap-4 bg-white shadow-xl text-gray-800 px-4 pb-6 pt-5 transition-all duration-">
            {/* Navegação */}
            <nav className="menu-links-private flex flex-col gap-6 text-sm font-bold">
              {navLinks.map(({ label, to }, index) => (
                <Link
                  key={index}
                  to={to}
                  className="hover:text-indigo-600 transition dark:hover:text-purple-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              {/* Additional private header links and icons in mobile menu */}
              <Link
                to="/private/materiais"
                className="hover:text-indigo-600 transition flex items-center gap-2 dark:hover:text-purple-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <img
                  src={Materials}
                  alt="Materiais"
                  className="hidden w-5 h-5 brightness-70 dark:invert"
                />
                Materiais
              </Link>
              <Link
                to="/private/MeusEventos"
                className="hover:text-indigo-600 transition flex items-center gap-2 dark:hover:text-purple-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <img
                  src={Events}
                  alt="Meus Eventos"
                  className="hidden w-5 h-5 brightness-44 dark:invert"
                />
                Meus Eventos
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  abrirModalNotificacao();
                }}
                title="Notificações"
                className="hover:text-indigo-600 transition flex items-center gap-2 dark:hover:text-purple-400 focus:outline-none text-left"
              >
                <img
                  src={Notifications}
                  alt="Notificações"
                  className="hidden w-5 h-5 brightness-70 dark:invert"
                />
                Notificações
              </button>
              {/* Profile link is already in the main mobile header, so no need for a duplicate here */}
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
                className="absolute left-3 w-5 h-5 pointer-events-none dark:invert"
              />
              <div className="absolute right-3">
                <img
                  src={Micf}
                  alt="Microfone"
                  className="w-5 h-5 opacity-50 dark:invert"
                />
              </div>
            </form>

            {/* Modo escuro */}
            <div className="flex justify-center items-center mt-3 gap-2">
              <h1 className="font-extrabold">Modo de Cor:</h1>
              <DarkModeToggle
                onChange={toggleTheme}
                checked={isDark}
                size={60}
              />
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
              <Link to="/private" title="Home">
                <img src={Logo} alt="Logo" className="h-[50px] w-[230px]" />
              </Link>
            </div>

            <div className="w-px h-10 bg-gray-300 hidden md:block opacity-35"></div>

            <nav className="hidden xl:flex gap-3 xl:gap-6 text-sm font-Poppins text-[rgb(94,94,94)] tracking-[1.5px] flex-shrink-2 ">
              {navLinks.map(({ label, to }, index) => (
                <Link
                  key={index}
                  to={to}
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
                onClick={() =>
                  modalNotificacaoAberto
                    ? fecharModalNotificacao()
                    : abrirModalNotificacao()
                }
                title="Notificações"
                className="focus:outline-none"
              >
                <img
                  src={Notifications}
                  alt="Notificações"
                  className="MeusEventos w-auto brightness-70 transform translate-y-[0.6px] cursor-pointer"
                />
              </button>
              <Link to="/private/materiais" title="Meus Materiais">
                <img
                  src={Materials}
                  alt="Materiais"
                  className="MeusEventos w-4.5 brightness-70 transform translate-y-[-0.20px]"
                />
              </Link>
              <Link to="/private/MeusEventos" title="Eventos salvos">
                <img
                  src={Events}
                  alt="Eventos"
                  className="MeusEventos w-5 brightness-44"
                />
              </Link>
              <div className="bg-gradient-to-b from-purple-500 to-indigo-600 p-[2px] rounded-full">
                <button
                  onClick={() =>
                    modalPerfilAberto ? fecharModalPerfil() : abrirModalPerfil()
                  }
                  className="user w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-white shadow-md overflow-hidden"
                  title="Perfil do usuário"
                >
                  <img
                    src={Woman}
                    alt="Foto de perfil"
                    className="w-full h-full object-cover rounded-full p-[0.10px] brightness-110"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <UserProfileModal
        isOpen={modalPerfilAberto}
        onClose={fecharModalPerfil}
      />

      <Notificacoes
        isOpen={modalNotificacaoAberto}
        onClose={fecharModalNotificacao}
      />
    </>
  );
};

export default HeaderPrivate;
