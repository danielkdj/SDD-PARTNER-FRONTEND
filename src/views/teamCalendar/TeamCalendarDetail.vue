<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">일정 조회</h1>
    <template v-if="detail">
      <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">{{ detail.title }}</h1>
        <p>{{ detail.content }}</p>
        <p>시작일: {{ detail.start }}</p>
        <p>종료일: {{ detail.end }}</p>
        <p>색상: {{ detail.backgroundColor }}</p>
        <p>간단설명: {{ detail.description }}</p>
      </div>
    </template>
    <template v-else>
      <p>Loading...</p>
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