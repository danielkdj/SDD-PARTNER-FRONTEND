<template>
    <HomeLink :homeLink="homeLink"/>
    <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700" >
            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button v-on:click="fnUpdate" class="bg-amber-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">수정</button>
                <button v-on:click="fnDelete" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">삭제</button>
                <button v-on:click="fnList" class="bg-gray-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded mr-3">목록</button>
            </div>
        <form>
            <div class="space-y-5">
                <div class="grid grid-cols-12 gap-4">
                    <label for="noticeNo" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                        공지글 번호
                    </label>
                    <div class="col-span-10">
                        <p class="block py-2.5 px-0 w-4/5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                        >{{noticeNo}}</p>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-4">
                    <label for="writer" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                        작성자
                    </label>
                    <div class="col-span-10">
                        <p class="block py-2.5 px-0 w-4-5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                        >{{writer}}</p>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-4">
                    <label for="writer" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                        소속부서
                    </label>
                    <div class="col-span-10">
                        <p class="block py-2.5 px-0 w-4/5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                        >{{deptName}}</p>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-4">
                    <label for="createdAt" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                        작성일시
                    </label>
                    <div class="col-span-10">
                        <p class="block py-2.5 px-0 w-4/5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                        >{{createdAt}}</p>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-4">
                    <label for="title" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                        제목
                    </label>
                    <div class="col-span-10">
                        <p class="block py-2.5 px-0 w-4/5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                        >{{title}}</p>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-4">
                    <label for="contents" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                        내용
                    </label>
                    <div class="col-span-10">
                        <div v-html="content" rows="3" class="block w-4/5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:ring-inset focus:border-primary sm:text-sm sm:leading-6"></div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import HomeLink from "@/components/HomeLink.vue";

export default {
    components: {HomeLink},
    data() { //변수생성
        return {
            //link 변수
            homeLink: {
                name1: "Affair",
                name2: "NoticeList",
                name3: "NoticeDetail",
                link1: "/Affairs",
                link2: "/NoticeList",
                link3: "/NoticeDetail",
            },
            requestBody: this.$route.query,
            noticeNo: this.$route.query.noticeNo,
            title: '제목',
            writer: '작성자',
            content: '내용작성',
            createdAt: '작성일시',
            deptName : '소속부서',
        }
    },
      mounted() { //document.ready = window.upload역할과 동일
          this.fnGetView()
      },
      methods: {
        fnGetView() {
          this.$axios.get(this.$serverUrl + '/notice/' + this.noticeNo, { //비동기 방식으로 요청한다.= ajax
              params: this.requestBody
          }).then((res) => {
              this.title = res.data.title
              this.content = res.data.content.toString()
              this.createdAt = res.data.createdAt
              this.writer = res.data.name
              this.deptName = res.data.deptName
          }).catch((err) => {
              if (err.message.indexOf('Network Error') > -1) {
                  alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
              }
          })
        },
        fnList() {
          delete this.requestBody.noticeNo
          this.$router.push({
              path: './NoticeList',
              query: this.requestBody
          })
        },
        fnUpdate() {
          //글 수정페이지로 이동: requestBody에 noticeNo가 담겨있음.
          this.$router.push({
              path: './NoticeWrite',
              query: this.requestBody
          })
        },
        fnDelete() {
          if (!confirm("삭제하시겠습니까?")) return //취소 클릭시

          this.$axios.delete(this.$serverUrl + '/notice/' + this.noticeNo) //확인 클릭시
              .then(() => {
                  alert('삭제되었습니다.')
                  this.fnList();
              }).catch((err) => {
              console.log(err);
          })
        }

      }
};
</script>
