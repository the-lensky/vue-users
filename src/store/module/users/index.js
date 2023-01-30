import * as types from '../../types'
import UserService from '../../../api/users-service'

export const users = {
    state() {
        return {
            users: []
        }
    },

    getters: {},

    actions: {
        async initUsers({ commit, dispatch }, status) {
            if(status) {
                commit(types.USERS_LOADING_START)
            }
            try {
                await dispatch('getUsers')
            }
            catch (err) {
                console.log('intiUsers Error')
            }

            if(status) {
                commit(types.USERS_LOADING_FINISH)
            }
        },

        async getUsers({ commit }) {
            try {
                // const token = localStorage.getItem('token')
                const response = await UserService.getUsers()
                console.log(response?.data)
                commit(types.USERS_LOADING_START,)

                return response
            }
            catch (err) {
                console.log('UserService Error getUsers', err)
            }
        },
    },

    mutations: {}
}
