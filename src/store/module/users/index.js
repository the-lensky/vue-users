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
                commit(types.USERS_FETCH, response.data)

                return response
            }
            catch (err) {
                console.log('UserService Error getUsers', err)
            }
        },

        deleteUsers({ commit }, usersForDelete) {
            commit(types.USERS_DELETE, usersForDelete)
        }
    },

    mutations: {
        [types.USERS_FETCH](state, users) {
            state.users = users
        },

        [types.USERS_DELETE](state, usersForDelete) {
            state.users = state.users.filter(user => !usersForDelete.includes(user.id))
        },

    }
}
