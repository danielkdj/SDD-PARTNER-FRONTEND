<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
    components: {
        FullCalendar // make the <FullCalendar> tag available
    },
    data() {
        return {
            calendarOptions: {
                plugins: [ dayGridPlugin, interactionPlugin ],
                height: 650,
                initialView: 'dayGridMonth',
                dateClick: this.handleDateClick,
                events: [
                    { title: 'event 1', date: '2023-05-01' },
                    { title: 'event 2', date: '2023-05-02' }
                ]
            }
        }
    },
    methods: {
        handleDateClick: function(arg) {
            alert('date click! ' + arg.dateStr)
        }
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
