import axios from 'axios'

const ERR_OK = 0
const host = 'localhost'
const port = '9002'

export const baseURL = `http://${host}:${port}`

axios.defaults.baseURL = baseURL

export const get = <T>(url: string, params?: T) => {
  return axios.get(url, {
    params
  }).then((res) => {
    const serverData = res.data
    if (serverData.code === ERR_OK) {
      return serverData.result
    }
  }).catch((e) => {
    console.log(e)
  })
}
