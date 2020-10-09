import tenants from "../tenants.json";

export const state = () => ({
  tenant: null,
  isAuthorized: true
});

export const actions = {
  async nuxtServerInit({ commit }, ctx) {
    // find and set tenant data
    const subdomain = ctx.req.headers.host.split(".")[0];
    const { data } = await ctx.$axios.get(subdomain);
    if (data) {
      commit("SET_TENANT", data);
      if (data.protected) {
        commit("SET_AUTHORIZED", false);
      }
    }
  },
  async authorizePage({ commit }, password) {
    // try {
    //   await this.$axios.post("justin/page_authorization", {
    //     password: this.password
    //   });
    //   this.$toast.success("Successfully authenticated");
    //   commit("SET_AUTHORIZED", true);
    // } catch (error) {
    //   this.$toast.error("Error while authenticating");
    //   this.password = "";
    // }
    // return this.$axios.post("justin/page_authorization", { password: payload })
    //   .then(res => {
    //     this.$toast.success("Successfully authorized.")
    //     commit("SET_AUTHORIZED", true)
    //   })
    //   .catch(err => {
    //     this.$toast.error("Error while authenticating")
    //     throw new Error
    //   })
    try {
      await this.$axios.post("justin/page_authorization", { password })
      this.$toast.success("Successfully authorized.")
      commit("SET_AUTHORIZED", true)
    } catch (error) {
      this.$toast.error("Error while authorizing.")
      return error
    }
  }
};

export const mutations = {
  SET_TENANT: (state, payload) => (state.tenant = payload),
  SET_AUTHORIZED: (state, payload) => (state.isAuthorized = payload)
};
