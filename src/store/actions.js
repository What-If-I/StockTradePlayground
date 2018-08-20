export const loadData = ({ commit }) => {
  const state_raw = localStorage.getItem("state");
  if (state_raw) {
    const portfolio = JSON.parse(state_raw);
    commit("SET_PORTFOLIO", portfolio);
    commit("SET_STOCKS", portfolio.stocks);
  }
};
