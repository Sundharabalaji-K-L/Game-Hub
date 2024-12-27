import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '1bc97f38fe5b428c9761340e7d86413c'
    }
})