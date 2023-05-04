<template>
  <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700"
  >
    <div class="mt-3 flex items-center justify-end gap-x-2">
      <select
              name="sub_category"
              id="sub_category"
              class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
      >
        <option value="">-항목구분-</option>
        <option value="A차량">A차량</option>
        <option value="B차량">B차량</option>
        <option value="C차량">C차량</option>
      </select>
      <select
              name="status"
              id="status"
              class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
      >
        <option value="">-상태-</option>
        <option value="반납">반납</option>
        <option value="미반납">미반납</option>
        <option value="사용전">사용전</option>
        <option value="사용중">사용중</option>
      </select>
      <div class="flex min-h-full flex-col lg:px-7">
        <input
                type="date"
                class="p-3 w-full border bg-white dark:bg-gray-900 dark:text-gray-400 rounded-md outline-none focus:bg-gray-100 dark:focus:bg-gray-700"
        />
      </div>
      ~
      <div class="flex min-h-full flex-col lg:px-7">
        <input
                type="date"
                class="p-3 w-full border bg-white dark:bg-gray-900 dark:text-gray-400 rounded-md outline-none focus:bg-gray-100 dark:focus:bg-gray-700"
        />
      </div>
        <button type="button" v-on:click="fnSearch" class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700-600">검색</button>
    </div>
    <div class="wrapping-table mt-10">
      <table
        class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
        <tr>
          <th
            scope="col"
            class="uppercase px-6 py-2"
          >
            번호
          </th>
          <th
            scope="col"
            class="uppercase px-6 py-3"
          >
            항목구분
          </th>
          <th
            scope="col"
            class="uppercase px-6 py-3"
          >
            소속
          </th>
          <th
            scope="col"
            class="uppercase px-6 py-3"
          >
            신청자
          </th>
          <th
            scope="col"
            class="uppercase px-6 py-3"
          >
            운행사유
          </th>
          <th
            scope="col"
            class="uppercase px-6 py-3"
          >
            신청일시
          </th>
          <th
            scope="col"
            class="uppercase px-6 py-3"
          >
            사용일시
          </th>
          <th
            scope="col"
            class="uppercase px-6 py-3"
          >
            반납여부
          </th>
          <th
            scope="col"
            class="uppercase px-6 py-3"
          >
            반납일시
          </th>
          <th
            scope="col"
            class="uppercase px-6 py-3"
          >
            주행 전 거리
          </th>
          <th
            scope="col"
            class="uppercase px-6 py-3"
          >
            주행 후 거리
          </th>
          <th
            scope="col"
            class="uppercase px-6 py-3"
          >
            운행거리
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
              {{ items.drv_id }}
          </td>
          <td class="px-6 py-4">
              {{ items.category }}
          </td>
          <td class="px-6 py-4">
              {{ items.dept_name }}
          </td>
          <td class="px-6 py-4">
              {{ items.writer }}
          </td>
          <td class="px-6 py-4">
              {{ items.reason }}
          </td>
          <td class="px-6 py-4">
              {{ items.created_at }}
          </td>
          <td class="px-6 py-4">
              {{ items.drv_start }} ~ {{ items.drv_end }}
          </td>
          <td class="px-6 py-4">
            <span
              class="text-green-800 bg-green-300 px-3 py-1 rounded-md"
              v-if="items.status == '반납'"
            >
              {{ items.status }}
            </span>
            <span
                      class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md"
                      v-else-if="items.status == '사용중'"
              >
              {{ items.status }}
            </span>
            <span
                      class="text-purple-800 bg-purple-100 px-3 py-1 rounded-md"
                      v-else-if="items.status == '사용전'"
              >
              {{ items.status }}
            </span>
            <span
                class="text-red-800 bg-red-300 px-3 py-1 rounded-md"
                v-else
            >
              {{ items.status }}
            </span>
          </td>
          <td class="px-6 py-4">
              {{ items.drv_return }}
          </td>
          <td class="px-6 py-4">
              {{ items.before_mileage }}
          </td>
          <td class="px-6 py-4">
              {{ items.after_mileage }}
          </td>
          <td class="px-6 py-4">
              {{ items.actual_mileage }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarUseList",
  data() { //변수생성
    return {
      requestBody: this.$route.query,
      tableTransaction: [
        {
            drv_id: 1,
            dept_name: '소속부서',
            writer: '신청자',
            category: 'A차량',
            created_at: '2023-02-11 23:24:00',
            reason: '운행사유',
            drv_start: '2023-02-18 23:24:00',
            drv_end: '2023-02-19 23:24:00',
            drv_return: '',
            before_mileage: '',
            after_mileage: '',
            actual_mileage: '',
            status: '',
        },
        {
            drv_id: 2,
            dept_name: '소속부서',
            writer: '신청자',
            category: 'B차량',
            created_at: '2023-02-11 23:24:00',
            reason: '운행사유',
            drv_start: '2023-02-18 23:24:00',
            drv_end: '2023-02-19 23:24:00',
            drv_return: '2022-03-19 23:24:00',
            before_mileage: '1000',
            after_mileage: '1200',
            actual_mileage: '',
            status: '',
        },
        {
            drv_id: 3,
            dept_name: '소속부서',
            writer: '신청자',
            category: 'B차량',
            created_at: '2022-02-11 23:24:00',
            reason: '운행사유',
            drv_start: '2023-05-03 23:24:00',
            drv_end: '2023-05-04 12:44:00',
            drv_return: '',
            before_mileage: '',
            after_mileage: '',
            actual_mileage: '',
            status: '',
        },
        {
            drv_id: 4,
            dept_name: '소속부서',
            writer: '신청자',
            category: 'B차량',
            created_at: '2022-02-11 23:24:00',
            reason: '운행사유',
            drv_start: '2023-05-04 23:24:00',
            drv_end: '2023-05-05 23:24:00',
            drv_return: '',
            before_mileage: '',
            after_mileage: '',
            actual_mileage: '',
            status: '',
        },
      ]
    }
  },
  methods: {
    setStatus(){
      let now = new Date();
      for (let i = 0; i < this.tableTransaction.length; i++) {
        let transaction = this.tableTransaction[i];
        let drvStart = new Date(transaction.drv_start);
        let drvEnd = new Date(transaction.drv_end);
        let drvReturn;
        if(transaction.drv_return.length>0){
        drvReturn = new Date(transaction.drv_return);}

        if (drvReturn) {
            transaction.status = '반납';
        }
        if (drvStart > now) {
            transaction.status = '사용전';
        }
        if (drvStart <= now && drvEnd >= now && !drvReturn) {
            transaction.status = '사용중';
        }
        if (drvEnd < now && !drvReturn) {
            transaction.status = '미반납';
        }
        console.log(drvStart)
        console.log(drvEnd)
        console.log(drvReturn)
      }
    },
    setActual_mileage() {
      for (let i = 0; i < this.tableTransaction.length; i++) {
        let transaction = this.tableTransaction[i];
        let afterM = transaction.after_mileage;
        let beforeM = transaction.before_mileage;
        if (afterM > 0 && beforeM > 0 && afterM > beforeM)
            transaction.actual_mileage = afterM - beforeM;
      }
    },
  },
  mounted() { //페이지로드시 함수 적용
        this.setStatus()
        this.setActual_mileage()
  },
}
</script>
