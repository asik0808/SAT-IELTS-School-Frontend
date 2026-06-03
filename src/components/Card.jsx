
function OverlappingCard({ title, bulletText, icon }) {
    return (
        /* The container must be RELATIVE to act as an anchor */
        <div className="border border-purple-800 rounded-lg p-6 pt-12 relative flex flex-col gap-3 min-h-[300px]">
            
            {/* The Image is ABSOLUTE and uses props for custom placement offsets */}
            <img 
                src={icon} 
                alt={title} 
                className={`absolute w-38 h-38 object-contain z-10 bottom-55 right-70 `} 
            />

            {/* Content with the specified fonts from previous steps */}
            <h3 className="text-2xl font-bold text-white font-merriweather">{title}</h3>
            
            {/* Render a bulleted list from the text array prop */}
            <ul className="text-gray-200 list-disc list-outside pl-4 space-y-1 font-montserrat font-thin leading-relaxed text-lg">
                {bulletText.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default OverlappingCard;