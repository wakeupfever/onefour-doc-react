import { baseUrl } from './base'

export const getRecommend = () => fetch(`${baseUrl}/api/getRecommend`).then((res) => res.json())