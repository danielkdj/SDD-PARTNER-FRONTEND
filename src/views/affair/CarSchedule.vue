<template>
  <HomeLink :homeLink="homeLink"/>
  <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700 h-screen">
    <p class="font-bold text-base text-gray-800 dark:text-gray-200">차량 사용일정</p>
    <div class="mt-2 flex items-center justify-end gap-x-6">
      <select
              v-model="category"
              class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
      >
          <option value="2">-항목선택-</option>
          <option value="14">A차량</option>
          <option value="15">B차량</option>
      </select>
    </div>
    <perfect-scrollbar class="h-4/6 dark:divide-gray-700">
      <div class="wrapping-table mt-2">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="uppercase px-6 py-2">
                  번호
              </th>
              <th scope="col" class="uppercase px-6 py-2">
                  항목구분
              </th>
              <th scope="col" class="uppercase px-6 py-2">
                  제목
              </th>
              <th scope="col" class="uppercase px-6 py-2">
                  신청자
              </th>
              <th scope="col" class="uppercase px-6 py-2">
                  사용일시
              </th>
              <th scope="col" class="uppercase px-6 py-2">
                  상태
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
                v-for="(items,index) in tableTransaction"
                :key="items.documentNo">
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
</template>

<script>
import HomeLink from "@/components/HomeLink.vue";
import {ref} from "vue";
import moment from "moment/moment";

export default {
  name: "CarSchedule",
  components: {HomeLink},
  data() { //변수생성
    return {
      requestBody: this.$route.query,
      //검색용 변수
      category: '2',
      //link 변수
      homeLink: {
        name1: "Affair",
        name2: "CarSchedule",
        link1: "/Affairs",
        link2: "/CarSchedule",
        link3: "#",
      },
      department: [{}],
      tableTransaction: ref([])
    }
  },
  watch :{
    category : function (newVal){
      this.fnGetList(newVal);
    }
  },
  methods:{
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
    fnGetList(search) { //스프링 부트통해 DB에서 전송받은 list 출력 처리
      let url = this.$serverUrl + "/use/schedule/" + 2
      if(search){
        url = this.$serverUrl + "/use/schedule/" + search
      }

      this.$axios.get(url, {
        params: this.requestBody,
        headers: {}
      }).then((res) => {

        this.tableTransaction = res.data  //서버에서 데이터를 목록으로 보내므로 바로 할당하여 사용할 수 있다.

      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    }
  },
  mounted() { //페이지로드시 함수 적용
    this.fnGetList()
  },
}
</script>
