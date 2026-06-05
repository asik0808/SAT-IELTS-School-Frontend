const members = [
  {
    name: "Смантай Даут",
    role: "CEO",
    image: "public/assets/Daut.JPG",
  },
  {
    name: "Семен",
    role: "IELTS Tutor",
    image: "public/assets/Semyon.jpeg",
  },
  {
    name: "Assylali",
    role: "SAT Tutor & Web Developer",
    image: "public/assets/Asylali.JPG",
  },
]

function Team() {
  return (
    <>
    <div className="min-h-screen flex flex-col md:flex-row justify-evenly items-center bg-[#120E2E] px-10 py-20">
      
      {/* Левая часть */}
      <div className="text-left mb-10 md:mb-0">
        <p className="text-gray-400 text-lg mb-2">- Твой путь к топ-баллам -</p>
        <p className="text-white text-4xl font-bold mb-6">Наша команда</p>
        <img src="/assets/arrows.png" alt="arrows" className="h-12 w-12"/>
      </div>

      {/* Карточки */}
      <div className="flex flex-col md:flex-row gap-6">
        {members.map((member, index) => (
          <div key={index} className="bg-[#3F3969] rounded-2xl p-1 w-80">
            
            {/* Фото */}
            <div className="bg-[#2A2550] rounded-xl h-80 flex items-center justify-center mb-4 overflow-hidden">
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-xl"/>
              ) : (
                <div className="text-gray-500 text-6xl">👤</div>
              )}
            </div>

            {/* Имя и роль */}
            <div className="px-3 pb-4">
              <p className="text-white text-xl font-bold">{member.name}</p>
              <p className="text-gray-400 text-sm mt-1">{member.role}</p>
            </div>

          </div>
        ))}
      </div>

    </div>
    <hr className="text-white"/>
    </>
  )
}

export default Team