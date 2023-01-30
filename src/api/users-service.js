import { $axios } from '../api/api'

export default class UserService {
    static async getUsers() {
        return $axios.get('users')
    }

}