import React from "react";
const Google = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/LoginRegisterImages/Group+232.png";
import { useNavigate } from "react-router-dom"; // Não usado neste componente, pode ser removido se não for usar em outro lugar

const ModalLogin = ({ onClose, onSignUpClick }) => {
  return (
    <div className="fixed inset-0 flex bg-[#0000008a] justify-center items-center z-50 p-4 sm:p-0">
      {" "}
      {/* Adicionado p-4 para mobile */}
      <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md text-center h-[550px] flex flex-col gap-2">
        {" "}
        {/* max-w-sm para mobile, p-6 para mobile */}
        {/* Botões Sign Up e Login */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-4">
          {" "}
          {/* Reduzido gap para mobile */}
          <div className="line rounded-full bg-gradient-to-l from-purple-500 to-indigo-600 w-[90%] sm:w-[80%]">
            {" "}
            {/* Ajustado largura para mobile */}
            <button
              className="px-4 py-2 w-1/2 rounded-full text-white font-medium cursor-pointer text-sm sm:text-base" // Ajustado padding e font size
              onClick={onSignUpClick}
            >
              Sign Up
            </button>
            <button className="bg-gradient-to-r bg-white border-none px-4 py-1 rounded-full font-medium shadow-md transform translate-x-[-4px] w-1/2">
              {" "}
              {/* Ajustado padding */}
              <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent cursor-pointer text-sm sm:text-base">
                {" "}
                {/* Ajustado font size */}
                Log in
              </span>
            </button>
          </div>
        </div>
        {/* Título */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-0 transform translate-y-4">
          {" "}
          {/* Ajustado font size */}
          Bem-vindo de volta!{" "}
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 translate-y-4">
          {" "}
          {/* Ajustado font size e mb */}
          Sentimos sua falta! Por favor, insira seus dados.
        </p>
        {/* Inputs */}
        <div className="relative w-[96%] sm:w-[94%] m-auto mb-3 sm:mb-4 group">
          {" "}
          {/* Ajustado largura e mb */}
          <input
            type="email"
            placeholder="Email@gmail.com"
            className="w-full border-b border-gray-300 p-2 sm:p-3 focus:outline-none bg-transparent peer !text-gray-500 text-sm sm:text-base" // Ajustado padding e font size
          />
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-300 peer-focus:w-full rounded-full"></span>
        </div>
        <div className="relative w-[96%] sm:w-[94%] m-auto mb-4 sm:mb-4 group">
          {" "}
          {/* Ajustado largura */}
          <input
            type="password"
            placeholder="Senha"
            className="w-full border-b border-gray-300 p-2 sm:p-3 focus:outline-none bg-transparent peer !text-gray-500 text-sm sm:text-base" // Ajustado padding e font size
          />
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-300 peer-focus:w-full rounded-full"></span>
        </div>
        {/* Remember me & Forgot password */}
        <div className="flex justify-between items-center text-xs sm:text-sm mb-4 sm:mb-6 px-2 sm:px-0">
          {" "}
          {/* Ajustado font size, mb e adicionado px */}
          <label className="flex items-center space-x-2 text-gray-600">
            <input type="checkbox" className="w-3 h-3 sm:w-4 sm:h-4" />{" "}
            {/* Ajustado tamanho do checkbox */}
            <span>Lembrar-me</span>
          </label>
          <a
            href="#"
            className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text !text-transparent hover:underline"
          >
            Esqueceu a senha?
          </a>
        </div>
        {/* Botão Entrar */}
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-[96%] m-auto py-2.5 sm:py-3 rounded-full mb-2 font-semibold cursor-pointer text-base sm:text-lg">
          {" "}
          {/* Ajustado largura, padding, font size */}
          Continuar
        </button>
        {/* Google Button */}
        <button className="flex items-center justify-center gap-2 bg-blue-600 text-white w-[96%] m-auto py-2.5 sm:py-3 rounded-full font-semibold relative cursor-pointer text-base sm:text-lg">
          {" "}
          {/* Ajustado largura, padding, font size */}
          <div className="background-Google absolute bg-white p-1 sm:p-1.5 rounded-full left-1">
            {" "}
            {/* Ajustado padding */}
            <img
              src={Google}
              alt="Google"
              className="w-6 h-6 sm:w-7 sm:h-7"
            />{" "}
            {/* Ajustado tamanho da imagem */}
          </div>
          Continuar com Google
        </button>
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="text-sm text-gray-500 hover:underline absolute top-3 right-3 sm:top-4 sm:right-4" // Ajustado posição para mobile
        >
          <svg
            viewBox="0 0 24 24"
            width="24px" // Ajustado para mobile
            height="24px" // Ajustado para mobile
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
  );
};

export default ModalLogin;
