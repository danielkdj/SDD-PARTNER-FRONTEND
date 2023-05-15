<template>
    <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700" >
      <form>
          <div class="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" v-on:click="fnList" class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300-600">작성취소</button>
              <button type="button" v-on:click="fnSave" class="rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700-600">저장</button>
          </div>
          <div class="space-y-5">
              <div class="grid grid-cols-12 gap-4">
                  <label for="eduNo" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                      교육번호
                  </label>
                  <div class="col-span-10">
                      <input
                              type="text"
                              name="eduNo"
                              id="eduNo"
                              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                              placeholder=""
                              v-model="eduNo"
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
                  <label for="deptName" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                      소속부서
                  </label>
                  <div class="col-span-10">
                      <input
                              type="text"
                              name="deptName"
                              id="deptName"
                              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                              placeholder=""
                              v-model="deptName"
                              required
                              readonly
                      />
                  </div>
              </div>
              <div class="grid grid-cols-12 gap-4">
                  <label for="createAt" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                      작성일시
                  </label>
                  <div class="col-span-10">
                      <input
                              type="datetime-local"
                              name="createAt"
                              id="createAt"
                              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                              placeholder=""
                              v-model="createAt"
                              required
                              readonly
                      />
                  </div>
              </div>
              <div class="grid grid-cols-12 gap-4">
                  <label for="legId" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                      교육항목
                  </label>
                  <div class="col-span-10">
                      <select
                              type="text"
                              name="legId"
                              id="legId"
                              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                              v-model="legId"
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
                  <label for="eduTitle" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                      교육제목
                  </label>
                  <div class="col-span-10">
                      <input
                              type="text"
                              name="eduTitle"
                              id="eduTitle"
                              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                              placeholder=""
                              v-model="eduTitle"
                              required
                      />
                  </div>
              </div>
              <div class="grid grid-cols-12 gap-4">
                  <label for="eduStart" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                      교육일시
                  </label>
                  <div class="col-span-10">
                      <input
                              type="datetime-local"
                              name="eduStart"
                              id="eduStart"
                              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                              placeholder=""
                              v-model="eduStart"
                              required
                      />
                      ~
                      <input
                              type="datetime-local"
                              name="eduEnd"
                              id="eduEnd"
                              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                              placeholder=""
                              v-model="eduEnd"
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
                  <label for="eduCount" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                      교육인원
                  </label>
                  <div class="col-span-10">
                      <input
                              type="number"
                              name="eduCount"
                              id="eduCount"
                              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                              placeholder=""
                              v-model.number="eduCount"
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
          eduNo: this.$route.query.eduNo,
          writer: '작성자',
          deptName: '소속부서',
          createAt: '2023-02-18 23:24:00',
          legId: '4',
          institution: '교육기관',
          eduTitle: '교육제목',
          presenter: '교육진행자',
          location: '교육장소',
          description: '',
          eduCount: 23,
          eduStart: '2023-02-18 23:24:00',
          eduEnd: '2023-02-19 23:24:00',
      }
    },
    methods : {
      fnList(){
          delete this.requestBody.eduNo
          this.$router.push({
              path: './EduList',
              query: this.requestBody
          })
      },
      fnSave() {
          let apiUrl = this.$serverUrl + '/edu'
          this.form = {
              "eduNo" : this.eduNo,
              "writer": this.writer,
              "deptName": this.deptName,
              "createAt": this.createAt,
              "legId": this.legId,
              "institution": this.institution,
              "eduTitle": this.eduTitle,
              "presenter": this.presenter,
              "location": this.location,
              "description": this.description,
              "eduCount": this.eduCount,
              "eduStart": this.eduStart,
              "eduEnd": this.eduEnd,
          }

          if (this.eduNo === undefined) {
              //INSERT
              this.$axios.post(apiUrl, this.form)
                  .then((res) => {
                      alert('글이 저장되었습니다.')
                      this.fnView(res.data.eduNo)
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
                      this.fnView(res.data.eduNo)
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
