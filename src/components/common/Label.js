
function Label(props) {
    return (
        <label className={props.containerStyle}>
            {
                props.text
            }
        </label>
    );
}

export default Label;

