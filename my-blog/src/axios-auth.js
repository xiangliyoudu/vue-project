//自定义axios配置
import axios from 'axios'

const instance = axios.create({
	baseURL: "http://jsonplaceholder.typicode.com",

})

// instance.defaults.headers.common['Authorization'] = 'Token'
// instance.defaults.headers.post['Content-type'] = 'application/urlencode'
// instance.defaults.headers.get['Accepts'] = 'application/json'

export default instance