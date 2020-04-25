export interface UserState {
    user: {
        _id: number
        email: string
        password: string
    }
}

export default {
    user: {
        _id: 0,
        email: '',
        password: ''
    }
} as UserState