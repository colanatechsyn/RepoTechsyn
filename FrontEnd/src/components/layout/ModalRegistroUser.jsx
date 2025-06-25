import React, { useState } from "react";
const Google = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/LoginRegisterImages/Group+232.png";

import ModalConfirmacaoEmail from "../layout/ModalConfirmacaoEmail";

const ModalRegistroUser = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Para passar o email para o modal de confirmação
  const [emailConfirmado, setEmailConfirmado] = useState("");

  const handleSignUp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor, insira um email válido");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    setError("");

    // Aqui você poderia enviar dados para backend, mas vamos abrir o modal de confirmação
    setEmailConfirmado(email); // passar email para modal
    setShowConfirmModal(true);

    // Limpa os campos
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const closeConfirmModal = () => {
    setShowConfirmModal(false);
  };

  return (
    <>
      {/* Overlay: Adiciona padding lateral em mobile para o modal não colar nas bordas */}
      <div className="fixed inset-0 flex bg-[#0000008a] justify-center items-center z-50 p-4 sm:p-0">
        {/* Corpo do Modal: Ajusta largura máxima, padding e espaçamento interno para mobile */}
        <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md text-center flex flex-col gap-2 sm:gap-3">
          {/* Título: Ajusta tamanho da fonte */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-0 transform translate-y-2">
            Bem-vindo a{" "}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
              TechSyn!
            </span>
          </h2>
          {/* Parágrafo: Ajusta tamanho da fonte e margin-bottom */}
          <p className="text-xs sm:text-sm !text-gray-500 mb-4 sm:mb-8 translate-y-2 sm:translate-y-4">
            Cadastre-se para participar dos nossos eventos e aprofundar seus
            conhecimentos com o que há de mais relevante no mundo tech.
          </p>

          {/* Inputs: Ajusta largura, padding e tamanho da fonte para mobile */}
          <div className="relative w-[96%] m-auto mb-3 group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border-b border-gray-300 p-2 sm:p-3 focus:outline-none bg-transparent peer !text-gray-500 text-sm sm:text-base"
            />
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-300 peer-focus:w-full rounded-full"></span>
          </div>

          <div className="relative w-[96%] m-auto mb-3 group">
            <input
              type="email"
              placeholder="Email@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-gray-300 p-2 sm:p-3 focus:outline-none bg-transparent peer !text-gray-500 text-sm sm:text-base"
            />
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-300 peer-focus:w-full rounded-full"></span>
          </div>

          <div className="relative w-[96%] m-auto mb-3 group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-gray-300 p-2 sm:p-3 focus:outline-none bg-transparent peer !text-gray-500 text-sm sm:text-base"
            />
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-300 peer-focus:w-full rounded-full"></span>
          </div>

          <div className="relative w-[96%] m-auto mb-4 group">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border-b border-gray-300 p-2 sm:p-3 focus:outline-none bg-transparent peer !text-gray-500 text-sm sm:text-base"
            />
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-300 peer-focus:w-full rounded-full"></span>
          </div>

          {/* Mensagem de Erro: Adiciona padding horizontal para mobile */}
          {error && <p className="!text-red-600 text-sm mb-2 px-2">{error}</p>}

          {/* Termos: Ajusta tamanho da fonte, margin-bottom e padding para mobile */}
          {/* Removido `gap-20` e `w-91` fixo, usando `justify-center` para melhor adaptação */}
          <div className="flex justify-center items-center text-xs sm:text-sm mb-4 sm:mb-6 px-2">
            <label className="text-gray-600 text-center">
              Ao continuar, você concorda com nossos{" "}
              <a
                href="#"
                className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text !text-transparent hover:underline"
              >
                Termos de Uso
              </a>{" "}
              e{" "}
              <a
                href="#"
                className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text !text-transparent hover:underline"
              >
                Política de Privacidade
              </a>
            </label>
          </div>

          {/* Botões: Ajusta largura, padding e tamanho da fonte para mobile */}
          <button
            onClick={handleSignUp}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-[96%] m-auto py-2.5 sm:py-3 rounded-full mb-2 font-semibold cursor-pointer text-base sm:text-lg"
          >
            Registrar
          </button>

          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white w-[96%] m-auto py-2.5 sm:py-3 rounded-full font-semibold relative cursor-pointer text-base sm:text-lg">
            <div className="background-Google absolute bg-white p-1 sm:p-1.5 rounded-full left-1">
              <img
                src={Google}
                alt="Google"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
            </div>
            Continue with Google
          </button>

          {/* Botão Fechar: Ajusta posição e tamanho do SVG para mobile */}
          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:underline absolute top-3 right-3 sm:top-4 sm:right-4"
          >
            <svg
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              className="cursor-pointer opacity-50"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.70711 18.7071L18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071ZM17.2929 18.7071L13.8201 15.2343C13.4296 14.8438 13.4296 14.2106 13.8201 13.8201C14.2106 13.4296 14.8438 13.4296 15.2343 13.8201L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Modal de Confirmação de Email */}
      {showConfirmModal && (
        <ModalConfirmacaoEmail
          email={emailConfirmado}
          onClose={closeConfirmModal}
        />
      )}
    </>
  );
};

export default ModalRegistroUser;
