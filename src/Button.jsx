

function Button(props) {
    return (
      <input type="button" value={props.a} onClick={props.onClick} className={props.c} />
    );
  }
  
  export default Button;