$(document).ready(readyNow);

function readyNow(){
    console.log('jquery is running!');
    $('#add').on('click', addFunc);
    $('#subtract').on('click', subFunc);
    $('#multiply').on('click', multFunc);
    $('#divide').on('click', divFunc);
    
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

    }).fail(function(response){
        alert("These aren't the files you're looking for...")
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
    for (numbers of intake){
        let final = numbers.num1 + ' ' + numbers.symbol + ' ' + numbers.num2 + ' ' + '=' + ' ' + numbers.result;
        $('#result').append(' ' + numbers.result);
        $('.history').append(final);
    }
}