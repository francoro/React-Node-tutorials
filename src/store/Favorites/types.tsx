export type InitialState = {
    favorites: {
        _id: number
        src: string
        type: number | string
        city: string
        breed: string
        user?: { _id: string, email: string }
    }[]
}