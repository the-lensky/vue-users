import * as types from '../../types'
import UserService from '../../../api/users-service'
import { USERS_FETCH } from '../../types'

export const users = {
    state() {
        return {
            users: []
        }
    },

    getters: {
        users: state => state.users
    },

    actions: {
        async getUsers({ commit }) {
            try {
                const response = await UserService.getUsers()
                console.log(response?.data)
                commit(types.USERS_FETCH, response.data)

                return response
            }
            catch (err) {
                console.log('UserService Error getUsers', err)
            }
        },
    },

    mutations: {
        [types.USERS_FETCH](state, users) {
            state.users = users
        },

    }
}
