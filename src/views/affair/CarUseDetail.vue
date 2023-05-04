<template>
  <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700" >
    <form>
      <div class="mt-6 flex items-center justify-end gap-x-6">
          <button type="submit" v-on:click="fnUpdate" class="rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300-600">수정</button>
          <button type="button" v-on:click="fnDelete" class="rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700-600">삭제</button>
          <button type="button" v-on:click="fnList" class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700-600">목록</button>
      </div>
      <div class="space-y-5">
        <div class="grid grid-cols-12 gap-4">
          <label for="writer" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              작성자
          </label>
          <div class="col-span-10">
            <input
                    type="text"
                    name="writer"
                    id="writer"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=""
                    v-model="writer"
                    required
                    readonly
            />
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
            <label for="dept_name" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                소속부서
            </label>
            <div class="col-span-10">
                <input
                        type="text"
                        name="dept_name"
                        id="dept_name"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                        placeholder=""
                        v-model="dept_name"
                        required
                        readonly
                />
            </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="created_at" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              작성일시
          </label>
          <div class="col-span-10">
            <input
                    type="datetime-local"
                    name="created_at"
                    id="created_at"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=""
                    v-model="created_at"
                    required
                    readonly
            />
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="category" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              항목
          </label>
          <div class="col-span-10">
              <select
                      type="text"
                      name="category"
                      id="category"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                      v-model="category"
                      required
                      aria-readonly="true"
              >
                  <option disabled value="">-선택-</option>
                  <option value="A차량">A차량</option>
                  <option value="B차량">B차량</option>
                  <option value="C차량">C차량</option>
              </select>
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
          <label for="drv_start" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              사용시작일시
          </label>
          <div class="col-span-10">
            <input
                    type="datetime-local"
                    name="drv_start"
                    id="drv_start"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=""
                    v-model="drv_start"
                    required
            />
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="drv_end" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              사용종료일시
          </label>
          <div class="col-span-10">
            <input
                    type="datetime-local"
                    name="drv_end"
                    id="drv_end"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=""
                    v-model="drv_end"
                    required
            />
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="before_mileage" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              주행 전 거리
          </label>
          <div class="col-span-10">
            <input
                    type="number"
                    name="before_mileage"
                    id="before_mileage"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=""
                    v-model.number="before_mileage"
                    required
            />
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="after_mileage" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              주행 후 거리
          </label>
          <div class="col-span-10">
            <input
                    type="number"
                    name="after_mileage"
                    id="after_mileage"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=""
                    v-model.number="after_mileage"
                    required
            />
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="actual_mileage" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              실 운행거리
          </label>
          <div class="col-span-10">
            <input
                    type="number"
                    name="actual_mileage"
                    id="after_mileage"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=""
                    v-model.number="actual_mileage"
                    required
                    readonly
            />
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
          idx: this.$route.query.idx,
          drv_id: 1,
          dept_name: '소속부서',
          writer: '신청자',
          category: 'A차량',
          created_at: '2022-02-11 23:24:00',
          reason: '운행사유',
          drv_start: '2022-02-18 23:24:00',
          drv_end: '2022-02-19 23:24:00',
          before_mileage: 0,
          after_mileage: 0,
          actual_mileage: 0,
      }
    },
    computed: { //연산
      actual_mileage() {
          if(this.after_mileage>0 && this.before_mileage>0 && this.after_mileage > this.before_mileage)
        return this.after_mileage - this.before_mileage;
          return 0;
      },
    },
    filters:{ //단위 포맷팅
      numberWithCommas: function(value){
          if(!value) return '0';
          return value.toLocaleString() + ' km';
      }
    }

  //   mounted() { //document.ready = window.upload역할과 동일
  //       this.fnGetView()
  //   },
  //   fnGetView() {
  //     this.$axios.get(this.$serverUrl + '/board/' + this.idx, { //비동기 방식으로 요청한다.= ajax
  //       params: this.requestBody
  //     }).then((res) => {
  //       this.title = res.data.title
  //       this.author = res.data.author
  //       this.contents = res.data.contents
  //       this.created_at = res.data.created_at
  //     }).catch((err) => {
  //       if (err.message.indexOf('Network Error') > -1) {
  //           alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
  //       }
  //     })
  //   },
  //   methods: {
  //     fnList() {
  //       delete this.requestBody.idx
  //       this.$router.push({
  //           path: './list',
  //           query: this.requestBody
  //       })
  //     },
  //     fnUpdate() {
  //       //글 수정이므로 idx를 전송함 : requestBody에 idx가 담겨있음. 이걸 query로 보냄
  //       this.$router.push({
  //           path: './write',
  //           query: this.requestBody
  //       })
  //     },
  //     fnDelete() {
  //       if (!confirm("삭제하시겠습니까?")) return //취소 클릭시
  //
  //       this.$axios.delete(this.$serverUrl + '/board/' + this.idx, {}) //확인 클릭시
  //           .then(() => {
  //               alert('삭제되었습니다.')
  //               this.fnList();
  //           }).catch((err) => {
  //           console.log(err);
  //       })
  //     }
  //
  //   }
  };
</script>
