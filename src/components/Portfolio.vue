<template>
<div>
  <p class="page-name">STOCKS</p>
    <div class="stocks">

      <stock-card v-for="stock in stocks"
        :key="stock.id"
        class="card" 
        cardType="sell" 
        :stock="stock"
        >{{stock.name}}</stock-card>

    </div>
</div>
</template>

<script>
import StockCard from "./StockCard";
export default {
  data() {
    return {};
  },
  components: {
    StockCard
  },
  computed: {
    stocks() {
      return this.$store.getters.stockPortfolio;
    }
  }
};
</script>

<style scoped>
.card {
  width: 30%;
  margin-bottom: 25px;
}
.page-name {
  margin-bottom: 30px;
}
.stocks {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>