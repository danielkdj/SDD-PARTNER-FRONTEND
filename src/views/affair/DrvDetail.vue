<template>
  <HomeLink :homeLink="homeLink"/>
  <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700" >
    <div class="mt-6 flex items-center justify-end gap-x-6">
        <button v-on:click="fnUpdate" class="bg-amber-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">수정</button>
        <button v-on:click="fnDelete" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">삭제</button>
        <button v-on:click="fnList" class="bg-gray-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded mr-3">목록</button>
    </div>
    <form>
      <div class="space-y-5">
        <div class="grid grid-cols-12 gap-4">
          <label for="drvNo" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              관리번호
          </label>
          <div class="col-span-10">
              <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              >{{drvNo}}</p>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="writer" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              운전자
          </label>
          <div class="col-span-10">
              <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              >{{driver}}</p>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
            <label for="deptName" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                소속부서
            </label>
            <div class="col-span-10">
                <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                >{{deptName}}</p>
            </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="category" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              항목
          </label>
          <div class="col-span-10">
              <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              >{{car}}</p>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="reason" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              운행사유
          </label>
          <div class="col-span-10">
              <input
                      type="text"
                      name="reason"
                      id="reason"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                      placeholder=""
                      v-model="reason"
                      required
              />
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="drvStart" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              사용일시
          </label>
          <div class="col-span-10">
              <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              >{{drvStart}} ~ {{drvEnd}}</p>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="beforeMileage" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              주행 전 거리
          </label>
          <div class="col-span-10">
            <input
                    type="number"
                    name="beforeMileage"
                    id="beforeMileage"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=""
                    v-model.number="beforeMileage"
                    required
            />
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="afterMileage" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              주행 후 거리
          </label>
          <div class="col-span-10">
            <input
                    type="number"
                    name="afterMileage"
                    id="afterMileage"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=""
                    v-model.number="afterMileage"
                    required
            />
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="actualMileage" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              실 운행거리
          </label>
          <div class="col-span-10">
              <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              >{{actualMileage }}</p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import HomeLink from "@/components/HomeLink.vue";
  import moment from "moment";
  export default {
    components: {HomeLink},
    data() { //변수생성
      return {
        //link 변수
        homeLink: {
          name1: "Affair",
          name2: "DrvList",
          name3: "DrvDetail",
          link1: "/Affairs",
          link2: "/DrvList",
          link3: "/DrvDetail",
        },
          requestBody: this.$route.query,
          drvNo: this.$route.query.drvNo,
          deptName: '소속부서',
          driver: '신청자',
          car: 'A차량',
          reason: '운행사유',
          documentNo: '',
          drvStart: '2023-02-18 23:24:00',
          drvEnd: '2023-02-19 23:24:00',
          beforeMileage: '',
          afterMileage: '',
          actualMileage: '',
      }
    },
    computed: { //연산
      actualMileage() {
          if(this.afterMileage>0 && this.beforeMileage>0 && this.afterMileage > this.beforeMileage)
        return this.afterMileage - this.beforeMileage;
          return '';
      },
    },
    // filters:{ //단위 포맷팅
    //   numberWithKm: function(value){
    //       if(!value) return '';
    //     return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //   }
    // },
    methods: {
    fnGetView() {
      this.$axios.get(this.$serverUrl + '/drv/' + this.drvNo, {
        params: this.requestBody
      }).then((res) => {
        this.deptName = res.data.deptName
        this.driver = res.data.driver
        this.car = res.data.car
        this.reason = res.data.reason
        this.drvStart = res.data.drvStart
        this.drvEnd = res.data.drvEnd
        this.beforeMileage = res.data.beforeMileage
        this.afterMileage = res.data.afterMileage
        this.actualMileage = res.data.actualMileage
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
      fnList() {
        delete this.requestBody.drvNo
        this.$router.push({
            path: './DrvList',
            query: this.requestBody
        })
      },
      fnUpdate() {
        if (!confirm("수정하시겠습니까?")) return //취소 클릭시

        this.$axios.patch(this.$serverUrl + '/drv/' +this.drvNo, {
          "afterMileage": this.afterMileage,
          "beforeMileage": this.beforeMileage,
        }) //확인 클릭시
            .then((res) => {
                alert('수정되었습니다.')
                this.fnGetView(res.data().drvNo);
            }).catch((err) => {
            console.log(err);
        })
      }
      ,fnDelete() {
        if (!confirm("삭제하시겠습니까?")) return //취소 클릭시

        this.$axios.delete(this.$serverUrl + '/drv', {}) //확인 클릭시
            .then(() => {
                alert('삭제되었습니다.')
                this.fnList();
            }).catch((err) => {
            console.log(err);
        })
      }
    },
      mounted() {
          this.fnGetView()
      },
  };
</script>
