const mutations = {
  handleName (state, newName = 'newName') {
    state.name = newName;
  },
  setValue (state, val) {
    state.stateValued = val;
  }
}

export default mutations;