<template>
  <div class="table" :style="{ fontSize: fontSize + 'px' }">
    <div>
      <div class="tr">
        <div
          class="th"
          v-for="item in tableThs"
          :key="item.name"
          :style="{
            fontSize: fontSize + 'px',
            padding: padding + 'px' + ' 0px',
            color: theadColor,
          }"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="tbody" :style="{ color: tbodyColor }">
        <div class="provice" v-for="item in data" :key="item.area">
          <div class="provic-name">{{ item.area }}</div>
          <div class="city-wrapper">
            <div
              class="city"
              v-for="value in item.sonAreaList"
              :key="value.area"
            >
              <div class="city-name">{{ value.area }}</div>
              <div class="area-wrapper">
                <div
                  class="area"
                  v-for="val in value.sonAreaList"
                  :key="val.area"
                >
                  <div
                    class="area-name"
                    :style="{
                      fontSize: fontSize + 'px',
                      padding: padding + 'px',
                    }"
                  >
                    {{ val.area }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cityTable",
  props: {
    data: Array,
    padding: {
      type: Number,
      default: 5,
    },
    fontSize: {
      type: String,
      default: "14",
    },
    theadColor: {
      type: String,
      default: "#777777",
    },
    tbodyColor: {
      type: String,
      default: "#999999",
    },
  },
  data() {
    return {
      tableThs: [
        {
          name: "省",
        },
        {
          name: "市",
        },
        {
          name: "区",
        },
      ],
    };
  },
  methods: {
    getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
          return pair[1];
        }
      }
      return false;
    },
  },
  created() {
    this.data.map((item) => {
      if (item.sonAreaList.length === 0) {
        item.sonAreaList = [
          {
            area: "全部",
            sonAreaList: [{ area: "全部", sonAreaList: [] }],
          },
        ];
      } else if (item.sonAreaList.length !== 0) {
        item.sonAreaList = item.sonAreaList.map((value) => {
          if (value.sonAreaList.length === 0) {
            value.sonAreaList = [{ area: "全部", sonAreaList: [] }];
          }
          return value;
        });
      }

      return item;
    });
  },
};
</script>

<style lang="scss" scoped>
.table {
  min-height: 100%;
  background: #ffffff;
  background: #ffffff;
  overflow: scroll;
  .tr {
    display: flex;
    border: 1px solid #beb7b7;
  }
  .th {
    font-weight: 600;
    width: calc(33vw - 8px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .th:nth-child(1),
  .th:nth-child(2) {
    border-right: 1px solid #beb7b7;
  }
  .tbody {
    border-left: 1px solid #beb7b7;
    border-right: 1px solid #beb7b7;
    .city-wrapper {
      display: flex;
      flex-wrap: wrap;
      width: calc(66vw - 16px);
    }
    .area-wrapper {
      width: calc(33vw - 8px);
      display: flex;
      flex-wrap: wrap;
    }
    .provic-name {
      border-bottom: 1px solid #beb7b7;
    }
    .provic-name,
    .city-name {
      border-right: 1px solid #beb7b7;
    }
    .provice,
    .city {
      display: flex;
    }
    .city .city-name {
      border-bottom: 1px solid #beb7b7;
    }
    .area-wrapper .area-name {
      border-bottom: 1px solid #beb7b7;
    }
    .city-name,
    .provic-name,
    .area-wrapper .area-name {
      width: calc(33vw - 8px);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
