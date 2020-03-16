$(document).ready(function() {
    
    $('#currentDay').text(moment().format('MMMM Do YYYY'))

    getTodo()
    $('.saveBtn').on('click', function(event) {
        event.preventDefault()
        var todo = $('#9am').val()
        localStorage.setItem('todo', todo)
        getTodo()
    })
    function getTodo() {
        var storedTodos = localStorage.getItem('todo')

        $('#9am').val(storedTodos)
    }
})