import {useState} from 'react'

function Home() {
    const [form, setForm] = useState({name: '', phone:'', email:'', course:''})
    const [status, setStatus] = useState('')

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async () => {
        if(!form.name || !form.phone || !form.email || !form.course) {
            setStatus('Please fill in all fields')
            return
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/register' , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })
            const data = await response.json()
            setStatus("Enrollment successful! We will contact you soon.")
            setForm({name: '', phone:'', email:'', course:''})
        } catch (error) {
            setStatus('Enrollment failed. Please try again later.')
        }
    }




    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold text-blue-600"> Welcome</h1>


            <input name ='name' value={form.name} onChange={handleChange} placeholder='your name' className="w-full border p-3 rounded mb-3"/>
            <input name ='phone' value={form.phone} onChange={handleChange} placeholder='your phone' className="w-full border p-3 rounded mb-3"/>
            <input name ='email' value={form.email} onChange={handleChange} placeholder='your email' className="w-full border p-3 rounded mb-3"/>
            <input name ='course' value={form.course} onChange={handleChange} placeholder='your course' className="w-full border p-3 rounded mb-3"/>
            <button onClick={handleSubmit} className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600">
                Enroll
            </button>
            {status && <p className="text-green-500">{status}</p>}
        </div>
    )
}

export default Home