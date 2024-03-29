const SubTitle = ({ children } : { children: string }) => {
    return (
        <h3 className="font-body font-medium text-dark-gray text-xl">
            { children }
        </h3>
    )
};

export default SubTitle;
