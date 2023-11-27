const Button = ({label, onClickFunction}) => {
    return (
        <button className="boton" onClick={onClickFunction}>
            {label}
        </button>
    )
}

export default Button;