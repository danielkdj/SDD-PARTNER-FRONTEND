<template>
  <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700" >
    <form>
      <div class="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" v-on:click="fnList" class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300-600">작성취소</button>
          <button type="button" v-on:click="fnSave" class="rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700-600">저장</button>
      </div>
      <div class="space-y-5">
        <div class="grid grid-cols-12 gap-4">
          <label for="drv_no" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              관리번호
          </label>
          <div class="col-span-10">
            <input
                    type="text"
                    name="drv_no"
                    id="drv_no"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=""
                    v-model="drv_no"
                    required
                    readonly
            />
          </div>
        </div>
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
              <input
                      type="text"
                      name="created_at"
                      id="created_at"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                      placeholder=""
                      v-model="category"
                      required
                      readonly
              />
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
          drv_no: this.$route.query.drv_no,
          dept_name: '소속부서',
          writer: '신청자',
          category: 'A차량',
          created_at: '2022-02-11 23:24:00',
          reason: '운행사유',
          drv_start: '2022-02-18 23:24:00',
          drv_end: '2022-02-19 23:24:00',
          before_mileage: '',
          after_mileage: '',
          actual_mileage: '',
      }
    },
    computed: { //연산
      actual_mileage() {
          if(this.after_mileage>0 && this.before_mileage>0 && this.after_mileage > this.before_mileage)
        return this.after_mileage - this.before_mileage;
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
        // fnGetView() {
        //   this.$axios.get(this.$serverUrl + '/car/' + this.drv_no, { //비동기 방식으로 요청한다.= ajax
        //     params: this.requestBody
        //   }).then((res) => {
        //     this.dept_name = res.data.dept_name
        //     this.writer = res.data.writer
        //     this.category = res.data.category
        //     this.created_at = res.data.created_at
        //     this.reason = res.data.reason
        //     this.drv_start = res.data.drv_start
        //     this.drv_end = res.data.drv_end
        //     this.before_mileage = res.data.before_mileage
        //     this.after_mileage = res.data.after_mileage
        //     this.actual_mileage = res.data.actual_mileage
        //   }).catch((err) => {
        //     if (err.message.indexOf('Network Error') > -1) {
        //         alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        //     }
        //   })
        // },
        fnList() {
            delete this.requestBody.edu_no
            this.$router.push({
                path: './CarUseList',
                query: this.requestBody
            })
        },
        fnSave() {
            let apiUrl = this.$serverUrl + '/carUse'
            this.form = {
                "dept_name": this.dept_name,
                "writer": this.writer,
                "category": this.category,
                "created_at": this.created_at,
                "reason": this.reason,
                "drv_start": this.drv_start,
                "drv_end": this.drv_end,
                "before_mileage": this.before_mileage,
                "after_mileage": this.after_mileage,
                "actual_mileage": this.actual_mileage,
            }

            if (this.edu_no === undefined) {
                //INSERT
                this.$axios.post(apiUrl, this.form)
                    .then((res) => {
                        alert('글이 저장되었습니다.')
                        this.fnView(res.data.idx)
                    }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
                })
            } else {
                //UPDATE
                this.$axios.patch(apiUrl, this.form)
                    .then((res) => {
                        alert('글이 저장되었습니다.')
                        this.fnView(res.data.idx)
                    }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
                })
            }
        }
    }
  };
</script>
