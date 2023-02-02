import * as types from '../../types'
import UserService from '../../../api/users-service'

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
                localStorage.setItem('users', JSON.stringify(response.data))

                return response
            }
            catch (err) {
                console.log('UserService Error inside getUsers method', err.message)
            }
        },
        setUsers({ commit }, users) {
            commit(types.USERS_FETCH, users)
        },
        deleteUsers({ state, commit, }, usersForDelete) {
            const users = state.users.filter(user => !usersForDelete.includes(user.id))
            localStorage.setItem('users', JSON.stringify(users))

            commit(types.USERS_DELETE, users)
        },
        addUser({ state, commit, }, userForAdd) {
            const users = [...state.users, userForAdd]
            localStorage.setItem('users', JSON.stringify(users))

            commit(types.USERS_ADD, users)
        },
    },
    mutations: {
        [types.USERS_FETCH](state, users) {
            state.users = users
        },
        [types.USERS_DELETE](state, users) {
            state.users = users
        },
        [types.USERS_ADD](state, users) {
            state.users = users
        },
    }
}
