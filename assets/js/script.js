

function showAll(string)
{
    switch(string)
    {
        case 'all' : 
                    removeClassImg();

                    $('.one').removeClass("d-none");
                    $('.two').removeClass("d-none");
                    $('.three').removeClass("d-none");
                    $('.forth').removeClass("d-none");
                    $('.five').removeClass("d-none");
                    $('.six').removeClass("d-none");
                    
                    $('.one').addClass("img");
                    $('.two').addClass("img");
                    $('.three').addClass("img");
                    $('.forth').addClass("img");
                    $('.five').addClass("img");
                    $('.six').addClass("img");  

                    
                    $('#all').addClass("btn-primary");
                    $('#one').removeClass("btn-primary");
                    $('#two').removeClass("btn-primary");
                    $('#three').removeClass("btn-primary");
                    $('#forth').removeClass("btn-primary");
                    $('#five').removeClass("btn-primary");
                    $('#six').removeClass("btn-primary");
                    break;
                    
        case 'one' : 
                    removeClassImg();
                    $('.one').removeClass("d-none");
                    $('.two').addClass("d-none");
                    $('.three').addClass("d-none");
                    $('.forth').addClass("d-none");
                    $('.five').addClass("d-none");
                    $('.six').addClass("d-none");

                    $('.one').addClass("img");


                    
                    $('#all').removeClass("btn-primary");
                    $('#one').addClass("btn-primary");
                    $('#two').removeClass("btn-primary");
                    $('#three').removeClass("btn-primary");
                    $('#forth').removeClass("btn-primary");
                    $('#five').removeClass("btn-primary");
                    $('#six').removeClass("btn-primary");
                    break;
                    
        case 'two' : 
        
                    removeClassImg();

                    $('.one').addClass("d-none");
                    $('.two').removeClass("d-none");
                    $('.two').addClass("img");
                    $('.three').addClass("d-none");
                    $('.forth').addClass("d-none");
                    $('.five').addClass("d-none");
                    $('.six').addClass("d-none");

                    $('#all').removeClass("btn-primary");
                    $('#one').removeClass("btn-primary");
                    $('#two').addClass("btn-primary");
                    $('#three').removeClass("btn-primary");
                    $('#forth').removeClass("btn-primary");
                    $('#five').removeClass("btn-primary");
                    $('#six').removeClass("btn-primary");
                    break;
                    
        case 'three' : 

                    removeClassImg();


                    $('.one').addClass("d-none");
                    $('.two').addClass("d-none");
                    $('.three').removeClass("d-none");
                    $('.three').addClass("img");
                    $('.forth').addClass("d-none");
                    $('.five').addClass("d-none");
                    $('.six').addClass("d-none");

                    $('#all').removeClass("btn-primary");
                    $('#one').removeClass("btn-primary");
                    $('#two').removeClass("btn-primary");
                    $('#three').addClass("btn-primary");
                    $('#forth').removeClass("btn-primary");
                    $('#five').removeClass("btn-primary");
                    $('#six').removeClass("btn-primary");
                    break;
                    
        case 'forth' : 
               
                    removeClassImg();
        

                    $('.one').addClass("d-none");
                    $('.two').addClass("d-none");
                    $('.three').addClass("d-none");
                    $('.forth').removeClass("d-none");
                    $('.forth').addClass("img");
                    $('.five').addClass("d-none");
                    $('.six').addClass("d-none");

                    $('#all').removeClass("btn-primary");
                    $('#one').removeClass("btn-primary");
                    $('#two').removeClass("btn-primary");
                    $('#three').removeClass("btn-primary");
                    $('#forth').addClass("btn-primary");
                    $('#five').removeClass("btn-primary");
                    $('#six').removeClass("btn-primary");
                    break;
                    
        case 'five' : 
                    
                    removeClassImg();


                    $('.one').addClass("d-none");
                    $('.two').addClass("d-none");
                    $('.three').addClass("d-none");
                    $('.forth').addClass("d-none");
                    $('.five').removeClass("d-none");
                    $('.five').addClass("img");
                    $('.six').addClass("d-none");

                    $('#all').removeClass("btn-primary");
                    $('#one').removeClass("btn-primary");
                    $('#two').removeClass("btn-primary");
                    $('#three').removeClass("btn-primary");
                    $('#forth').removeClass("btn-primary");
                    $('#five').addClass("btn-primary");
                    $('#six').removeClass("btn-primary");
                    break;
                    
        case 'six' : 

                    removeClassImg();


                    $('.one').addClass("d-none");
                    $('.two').addClass("d-none");
                    $('.three').addClass("d-none");
                    $('.forth').addClass("d-none");
                    $('.five').addClass("d-none");
                    $('.six').removeClass("d-none");
                    $('.six').addClass("img");
                    
                    $('#all').removeClass("btn-primary");
                    $('#one').removeClass("btn-primary");
                    $('#two').removeClass("btn-primary");
                    $('#three').removeClass("btn-primary");
                    $('#forth').removeClass("btn-primary");
                    $('#five').removeClass("btn-primary");
                    $('#six').addClass("btn-primary");
                    break;
                    
    }
}

function removeClassImg()
{
    $('.one').removeClass("img");
    $('.two').removeClass("img");
    $('.three').removeClass("img");
    $('.forth').removeClass("img");
    $('.five').removeClass("img");
    $('.six').removeClass("img");    
}