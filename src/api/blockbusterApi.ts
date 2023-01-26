import axios from 'axios'

export const blockbusterApi= axios.create({
    baseURL:'https://www.omdbapi.com/'
})