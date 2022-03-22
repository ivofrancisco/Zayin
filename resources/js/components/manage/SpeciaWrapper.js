const styles = {
    width: '100%',
    marginTop: '1px'
}

const SpeciaWrapper = (props) => {
    return ( 
        <div
        className="form-group col-sm-12 col-md-12"
        id={props.idName}>
            { props.title ? <h6>{props.title}</h6> : false }
            <div style={styles}>
                {props.children}
            </div>
        </div>
     );
}
 
export default SpeciaWrapper;