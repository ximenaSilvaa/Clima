import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    
    const handleLogin = () => {
        const admin = false; // recuperar esto del backend
        localStorage.setItem('admin', JSON.stringify(admin));
        navigate('/grupos');
    };


    return (
        <div className="h-screen flex flex-col bg-[var(--gris)]">
            <div className="flex-1 flex flex-col justify-center items-center text-white text-center font-serif space-y-40">
                <h1 className="text-4xl text-[var(--azul)] mt-[-200px]">Iniciar Sesión</h1>
            </div>

            <div className="relative flex-1 bg-[var(--azul)] flex justify-center items-center rounded-t-3xl">
                <div className="absolute top-5/32 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                   <div className="bg-white w-130 py-20 px-15 rounded-[15px] shadow-lg flex flex-col items-center space-y-6 mb-20">
                            <img src="logo.png" alt="Clínica Mexicana de Autismo" className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 w-[230px]" />
                    <div className="w-2/3">
                        <label className="block text-gray-700 text-sm mb-1">Usuario:</label>
                        <input
                            type="text"
                            placeholder="Usuario"
                            className="w-full p-3 rounded-full bg-[#cde0f4] focus:outline-none focus:ring-2 focus:ring-[#7aa5d9]"
                        />
                    </div>
                 
                    <div className="w-2/3">
                        <label className="block text-gray-700 text-sm mb-">Contraseña:</label>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            className="w-full p-3 rounded-full bg-[#cde0f4] focus:outline-none focus:ring-2 focus:ring-[#7aa5d9]"
                        />
                    </div>
                    <button
                        className="bg-white text-[var(--azul)] font-bold text-lg px-8 py-2 rounded-full border border-gray-300 hover:bg-[#cde0f4]"
                        onClick={handleLogin}
                    >
                        Ingresar
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;