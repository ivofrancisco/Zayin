const TextArea = ({
    label,
    name,
    idName,
    className,
    value,
    handleChange}) => {
    return ( 
        <>
            <label htmlFor={idName}>
                {label}
            </label>
            <textarea
                name={name}
                className={className}
                id={idName}
                autoComplete="off"
                value={value}
                onChange={handleChange}>
            </textarea>
        </>
    );
}
 
export default TextArea;
