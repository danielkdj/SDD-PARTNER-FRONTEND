<template>
  <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700 h-screen"
  >
    <div class="mt-6 flex items-center justify-end gap-x-6">
        <select
                v-model="sCategory"
                class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
        >
            <option value="">-항목선택-</option>
            <option value="A회의실">A회의실</option>
            <option value="B회의실">B회의실</option>
            <option value="C회의실">C회의실</option>
        </select>
        <select
                v-model="sStatus"
                class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
        >
            <option value="">-상태-</option>
            <option value="1">처리 전</option>
            <option value="2">반려</option>
            <option value="3">승인</option>
        </select>
        <button v-on:click="fnSearch" class="bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded mr-3">검색</button>
    </div>
      <perfect-scrollbar class="h-4/6 dark:divide-gray-700">
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
            제목
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
            소속부서
          </th>
          <th
            scope="col"
            class="uppercase px-6 py-3"
          >
            작성일시
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
            상태
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
              {{ items.docNo }}
          </td>
          <td class="px-6 py-4">
              {{ items.subCategory }}
          </td>
          <td class="px-6 py-4">
              <a v-on:click="fnView(`${items.docNo}`)">{{ items.title }}</a>
          </td>
          <td class="px-6 py-4">
              {{ items.writer }}
          </td>
          <td class="px-6 py-4">
              {{ items.deptName }}
          </td>
          <td class="px-6 py-4">
              {{ items.createdAt }}
          </td>
            <td class="px-6 py-4">
              {{ items.startDate }} ~ {{ items.endDate }}
          </td>
          <td class="px-6 py-4">
        <span
          class="text-green-800 bg-green-300 px-3 py-1 rounded-md"
          v-if="items.status === 1"
        >
          처리 전
        </span>
          <span
                  class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md"
                  v-else-if="items.status === 2"
          >
          반려
        </span>
          <span
            class="text-red-800 bg-red-300 px-3 py-1 rounded-md"
            v-else
          >
          승인
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

export default {
  name: "RoomList",
  data() { //변수생성
    return {
      requestBody: this.$route.query,
      sCategory : '',
      sStatus : '',
      tableTransaction: [
        {
        docNo : 123,
        subCategory: '항목구분',
        title: '제목',
        writer: '작성자',
        deptName: '소속부서',
        createdAt:'2023-05-04 23:24:00',
        startDate:'2023-05-05 23:24:00',
        endDate:'2023-05-05 23:24:00',
        status: 1
        },

        {
        docNo : 125,
        subCategory: '항목구분',
        title: '제목',
        writer: '작성자',
        deptName: '소속부서',
        createdAt: '2023-05-03 23:24:00',
        startDate: '2023-05-03 23:24:00',
        endDate: '2023-05-03 23:24:00',
        status: 2,
        },        {
        docNo : 125,
        subCategory: '항목구분',
        title: '제목',
        writer: '작성자',
        deptName: '소속부서',
        createdAt: '2023-05-03 23:24:00',
        startDate: '2023-05-03 23:24:00',
        endDate: '2023-05-03 23:24:00',
        status: 2,
        },        {
        docNo : 125,
        subCategory: '항목구분',
        title: '제목',
        writer: '작성자',
        deptName: '소속부서',
        createdAt: '2023-05-03 23:24:00',
        startDate: '2023-05-03 23:24:00',
        endDate: '2023-05-03 23:24:00',
        status: 2,
        },        {
        docNo : 125,
        subCategory: '항목구분',
        title: '제목',
        writer: '작성자',
        deptName: '소속부서',
        createdAt: '2023-05-03 23:24:00',
        startDate: '2023-05-03 23:24:00',
        endDate: '2023-05-03 23:24:00',
        status: 2,
        },        {
        docNo : 125,
        subCategory: '항목구분',
        title: '제목',
        writer: '작성자',
        deptName: '소속부서',
        createdAt: '2023-05-03 23:24:00',
        startDate: '2023-05-03 23:24:00',
        endDate: '2023-05-03 23:24:00',
        status: 2,
        },        {
        docNo : 125,
        subCategory: '항목구분',
        title: '제목',
        writer: '작성자',
        deptName: '소속부서',
        createdAt: '2023-05-03 23:24:00',
        startDate: '2023-05-03 23:24:00',
        endDate: '2023-05-03 23:24:00',
        status: 2,
        },        {
        docNo : 125,
        subCategory: '항목구분',
        title: '제목',
        writer: '작성자',
        deptName: '소속부서',
        createdAt: '2023-05-03 23:24:00',
        startDate: '2023-05-03 23:24:00',
        endDate: '2023-05-03 23:24:00',
        status: 2,
        },        {
        docNo : 125,
        subCategory: '항목구분',
        title: '제목',
        writer: '작성자',
        deptName: '소속부서',
        createdAt: '2023-05-03 23:24:00',
        startDate: '2023-05-03 23:24:00',
        endDate: '2023-05-03 23:24:00',
        status: 2,
        },        {
        docNo : 125,
        subCategory: '항목구분',
        title: '제목',
        writer: '작성자',
        deptName: '소속부서',
        createdAt: '2023-05-03 23:24:00',
        startDate: '2023-05-03 23:24:00',
        endDate: '2023-05-03 23:24:00',
        status: 2,
        },        {
        docNo : 125,
        subCategory: '항목구분',
        title: '제목',
        writer: '작성자',
        deptName: '소속부서',
        createdAt: '2023-05-03 23:24:00',
        startDate: '2023-05-03 23:24:00',
        endDate: '2023-05-03 23:24:00',
        status: 2,
        },        {
        docNo : 125,
        subCategory: '항목구분',
        title: '제목',
        writer: '작성자',
        deptName: '소속부서',
        createdAt: '2023-05-03 23:24:00',
        startDate: '2023-05-03 23:24:00',
        endDate: '2023-05-03 23:24:00',
        status: 2,
        },        {
        docNo : 125,
        subCategory: '항목구분',
        title: '제목',
        writer: '작성자',
        deptName: '소속부서',
        createdAt: '2023-05-03 23:24:00',
        startDate: '2023-05-03 23:24:00',
        endDate: '2023-05-03 23:24:00',
        status: 2,
        },        {
        docNo : 125,
        subCategory: '항목구분',
        title: '제목',
        writer: '작성자',
        deptName: '소속부서',
        createdAt: '2023-05-03 23:24:00',
        startDate: '2023-05-03 23:24:00',
        endDate: '2023-05-03 23:24:00',
        status: 2,
        },        {
        docNo : 125,
        subCategory: '항목구분',
        title: '제목',
        writer: '작성자',
        deptName: '소속부서',
        createdAt: '2023-05-03 23:24:00',
        startDate: '2023-05-03 23:24:00',
        endDate: '2023-05-03 23:24:00',
        status: 2,
        },        {
        docNo : 125,
        subCategory: '항목구분',
        title: '제목',
        writer: '작성자',
        deptName: '소속부서',
        createdAt: '2023-05-03 23:24:00',
        startDate: '2023-05-03 23:24:00',
        endDate: '2023-05-03 23:24:00',
        status: 2,
        },        {
        docNo : 125,
        subCategory: '항목구분',
        title: '제목',
        writer: '작성자',
        deptName: '소속부서',
        createdAt: '2023-05-03 23:24:00',
        startDate: '2023-05-03 23:24:00',
        endDate: '2023-05-03 23:24:00',
        status: 2,
        },        {
        docNo : 125,
        subCategory: '항목구분',
        title: '제목',
        writer: '작성자',
        deptName: '소속부서',
        createdAt: '2023-05-03 23:24:00',
        startDate: '2023-05-03 23:24:00',
        endDate: '2023-05-03 23:24:00',
        status: 2,
        },
      ]
    }
  },
    methods: {
        fnView(docNo) {
            this.requestBody.docNo = docNo
            this.$router.push({
                path: './RoomApprove',
                query: this.requestBody
            })
        },
        fnSearch(){
            this.requestBody = {
                category : this.sCategory,
                status : this.sStatus
            }

            this.$axios.get(this.$serverUrl + "/RoomList", {
                params: this.requestBody,
                headers: {}
            }).then((res)=>{
                if (res.data.resultCode === "OK") {
                    this.list = res.data.data
                }

            }).catch((err) => {
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        }
    }
}
</script>
