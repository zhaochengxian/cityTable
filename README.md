# city-table

<p>This component returns the provincial and urban data of a tree from the back end, which is displayed in the form of a table. In addition, the provincial and urban areas are multi selected, and vue2.0 is supported at the same time 0 and vue3 0 If you use Vue version is vue2 0, you need to install the corresponding version 1.0.5 of @ banyinanying / city table. If you use vue3.0 0. You need to install version 3.0.0 corresponding to @ banyinanying / city table</p>


## how to use （vue3.0）

```
yarn add @banyinbanying/city-table or npm i @banyinbanying/city-table 
```
## how to use （vue2.0）

```
yarn add @banyinbanying/city-table@1.0.5 or npm i @banyinbanying/city-table@1.0.5
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


### Matching selection components（Multiple-city-react）示范图片
![image](https://github.com/zhaochengxian/cityTable/blob/9d0e89436fa72039a5d2d7c1f61b5da8ebc087c5/examples/assets/1.png)

### the code and the demo of Multiple-city-react 

[Configuration Reference](https://github.com/zhaochengxian/multiple-citys-react).

