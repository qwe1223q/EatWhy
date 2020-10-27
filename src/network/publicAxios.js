import axios from 'axios'

export const cityAxios = axios.create({
  baseURL:'https://elm.cangdu.org/v1/cities'
})