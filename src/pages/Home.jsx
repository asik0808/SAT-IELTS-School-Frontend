import OverlappingCard from '../components/Card'

function Home() {
    
    return (
        <>
            <div 
                className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center relative"
                style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/bg-Image.png')" }}
            >
                <div className="pl-6 md:pl-20 max-w-2xl lg:max-w-3xl z-10">
                    <h1 className="text-5xl text-white font-merriweather font-bold">
                        Edutication
                    </h1>
                    <p className="text-3xl tracking-wide leading-relaxed text-white mt-6 font-montserrat font-thin">
                        Пока одни откладывают подготовку - другие уже строят свое будущее.
                    </p>
                    <p className="text-xl text-purple-400 mt-4 font-montserrat font-light">
                        Мы помогаем амбициозным студентам поступать в топовые вузы, закрывая вопросы по SAT и IELTS без зубрежки и стресса
                    </p>
                </div>
            </div>

            <section className="bg-[#1F203B] py-16 px-4 flex flex-col items-center justify-center relative overflow-hidden">
    
                <div className="absolute left-4 bottom-20 hidden lg:block opacity-100 z-10"> 
                    <img src="/assets/left-confeti.svg" alt="Vector1" className="w-60"/>
                </div>

                <div className="absolute right-4 bottom-20 hidden lg:block opacity-100 z-10"> 
                    <img src="/assets/right-confeti.svg" alt="Vector2" className="w-60"/>
                </div>

                <h2 className="text-2xl md:text-5xl text-white font-montserrat font-bold text-center mb-10 tracking-wide max-w-3xl">
                    3 недели фокуса. Вот на что способны наши ученики:
                </h2>

            <div className=" gap-6 w-full max-w-3xl px-4">
                <div className="w-full  flex gap-5">
                    <div className="">
                        <img src="/assets/RasulIELTS.jpeg" alt="IELTS Result 7.0" className=" hover:scale-105 transition transform duration-300 mb-5 rounded-lg"/>
                        <img src="/assets/IELTS-Score-7-0.png" alt="Student" className="hover:scale-105 transition transform duration-300 rounded-lg"/>
                        
                    </div>
                    <div className="">
                        <img src="/assets/ToreIELTS.jpg" alt="IELTS Result 6.5" className="hover:scale-105 transition transform duration-300 mb-3 rounded-lg"/>
                        <img src="/assets/IELTS-Score-6-5.png" alt="Student" className=" hover:scale-105 transition transform duration-300 rounded-lg"/>
                        
                    </div>
                </div>

            </div>

            </section>


            <section className="bg-[#120E2E] py-16">
                <h2 className="text-center text-4xl md:text-5xl font-bold text-white pb-20 pt-10 leading-tight">
                    За счет чего мы делаем такие <br className="hidden md:block"/> результаты? Все просто:
                </h2>
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 pb-20">
                    <OverlappingCard
                        title="ИНДИВИДУАЛЬНЫЙ ТРЕК."
                        bulletText={[
                            "Личный наставник",
                            "Разбор твоих слабых мест",
                            "Подбор программы под твой уровень"
                        ]}
                        icon="/assets/book-apple.png"
                    />

                    <OverlappingCard
                        title="МАКСИМУМ ПРАКТИКИ"
                        bulletText={[
                            "Справочники и чек-листы",
                            "Разбор заданий из свежих экзаменов",
                            'Никакой лишней "воды"'
                        ]}
                        icon="/assets/letter.png"
                    />

                    <OverlappingCard
                        title="ПОДДЕРЖКА 24/7"
                        bulletText={[
                            "Моральная поддержка до экзамена",
                            "Разбор Эссе и задач (SAT,IELTS)",
                            "Быстрый ответ в рабочем чате"
                        ]}
                        icon="/assets/hat.png"
                    />
                </div>
            </section>

            <section className="min-h-[70vh] bg-[#1F203B] w-full flex flex-col items-center justify-center px-6 pt-20 pb-0 relative overflow-hidden">
    
                <img 
                    src="/assets/left-book.png" 
                    alt="left books" 
                    className="absolute left-0 bottom-0 hidden lg:block w-72 xl:w-96 object-contain z-10"
                />

                <div className="max-w-xl flex flex-col items-center text-center z-20 mb-24">
                    <div className="inline-block border-b-2 border-green-800 pb-3 font-merriweather mb-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                            1450 + 7.0 <span className="text-green-800">= ГРАНТ</span>
                        </h2>
                    </div>

                    <p className="text-lg md:text-3xl text-gray-300 font-montserrat font-light leading-relaxed max-w-md">
                        Высокие баллы на экзаменах - это не просто красивые цифры в сертификате. 
                        Это твои открытые двери в топовые университеты мира.
                    </p>
                </div>

                <img 
                    src="/assets/left-book.png" 
                    alt="right books" 
                    className="absolute right-0 bottom-0 hidden lg:block w-72 xl:w-96 object-contain -scale-x-100 z-10"
                />

            </section>

        </>
    )
}

export default Home