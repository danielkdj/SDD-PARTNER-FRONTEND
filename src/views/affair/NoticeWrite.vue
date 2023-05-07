<template>
    <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700" >
      <form>
          <div class="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" v-on:click="fnlist" class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300-600">작성취소</button>
              <button type="button" v-on:click="fnSave" class="rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700-600">저장</button>
          </div>
        <div class="space-y-5">
          <div class="grid grid-cols-12 gap-4">
              <label for="writer" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                  작성자
              </label>
              <div class="col-span-10">
                  <input
                          type="text"
                          name="writer"
                          id="writer"
                          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                          placeholder=""
                          v-model="writer"
                          required
                  />
              </div>
          </div>            <div class="grid grid-cols-12 gap-4">
              <label for="created_at" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                  작성일시
              </label>
              <div class="col-span-10">
                  <input
                          type="text"
                          name="created_at"
                          id="created_at"
                          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                          placeholder=""
                          v-model="created_at"
                          required
                  />
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
            <label for="contents" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                내용
            </label>
            <div class="col-span-10">
                <textarea id="contents" name="contents" v-model="contents" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:ring-inset focus:border-primary sm:text-sm sm:leading-6"></textarea>
            </div>
        </div>
        </div>
      </form>
    </div>
</template>

<script>
  export default {
    data() { //변수생성
      return {
          requestBody: this.$route.query,
          notice_no: this.$route.query.idx,
          title: '',
          writer: '작성자',
          contents: '',
          created_at: new Date().toLocaleString(),
      }
    },
    methods : {
      fnlist(){
          delete this.requestBody.notice_no
          this.$router.push({
              path: './NoticeList',
              query: this.requestBody
          })
      },
      fnSave() {
          let apiUrl = this.$serverUrl + '/notice'
          this.form = {
              "notice_no": this.notice_no,
              "writer": this.author,
              "title": this.title,
              "contents": this.contents,
          }

          if (this.idx === undefined) {
              //INSERT
              this.$axios.post(apiUrl, this.form)
                  .then((res) => {
                      alert('글이 저장되었습니다.')
                      this.fnView(res.data.idx)
                  }).catch((err) => {
                  if (err.message.indexOf('Network Error') > -1) {
                      alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                  }
              })
          } else {
              //UPDATE
              this.$axios.patch(apiUrl, this.form)
                  .then((res) => {
                      alert('글이 저장되었습니다.')
                      this.fnView(res.data.idx)
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
