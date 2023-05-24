<template>
    <HomeLink :homeLink="homeLink"/>
    <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700" >
        <div class="mt-6 flex items-center justify-end gap-x-6">
            <button v-on:click="fnSave" class="bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded ">저장</button>
            <button v-on:click="fnList" class="bg-gray-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded mr-3">목록</button>
        </div>
    <form>
      <div class="space-y-5">
        <div class="grid grid-cols-12 gap-4">
          <label for="writer" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              작성자
          </label>
            <div class="col-span-10">
                <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                >{{writer}}</p>
            </div>
        </div>            <div class="grid grid-cols-12 gap-4">
            <label for="createdAt" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                작성일시
            </label>
          <div class="col-span-10">
              <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              >{{createdAt}}</p>
          </div>
        </div>
          <div class="grid grid-cols-12 gap-4">
            <label for="title" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                제목
            </label>
            <div class="col-span-10">
                <input
                        type="text"
                        name="title"
                        id="title"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                        placeholder=""
                        v-model="title"
                        required
                />
            </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="content" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              내용
          </label>

          <div class="col-span-10">
              <div id="ckeditor">
                  <ckeditor :editor="editor" v-model="content" :config="editorConfig"></ckeditor>
              </div>
          </div>
      </div>
      </div>
    </form>
  </div>
</template>

<script>
  import HomeLink from "@/components/HomeLink.vue";
  import Editor from 'ckeditor5-custom-build/build/ckeditor';

  export default {
    components: {HomeLink},
    data() { //변수생성
      return {
        //link 변수
        homeLink: {
          name1: "Affair",
          name2: "NoticeList",
          name3: "NoticeWrite",
          link1: "/Affairs",
          link2: "/NoticeList",
          link3: "/NoticeWrite",
        },
        requestBody: this.$route.query,
        noticeNo: this.$route.query.noticeNo,
        title: '',
        writer: '',
        content: '',
        createdAt: '',

        //Editor 변수
        editor: Editor,
        editorData: '',
        editorConfig: {
          language: 'ko',
        },

      }
    },
    mounted() { //document.ready = window.upload역할과 동일
      this.fnGetView()
    },
    methods : {
      fnGetView() {
        if (this.noticeNo !== undefined) {
          this.$axios.get(this.$serverUrl + '/notice/' + this.noticeNo, {
            params: this.requestBody
          }).then((res) => {
            this.title = res.data.title
            this.content = res.data.content.toString()
            this.createdAt = res.data.createdAt
            this.writer = res.data.users.userName
          }).catch((err) => {
            console.log(err)
          })
        }
      },
      fnView(noticeNo) {
        this.requestBody.noticeNo = noticeNo
        this.$router.push({
          path: './NoticeDetail',
          query: this.requestBody
        })
      },
      fnList(){
          delete this.requestBody.noticeNo
          this.$router.push({
              path: './NoticeList',
              query: this.requestBody
          })
      },
      fnSave() {
          this.form = {
              "title": this.title,
              "content": this.content,
          }
        if (this.noticeNo === undefined) {
          //INSERT
          this.$axios.post(this.$serverUrl + '/notice', this.form)
            .then((res) => {
              alert('글이 저장되었습니다.')
              this.fnView(res.data.noticeNo)
            }).catch((err) => {
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
            }
          })
        }else{
          //UPDATE
          this.$axios.patch(this.$serverUrl + '/notice/' + this.noticeNo, {title: this.title, content: this.content})
            .then((res) => {
                alert('글이 수정되었습니다.')
              this.fnView(res.data.noticeNo)
            }).catch((err) => {
            if (err.message.indexOf('Network Error') > -1) {
                alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
            }
          })
        }
      }
    }
  };
</script>
