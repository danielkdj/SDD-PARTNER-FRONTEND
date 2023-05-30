<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="">
      <div class="container mx-auto flex items-center justify-between">
        <h1 class="text-2xl font-bold">문서함</h1>
        <button class="px-4 py-2 rounded bg-blue-500 text-white" @click="goToWrite()">
          Create Post
        </button>
      </div>
    </header>
    <!--        <tr v-for="(user, index) in filteredUsers" :key="index" @click="selectUser(user)">-->
    <!-- Main Content -->
    <main class="container">

      <div class="grid grid-cols-3 gap-4 mt-8" v-for="documentBox in documents" :key="documentBox.id">
        <div class="col-span-2 bg-white">
          <div class="border border-gray-300 rounded-md p-4">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-gray-400 rounded-full mr-4"></div>
              <div>
                <h3 class="text-lg font-bold">{{ documentBox.title }}</h3>
                <p class="text-gray-500">관리자</p>
              </div>
            </div>
            <p class="text-gray-700">
              <div v-html="documentBox.content" ></div>
<!--              {{ documentBox.content }}-->
            </p>
            <router-link :to="{ name: 'documentDetail', params: { id: documentBox.id } }">
              <button class="mt-4 px-4 py-2 rounded bg-blue-500 text-white">
                Read More
              </button>
            </router-link>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<style scoped>

</style>
<script>
export default {
  data() {
    return {
      requestBody:{},
      maxSummaryCharacters: 100,
      documents: [
        // {id: "123", title: "title 1", content: "aaa"},
        // {id: "333", title: "title 2", content: "bbb"},
        // {id: "445", title: "title 3", content: "xxx"},
        // {id: "144", title: "title 5", content: "ddd"},
        // {id: "1232", title: "title 1", content: "aaa"},
        // {id: "3333", title: "title 2", content: "bbb"},
        // {id: "4454", title: "title 3", content: "xxx"},
        // {id: "1445", title: "title 5", content: "ddd"},
      ]
    }
  },
  methods: {
    getList() {
      let url = this.$serverUrl + "/document"
      this.$axios.get(url, {
        params: this.requestBody,
        headers: {}
      }).then((res) => {
        this.documents = res.data;
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    goToWrite() {
      this.$router.push({
        path: '/documentWrite'
      })
    },
    gotoDetail(id) {
      this.requestBody.id = id
      this.$router.push({
        path: '/documentDetail',
        query: this.requestBody
      })
    },
  },
  mounted() {
    this.getList();
  }
}
</script>
