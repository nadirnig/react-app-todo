const Button = ({onAdd,text,color}) => {
    return (
        <button className='btn' onClick={onAdd} style={{backgroundColor:color}}>
            {text}
        </button>
    )
}
export default Button;