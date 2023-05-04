<template>
  notice list
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "RoomList",
  data() { //변수생성
    return {
      requestBody: this.$route.query,
      tableTransaction: [
        {
        idx: 1,
        sub_category: '항목구분',
        title: '제목',
        writer: '작성자',
        dept_name: '소속부서',
        created_at:'2023-05-04 23:24:00',
        start_date:'2023-05-05 23:24:00',
        end_date:'2023-05-05 23:24:00',
        status: '승인전',
        },

        {
        idx: 2,
        sub_category: '항목구분',
        title: '제목',
        writer: '작성자',
        dept_name: '소속부서',
        created_at: '2023-05-03 23:24:00',
        start_date: '2023-05-03 23:24:00',
        end_date: '2023-05-03 23:24:00',
        status: '반려',
        },
      ]
    }
  },
}
</script>
