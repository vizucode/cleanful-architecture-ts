interface I_ErrorConstant {
    ErrNotFound: number
    ErrNotFoundMsg: string

    ErrInternalServer: number
    ErrInternalServerMsg: string
}

export const ErrorConstant: I_ErrorConstant = {
    ErrNotFound: 404,
    ErrNotFoundMsg: "Data tidak ditemukan.",

    ErrInternalServer: 500,
    ErrInternalServerMsg: "Kesalahan pada server."
}