<template>
    <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700" >
      <form>
          <div class="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" v-on:click="fnList" class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300-600">작성취소</button>
              <button type="button" v-on:click="fnSave" class="rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700-600">저장</button>
          </div>
          <div class="space-y-5">
              <div class="grid grid-cols-12 gap-4">
                  <label for="edu_no" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                      교육번호
                  </label>
                  <div class="col-span-10">
                      <input
                              type="text"
                              name="edu_no"
                              id="edu_no"
                              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                              placeholder=""
                              v-model="edu_no"
                              required
                              readonly
                      />
                  </div>
              </div>
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
                              readonly
                      />
                  </div>
              </div>
              <div class="grid grid-cols-12 gap-4">
                  <label for="dept_name" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                      소속부서
                  </label>
                  <div class="col-span-10">
                      <input
                              type="text"
                              name="dept_name"
                              id="dept_name"
                              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                              placeholder=""
                              v-model="dept_name"
                              required
                              readonly
                      />
                  </div>
              </div>
              <div class="grid grid-cols-12 gap-4">
                  <label for="created_at" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                      작성일시
                  </label>
                  <div class="col-span-10">
                      <input
                              type="datetime-local"
                              name="created_at"
                              id="created_at"
                              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                              placeholder=""
                              v-model="created_at"
                              required
                              readonly
                      />
                  </div>
              </div>
              <div class="grid grid-cols-12 gap-4">
                  <label for="leg_id" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                      교육항목
                  </label>
                  <div class="col-span-10">
                      <select
                              type="text"
                              name="leg_id"
                              id="leg_id"
                              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                              v-model="leg_id"
                              required
                              aria-readonly="true"
                      >
                          <option disabled value="">-항목구분-</option>
                          <option value="1">산업안전보건교육</option>
                          <option value="2">성희롱예방교육</option>
                          <option value="3">개인정보보호교육</option>
                          <option value="4">장애인인식개선교육</option>
                          <option value="5">퇴직연금교육</option>
                      </select>
                  </div>
              </div>
              <div class="grid grid-cols-12 gap-4">
                  <label for="edu_title" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                      교육제목
                  </label>
                  <div class="col-span-10">
                      <input
                              type="text"
                              name="edu_title"
                              id="edu_title"
                              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                              placeholder=""
                              v-model="edu_title"
                              required
                      />
                  </div>
              </div>
              <div class="grid grid-cols-12 gap-4">
                  <label for="edu_start" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                      교육일시
                  </label>
                  <div class="col-span-10">
                      <input
                              type="datetime-local"
                              name="edu_start"
                              id="edu_start"
                              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                              placeholder=""
                              v-model="edu_start"
                              required
                      />
                      ~
                      <input
                              type="datetime-local"
                              name="edu_end"
                              id="edu_end"
                              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                              placeholder=""
                              v-model="edu_end"
                              required
                      />
                  </div>
              </div>
              <div class="grid grid-cols-12 gap-4">
                  <label for="institution" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                      교육기관
                  </label>
                  <div class="col-span-10">
                      <input
                              type="text"
                              name="institution"
                              id="institution"
                              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                              placeholder=""
                              v-model="institution"
                              required
                      />
                  </div>
              </div>
              <div class="grid grid-cols-12 gap-4">
                  <label for="presenter" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                      교육진행자
                  </label>
                  <div class="col-span-10">
                      <input
                              type="text"
                              name="presenter"
                              id="presenter"
                              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                              placeholder=""
                              v-model="presenter"
                              required
                      />
                  </div>
              </div>
              <div class="grid grid-cols-12 gap-4">
                  <label for="location" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                      교육장소
                  </label>
                  <div class="col-span-10">
                      <input
                              type="text"
                              name="location"
                              id="location"
                              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                              placeholder=""
                              v-model.number="location"
                              required
                      />
                  </div>
              </div>
              <div class="grid grid-cols-12 gap-4">
                  <label for="edu_count" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                      교육인원
                  </label>
                  <div class="col-span-10">
                      <input
                              type="number"
                              name="edu_count"
                              id="edu_count"
                              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                              placeholder=""
                              v-model.number="edu_count"
                              required
                      />
                  </div>
              </div>
              <div class="grid grid-cols-12 gap-4">
                  <label for="description" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                      내용
                  </label>
                  <div class="col-span-10">
                      <textarea id="description" name="description" v-model="description" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:ring-inset focus:border-primary sm:text-sm sm:leading-6"></textarea>
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
          edu_no: this.$route.query.edu_no,
          writer: '작성자',
          dept_name: '소속부서',
          created_at: '2023-02-18 23:24:00',
          leg_id: '4',
          institution: '교육기관',
          edu_title: '교육제목',
          presenter: '교육진행자',
          location: '교육장소',
          description: '',
          edu_count: 23,
          edu_start: '2023-02-18 23:24:00',
          edu_end: '2023-02-19 23:24:00',
      }
    },
    methods : {
      fnList(){
          delete this.requestBody.edu_no
          this.$router.push({
              path: './EduList',
              query: this.requestBody
          })
      },
      fnSave() {
          let apiUrl = this.$serverUrl + '/edu'
          this.form = {
              "edu_no" : this.edu_no,
              "writer": this.writer,
              "dept_name": this.dept_name,
              "created_at": this.created_at,
              "leg_id": this.leg_id,
              "institution": this.institution,
              "edu_title": this.edu_title,
              "presenter": this.presenter,
              "location": this.location,
              "description": this.description,
              "edu_count": this.edu_count,
              "edu_start": this.edu_start,
              "edu_end": this.edu_end,
          }

          if (this.edu_no === undefined) {
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
