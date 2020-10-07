import tenants from '../tenants.json'

export const state = () => ({
  tenant: null
});

export const actions = {
  async nuxtServerInit({ commit }, ctx) {
    // find and set tenant data
    const subdomain = ctx.req.headers.host.split(".")[0];
    const { data } = await ctx.$axios.get(subdomain)
    if (data) commit('SET_TENANT', data[0])
  }
};

export const mutations = {
  SET_TENANT: (state, payload) => (state.tenant = payload)
};