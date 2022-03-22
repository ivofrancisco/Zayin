import '../../assets/manage/sass/buttons.scss';

const Button = (props) => {
    return ( 
        <button
        type={props.type}
        className={props.className}
        onClick={props.handleClick}>
            {props.value}
        </button>
     );
}
 
export default Button;