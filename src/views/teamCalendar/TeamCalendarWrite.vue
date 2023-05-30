<template>
    <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">일정 추가하기</h1>
        <form @submit.prevent="submit">
            <div class="mb-4">
                <label for="title" class="block text-gray-700 font-bold mb-2">제목</label>
                <input type="text" id="title" v-model="title" class="w-full border border-gray-400 p-2 rounded-md">
            </div>
            <div class="mb-4">
                <label for="content" class="block text-gray-700 font-bold mb-2">본문</label>
                <textarea class="appearance-none border border-gray-400 p-2 w-full h-full" id="content" v-model="content" required></textarea>
            </div>
            <div class="mb-4">
                <label for="start" class="block text-gray-700 font-bold mb-2">시작일</label>
                <input type="datetime-local" id="start" v-model="start" class="w-full border border-gray-400 p-2 rounded-md">
            </div>
            <div class="mb-4">
                <label for="end" class="block text-gray-700 font-bold mb-2">종료일</label>
                <input type="datetime-local" id="end" v-model="end" class="w-full border border-gray-400 p-2 rounded-md">
            </div>
            <div class="mb-4">
                <label for="backgroundColor" class="block text-gray-700 font-bold mb-2">색상</label>
                <input type="color" id="backgroundColor" v-model="backgroundColor" class="w-full border border-gray-400 p-2 rounded-md">
            </div>
            <div class="mb-4">
                <label for="description" class="block text-gray-700 font-bold mb-2">간단설명</label>
                <input type="text" id="description" v-model="description" class="w-full border border-gray-400 p-2 rounded-md">
            </div>
            <div class="mb-4">
                <label for="url" class="block text-gray-700 font-bold mb-2">링크</label>
                <input type="text" id="url" v-model="url" class="w-full border border-gray-400 p-2 rounded-md">
            </div>
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                작성
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "",
            content: "",
            start: "",
            end: "",
            backgroundColor: "",
            description: "",
            url: "",
          allDay:"",
          departmentNumber:""
        };
    },
    methods: {

        submit() {
            const datas = {
                title: this.title,
                content: this.content,
                start: this.start,
                end: this.end,
                backgroundColor: this.backgroundColor,
                description: this.description,
                url: this.url,
              allDay:"1",
              departmentNumber:"1"
            };
            console.log(datas);
          this.$axios.post(this.$serverUrl + '/employee/teamCalendar/',datas)
              .then((res) => {
                // alert('글이 저장되었습니다.')
                this.$router.replace('teamCalendar');

              }).catch((err) => {
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
            }
          })
        },
    },
};
</script>
