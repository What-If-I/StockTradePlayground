<template>
    <div class="card">
        <div class="card-head" v-if="cardType==='buy'">
            <p><slot></slot></p>
            <p class="price">{{stock.price}} $</p>
        </div>
        <div class="card-head" v-else-if="cardType==='sell'">
            <p><slot></slot></p>
            <p>Items: {{stock.quantity}}</p><p class="price">{{stock.price}} $</p>
        </div>
    <div class="content">
        <input type="number" placeholder="Quantity" v-model.number="quantity">


        <button 
        v-if="cardType==='buy'"
        class="buy"
        :disabled="quantity <= 0 || !isDigit(quantity) || !canAfford(stock.price, quantity)"
         @click="buyStock">
         Buy</button>

        <button 
        v-else-if="cardType==='sell'"
        class="sell"
        :disabled="quantity <= 0 || !isDigit(quantity) || !isEnough(stock.quantity, quantity)"
         @click="sellStock">
         Sell</button>

    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: this.stock.quantity
    };
  },
  methods: {
    isDigit(number) {
      return Number.isInteger(Number(number));
    },
    isEnough(quantity, wantToBuy) {
      return quantity >= wantToBuy;
    },
    canAfford(price, quantity) {
      const cost = price * quantity;
      return this.$store.getters.funds >= cost;
    },
    sellStock() {
      const order = {
        id: this.stock.id,
        price: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("sellStock", order);
    },
    buyStock() {
      const order = {
        id: this.stock.id,
        price: this.stock.price,
        quantity: this.quantity
      };
      console.log(order);
      this.$store.dispatch("buyStock", order);
    }
  },
  props: {
    handleButton: Function,
    disableCheck: Function,
    cardType: {
      type: String,
      default: "buy"
    },
    cardName: {
      type: String,
      default: ""
    },
    stock: {
      id: Number,
      price: Number,
      quantity: Number
    }
  }
};
</script>

<style scoped>
button {
  display: block;
  border: 1px solid grey;
  border-left: unset;
  border-radius: 0 5px 5px 0;
  padding: 8px 20px;
  font-size: 1rem;
}
button:hover {
  color: rgb(255, 255, 255);
}
button:disabled {
  cursor: not-allowed;
}
input {
  border-radius: 5px 0 0 5px;
  border: 1px solid grey;
  padding-left: 10px;
}
.card {
  border: 1px solid grey;
  border-radius: 3px;
}
.card-head {
  width: 100%;
  display: flex;
  border-bottom: 1px solid black;
  background-color: hsla(219, 100%, 70%, 1);
}
.card-head > p {
  padding: 10px;
  color: hsla(219, 100%, 99%, 1);
}
.content {
  display: flex;
  justify-content: center;
  padding: 20px 0 20px 0px;
}
.content > input {
  margin-left: 5px;
}
.price {
  margin: 0px 10px 0 auto;
}
button.sell {
  background-color: #f76969;
  color: hsla(0, 99%, 94%, 1);
}
button.buy {
  background-color: rgb(108, 204, 102);
  color: hsla(116, 99%, 95%, 1);
}
</style>