class ResponseMessage {
    static responseError (status_code, error_messsage) {
        return ({
            status: status_code,
            error: error_messsage
        })
    }
}


export default ResponseMessage