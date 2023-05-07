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
            name="dept_name"
            id="dept_name"
            class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
        >
        <option disabled value="">-소속-</option>
        <option value="D1">1팀</option>
        <option value="D2">2팀</option>
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
        <button type="submit" v-on:click="fnSearch" class="rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300">검색</button>
        <button type="submit" v-on:click="fnUpdate" class="rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300">수정</button>
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
            귀속연도
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
              이수여부<input type="checkbox" id="selectAllCheckbox" @click="allSelected"/>
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
              {{ items.com_id }}
          </td>
          <td class="px-6 py-4">
              {{ items.imputed_year }}
          </td>
          <td class="px-6 py-4">
              {{ items.category }}
          </td>
          <td class="px-6 py-4">
              {{ items.emp_id }}
          </td>
          <td class="px-6 py-4">
              {{ items.dept_name }}
          </td>
          <td class="px-6 py-4">
              {{ items.tr1_completed }}
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
        com_id: 1,
        category: '항목구분',
        emp_id: '작성자',
        dept_name: '소속부서',
        imputed_year: 2023,
        tr1_completed:'N',
        tr2_completed:'N',
        tr3_completed:'N',
        tr4_completed:'N',
        tr5_completed:'N',
        tr6_completed:'N',
        tr7_completed:'N',
        tr8_completed:'N',
        },
        {
            com_id: 1,
            category: '항목구분',
            emp_id: '작성자',
            dept_name: '소속부서',
            imputed_year: 2023,
            tr1_completed:'N',
            tr2_completed:'N',
            tr3_completed:'N',
            tr4_completed:'N',
            tr5_completed:'N',
            tr6_completed:'N',
            tr7_completed:'N',
            tr8_completed:'N',
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
