<template>
  <div>
    <div class="topnav"></div>
    <h1>Javabaum Finanzplaner</h1>
    <p v-if="what_to_calculate">
      Wie viel brauche ich um finanziell Unabhängig zu sein?
    </p>
    <p v-else>Wie lange brauche ich um finanziell Unabhängig zu sein?</p>
    <div class="main-form">
      <hr class="horizontal-ruler" />
      <form>
        <div class="form-group">
          <label for="current_wealth">Aktuelles Kapital (CHF)</label>
          <input
            @change="calculate"
            type="number"
            min="0"
            id="current_wealth"
            v-model="current_wealth"
          />
        </div>
        <div class="form-group">
          <label for="current_income">Aktuelles Einkommen (CHF)</label>
          <input
            @change="calculate"
            type="number"
            min="0"
            id="current_income"
            v-model="current_income"
          />
        </div>
        <div class="form-group">
          <label for="current_expense">Aktuelle Ausgaben (CHF)</label>
          <input
            @change="calculate"
            type="number"
            min="0"
            id="current_expense"
            v-model="current_expense"
          />
        </div>
        <div class="form-group">
          <label for="current_monthly_deposit"
            >Aktuelle monatliche Einzahlungen (CHF)</label
          >
          <input
            @change="calculate"
            type="number"
            min="0"
            id="current_monthly_deposit"
            v-model="current_monthly_deposit"
          />
        </div>
        <div class="form-group">
          <label for="current_stockvalue">Aktuelles Aktienkapital (CHF)</label>
          <input
            @change="calculate"
            type="number"
            min="0"
            id="current_stockvalue"
            v-model="current_stockvalue"
          />
        </div>
        <div class="form-group">
          <label for="expected_yearly_dividends_percent"
            >Erwartete jährliche Dividenden (%)</label
          >
          <input
            @change="calculate"
            type="number"
            min="0"
            id="expected_yearly_dividends_percent"
            v-model="expected_yearly_dividends_percent"
          />
        </div>
      </form>
      <div class="button-inline">
        <p class="button-group-items">Modus ändern:</p>
        <toggle-button
          class="button-group-items"
          v-model="what_to_calculate"
          @click="clear_input"
        />

        <button @click="calculate" class="button-group-items">
          <p class="button-group-items" v-if="what_to_calculate">
            Kapital Berechnen
          </p>
          <p class="button-group-items" v-else>Jahre Berechnen</p>
        </button>
      </div>

      <h3>{{ result }}</h3>
      <hr class="horizontal-ruler" />
    </div>
  </div>
</template>

<script>
import { ToggleButton } from "vue-js-toggle-button";
export default {
  name: "Home",
  components: {
    ToggleButton,
  },
  data() {
    return {
      current_wealth: 0,
      current_income: 0,
      current_expense: 0,
      current_monthly_deposit: 0,
      current_stockvalue: 0,
      expected_yearly_dividends_percent: 0,
      what_to_calculate: true,
      result: "",
    };
  },
  methods: {
    calculate() {
      if (this.what_to_calculate) {
        this.calculate_amount();
      } else {
        this.calculate_years();
      }
    },
    calculate_years() {
      var fire = this.calculate_fire();
      var yearly_income =
        this.current_income * 12 + this.current_monthly_deposit * 12;
      if(this.expected_yearly_dividends_percent == 0){
        var expected_dividend_value = 0;
      }
      else{
        var expected_dividend_value = this.current_stockvalue * this.expected_yearly_dividends_percent / 100;
      }
      yearly_income =
        yearly_income + expected_dividend_value;
      var years = fire / yearly_income;
      fire = Math.round((fire + Number.EPSILON) * 100) / 100;
      this.result = "Jahre benötigt: " + years;
    },
    calculate_amount() {
      var fire = this.calculate_fire();
      this.result = "Kapital benötigt: " + fire;
    },
    clear_input() {
      this.result = "";
    },
    calculate_fire() {
      var wealth = parseFloat(this.current_stockvalue) + parseFloat(this.current_wealth);
      var fire = this.current_expense;
      fire = fire * 12;
      fire = fire / 0.03;
      fire = fire - wealth;
      return fire;
    },
  },
  mounted() {
    this.$isLoading(true);
    var timeout = Math.floor(Math.random() * 1000) + 200;
    setTimeout(() => {
      this.$isLoading(false);
    }, timeout);
  },
};
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}
.main-form {
  margin: 2rem 4rem 2rem 4rem;
}
.horizontal-ruler {
  margin: 1rem;
}
.button-inline {
  display: flex;
  justify-content: center;
  align-items: center;
}
.button-group-items {
  margin: 0.5rem;
}
.topnav {
  overflow: hidden;
  margin-bottom: 2rem;
}

.topnav a {
  float: left;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
</style>
