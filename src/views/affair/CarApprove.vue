<template>
  <HomeLink :homeLink="homeLink"/>
  <div class="h-screen">
    <div class="h-1/2 mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700">
      <h2 class="font-bold text-base text-gray-800 dark:text-gray-200" id="title">{{ subCategory }} 사용일정</h2>
      <perfect-scrollbar class="dark:divide-gray-700">
        <div class="wrapping-table mt-10">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 h-1/2 lg:overflow-auto overflow-y-scroll">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" class="uppercase px-6 py-2" >
                      번호
                  </th>
                  <th scope="col" class="uppercase px-6 py-2" >
                      항목구분
                  </th>
                  <th scope="col" class="uppercase px-6 py-2" >
                      제목
                  </th>
                  <th scope="col" class="uppercase px-6 py-2" >
                      신청자
                  </th>
                  <th scope="col" class="uppercase px-6 py-2" >
                      사용일시
                  </th>
                  <th scope="col" class="uppercase px-6 py-2" >
                      상태
                  </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
                  v-for="(items,index) in tableTransaction"
                  :key="items.transaction" >
                  <td class="px-6 py-2">
                      {{ tableTransaction.length - index }}
                  </td>
                  <td class="px-6 py-4">
                      {{ items.subCategory }}
                  </td>
                  <td class="px-6 py-4">
                      {{ items.title }}
                  </td>
                  <td class="px-6 py-4">
                      {{items.deptName}} {{ items.name }}
                  </td>
                  <td class="px-6 py-4">
                      {{ items.startDate }} ~ {{ items.endDate }}
                  </td>
                  <td class="px-6 py-4">
                    <span class="text-green-800 bg-green-300 px-3 py-1 rounded-md"
                          v-if="setStatus(items.startDate, items.endDate) === '사용완료'">
                        사용완료
                    </span>
                    <span class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md"
                          v-else-if="setStatus(items.startDate, items.endDate) === '사용중'" >
                        사용중
                    </span>
                    <span class="text-red-800 bg-red-300 px-3 py-1 rounded-md"
                          v-else>
                        사용전
                    </span>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
      </perfect-scrollbar>
    </div>
    <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700" >
      <h2 class="font-bold text-base text-gray-800 dark:text-gray-200" id="title">전자결재  &nbsp
        <span class="text-base text-green-800 bg-green-300 px-3 py-1 rounded-md"
                v-if="approvalStatus === 1">
                처리 전
        </span>
        <span class="text-base text-purple-800 bg-purple-300 px-3 py-1 rounded-md"
                v-else-if="approvalStatus === 2">
                승인
        </span>
        <span class="text-base text-red-800 bg-red-300 px-3 py-1 rounded-md"
                v-else>
                반려
        </span>
      </h2>
      <div class="flex items-center justify-end gap-x-6">
          <button v-if="approvalStatus===1" type="button" v-on:click="fnYes" class="bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded">승인</button>
          <button v-if="approvalStatus===1" type="button" v-on:click="fnNo" class="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">반려</button>
          <button type="button" v-on:click="fnList" class="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mr-3">목록</button>
      </div>
      <div>
        <form>
          <div class="space-y-5">
            <div class="grid grid-cols-12 gap-4">
              <label for="documentNo" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                  문서 번호
              </label>
              <div class="col-span-10">
                  <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  >{{documentNo}}</p>
              </div>
            </div>
            <div class="grid grid-cols-12 gap-4">
              <label for="writer" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                  작성자
              </label>
              <div class="col-span-10">
                  <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  >{{deptName}} {{name}}</p>
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
              <label for="subCategory" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                  항목구분
              </label>
              <div class="col-span-10">
                  <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  >{{subCategory}}</p>
              </div>
            </div>
            <div class="grid grid-cols-12 gap-4">
              <label for="createdAt" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                  작성일시
              </label>
              <div class="col-span-10">
                  <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  >{{createdAt}}</p>
              </div>
            </div>
            <div class="grid grid-cols-12 gap-4">
              <label for="date" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                  사용일시
              </label>
              <div class="col-span-10">
                  <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  >{{startDate}} ~ {{endDate}}</p>
              </div>
            </div>
            <div class="grid grid-cols-12 gap-4">
              <label for="contents" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                  내용
              </label>
              <div class="col-span-10">
                  <div v-html="content" class="block w-4/5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:ring-inset focus:border-primary sm:text-sm sm:leading-6"></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import HomeLink from "@/components/HomeLink.vue";
import {ref} from "vue";
import moment from "moment";

export default {
  name: "CarApprove",
  components: {HomeLink},
  data() { //변수생성
    return {
      //검색용 변수
      searchCategory: '1',
      searchStart: '',
      searchEnd: '',
      //homeLink
      homeLink: {
        name1: "Affair",
        name2: "CarList",
        name3: "CarApprove",
        link1: "/Affairs",
        link2: "/CarList",
        link3: "/CarApprove",
      },
      requestBody: this.$route.query,
      documentNo: this.$route.query.documentNo,
      categoryId: this.$route.query.categoryId,
      tableTransaction: ref([]),
      title: '',
      content: '',
      startDate: '',
      endDate: '',
      createdAt: '',
      approvalStatus: '',
      subCategory: '',
      empId: '',
      name: '',
      deptNo: '',
      deptName: '',
    }
  },
  watch: {
    startDate: function(newVal) {
      console.log(newVal)
      this.fnGetList(newVal)
    }
  },
  methods: {
    fnGetView(){
      this.$axios.get(this.$serverUrl +'/use/'+  this.documentNo)
        .then((res) => {
          this.documentNo = res.data.documentNo
          this.title = res.data.title
          this.content = res.data.content
          this.startDate = res.data.startDate
          this.endDate = res.data.endDate
          this.createdAt = res.data.createdAt
          this.approvalStatus = res.data.approvalStatus
          this.categoryId = res.data.categoryId
          this.category = res.data.category
          this.subCategory = res.data.subCategory
          this.empId = res.data.empId
          this.name = res.data.name
          this.deptNo = res.data.deptNo
          this.deptName = res.data.deptName
        }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    fnList() {
      delete this.requestBody.documentNo
      this.$router.push({
        path: './CarList',
        query: this.requestBody
      })
    },
    fnYes() {
      if (!confirm("승인하시겠습니까?")) return //취소 클릭시

      this.$axios.patch(this.$serverUrl + '/use/' + this.documentNo + '/2') //확인 클릭시
        .then((res) => {
          alert('승인되었습니다.')
          // if(confirm(res.data.drvNo + '번 차량관리대장이 작성되었습니다. 상세페이지로 이동하시겠습니까?.' )){
          //
          // }
          this.fnList();
        }).catch((err) => {
        console.log(err);
      })
    },
    fnNo() {
      if (!confirm("반려하시겠습니까?")) return //취소 클릭시

      this.$axios.patch(this.$serverUrl + '/use/' + this.documentNo + '/2') //확인 클릭시
        .then(() => {
          alert('반려되었습니다.')
          this.fnList();
        }).catch((err) => {
        console.log(err);
      })
    },
    fnGetList() { //스프링 부트통해 DB에서 전송받은 list 출력 처리
      let url = this.$serverUrl + "/use/schedule/" + this.categoryId
      this.$axios.get(url, {
      }).then((res) => {

        this.tableTransaction = res.data  //서버에서 데이터를 목록으로 보내므로 바로 할당하여 사용할 수 있다.

      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    setStatus(start, end){
      let startM = new moment(start, "YYYY-MM-DD hh:mm");
      let endM = new moment(end, "YYYY-MM-DD hh:mm");
      if (startM.isAfter(moment(),'minute')) {
        return '사용전';
      }
      if (endM.isBefore(moment(),'minute')) {
        return '사용완료';
      }else{
        return '사용중';
      }
    },
  },
  mounted() { //페이지로드시 함수 적용
    this.fnGetView()
  },
}
</script>

<style scoped>
</style>