export class Responses {

    success(message : String, payload : any) {
        return {
            success : true,
            message,
            payload,
            statusText : "OK"
        }
    }

    error(message : string, error: any) {
        return {
            success : false,
            message,
            error,
            statusText : "False"
        }
    }

}