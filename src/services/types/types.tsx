export type DogType = {
    _id: number
    src: string
    type: number
    city: string
    breed: string
    user?: {_id: string, email: string}
}