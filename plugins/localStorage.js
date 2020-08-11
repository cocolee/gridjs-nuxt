import createPersistedState from 'vuex-persistedstate'

export default ({ store, isHMR }) => {
  if (process.client) {
    createPersistedState({
      key: 'persis',
    })(store)
  }
}
