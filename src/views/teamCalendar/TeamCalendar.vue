<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
    components: {
        FullCalendar
    },
    data() {
        return {
            calendarOptions: {
                plugins: [ dayGridPlugin, interactionPlugin ],
                height: 650,
                initialView: 'dayGridMonth',
                dateClick: this.handleDateClick,
                events: [
                    // { title: 'event 1', date: '2023-05-01' },
                    // { title: 'event 2', date: '2023-05-02' }
                ]
            }
        }
    },
    methods: {
        handleDateClick: function(arg) {
            alert('date click! ' + arg.dateStr)
        },
      getList() {
        let url = this.$serverUrl + "/teamCalendar"
        this.$axios.get(url, {
          params: this.requestBody,
          headers: {}
        }).then((res) => {
          this.events = res.data;
        }).catch((err) => {
          if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          }
        })
      }
    },
  mounted() {
    this.getList();
  }
}
</script>

<style scoped>
    #calendar {
        max-width: 1100px;
        margin: 40px auto;
    }
</style>
<template>
    <FullCalendar :options="calendarOptions" id="calendar" />
</template>
