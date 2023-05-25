<template>
  <div class="wrapper-card grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-2 mt-5">
    <div class="mt-3 flex items-center justify-end gap-x-6">
      <button v-on:click="fnAllAdd" class="bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded mr-3">전체사원 이수목록 추가</button>
      <button v-on:click="fnNewAdd" class="bg-amber-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">신입사원 이수목록 추가</button>
    </div>
        <!-- card  -->
    <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex">
      <div class="block p-2 w-full">
          <p class="font-bold text-gray-900 dark:text-gray-200 text-xl">
              미이수 인원
          </p>
          <h2 class="font-normal text-gray-400 text-md mt-1"> </h2>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "RoomList",
  data() { //변수생성
    return {
      requestBody: this.$route.query,
    }
  },
    methods:{
        fnGetCount(){
          this.$axios.get(this.$serverUrl + "/com/count",{
            params: this. requestBody,
            headers: {}
          }).then((res)=>{
            this.tableTransaction = res.data
          }).catch((err) => {
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
            }
          })
        },
        fnAllAdd(){
            this.$axios.get(this.$serverUrl + "/com/allAdd",{
                params: this. requestBody,
                headers: {}
            }).then((res)=>{
                this.list = res.data.data
            }).catch((err) => {
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        },
        fnNewAdd(){
            if(confirm('신입사원을 목록에 추가하시겠습니까?')){
                console.log('수정');
              this.$axios.get(this.$serverUrl + "/com/newAdd",{
                params: this. requestBody,
                headers: {}
              }).then((res)=>{
                this.list = res.data.data
              }).catch((err) => {
                if (err.message.indexOf('Network Error') > -1) {
                  alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
              })
            }
        }
    },
  mounted() {
    //this.fnGetCount()
  }
}
</script>
