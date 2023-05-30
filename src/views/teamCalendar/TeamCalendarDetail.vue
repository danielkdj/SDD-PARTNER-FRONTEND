<template>
  <div class="p-4">
    <h1 class="text-3xl font-bold mb-6 text-center">일정 조회</h1>
    <template v-if="detail">
      <div class="p-6 bg-white rounded-lg shadow-md">
        <h1 class="text-2xl font-bold mb-4">{{ detail.title }}</h1>
        <p class="text-lg mb-2">{{ detail.content }}</p>
        <div class="flex items-center mb-2">
          <svg class="w-5 h-5 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clip-rule="evenodd" />
          </svg>
          <p class="text-gray-600">{{ detail.start }} - {{ detail.end }}</p>
        </div>
        <p class="text-gray-600 mb-4">색상: <span class="inline-block w-4 h-4 rounded-full" :style="{ backgroundColor: detail.backgroundColor }"></span></p>
        <p class="text-gray-600">{{ detail.description }}</p>
      </div>
    </template>
    <template v-else>
      <p class="text-center">Loading...</p>
    </template>
  </div>
</template>


<script>
export default {
  data() {
    return {
      requestBody: {},
      detail: null
    };
  },
  methods: {
    getList() {
      let url = this.$serverUrl + "/employee/teamCalendar/" + this.$route.params.id;
      this.$axios
          .get(url, {
            params: this.requestBody,
            headers: { 'Cache-Control': 'no-store' }
          })
          .then((res) => {
            if (res.status === 200) {
              console.log(res.data);
              this.detail = res.data;
            } else {
              console.log("304 Not Modified");
              // Handle 304 response here if needed
            }
          })
          .catch((err) => {
            if (err.message.indexOf("Network Error") > -1) {
              alert("네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.");
            }
          });
    },
  },
  mounted() {
    this.getList();
  }
};
</script>