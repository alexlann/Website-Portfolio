const SubTitle = ({ children } : { children: string }) => {
    return (
        <h3 className="font-body font-medium text-dark-gray text-lg sm:text-xl md:text-lg lg:text-xl">
            { children }
        </h3>
    )
};

export default SubTitle;
