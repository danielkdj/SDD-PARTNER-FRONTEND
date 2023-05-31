<template>
  <HomeLink :homeLink="homeLink"/>
  <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700 h-screen" >
    <h2 class="font-bold text-base text-gray-800 dark:text-gray-200" id="title">{{year}}Year {{quarter}}Q 이수내역 총인원</h2>
      <div class="mt-6 flex items-center justify-end gap-x-6">
          <div class="flex min-h-full flex-col lg:px-3">
              <input
                      type="number" min="1" max="9999" step="1"
                      class="block py-2.5 px-0 w-20 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                      placeholder="  -연도-"
                      v-model.number="year" />
          </div>
          <div class="flex min-h-full flex-col lg:px-3">
              <input
                      type="number" min="0" max="5" step="1"
                      class="block py-2.5 px-0 w-20 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                      placeholder="  -분기-"
                      v-model.number="quarter"/>
          </div>
          <select v-model="eduId"
                  class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
          >
              <option value="0">-항목구분-</option>
              <option value="1">산업안전보건교육</option>
              <option value="2">성희롱예방교육</option>
              <option value="3">장애인인식개선교육</option>
              <option value="4">개인정보보호교육</option>
              <option value="5">퇴직연금교육</option>
          </select>
          <button v-on:click="fnAdd()" class="bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded mr-3">이수목록 추가</button>
      </div>
  <!-- card  -->
    <div class="wrapper-card grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-2 mt-5">
      <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex">
        <div class="p-2 max-w-sm">
          <div class="bg-blue-200 rounded-full w-14 h-14 text-lg p-3 text-blue-600 mx-auto">
            <span class="">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="30px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path fill="currentColor" d="M10 16V8a2 2 0 0 1 2-2h9V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-1h-9a2 2 0 0 1-2-2zm3-8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h9V8h-9zm3 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
              </svg>
            </span>
          </div>
          </div>
          <div class="block p-2 w-full" v-on:click="fnGetList()">
              <p class="font-bold text-base text-gray-800 dark:text-gray-200 cursor-pointer">
                  성희롱예방
              </p>
              <h3 class="font-normal text-blue-900 text-md mt-1">{{noneE2Q0}}/{{countE2Q0}}</h3>
<!--              <p class="font-normal text-blue-900 place-self-end justify-end mt-1" v-on:click="fnAdd(2,0)">➕</p>-->
          </div>
      </div>

      <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex">
        <div class="p-2 max-w-sm">
          <div class="bg-blue-200 rounded-full w-14 h-14 text-lg p-3 text-blue-600 mx-auto">
            <span class="">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="30px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path fill="currentColor" d="M10 16V8a2 2 0 0 1 2-2h9V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-1h-9a2 2 0 0 1-2-2zm3-8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h9V8h-9zm3 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
              </svg>
            </span>
          </div>
        </div>
          <div class="block p-2 w-full" v-on:click="fnGetList()">
            <p class="font-bold text-base text-gray-800 dark:text-gray-200 cursor-pointer">
                장애인인식개선
            </p>
            <h3 class="font-normal text-blue-900 text-md mt-1">{{noneE3Q0}}/{{countE3Q0}}</h3>
<!--            <p class="font-normal text-blue-900 text-left mt-1" v-on:click="fnAdd(3,0)">➕</p>-->

        </div>
      </div>
      <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex">
          <div class="p-2 max-w-sm">
              <div class="bg-blue-200 rounded-full w-14 h-14 text-lg p-3 text-blue-600 mx-auto">
          <span class="">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="30px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path fill="currentColor" d="M10 16V8a2 2 0 0 1 2-2h9V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-1h-9a2 2 0 0 1-2-2zm3-8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h9V8h-9zm3 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
            </svg>
          </span>
              </div>
          </div>
          <div class="block p-2 w-full" v-on:click="fnGetList()">
              <p class="font-bold text-base text-gray-800 dark:text-gray-200 cursor-pointer">
                  개인정보보호
              </p>
              <h3 class="font-normal text-blue-900 text-md mt-1">{{noneE4Q0}}/{{countE4Q0}}</h3>
          </div>
      </div>
      <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex">
          <div class="p-2 max-w-sm">
              <div class="bg-blue-200 rounded-full w-14 h-14 text-lg p-3 text-blue-600 mx-auto">
          <span class="">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="30px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path fill="currentColor" d="M10 16V8a2 2 0 0 1 2-2h9V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-1h-9a2 2 0 0 1-2-2zm3-8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h9V8h-9zm3 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
            </svg>
          </span>
              </div>
          </div>
          <div class="block p-2 w-full" v-on:click="fnGetList()">
              <p class="font-bold text-base text-gray-800 dark:text-gray-200 cursor-pointer">
                  <a v-on:click="fnAdd(1,0)"> 퇴직연금</a>
              </p>
              <h3 class="font-normal text-blue-900 text-md mt-1">{{noneE5Q0}}/{{countE5Q0}}</h3>
          </div>
      </div>
      <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex">
          <div class="p-2 max-w-sm">
              <div class="bg-blue-200 rounded-full w-14 h-14 text-lg p-3 text-blue-600 mx-auto">
          <span class="">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="30px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path fill="currentColor" d="M10 16V8a2 2 0 0 1 2-2h9V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-1h-9a2 2 0 0 1-2-2zm3-8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h9V8h-9zm3 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
            </svg>
          </span>
              </div>
          </div>
          <div class="block p-2 w-full" v-on:click="fnGetList()">
              <p class="font-bold text-base text-gray-800 dark:text-gray-200 cursor-pointer">
                  산업안전보건 1Q
              </p>
              <h3 class="font-normal text-blue-900 text-md mt-1">{{noneE1Q1}}/{{countE1Q1}}</h3>
          </div>
      </div>
      <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex">
          <div class="p-2 max-w-sm">
              <div class="bg-blue-200 rounded-full w-14 h-14 text-lg p-3 text-blue-600 mx-auto">
        <span class="">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="30px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <path fill="currentColor" d="M10 16V8a2 2 0 0 1 2-2h9V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-1h-9a2 2 0 0 1-2-2zm3-8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h9V8h-9zm3 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
          </svg>
        </span>
              </div>
          </div>
          <div class="block p-2 w-full" v-on:click="fnGetList()">
              <p class="font-bold text-base text-gray-800 dark:text-gray-200 cursor-pointer">
                  산업안전보건 2Q
              </p>
              <h3 class="font-normal text-blue-900 text-md mt-1">{{noneE1Q2}}/{{countE1Q2}}</h3>
          </div>
      </div>
      <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex">
          <div class="p-2 max-w-sm">
              <div class="bg-blue-200 rounded-full w-14 h-14 text-lg p-3 text-blue-600 mx-auto">
        <span class="">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="30px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <path fill="currentColor" d="M10 16V8a2 2 0 0 1 2-2h9V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-1h-9a2 2 0 0 1-2-2zm3-8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h9V8h-9zm3 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
          </svg>
        </span>
              </div>
          </div>
          <div class="block p-2 w-full" v-on:click="fnGetList()">
              <p class="font-bold text-base text-gray-800 dark:text-gray-200 cursor-pointer">
                 산업안전보건 3Q
              </p>
              <h3 class="font-normal text-blue-900 text-md mt-1">{{noneE1Q3}}/{{countE1Q3}}</h3>
          </div>
      </div>
      <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex">
          <div class="p-2 max-w-sm">
              <div class="bg-blue-200 rounded-full w-14 h-14 text-lg p-3 text-blue-600 mx-auto">
        <span class="">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="30px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <path fill="currentColor" d="M10 16V8a2 2 0 0 1 2-2h9V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-1h-9a2 2 0 0 1-2-2zm3-8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h9V8h-9zm3 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
          </svg>
        </span>
              </div>
          </div>
          <div class="block p-2 w-full" v-on:click="fnGetList()">
              <p class="font-bold text-base text-gray-800 dark:text-gray-200 cursor-pointer">
                  산업안전보건 4Q
              </p>
              <h3 class="font-normal text-blue-900 text-md mt-1">{{noneE1Q4}}/{{countE1Q4}}</h3>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import moment, {fn} from "moment";
import HomeLink from "@/components/HomeLink.vue";

export default {
  name: "CompletionAdd",
  components: {HomeLink},
  data() { //변수생성
    return {
      //link 변수
      homeLink: {
        name1: "Affair",
        name2: "CompletionAdd",
        link1: "/Affairs",
        link2: "/CompletionAdd",
        link3: "/#",
      },
      eduId : '0',
      year : '',
      quarter : '',
      completion : 'A',
      countE1Q1 : '',
      countE1Q2 : '',
      countE1Q3 : '',
      countE1Q4 : '',
      countE2Q0 : '',
      countE3Q0 : '',
      countE4Q0 : '',
      countE5Q0 : '',
      noneE1Q1 : '',
      noneE1Q2 : '',
      noneE1Q3 : '',
      noneE1Q4 : '',
      noneE2Q0 : '',
      noneE3Q0 : '',
      noneE4Q0 : '',
      noneE5Q0 : '',
      addList : ref([])
    }
  },
    methods:{
      fn() {
        return fn
      },
        fnGetCount(){
          this.$axios.get(this.$serverUrl + "/com/countAll/"
            + this.year + "/" + this.quarter
          ).then((res)=>{
              this.countE1Q1 = res.data[0]
              this.countE1Q2 = res.data[1]
              this.countE1Q3 = res.data[2]
              this.countE1Q4 = res.data[3]
              this.countE2Q0 = res.data[4]
              this.countE3Q0 = res.data[5]
              this.countE4Q0 = res.data[6]
              this.countE5Q0 = res.data[7]

              this.noneE1Q1 = res.data[8]
              this.noneE1Q2 = res.data[9]
              this.noneE1Q3 = res.data[10]
              this.noneE1Q4 = res.data[11]
              this.noneE2Q0 = res.data[12]
              this.noneE3Q0 = res.data[13]
              this.noneE4Q0 = res.data[14]
              this.noneE5Q0 = res.data[15]
          }).catch((err) => {
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
            }
          })
        },
        fnAdd(){
            if (!confirm("등록하시겠습니까?")) return //취소 클릭시

            this.$axios.post(this.$serverUrl + "/com/" + this.eduId
                                + "/" + this.year + "/" + this.quarter
            ).then((res)=>{
                this.addList = res.data

                alert(this.addList.length + '건이 추가되었습니다.')

                this.fnGetCount()
            }).catch((err) => {
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        },
        fnGetList(){
          this.$router.push({
            path: './CompletionList',
            query: this.requestBody
          })
        }
    },
  mounted() {
    this.year = moment().year();
    this.quarter = moment().quarter();

    this.fnGetCount()
  }
}
</script>
