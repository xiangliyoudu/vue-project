// 引入组件
import ShowBlogs from './components/ShowBlogs.vue'
import AddBlog from './components/AddBlog.vue'

import SingeBlog from './components/SingeBlog.vue'
import EditBlog from './components/EditBlog.vue'

// 定义路由信息
export default[
	{path:"/", component:ShowBlogs},
	{path:"/add", component:AddBlog},
	//路由参数
	{path:"/blog/:id", component:SingeBlog},
	{path:"/edit/:id", component:EditBlog}
]