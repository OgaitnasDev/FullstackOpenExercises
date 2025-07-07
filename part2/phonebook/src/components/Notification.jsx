const Notification = ({message, error}) => {
    const errorStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }

    const okayStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }

    const currentStyle = error ? errorStyle : okayStyle;

    if(message === null){
        return null;
    }

    return (
        <div style={currentStyle}>
            {message}
        </div>
    )
}

export default Notification;