
export const state = () => ({
    loadingScreen: false,
})

export const mutations = {
    updateLoadingScreen: (state, payload) =>
        (state.loadingScreen = payload)
}

export const actions = {
    setLoadingScreen({ commit }, loadingTime = 2000) {
        commit('updateLoadingScreen', true)
        setTimeout(() => (commit('updateLoadingScreen', false)), loadingTime)
    }
}

export const getters = {
    getStateLoadingScreen: (state) => state.loadingScreen,
}