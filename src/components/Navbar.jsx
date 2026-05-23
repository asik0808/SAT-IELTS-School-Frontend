import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className = "bg-white shadow0-md px-8 py-4 flex justify-between items-center">
            <h1 className = "text-xl font-bold text-blue-600">SAT & IELTS School</h1>
            <div className="flex gap-6">
                <Link to="/" className="text-gray-600 hover:text-blue-600" font-medium>Home</Link>
                <Link to="/team" className="text-gray-600 hover:text-blue-600" font-medium>Team</Link>
            </div>
        </nav>
    )
}

export default Navbar