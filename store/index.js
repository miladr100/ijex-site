
export const state = () => ({
    language: 'ptBr',
})

export const mutations = {
    updateLanguage: (state, payload) =>
        (state.language = payload)
}

export const getters = {

}