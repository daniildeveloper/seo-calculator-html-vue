new Vue({
  el: '#calculator',
  data: {
    keywords: 500,
    semanticCore: false,
    siteStructure: false,
    price: 500 * 7,
    singleKeywordPrice: 7,
    simplePrice: 500 * 7
  },
  methods: {
    calculatePrice() {

    }
  },
  watch: {
    'keywords': function (val, oldVal) {
      // value rounding
      var addable = 0 + (val * this.singleKeywordPrice) - (oldVal * this.singleKeywordPrice);
      console.log(addable);
      this.price = this.price + addable;
      this.simplePrice = this.simplePrice + addable;

      window.bgR(val / 100);
      window.bgL(val / 100);


    },
    'semanticCore': function (val, oldVal) {

      if (val) {
        this.price += 12000;
      } else {
        this.price -= 12000;
      }
    },
    'siteStructure': function (val, oldVal) {
      if (val) {
        this.price += 2000;
      } else {
        this.price -= 2000;
      }
    }
  }
})
