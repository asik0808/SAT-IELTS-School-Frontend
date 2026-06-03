import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className = "bg-navbar  px-8 py-4 flex justify-between items-center">
            <img src="/assets/Logo.svg" alt="Logo" className=""/>
            <div className="flex gap-6">
                <Link to="/" className="transition delay-75 text-white hover:text-blue-400 text-2xl " >Главная</Link>
                <Link to="Team/" className="transition delay-75 text-white hover:text-blue-400 text-2xl " >О нас</Link>
            </div>
        </nav>
    )
}

export default Navbar