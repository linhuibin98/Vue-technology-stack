//vuex本地存储插件

 const saveInLocal = store => {
  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  store.subscribe((mutation, state) => {  //mutaion每次提交都能监测到
    localStorage.state = JSON.stringify(state);
  })
}

export default saveInLocal;