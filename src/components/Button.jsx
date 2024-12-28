import { statistics } from "../constants";

const Button = ({ label, iconURL }) => {
    return (
        <div>
            <button
                className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red transition-shadow duration-300 hover:shadow-[0_0_15px_3px_rgba(255,105,97,0.7)] group"
            >
                {label}
                <img
                    src={iconURL}
                    alt="icon"
                    className="ml-2 rounded-full w-5 h-5 transition-transform duration-300 group-hover:rotate-180"
                />
            </button>



            <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                {statistics.map((item, index) => (
                    <div key={index}>
                        <p className="text-4xl font-palanquin font-bold">{item.value}</p>
                        <p className="leading-7 font-montserrat text-slate-gray">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Button;
