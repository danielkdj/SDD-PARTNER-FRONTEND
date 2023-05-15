<template>
  <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700 h-screen">
    <div class="mt-6 flex items-center justify-end gap-x-6">
        <span>선택된 사원수 : {{checkedComs.length}}</span>
        <span>선택된 사원명 : {{checkedComs}}</span>
      <div class="flex min-h-full flex-col lg:px-7">
          <input
                  type="number" min="1" max="9999" step="1"
                  class="block py-2.5 px-0 w-20 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder="  -연도-"
                  v-model.number="year" />
      </div>
      <div class="flex min-h-full flex-col lg:px-7">
              <input
                      type="number" min="1" max="5" step="1"
                      class="block py-2.5 px-0 w-20 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                      placeholder="  -분기-"
                      v-model.number="quarter"/>
      </div>
      <select v-model="leg"
              class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
      >
          <option value="">-항목구분-</option>
          <option value="1">산업안전보건교육</option>
          <option value="2">성희롱예방교육</option>
          <option value="3">개인정보보호교육</option>
          <option value="4">장애인인식개선교육</option>
          <option value="5">퇴직연금교육</option>
      </select>
      <select v-model="deptId"
          class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
      >
      <option value="">-소속-</option>
      <option value="D1">1팀</option>
      <option value="D2">2팀</option>
      </select>
      <select v-model="com"
              class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400" >
        <option disabled value="">-이수여부-</option>
        <option value="Y">Y</option>
        <option value="N">N</option>
      </select>
      <button v-on:click="fnSearch" class="bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded mr-3">검색</button>
      <button v-on:click="fnUpdate" class="bg-amber-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">수정</button>
    </div>
      <perfect-scrollbar class="h-4/6 dark:divide-gray-700">
        <div class="wrapping-table mt-10">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll" >
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >
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
                  소속부서
              </th>
              <th scope="col" class="uppercase px-6 py-2" >
                  신청자
              </th>
              <th scope="col" class="uppercase px-6 py-2" >
                이수여부
                <input type="checkbox" id="allS" @click="selectAll(this)"/>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
              v-for="items in tableTransaction"
              :key="items.transaction"
            >
              <td class="px-6 py-2">
                  {{ items.comId }}
              </td>
              <td class="px-6 py-4">
                  {{ items.imputedYear }}
              </td>
              <td class="px-6 py-4">
                  {{ items.imputedQuarter }}
              </td>
              <td class="px-6 py-4">
                  <span v-if="items.category === '1'" >산업안전보건교육</span>
                  <span v-else-if="items.category === '2'" >성희롱예방교육</span>
                  <span v-else-if="items.category === '3'" >개인정보보호교육</span>
                  <span v-else-if="items.category === '4'" >장애인인식개선교육</span>
                  <span v-else-if="items.category === '5'" >퇴직연금교육</span>
              </td>
              <td class="px-6 py-4">
                  {{ items.empId }}
              </td>
              <td class="px-6 py-4">
                  {{ items.deptName }}
              </td>
              <td class="px-6 py-4">
                  <label>{{ items.completed }} &nbsp
                  <input type="checkbox" name="comBox" v-model="checkedComs" :value="items.comId" :id="items.transaction">
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
export default {
  name: "RoomList",
  data() { //변수생성
    return {
      requestBody: this.$route.query,
        //검색용 변수
        leg: '',
        deptId: '',
        year: '',
        quarter: '',
        com : '',
        //이수여부 변수
        checked: false,
        checkedComs: [],
      tableTransaction: [
        {
        comId: 1,
        category: '1',
        empId: '작성자',
        deptName: '소속부서',
        imputedYear: 2023,
        imputedQuarter: 1,
        completed:'N',
        },
        {
        comId: 2,
        category:  '2',
        empId: '작성자',
        deptName: '소속부서',
        imputedYear: 2023,
        imputedQuarter: 1,
        completed:'N',

        },        {
        comId: 3,
        category:  '2',
        empId: '작성자',
        deptName: '소속부서',
        imputedYear: 2023,
        imputedQuarter: 1,
        completed:'N',

        },        {
        comId: 4,
        category:  '2',
        empId: '작성자',
        deptName: '소속부서',
        imputedYear: 2023,
        imputedQuarter: 1,
        completed:'N',

        },        {
        comId: 5,
        category:  '2',
        empId: '작성자',
        deptName: '소속부서',
        imputedYear: 2023,
        imputedQuarter: 1,
        completed:'N',

        },        {
        comId: 6,
        category:  '2',
        empId: '작성자',
        deptName: '소속부서',
        imputedYear: 2023,
        imputedQuarter: 1,
        completed:'Y',

        }, {
        comId: 7,
        category:  '2',
        empId: '작성자',
        deptName: '소속부서',
        imputedYear: 2023,
        imputedQuarter: 1,
        completed:'Y',

        }, {
        comId: 8,
        category:  '2',
        empId: '작성자',
        deptName: '소속부서',
        imputedYear: 2023,
        imputedQuarter: 1,
        completed:'Y',

        }, {
        comId: 9,
        category:  '2',
        empId: '작성자',
        deptName: '소속부서',
        imputedYear: 2023,
        imputedQuarter: 1,
        completed:'Y',

        }, {
        comId: 10,
        category:  '2',
        empId: '작성자',
        deptName: '소속부서',
        imputedYear: 2023,
        imputedQuarter: 1,
        completed:'Y',

        }, {
        comId: 11,
        category:  '2',
        empId: '작성자',
        deptName: '소속부서',
        imputedYear: 2023,
        imputedQuarter: 1,
        completed:'Y',

        }, {
        comId: 12,
        category:  '2',
        empId: '작성자',
        deptName: '소속부서',
        imputedYear: 2023,
        imputedQuarter: 1,
        completed:'Y',

        }, {
        comId: 13,
        category:  '2',
        empId: '작성자',
        deptName: '소속부서',
        imputedYear: 2023,
        imputedQuarter: 1,
        completed:'Y',

        }, {
        comId: 14,
        category:  '2',
        empId: '작성자',
        deptName: '소속부서',
        imputedYear: 2023,
        imputedQuarter: 1,
        completed:'Y',

        }, {
        comId: 15,
        category:  '2',
        empId: '작성자',
        deptName: '소속부서',
        imputedYear: 2023,
        imputedQuarter: 1,
        completed:'Y',

        },
      ]
    }
  },
    methods:{
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
        fnSearch(){
            this.requestBody = {
                leg: this.leg,
                deptId: this.deptId,
                year: this.year,
                quarter: this.quarter,
                com : this.com,
            }
            this.$axios.get(this.$serverUrl + "/edu/list",{
                params: this. requestBody,
                headers: {}
            }).then((res)=>{
                this.list = res.data.data
            }).catch((err) => {
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        },
        fnUpdate(){
            if(confirm('총 ' + this.checkedComs.length + ' 건을 수정하시겠습니까?\n' + this.checkedComs.toString())){
                console.log('수정');
            }

        }
    }
}
</script>
