<template>
  <div id="app">
    <trade-header id="header"></trade-header>
    <div class="content">
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import "reset-css";
import TradeHeader from "./components/Header";
import Home from "./components/Home";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    TradeHeader,
    Home
  },
  created() {
    this.$store.dispatch("initStocks");
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#header {
  width: 50vw;
  margin: auto;
}
.content {
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  padding: 100px;
  box-shadow: 2px 3px 8px 0px #dcdcdc;
}

.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-ouy {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
