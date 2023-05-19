<template>
  <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700" >
    <form>
      <div class="mt-6 flex items-center justify-end gap-x-6">
          <button v-on:click="fnUpdate" class="bg-amber-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">수정</button>
          <button v-on:click="fnDelete" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">삭제</button>
          <button v-on:click="fnList" class="bg-gray-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded mr-3">목록</button>
      </div>
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
              작성자
          </label>
          <div class="col-span-10">
              <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              >{{writer}}</p>
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
          <label for="createdAat" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              작성일시
          </label>
          <div class="col-span-10">
              <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              >{{createdAat}}</p>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="category" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              항목
          </label>
          <div class="col-span-10">
              <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              >{{category}}</p>
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
          <label for="drvAstart" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              사용일시
          </label>
          <div class="col-span-10">
              <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              >{{drvAstart}} ~ {{drvAend}}</p>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="beforeAmileage" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              주행 전 거리
          </label>
          <div class="col-span-10">
            <input
                    type="number"
                    name="beforeAmileage"
                    id="beforeAmileage"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=""
                    v-model.number="beforeAmileage"
                    required
            />
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="afterAmileage" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              주행 후 거리
          </label>
          <div class="col-span-10">
            <input
                    type="number"
                    name="afterAmileage"
                    id="afterAmileage"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=""
                    v-model.number="afterAmileage"
                    required
            />
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="actualAmileage" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              실 운행거리
          </label>
          <div class="col-span-10">
              <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              >{{actualAmileage}}</p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() { //변수생성
      return {
          requestBody: this.$route.query,
          drvNo: this.$route.query.drvNo,
          deptName: '소속부서',
          writer: '신청자',
          category: 'A차량',
          createdAat: '2022-02-11 23:24:00',
          reason: '운행사유',
          drvAstart: '2022-02-18 23:24:00',
          drvAend: '2022-02-19 23:24:00',
          beforeAmileage: ' ',
          afterAmileage: ' ',
          actualAmileage: ' ',
      }
    },
    computed: { //연산
      actualAmileage() {
          if(this.afterAmileage>0 && this.beforeAmileage>0 && this.afterAmileage > this.beforeAmileage)
        return this.afterAmileage - this.beforeAmileage;
          return '';
      },
    },
    filters:{ //단위 포맷팅
      numberWithCommas: function(value){
          if(!value) return '0';
          return value.toLocaleString() + ' km';
      }
    },
  //   mounted() { //document.ready = window.upload역할과 동일
  //       this.fnGetView()
  //   },
    methods: {
    fnGetView() {
      this.$axios.get(this.$serverUrl + '/car/' + this.drvNo, { //비동기 방식으로 요청한다.= ajax
        params: this.requestBody
      }).then((res) => {
        this.deptName = res.data.deptName
        this.writer = res.data.writer
        this.category = res.data.category
        this.createdAat = res.data.createdAat
        this.reason = res.data.reason
        this.drvAstart = res.data.drvAstart
        this.drvAend = res.data.drvAend
        this.beforeAmileage = res.data.beforeAmileage
        this.afterAmileage = res.data.afterAmileage
        this.actualAmileage = res.data.actualAmileage
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
      fnList() {
        delete this.requestBody.drvNo
        this.$router.push({
            path: './CarUseList',
            query: this.requestBody
        })
      },
      fnUpdate() {
        //글 수정이므로 idx를 전송함 : requestBody에 idx가 담겨있음. 이걸 query로 보냄
        this.$router.push({
            path: './CarUseWrite',
            query: this.requestBody
        })
      },
      fnDelete() {
        if (!confirm("삭제하시겠습니까?")) return //취소 클릭시

        this.$axios.delete(this.$serverUrl + '/board/' + this.idx, {}) //확인 클릭시
            .then(() => {
                alert('삭제되었습니다.')
                this.fnList();
            }).catch((err) => {
            console.log(err);
            this.fnList(); //test용
        })
      }
    }
  };
</script>
