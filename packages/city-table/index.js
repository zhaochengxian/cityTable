import cityTable from "./src/city-table.vue";

cityTable.install = function (Vue) {
  Vue.component(cityTable.name, cityTable);
};

export default cityTable;
