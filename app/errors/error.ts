
export class ErrorHandler extends Error{
    public statusCode: number

    constructor(err: string, statusCode: number) {
        super(err)
        this.statusCode = statusCode
        Object.setPrototypeOf(this, ErrorHandler.prototype);
    }
}

export function UnkownHandleError(error: unknown): Error {
    let stringfiedError: string = "[something went wrong]"

    if (error instanceof Error) return error

    try {
        stringfiedError = JSON.stringify(error)
    }catch{}

    return new Error(`this error thrown was not unexpected ${stringfiedError}`)
}