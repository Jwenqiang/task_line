import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const storage=window.localStorage;
const store = new Vuex.Store({
	state: {
		count:0,
		hasLogin: false,
		userInfo: {},
		isNew:true,
		scoreList:""
	},
	getters :{
	    getterHasLogin(state) {
			if(storage.getItem('userInfo')){
				return (hasLogin =true)
			}
	        
	    }
	},	
	mutations: {
		setScoreList(state,data){
			state.scoreList = data;
		},
		add(s,v){
			s.count+=v;
		},
		getLogin(state,msg){
			state.hasLogin = true;
			state.userInfo = msg;
		},
		setLogin(state, provider) {
			console.log(provider);
			state.hasLogin = true;
			state.userInfo = provider;
			storage.setItem("userInfo",JSON.stringify(provider));
		},
		clearLogin(state) {
			state.hasLogin = false;
			state.userInfo = {};
			storage.removeItem('userInfo');
		},
		changeNew(state) {
			state.isNew = false;
		}
	},
	actions: {
		subMutations({commit},data){
			return commit('add',data)
		},
		isLogin({commit},data){
			return commit('getLogin',data)
		},
		login({commit},data) {
			return commit('setLogin',data)
		},
		logout({commit},data) {
			return commit('clearLogin',data)
		},
		setNew({commit},data) {
			return commit('changeNew',data)
		}
	}
})
export default store