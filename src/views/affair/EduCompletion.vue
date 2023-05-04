<template>
  <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700"
  >
    <div class="mt-6 flex items-center justify-end gap-x-6">
        <select
                name=""
                id=""
                class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
        >
            <option disabled value="">-항목구분-</option>
            <option value="1">산업안전보건교육</option>
            <option value="2">성희롱예방교육</option>
            <option value="3">개인정보보호교육</option>
            <option value="4">장애인인식개선교육</option>
            <option value="5">퇴직연금교육</option>
        </select>
        <select
            name=""
            id=""
            class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
        >
        <option disabled value="">-이수여부-</option>
        <option value="Y">Y</option>
        <option value="N">N</option>
        </select>
        <button type="submit" v-on:click="fnUpdate" class="rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300-600">수정</button>
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
              소속부서
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
            이수여부
          </th>
          <th
            scope="col"
            class="uppercase px-6 py-3"
          >
            선택<input type="checkbox" id="selectAllCheckbox" @click="allSelected"/>
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
              {{ items.idx }}
          </td>
          <td class="px-6 py-4">
              {{ items.sub_category }}
          </td>
          <td class="px-6 py-4">
              {{ items.title }}
          </td>
          <td class="px-6 py-4">
              {{ items.writer }}
          </td>
          <td class="px-6 py-4">
              {{ items.dept_name }}
          </td>
          <td class="px-6 py-4">
              {{ items.created_at }}
          </td>
            <td class="px-6 py-4">
              {{ items.start_date }} ~ {{ items.end_date }}
          </td>
          <td class="px-6 py-4">
        <span
          class="text-green-800 bg-green-300 px-3 py-1 rounded-md"
          v-if="items.status == '승인'"
        >
          {{ items.status }}
        </span>
          <span
                  class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md"
                  v-else-if="items.status == '승인전'"
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
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoomList",
  data() { //변수생성
    return {
      requestBody: this.$route.query,
      tableTransaction: [
        {
        idx: 1,
        sub_category: '항목구분',
        title: '제목',
        writer: '작성자',
        dept_name: '소속부서',
        created_at:'2023-05-04 23:24:00',
        start_date:'2023-05-05 23:24:00',
        end_date:'2023-05-05 23:24:00',
        status: '승인전',
        },

        {
        idx: 2,
        sub_category: '항목구분',
        title: '제목',
        writer: '작성자',
        dept_name: '소속부서',
        created_at: '2023-05-03 23:24:00',
        start_date: '2023-05-03 23:24:00',
        end_date: '2023-05-03 23:24:00',
        status: '반려',
        },
      ]
    }
  },
    methods:{
        allSelected(){
/*            selectAllCheckbox = false;
            const Allcheckboxs = document.querySelectorAll('input[type="checkbox"]') //type으로 지정
            Allcheckboxs.forEach((checkbox) => {
                checkbox.checked = true;});*/
        }
    }
}
</script>
