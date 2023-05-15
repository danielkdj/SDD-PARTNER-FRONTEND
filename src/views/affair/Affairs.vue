<template>
  <!-- grid wrapper card -->
  <div class="wrapper-card grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-2 mt-5">
    <!-- card  -->
    <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex">
      <div class="p-2 max-w-sm">
        <div class="bg-blue-200 rounded-full w-14 h-14 text-lg p-3 text-blue-600 mx-auto">
          <span class="">
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="30px"
                    height="30px"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
            >
              <path
                      fill="currentColor"
                      d="M10 16V8a2 2 0 0 1 2-2h9V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-1h-9a2 2 0 0 1-2-2zm3-8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h9V8h-9zm3 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div class="block p-2 w-full">
        <p class="font-bold text-gray-900 dark:text-gray-200 text-xl">
            <a v-on:click="fnViewRoomList()">회의실 신청</a>
        </p>{{roomCount}}
        <h2 class="font-normal text-gray-400 text-md mt-1">{{ formatDate(roomDate) }}</h2>
      </div>
    </div>
    <!-- end card -->
    <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex">
      <div class="p-2 max-w-sm">
          <div class="bg-blue-200 rounded-full w-14 h-14 text-lg p-3 text-blue-600 mx-auto">
          <span class="">
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="30px"
                    height="30px"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
            >
              <path
                      fill="currentColor"
                      d="M5 22h14a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1h-3v-.777c0-2.609-1.903-4.945-4.5-5.198A5.005 5.005 0 0 0 7 7v1H4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2zm12-12v2h-2v-2h2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-2 3h2v2H7v-2z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div class="block p-2 w-full">
          <p class="font-bold text-gray-900 dark:text-gray-200 text-xl">
              <a v-on:click="fnViewCarList()">차량 신청</a>
          </p>{{carCount}}
          <h2 class="font-normal text-gray-400 text-md mt-1">{{ formatDate(carDate) }}</h2>
      </div>
    </div>
    <!-- end card -->
    <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex">
        <div class="p-2 max-w-sm">
            <div class="bg-blue-200 rounded-full w-14 h-14 text-lg p-3 text-blue-600 mx-auto">
        <span class="">
          <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="30px"
                  height="30px"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32"
          >
            <path
                    fill="none"
                    d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z"
            />
            <path
                    fill="currentColor"
                    d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z"
            />
          </svg>
        </span>
            </div>
        </div>

      <div class="block p-2 w-full">
          <p class="font-bold text-gray-900 dark:text-gray-200 text-xl">
              <a v-on:click="fnViewEdu()">미이수 인원</a>
          </p>{{eduCount}}
          <h2 class="font-normal text-gray-400 text-md mt-1">{{ formatDate(eduDate) }}</h2>
      </div>
    </div>
      <!-- end card -->
  </div>
    <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700">
        <h2 class="font-bold text-gray-900 dark:text-gray-200 text-xl">공지사항</h2>
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
                        제목
                    </th>
                    <th
                            scope="col"
                            class="uppercase px-6 py-3"
                    >
                        작성자
                    </th>
                    <th
                            scope="col"
                            class="uppercase px-6 py-3"
                    >
                        작성일시
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
                        v-for="items in noticeTable"
                        :key="items.transaction"
                >
                    <td class="px-6 py-2">
                        {{ items.noticeNo }}
                    </td>
                    <td class="px-6 py-4">
                        <a v-on:click="fnViewNotice(`${items.noticeNo}`)">{{ items.title }}</a>
                    </td>
                    <td class="px-6 py-4">
                        {{ items.writer }}
                    </td>
                    <td class="px-6 py-4">
                        {{ items.createdAt }}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700">
      <h2 class="font-bold text-gray-900 dark:text-gray-200 text-xl">신청내역</h2>
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
                    v-for="items in roomAndCarTable"
                    :key="items.transaction"
            >
                <td class="px-6 py-2">
                    {{ items.docNo }}
                </td>
                <td class="px-6 py-4">
                    {{ items.subCategory }}
                </td>
                <td class="px-6 py-4">
                    <a v-if="items.sub_category === '회의실'"
                    v-on:click="fnViewRoom(`${items.docNo}`)">{{ items.title }}</a>
                    <a v-else
                    v-on:click="fnViewCar(`${items.docNo}`)">{{ items.title }}</a>
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
                  <span class="text-green-800 bg-green-300 px-3 py-1 rounded-md"
                          v-if="items.status === 1" >
                    처리 전
                  </span>
                  <span class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md"
                          v-else-if="items.status === 2" >
                    반려
                  </span>
                  <span class="text-red-800 bg-red-300 px-3 py-1 rounded-md"
                          v-else >
                  승인
                  </span>
                </td>
            </tr>
            </tbody>
        </table>
      </div>
    </div>
</template>

<script>
import moment from 'moment';
export default {
    name: "Affairs",
    data(){
        return{
            requestBody: this.$route.query,
            roomCount: 3,
            roomDate: '2023-05-06 23:24:00',
            carCount: 4,
            carDate: '2023-05-01 23:24:00',
            eduCount: 35,
            eduDate: '2023-05-04 23:24:00',

            noticeTable: [
                {
                    noticeNo: 1,
                    title: '제목',
                    writer: '작성자',
                    contents: '내용',
                    createdAt: '작성일시',
                },
                {
                    noticeNo: 2,
                    title: '제목',
                    writer: '작성자',
                    contents: '내용',
                    createdAt: '작성일시',
                },
            ],
            roomAndCarTable: [
                {
                    docNo: 1,
                    subCategory: '차량',
                    title: '제목',
                    writer: '작성자',
                    deptName: '소속부서',
                    createdAt:'2023-05-04 23:24:00',
                    startDate:'2023-05-05 23:24:00',
                    endDate:'2023-05-05 23:24:00',
                    status: 1
                },
                {
                    docNo: 2,
                    subCategory: '회의실',
                    title: '제목',
                    writer: '작성자',
                    deptName: '소속부서',
                    createdAt: '2023-05-03 23:24:00',
                    startDate: '2023-05-03 23:24:00',
                    endDate: '2023-05-03 23:24:00',
                    status: 2
                },
            ]
        }
    },
    methods: {
        formatDate(date) {
            const now = moment();
            const dateObj = moment(date, 'YYYY-MM-DD HH:mm:ss');
            const diffInDays = now.diff(dateObj, 'days');
            const diffInHours = now.diff(dateObj, 'hours');

            if (diffInDays === 0) {
                return `${diffInHours} hours`;
            } else if (diffInDays === 1) {
                return 'yesterday';
            } else if (diffInDays < 30){
                return `${diffInDays} days`;
            } else {
                return `months`;
            }
        },
        fnViewNotice(noticeNo){
            this.requestBody.noticeNo = noticeNo
            this.$router.push({
                path: './NoticeDetail',
                query: this.requestBody
            })
        },
        fnViewRoom(docNo){
            this.requestBody.docNo = docNo
            this.$router.push({
                path: './RoomApprove',
                query: this.requestBody
            })
        },
        fnViewCar(docNo){
            this.requestBody.docNo = docNo
            this.$router.push({
                path: './CarApprove',
                query: this.requestBody
            })
        },
        fnViewCarList(){
            this.$router.push({
                path: './CarList',
                query: this.requestBody
            })
        },
        fnViewRoomList(){
            this.$router.push({
                path: './RoomList',
                query: this.requestBody
            })
        },
        fnViewEdu(){
            this.$router.push({
                path: './EduCompletion',
                query: this.requestBody
            })
        }
    }
}
</script>

<style scoped>

</style>