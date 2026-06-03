import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-navbar px-8 py-4 flex justify-between items-center relative">
            <img src="/assets/Logo.svg" alt="Logo" />

            {/* Десктоп меню */}
            <div className="hidden md:flex gap-6">
                <Link to="/" className="transition delay-75 text-white hover:text-blue-400 text-2xl">Главная</Link>
                <Link to="/Team" className="transition delay-75 text-white hover:text-blue-400 text-2xl">О нас</Link>
            </div>

            {/* Бургер кнопка */}
            <button
                className="md:hidden text-white text-3xl"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? '✕' : '☰'}
            </button>

            {/* Мобильное меню */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-navbar flex flex-col items-center gap-6 py-6 z-50">
                    <Link to="/" className="text-white text-2xl" onClick={() => setIsOpen(false)}>Главная</Link>
                    <Link to="/Team" className="text-white text-2xl" onClick={() => setIsOpen(false)}>О нас</Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar