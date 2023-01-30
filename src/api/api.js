import axios from 'axios'

const baseUrl = `https://jsonplaceholder.typicode.com/`

export const $axios = axios.create({
    baseURL: baseUrl
})