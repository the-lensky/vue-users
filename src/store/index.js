import { createStore } from 'vuex'
import { users } from '../store/module/users'

export const store = createStore({
    modules: {
        users
    }
})