<template>
  <HomeLink :homeLink="homeLink"/>
  <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700 h-screen">
    <div class="mt-2 flex items-center justify-end gap-x-6">
      <select v-model ="category"
              class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400">
        <option value="">-항목구분-</option>
        <option value="차량A">차량A</option>
        <option value="차량B">차량B</option>
      </select>
        <button v-on:click="makeExcelFile5()" class="bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded mr-3">내려받기</button>
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
<!--              <th scope="col" class="uppercase px-6 py-2">-->
<!--                  상태-->
<!--              </th>-->
              <th scope="col" class="uppercase px-6 py-3">
                주행 전 거리
              </th>
              <th scope="col" class="uppercase px-6 py-3">
                주행 후 거리
              </th>
              <th scope="col" class="uppercase px-6 py-3">
                운행거리
              </th>
            </tr>
          </thead>
          <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 cursor-pointer"
              v-for="(items, index) in tableTransaction"
              :key="items.transaction"
              v-on:click="fnView(`${items.drvNo}`)">
            <td class="px-6 py-2">
                {{tableTransaction.length - index}}
            </td>
            <td class="px-6 py-4">
                {{ items.car }}
            </td>
            <td class="px-6 py-4">
                {{ items.reason }}
            </td>
            <td class="px-6 py-4">
                {{items.deptName}} {{ items.driver }}
            </td>
            <td class="px-6 py-4">
                {{ items.drvStart }} ~ {{ items.drvEnd }}
            </td>
<!--            <td class="px-6 py-4">-->
<!--              <span-->
<!--                class="text-green-800 bg-green-300 px-3 py-1 rounded-md"-->
<!--                v-if="items.status === 1">-->
<!--                반납-->
<!--              </span>-->
<!--              <span class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md"-->
<!--                    v-else-if="items.status === 2">-->
<!--                미반납-->
<!--              </span>-->
<!--            </td>-->
            <td class="px-6 py-4">
                {{ items.beforeMileage }}
            </td>
            <td class="px-6 py-4">
                {{ items.afterMileage }}
            </td>
            <td class="px-6 py-4">
                {{ items.actualMileage }}
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
import * as xlsx from "xlsx";
import moment from "moment";

export default {
  name: "DrvList",
  components: {HomeLink},
  data() { //변수생성
    return {
      //link 변수
      homeLink: {
        name1: "Affair",
        name2: "DrvList",
        link1: "/Affairs",
        link2: "/DrvList",
        link3: "#",
      },
      requestBody: this.$route.query,
      //검색용 변수
      category: '',
      status: '9',

      tableTransaction: ref([
        {
          drvNo: 1,
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
      ])
    }
  },
  watch: {
    category: function(newVal) {
      console.log(newVal)
      this.fnGetList(newVal)
    },
    status: function(newVal) {
      console.log(newVal)
      this.fnGetList(newVal)
    }
  },
  methods: {
    fnGetList(search) { //스프링 부트통해 DB에서 전송받은 list 출력 처리
      let url = this.$serverUrl + "/drv"

      if(search){
        url = this.$serverUrl + "/drv/search/"+this.category
      }
      this.$axios.get(url, {
      }).then((res) => {

        this.tableTransaction = res.data  //서버에서 데이터를 목록으로 보내므로 바로 할당하여 사용할 수 있다.
        // this.setStatus()

      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    fnView(drvNo) {
        this.requestBody.drvNo = drvNo
        this.$router.push({
            path: './DrvDetail',
            query: this.requestBody
        })
    },
    makeExcelFile5() {
      // Create a new workbook
      const wb = xlsx.utils.book_new();

      // Map your selectedUsers data to only include the properties you want
      const data = this.tableTransaction.map(drv => ({
        '차종': drv.car,
        '사용시작일시': drv.drvStart,
        '사용종료일시': drv.drvEnd,
        '부서': drv.deptName,
        '성명': drv.driver,
        '주행전': drv.beforeMileage,
        '주행후': drv.afterMileage,
        "주행거리(km)": drv.actualMileage,
        '비고':''
      }));

      // Convert your selectedUsers data to worksheet
      const ws = xlsx.utils.json_to_sheet(data);

      // Append the worksheet to the workbook
      let now = moment().format("YYYY-MM-DD");
      xlsx.utils.book_append_sheet(wb, ws, "Sheet1_" + now);

      // Write the workbook to a file and trigger a download
      // You may need to run this in the browser environment to see the download dialog
      xlsx.writeFile(wb, "차량관리대장.xlsx");
    }
  },
  mounted() { //페이지로드시 함수 적용
    this.fnGetList()
  },
}
</script>
