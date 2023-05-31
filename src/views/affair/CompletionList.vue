<template>
    <HomeLink :homeLink="homeLink"/>
    <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700 h-screen">
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
              type="number" min="0" max="4" step="1"
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
      <select v-model="deptNo"
          class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
      >
      <option value="0">-소속-</option>
      <option value="1">개발팀</option>
      <option value="2">인사팀</option>
      <option value="3">급여팀</option>
      <option value="4">총무팀</option>
      </select>
      <select v-model="completion"
              class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400" >
        <option value="A">-이수여부-</option>
        <option value="Y">Y</option>
        <option value="N">N</option>
      </select>
      <button v-on:click="fnUpdate" class="bg-amber-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">수정</button>
    </div>
    <div class="mt-5 flex items-center justify-end gap-x-6">
        <span>선택된 사원수 : {{checkedComs.length}}</span>
    </div>
      <perfect-scrollbar class="h-4/6 dark:divide-gray-700">
        <div class="wrapping-table mt-5">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll" >
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="uppercase px-6 py-2" >
                번호
              </th>
              <th scope="col" class="uppercase px-6 py-2" >
                귀속연도
              </th>
              <th scope="col" class="uppercase px-6 py-2" >
                귀속분기
              </th>
              <th scope="col" class="uppercase px-6 py-2" >
                  항목구분
              </th>
              <th scope="col" class="uppercase px-6 py-2" >
                  사원명
              </th>
              <th scope="col" class="uppercase px-6 py-2" >
                이수여부
                <input type="checkbox" id="allS" @click="selectAll(this)"/>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 cursor-pointer"
                v-for="(items,index) in tableTransaction"
                :key="items.transaction" >
              <td class="px-6 py-2">
                  {{tableTransaction.length - index}}
              </td>
              <td class="px-6 py-2">
                  {{ items.years }}
              </td>
              <td class="px-6 py-2">
                  <p v-if="items.quarters>0">{{ items.quarters }}</p>
                  <p v-else>-</p>

              </td>
              <td class="px-6 py-4">
                  {{items.eduName}}
              </td>
              <td class="px-6 py-4">
                  {{ items.deptName }} {{ items.name }}
              </td>
              <td class="px-6 py-4">
                  <label>{{ items.completion }} &nbsp
                  <input type="checkbox" name="comBox"
                         v-model="checkedComs"
                         :value="items.comNo" :id="items.transaction">
                  </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script>
import {ref} from "vue";
import HomeLink from "@/components/HomeLink.vue";
import moment from "moment/moment";

export default {
  name: "CompletionList",
  components: {HomeLink},
  data() { //변수생성
    return {
      //link 변수
      homeLink: {
        name1: "Affair",
        name2: "CompletionAdd",
        name3: "CompletionList",
        link1: "/Affairs",
        link2: "/CompletionAdd",
        link3: "/CompletionList",
      },
      requestBody: this.$route.query,
      //검색용 변수
      year: '',
      quarter: '',
      eduId: '0',
      completion : 'A',
      deptNo : 0,
      //이수여부 변수
      checked: false,
      checkedComs: [],
      tableTransaction: ref([
        {
        comNo: '',
        name: '',
        deptNo: '',
        deptName: '',
        years: '',
        quarters: '',
        completion:'',
        eduId: '',
        eduName: ''
        },
      ])
    }
  },
  watch : {
    eduId : function (newVal){
      this.fnGetList(newVal);
    }    ,
    completion : function (newVal){
      this.fnGetList(newVal);
    },
    deptNo : function (newVal){
      this.fnGetList(newVal);
    }    ,
    year : function (newVal){
      this.fnGetList(newVal);
    },
    quarter : function (newVal){
      this.fnGetList(newVal);
    }

  },
    methods:{
        fnGetList(search){
          let url = this.$serverUrl + "/com"
          let searchQuarter = this.quarter
          if(this.quarter ===''){
            searchQuarter = 0
          }
          if(search){
            url = this.$serverUrl + "/com/search/" + this.eduId + "/" + this.completion + "/" + this.deptNo + "/" +this.year+ "/" + searchQuarter
          }
          this.$axios.get(url,{
          }).then((res)=>{
            this.tableTransaction = res.data
          }).catch((err) => {
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
            }
          })
        },
        selectAll(){
                const comBoxs = document.getElementsByName('comBox');
            if(this.checked===false) {
                this.checked = true;
                this.checkedComs = []; //배열 비우기
                comBoxs.forEach((checkbox) => {
                    this.checkedComs.push(parseInt(checkbox.value)); //배열에 전체 값 채우기
                });
                console.log(this.checked);
            }else{
                this.checked = false;
                this.checkedComs = []; //배열 비우기
                console.log(this.checked);
            }
            comBoxs.forEach((checkbox) => {
                checkbox.checked = this.checked;
            });
        },
        fnUpdate(){
            if(confirm('총 ' + this.checkedComs.length + ' 건을 수정하시겠습니까?\n')){
                console.log('수정');

              for(let no in this.checkedComs){
                this.$axios.patch(this.$serverUrl + "/com/"
                                                  + this.checkedComs[no], {
                  params: this. requestBody,
                  headers: {}
                }).then((res)=>{
                  this.list = res.data.data
                  this.checkedComs = [];
                  this.fnGetList(0)

                }).catch((err) => {
                  if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                  }
                })
              }
            }
        }
    },
  mounted() {
    this.year = moment().year()

    this.fnGetList()
  }
}
</script>
