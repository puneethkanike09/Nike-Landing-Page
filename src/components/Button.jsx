const Button = ({
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
}) => {
    return (
        <div className="group">
            <button
                className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
                    ${backgroundColor
                        ? `${backgroundColor} ${textColor} ${borderColor}`
                        : "bg-coral-red text-white border-coral-red"
                    } rounded-full ${fullWidth && "w-full"}
                transition-all duration-300 ease-in-out `}
            >
                {label}

                {iconURL && (
                    <img
                        src={iconURL}
                        alt="arrow right icon"
                        className="ml-2 rounded-full bg-white w-5 h-5 transition-transform duration-300 ease-in-out transform group-hover:rotate-180" // Icon rotates on button hover
                    />
                )}
            </button>
        </div>
    );
};

export default Button;
