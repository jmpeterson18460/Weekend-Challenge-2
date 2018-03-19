$(document).ready(readyNow);

function readyNow(){
    console.log('jquery is running!');
    $('#add').on('click', addFunc);
    $('#subtract').on('click', subFunc);
    $('#multiply').on('click', multFunc);
    $('#divide').on('click', divFunc);
    $('#delete').on('click', clearHistory)
    
}

function addFunc(){
    let entry1 = $('#num1').val();
    let entry2 = $('#num2').val();
    let totalInfo = {num1: entry1, num2: entry2, operator: 'add'}

    $.ajax({
        type: 'POST',
        data: totalInfo,
        url: '/calculate'

    }).done(function(response){
        console.log('success!');
        getInfo();
        

    }).fail(function(response){
        alert("These aren't the files you're looking for...")
    })
}

function subFunc(){
    let entry1 = $('#num1').val();
    let entry2 = $('#num2').val();
    let totalInfo = {num1: entry1, num2: entry2, operator: 'subtract'}

    $.ajax({
        type: 'POST',
        data: totalInfo,
        url: '/calculate'

    }).done(function(response){
        console.log('success!');
        getInfo();

    }).fail(function(response){
        alert("These aren't the files you're looking for...")
    })
}

function multFunc(){
    let entry1 = $('#num1').val();
    let entry2 = $('#num2').val();
    let totalInfo = {num1: entry1, num2: entry2, operator: 'multiply'}

    $.ajax({
        type: 'POST',
        data: totalInfo,
        url: '/calculate'

    }).done(function(response){
        console.log('success!');
        getInfo();

    }).fail(function(response){
        alert("These aren't the files you're looking for...")
    })
}

function divFunc(){
    let entry1 = $('#num1').val();
    let entry2 = $('#num2').val();
    let totalInfo = {num1: entry1, num2: entry2, operator: 'divide'}

    $.ajax({
        type: 'POST',
        data: totalInfo,
        url: '/calculate'

    }).done(function(response){
        console.log('success!');
        getInfo();

    }).fail(function(response){
        alert("These aren't the files you're looking for...");
    })
}

function getInfo(){
    $.ajax({
        type: 'GET',
        url: '/retrieve'
    }).done(function(response){
        appendToDom(response);
    })
}

function appendToDom(intake){
    $('.win').empty();
    $('#listHistory').empty();
    for (numbers of intake){
        let li = $('<li></li>');
        let final = numbers.num1 + ' ' + numbers.symbol + ' ' + numbers.num2 + ' ' + '=' + ' ' + numbers.result;
        li.append(final);
        $('#listHistory').append(li);
    }
    let answer = intake[intake.length-1].result;
    $('.win').append(answer);
    
}

function clearHistory(){
    $.ajax({
        type: 'POST',
        url: '/delete'
    }).done(function(response){
        console.log('History cleared!');
        $('#listHistory').empty();
        $('.win').empty();
        $('#num1').val('');
        $('#num2').val('');

        
    }).fail(function(response){
        alert("These aren't the files you're looking for...");
    })
}