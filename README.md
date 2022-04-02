# city-table

## how to use

```
yarn add @banyinbanying/city-table or npm i @banyinbanying/city-table
```

### then you add this two line in vue main.js

```
import CityTable from "../packages/index";
Vue.use(CityTable);
```

### after you can use it in component like this

```
<template>
  <div id="app">
    <cityTable></cityTable>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style></style>

```

### the code and the demo in github

[Configuration Reference](https://github.com/zhaochengxian/cityTable).

### 示例图片

![image](https://github.com/zhaochengxian/cityTable/blob/16250a33d0dec558739b20ebf475d53008e33f93/examples/assets/demo-img.jpeg)

### Props

The component provides the following variables

| Name       | Type   | Default Value | Description |
| ---------- | ------ | ------------- | ----------- |
| data       | Array  | tree          | -           |
| padding    | Number | 5px           | -           |
| fontSize   | String | 14px          | -           |
| theadColor | String | #777777       | -           |
| tbodyColor | String | #999999       | -           |
