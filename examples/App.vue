<template>
  <div id="app">
    <cityTable :data="data"></cityTable>
  </div>
</template>

<script>
import CityJson from "./city.json";
export default {
  name: "App",
  data() {
    const {
      data: { areaList: areaList },
    } = CityJson;
    return {
      data: areaList,
    };
  },
};
</script>

<style></style>
