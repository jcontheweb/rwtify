import tenants from "../tenants.json";

export const state = () => ({
  tenant: null,
  isAuthorized: true,
  currency_table: null,
  currency: {
    name: "USD",
    symbol: "$"
  }
});

export const actions = {
  async nuxtServerInit({ commit }, ctx) {
    const currency_api = `https://api.currencyfreaks.com/latest?apikey=73b31de51fcf41d4a03d332cfcb539f4&symbols=CAD,AUD,NZD,GBP,EUR,USD`;

    const currency_table = await ctx.$axios.get(currency_api);
    if (currency_table) {
      commit("SET_CURRENCY_TABLE", currency_table.data.rates);
    }

    const currency = ctx.$cookies.get('currency')
    if (currency) commit('SET_CURRENCY', currency)

    const subdomain = ctx.req.headers.host.split(".")[0];
    const { data } = await ctx.$axios.get(subdomain);
    if (data) {
      commit("SET_TENANT", data);
      if (data.protected == true) {
        commit("SET_AUTHORIZED", false);
      } else {
        commit("SET_AUTHORIZED", true);
      }
    }
  },
  async authorizePage({ commit }, password) {
    try {
      await this.$axios.post("justin/page_authorization", { password });
      this.$toast.success("Successfully authorized.");
      commit("SET_AUTHORIZED", true);
    } catch (error) {
      this.$toast.error("Error while authorizing.");
      return error;
    }
  },
  updateCurrency({ commit }, currency) {
    this.$cookies.set('currency', currency)
    commit("SET_CURRENCY", currency);
  }
};

export const mutations = {
  SET_TENANT: (state, payload) => (state.tenant = payload),
  SET_AUTHORIZED: (state, payload) => (state.isAuthorized = payload),
  SET_CURRENCY: (state, payload) => (state.currency = payload),
  SET_CURRENCY_TABLE: (state, payload) => state.currency_table = payload
};
