<template>
  <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700"
  >
    <div class="mt-6 flex items-center justify-end gap-x-6">
        <select
                name=""
                id=""
                class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
        >
            <option value="">-선택-</option>
            <option value="title">제목</option>
            <option value="dept_name">소속</option>
            <option value="status">상태</option>
        </select>
        <div class="flex flex-no-shrink items-center">
          <button
              class="text-gray-500 lg:hidden ml-3 block"
              @click="$emit('sidebarToggle', true)"
          >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="2em"
                height="2em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
                />
              </svg>
            </button>
            <div
                class="input-box border dark:bg-gray-900 lg:ml-0 ml-5 dark:border-gray-700 rounded-md hidden lg:w-search w-full box-border lg:flex md:flex focus-within:bg-gray-100 dark:focus-within:bg-gray-700"
            >
          <span class="text-3xl p-2 text-gray-400"
          ><Icon icon="ei:search"
          /></span>
                <input
                  type="text"
                  placeholder="Search..."
                  class="p-3 w-full bg-white dark:bg-gray-900 dark:text-gray-400 rounded-md outline-none focus:bg-gray-100 dark:focus:bg-gray-700"
                />
            </div>
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
import { Icon } from "@iconify/vue";

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
}
</script>
