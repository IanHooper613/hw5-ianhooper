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

    getTodoOne()
    $('.saveBtn').on('click', function(event) {
        event.preventDefault()
        var todo = $('#10am').val()
        localStorage.setItem('todo1', todo)
        getTodoOne()
    })
    function getTodoOne() {
        var storedTodos = localStorage.getItem('todo1')

        $('#10am').val(storedTodos)
    }

    getTodoTwo()
    $('.saveBtn').on('click', function(event) {
        event.preventDefault()
        var todo = $('#11am').val()
        localStorage.setItem('todo2', todo)
        getTodoTwo()
    })
    function getTodoTwo() {
        var storedTodos = localStorage.getItem('todo1')

        $('#11am').val(storedTodos)
    }

    getTodoThree()
    $('.saveBtn').on('click', function(event) {
        event.preventDefault()
        var todo = $('#12pm').val()
        localStorage.setItem('todo3', todo)
        getTodoThree()
    })
    function getTodoThree() {
        var storedTodos = localStorage.getItem('todo3')

        $('#12pm').val(storedTodos)
    }

    getTodoFour()
    $('.saveBtn').on('click', function(event) {
        event.preventDefault()
        var todo = $('#1pm').val()
        localStorage.setItem('todo4', todo)
        getTodoFour()
    })
    function getTodoFour() {
        var storedTodos = localStorage.getItem('todo4')

        $('#1pm').val(storedTodos)
    }

    getTodoFive()
    $('.saveBtn').on('click', function(event) {
        event.preventDefault()
        var todo = $('#2pm').val()
        localStorage.setItem('todo5', todo)
        getTodoFive()
    })
    function getTodoFive() {
        var storedTodos = localStorage.getItem('todo5')

        $('#2pm').val(storedTodos)
    }
    getTodoSix()
    $('.saveBtn').on('click', function(event) {
        event.preventDefault()
        var todo = $('#3pm').val()
        localStorage.setItem('todo6', todo)
        getTodoSix()
    })
    function getTodoSix() {
        var storedTodos = localStorage.getItem('todo6')

        $('#3pm').val(storedTodos)
    }

    getTodoSeven()
    $('.saveBtn').on('click', function(event) {
        event.preventDefault()
        var todo = $('#4pm').val()
        localStorage.setItem('todo7', todo)
        getTodoSeven()
    })
    function getTodoSeven() {
        var storedTodos = localStorage.getItem('todo7')

        $('#4pm').val(storedTodos)
    }

    getTodoEight()
    $('.saveBtn').on('click', function(event) {
        event.preventDefault()
        var todo = $('#5pm').val()
        localStorage.setItem('todo8', todo)
        getTodoEight()
    })
    function getTodoEight() {
        var storedTodos = localStorage.getItem('todo8')

        $('#5pm').val(storedTodos)
    }
})