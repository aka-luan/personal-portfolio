const Button = ({className, children}) => {
    return (
        <button className={`py-3 px-9 rounded-3xl transition duration-300 ease-in-out hover:scale-110 ${className}`}>
            {children}
        </button>
    );
}

export default Button;