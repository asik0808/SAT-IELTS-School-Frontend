import {useState} from 'react'

function Footer(){

    const [form, setForm] = useState({ name: '', phone: '', course: '', email: '' })
    const [status, setStatus] = useState('')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
        if (!form.name || !form.phone || !form.email || !form.course) {
            setStatus('Please fill in all fields')
            return
        }

        try {
            const response = await fetch('https://sat-ielts-school-backend-production.up.railway.app/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })
            const data = await response.json()
            setStatus("Enrollment successful! We will contact you soon.")
            setForm({ name: '', phone: '', email: '', course: '' })
        } catch (error) {
            setStatus('Enrollment failed. Please try again later.')
        }
    }





    return (
        <footer className="bg-[#120E2E] text-gray-300 py-6 text-center pt-20 pb-20">
            <div className="max-w-4xl mx-auto px-4 flex justify-between items-center flex-col md:flex-row gap-6">
            
            {/* Левая часть */}
            <div className="text-left">
                <h1 className="text-3xl font-montserrat mb-10">Связаться с нами</h1>
                <p className="text-gray-600 text-xl">Электронная почта:</p>
                <p className="text-xl mb-5">example@gmail.com</p>
                <p className="text-gray-600 text-xl">Телефон:</p>
                <p className="text-xl mb-5">+7 707 111 35 41</p>
                <div className="flex gap-6 mt-4">
                <a href="https://www.instagram.com/edutication/" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/insta-button.png" alt="instagram" />
                </a>
                
                <a href="https://wa.me/77071113541" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/whats-button.png" alt="whatsapp" />
                </a>
                
                <a href="https://web.telegram.org/k/#@edutication" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/tg-button.png" alt="telegram" />
                </a>
                </div>
            </div>

            {/* Правая часть - форма */}
            <div className="text-left">
                <h1 className="text-2xl font-montserrat mb-6">Зарегистрируйся на пробный урок прямо сейчас</h1>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <p className="mb-1">Имя</p>
                    <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-gray-200 text-black p-3 rounded"
                    />
                </div>
                <div>
                    <p className="mb-1">Номер телефона</p>
                    <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-200 text-black p-3 rounded"
                    />
                </div>
                <div>
                    <p className="mb-1">Курс</p>
                    <select
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    className="w-full bg-gray-200 text-black p-3 rounded"
                    >
                    <option value="">Выберите</option>
                    <option value="IELTS">IELTS</option>
                    <option value="SAT">SAT</option>
                    </select>
                </div>
                <div>
                    <p className="mb-1">Электронная почта</p>
                    <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-gray-200 text-black p-3 rounded"
                    />
                </div>
                </div>

                <button
                onClick={handleSubmit}
                className="w-full bg-[#2D2666] text-white py-3 rounded text-xl hover:bg-[#3d3480]"
                >
                Отправить
                </button>

                {status && <p className="mt-4 text-green-400">{status}</p>}
            </div>

            </div>
            <p className="text-gray-500 mt-6">© 2026 Edutication. Все права защищены.</p>
        </footer>
        )
}

export default Footer;