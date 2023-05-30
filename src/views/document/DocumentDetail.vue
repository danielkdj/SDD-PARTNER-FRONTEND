<template>
  <div class="bg-white shadow-md rounded-md p-6">
    <h1 class="text-3xl font-bold mb-4">{{ documentDetail.title }}</h1>
<!--    <p class="mb-2">{{ documentDetail.id }}</p>-->
    <p class="mb-2">생성시간 : {{ documentDetail.createAt }}</p>
    <p class="mb-2">수정시간 : {{ documentDetail.modifiedAt }}</p>

    <div>
      <div>
        <div v-html="documentDetail.content"></div>
      </div>
    </div>

  </div>
  <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="deleteDetail">delete</button>
</template>

<script>
import Button from "@/views/components/button.vue";

export default {
  name: "DetailPage",
  components: {Button},
  data() {
    return {
      requestBody: {},
      documentDetail: {
        id: '',
        title: '',
        content: '',
        createAt: '',
        modifiedAt: '',
        empId: '',
      }
    }
  },
  methods: {
    getList() {
      let url = this.$serverUrl + "/document/" + this.$route.params.id
      this.$axios.get(url, {
        params: this.requestBody,
        headers: {}
      }).then((res) => {
        this.documentDetail = res.data;
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },

    deleteDetail() {
      let url = this.$serverUrl + "/document/" + this.$route.params.id
      this.$axios.delete(url, {
        params: this.requestBody,
        headers: {}
      }).then((res) => {
        this.$router.replace('/document');
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
  },
  mounted() {
    this.getList();
  }

};
</script>
