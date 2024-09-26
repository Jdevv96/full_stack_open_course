const Notification = ({message, successfulAlert}) => {
    if (message === null) {
        return null
    }

    return (
        <div className={`default-alert ${successfulAlert ? 'alert-success' : 'alert-failure'}`}>
            <p>
                {message}
            </p>
            
        </div>
    )
}

export default Notification