//引入vue
import Vue from 'vue'
// 引入Vues
import Vuex from 'vuex'

Vue.use(Vuex)

// 多模块嵌套，先定义各模块，再使用modules属性
const moduleA = {
	namespaced: true,
	state:{ // 定义数据，相当于组件中的data(){return{...}}
		msg: "",
		nums:[],
	},
	mutations:{ // 修改state中的数据，相当于组件中的methods
		changeMsg(state){
			let i = Math.random().toString();
			state.msg = i;
		},
		reduceMsg(state, n){ // 接收参数
			state.msg = n;
		},
	},
	getters:{ // 基于state中数据，生成新数据，相当于组件的computed
		filteredNums:(state)=>{
			return state.nums.filter(function(item){
				return item > 5;
			}) // item=>{item > 5}
		},
		numsCount:(state,getters)=>{ // 第二个参数传递getters，可获得其他getters属性
			return getters.filteredNums.length;
		},
	},
	actions:{ // 可异步操作数据
		changeMsgAn(context){
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					context.commit('changeMsg');
					resolve();
				},1000);
			});
		},
	},
}

const moduleB = {
	namespaced: true,
	state:{
		count:0,
	},
	mutations:{
		newCount(state){
			state.count = 888;
		},
		anotherCount(state){
			state.count = 1;
		}
	},
	getters:{
		addCount(state){
			return state.count + 9;
		}
	},
	actions:{
		remoteCount({ state, commit, rootState }){
			commit('anotherCount');
		}
	},
	// 内嵌模块 moduleC
	modules:{
		moduleC:{
			namespaced: true,
			state:{
				count:100,
			},
			mutations:{
				newCountC(state){
					state.count = 123456;
				},
				anotherCountC(state){
					state.count = 654321;
				}
			},
			getters:{
				addCountC(state){
					return state.count + 10000;
				}
			},
			actions:{
				remoteCountC({ state, commit, rootState }){
					commit('anotherCountC');
				}
			}
		}
	}
}

const store = new Vuex.Store({
	modules:{
		modA: moduleA,
		modB: moduleB,
	}
})


export default store