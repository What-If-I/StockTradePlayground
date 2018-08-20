<template>
  <div class="header">
      <span class="head-name"><router-link to="/">Stock Trade</router-link></span>
      <ul class="menu menu-left">
          <router-link to="portfolio" tag="li" active-class="active" exact><a>Portfolio</a></router-link>
          <router-link to="stocks" tag="li" active-class="active" exact><a>Stocks</a></router-link>
      </ul>
      <ul class="menu menu-right">
          <li><a href="#end" @click="endDay">End Day</a></li>
          <li>
            <ul class="dropdown">
                Save &amp; Load
                <div class="dropdown-conent">
                <li><button @click="saveProgress">Save</button></li>
                <li><button @click="loadProgress">Load</button></li>
                </div>
            </ul>
          </li>
          <li>Funds: {{ funds | currency }}</li>
      </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["randomizeStocks", "loadData"]),
    endDay() {
      this.randomizeStocks();
    },
    saveProgress() {
      const state = {
        funds: this.funds,
        stocks: this.$store.getters.stocks,
        stockPortfolio: this.$store.getters.stockPortfolio
      };
      localStorage.setItem("state", JSON.stringify(state));
    },
    loadProgress() {
      this.loadData();
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<style>
button {
  border: none;
  padding: 5px;
  background-color: #f3f3f3;
}
button:hover {
  color: darkgrey;
  cursor: pointer;
}
.header {
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  padding: 15px;
}
.head-name > a {
  font-size: 1.4rem;
}
.head-name > a,
.head-name > a:visited {
  color: black;
}
ul,
li {
  display: inline;
}
a {
  text-decoration: unset;
  color: grey;
}
:visited {
  color: grey;
}
li.active > a {
  color: black;
}
.menu-left {
  padding-left: 10px;
  padding-right: 10px;
}
.menu-right {
  margin-left: auto;
}
.menu li {
  margin-left: 10px;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown > .dropdown-conent {
  display: none;
  position: absolute;
  background-color: #f3f3f3;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
}
.dropdown:hover > .dropdown-conent {
  display: block;
}
</style>
