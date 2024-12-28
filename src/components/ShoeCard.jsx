const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe);
        }
    };

    return (
        <div
            className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 transition-transform duration-300
            ${bigShoeImg === imgURL.bigShoe
                    ? ' shadow-[0_0_15px_3px_rgba(255,105,97,0.7)] scale-105'
                    : 'border-transparent scale-100'
                }`}
            onClick={handleClick}
        >
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img
                    src={imgURL.thumbnail}
                    alt="shoe"
                    width={127}
                    height={103}
                    className="object-contain"
                />
            </div>
        </div>
    );
};

export default ShoeCard;
