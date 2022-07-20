

$(document).ready(function() {
    $("#hidden").hover(function() {
        $(this).css("color", "black");
    },
    function(){
        $(this).hide();
    });

    $("#thisbutton").click(function() {
        alert("Alerting you");
    })
    //Selectors 
    // $('#heading1').hide();
    
    $('p span').css('color', 'red');

    $('ul#list li:last').css('color','green');
    $('ul#list li:first').css('color','blue');
    $('ul#list li:even').css('background-color','#cccccc');

    $('ul#list li:nth-child(3n').css('list-style','none');

    $('[href]').css('color', 'red');
    $('a[href="http://yahoo.com"').css('color', 'green');



    // $(':button').hide();

});