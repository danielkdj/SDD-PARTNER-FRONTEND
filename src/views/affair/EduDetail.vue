<template>
  <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700" >
    <form>
      <div class="mt-6 flex items-center justify-end gap-x-6">
          <button type="submit" v-on:click="fnUpdate" class="rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300-600">수정</button>
          <button type="button" v-on:click="fnDelete" class="rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700-600">삭제</button>
          <button type="button" v-on:click="fnList" class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700-600">목록</button>
      </div>
      <div class="space-y-5">
        <div class="grid grid-cols-12 gap-4">
          <label for="edu_no" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              교육번호
          </label>
          <div class="col-span-10">
            <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
            >{{edu_no}}</p>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="writer" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              작성자
          </label>
          <div class="col-span-10">
              <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              >{{writer}}</p>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
            <label for="dept_name" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                소속부서
            </label>
            <div class="col-span-10">
                <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                >{{dept_name}}</p>
            </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="created_at" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              작성일시
          </label>
          <div class="col-span-10">
              <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              >{{created_at}}</p>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="leg_id" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              교육항목
          </label>
          <div class="col-span-10">
              <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              >{{leg_name}}</p>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="edu_title" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              교육제목
          </label>
          <div class="col-span-10">
              <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              >{{edu_title}}</p>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="edu_start" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              교육일시
          </label>
          <div class="col-span-10">
              <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              >{{edu_start}} ~ {{edu_end}}</p>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="institution" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              교육기관
          </label>
          <div class="col-span-10">
              <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              >{{institution}}</p>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="presenter" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              교육진행자
          </label>
          <div class="col-span-10">
              <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              >{{presenter}}</p>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="location" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              교육장소
          </label>
          <div class="col-span-10">
              <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              >{{location}}</p>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="edu_count" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              교육인원
          </label>
          <div class="col-span-10">
              <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              >{{edu_count}}</p>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <label for="description" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
              내용
          </label>
          <div class="col-span-10">
              <textarea rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:ring-inset focus:border-primary sm:text-sm sm:leading-6">{{description}}</textarea>
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
          leg_name:'',
          requestBody: this.$route.query,
          edu_no: this.$route.query.edu_no,
          writer: '작성자',
          dept_name: '소속부서',
          created_at: '2023-02-18 23:24:00',
          leg_id: 4,
          institution: '교육기관',
          edu_title: '교육제목',
          presenter: '교육진행자',
          location: '교육장소',
          description: '내용',
          edu_count: '23',
          edu_start: '2023-02-18 23:24:00',
          edu_end: '2023-02-19 23:24:00',
      }
    },
    mounted() { //document.ready = window.upload역할과 동일
        //this.fnGetView()
        this.setLegName()
    },
  //   fnGetView() {
  //     this.$axios.get(this.$serverUrl + '/board/' + this.idx, { //비동기 방식으로 요청한다.= ajax
  //       params: this.requestBody
  //     }).then((res) => {
  //       this.title = res.data.title
  //       this.author = res.data.author
  //       this.contents = res.data.contents
  //       this.created_at = res.data.created_at
  //     }).catch((err) => {
  //       if (err.message.indexOf('Network Error') > -1) {
  //           alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
  //       }
  //     })
  //   },
    methods: {
      setLegName(){
          if(this.leg_id === 1){
              this.leg_name = '산업안전보건교육';
          }else if(this.leg_id === 2){
              this.leg_name = '성희롱예방교육';
          }else if(this.leg_id === 3){
              this.leg_name = '개인정보보호교육';
          }else if(this.leg_id === 4){
              this.leg_name = '장애인인식개선교육';
          }else if(this.leg_id === 5){
              this.leg_name = '퇴직연금교육';
          }
      },
      fnList() {
        delete this.requestBody.idx
        this.$router.push({
            path: './EduList',
            query: this.requestBody
        })
      },
      fnUpdate() {
        //글 수정이므로 idx를 전송함 : requestBody에 idx가 담겨있음. 이걸 query로 보냄
        this.$router.push({
            path: './EduWrite',
            query: this.requestBody
        })
      },
      fnDelete() {
        if (!confirm("삭제하시겠습니까?")) return //취소 클릭시

        this.$axios.delete(this.$serverUrl + '/edu/' + this.edu_no, {}) //확인 클릭시
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
