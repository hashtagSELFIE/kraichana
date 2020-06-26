<template>
  <div class="shopresult">
    <div class="wingblank">
      <div class="box">
        <div>
          <AppLocationIcon></AppLocationIcon>
          <div class="detail">
            <h2 class="alertText">เช็คอินแล้ว</h2>
            <div class="datetime">
              <span
                >{{ currrent_time.getDate() }}
                {{ MONTHS[currrent_time.getMonth()] }}
                {{ currrent_time.getFullYear() + 543 }} เวลา
              </span>
              <span class="time"
                >{{ formatNumber(currrent_time.getHours()) }}:{{
                  formatNumber(currrent_time.getMinutes())
                }}</span
              >
              <span> น.</span>
            </div>
          </div>
          <div class="location">
            <span>{{ getDetail.shopName }}</span>
          </div>
        </div>
        <div class="whitespace"></div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLocationIcon from "@/components/AppLocationIcon";
import storeGetter from "@/store/getter.js";
const MONTHS = [
  "ม.ค.",
  "ก.พ.",
  "มี.ค.",
  "ม.ย.",
  "พ.ค.",
  "มิ.ย.",
  "ก.ค.",
  "ส.ค.",
  "ก.ย.",
  "ต.ค.",
  "พ.ย.",
  "ธ.ค."
];

export default {
  name: "ShopResult",
  components: {
    AppLocationIcon
  },
  data() {
    return {
      MONTHS,
      currrent_time: new Date()
    };
  },
  computed: {
    ...storeGetter
  },
  methods: {
    formatNumber(num) {
      return (num < 10 ? "0" : "") + num;
    }
  }
};
</script>

<style lang="scss" scoped>
.shopresult {
  background: #f5f5f9;
  height: calc(100vh - 52px);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
}

.wingblank {
  margin-left: 15px;
  margin-right: 15px;
  background: white;
}

.box {
  padding: 15px 15px;
  height: 100%;
  box-sizing: border-box;
}

.checkin {
  margin-bottom: 15px;
}

.alertText {
  margin-bottom: 0px;
  line-height: 1.15;
  font-size: 2.2em;
  margin-top: 0;
  color: rgb(34, 34, 34);
}

.detail {
  margin-bottom: 15px;
}

.datetime {
  color: rgb(68, 68, 68);
  font-weight: 400;
  font-size: 14px;
}

.time {
  font-weight: 600;
  color: rgb(34, 34, 34);
}

.location {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 14px;
}

.whitespace {
  height: 15px;
}
</style>
