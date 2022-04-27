<template>
  <div>
    <div class="topnav">
      <a>JAVABAUM Vermögenskalkulator</a>
      
      <a href="#about">About</a>
    </div>
    <h1>Finanzplaner</h1>
    <p>Wie lange brauche ich um finanziell Unabhängig zu sein?</p>
    <hr />
    <div class="main-form">
      <form>
        <div class="form-group">
          <label for="current_wealth">Aktuelles Kapital</label>
          <input id="current_wealth" v-model="current_wealth" />
        </div>
        <div class="form-group">
          <label for="current_income">Aktuelles Einkommen</label>
          <input id="current_income" v-model="current_income" />
        </div>
        <div class="form-group">
          <label for="current_expense">Aktuelle Ausgaben</label>
          <input id="current_expense" v-model="current_expense" />
        </div>
        <div class="form-group">
          <label for="current_montly_deposit"
            >Aktuelle monatliche Einzahlungen</label
          >
          <input id="current_montly_deposit" v-model="current_montly_deposit" />
        </div>
        <div class="form-group">
          <label for="current_stockvalue">Aktuelles Aktienkapital</label>
          <input id="current_stockvalue" v-model="current_stockvalue" />
        </div>
        <div class="form-group">
          <label for="expected_yearly_dividends_percent"
            >Erwartete jährliche Dividenden</label
          >
          <input
            id="expected_yearly_dividends_percent"
            v-model="expected_yearly_dividends_percent"
          />
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "Home",
  data() {
    return {
      current_wealth: 0,
      current_income: 0,
      current_expense: 0,
      current_monthly_deposit: 0,
      current_stockvalue: 0,
      expected_yearly_dividends_percent: 0,
    };
  },
  methods: {},
};
</script>


<style scoped>
.form-group {
  margin-bottom: 1rem;
}
.main-form {
  margin-top: 2rem;
}
.topnav {
  overflow: hidden;
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