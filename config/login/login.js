function login() {

    console.log($('#userform').serialize());
    var $form = $('#userform');   
      $.ajax({
        url: "/login_secret",
        type: "POST",
        cache: false,
        data: $('#userform').serialize()
    })
        .done(function(response) {
            console.log(response);
            //$('body').html(txt);
            
            // document.open();
            // document.write(response);
            // document.close();


            let stateObj = { }; 
            let title = "";

            //history.pushState(stateObj, title, location.origin + '/'); 
                                  
    });
}

function admin() {

      
      $.ajax({
        url: "/admin",
        type: "GET",
        cache: false
    })
        .done(function(response) {
            //console.log(response);
            //$('body').html(txt);
            
            document.open();
            document.write(response);
            document.close();


            let stateObj = { }; // Can contain properties 
            let title = "";

            history.pushState(stateObj, title, location.origin + '/admin'); 
                                  
    });
}



$(document).ready(function(){
    $(document).on('click', "#loginbtn", login);  
    $(document).on('click', "#adminbtn", admin);

});