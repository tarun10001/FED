$(function () {
    $("#item").click(function (e) {
        $("#submenu").slideToggle();
    });
    $("#submenu").click(function (e) {
        console.log(e.relatedTarget);
        $('#item span').text(e.target.text);
        $("#submenu").slideUp();
    });
});



let count = 0;
$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "https://dummyjson.com/users",

        success: function(data) {
            $.map(data.users, ({ firstName, lastName, image, age}) => {
                        if (count >= 8) {
                            $('.btnT').click(function (e) {
                                $('.btnT').hide();
                                $('.row').append(`
                <div class="card mx-3">
        
                            <img class="card-img-top"
                                src=${image}
                                alt="Card image cap">
                                <div class="data">
                                    <h5 class="card-title">
                                        ${firstName} ${lastName}
                                    </h5>  
                                    <div id="demo"></div>
                                    <h6>Age : ${age}</h6>
                                </div>
                        </div>`
                                )
                                count++
                            })
                        }
                        else {
                            count++;  
                            $('.row').append(`
                        <div class="card mx-3">
                                    <img class="card-img-top"
                                        src=${image}
                                        alt="Card image cap">
                                        <div class="data">
                                            <h5 class="card-title">
                                                ${firstName} ${lastName}
                                            </h5>  
                                            <div id="demo"></div>
                                            <h6>Age : ${age}</h6>
                                        </div>
                                </div>`
                            )
                        }
                          
                    })
        },
    
        error: function(error) {
            console.log(error)
        },

        beforeSend: function() {
            $("#loading").show();
        },
        complete: function() {
            $("#loading").hide();
        }
    })
})






    // $.get("https://dummyjson.com/users", function (data, status) {
    //     $.map(data.users, ({ firstName, lastName, image, age, id }) => {
    //         if (count === 8 || count > 8) {
    //             $('.btnT').click(function (e) {
    //                 $('.row').append(`
    // <div class="card mx-3" style="width: 18rem;">
    //             <img class="card-img-top"
    //                 src=${image}
    //                 alt="Card image cap">
    //                 <div class="data">
    //                     <h5 class="card-title">
    //                         ${firstName} ${lastName}
    //                     </h5>  
    //                     <div id="demo"></div>
    //                     <h6>Age : ${age}</h6>
    //                 </div>
    //         </div>`
    //                 )
    //             })
    //             // a++;
    //             // console.log(a)
    //             // console.log(data.users.length)
    //             // if(data.users.length ===a)
    //             // {
    //             //     alert('hiii');
    //             //     $('.btnT').css('display', 'none');
    //             // }



    //         }
    //         else {
    //             count++;
    //             $('.row').append(`
    //         <div class="card mx-3" style="width: 18rem;">
    //                     <img class="card-img-top"
    //                         src=${image}
    //                         alt="Card image cap">
    //                         <div class="data">
    //                             <h5 class="card-title">
    //                                 ${firstName} ${lastName}
    //                             </h5>  
    //                             <div id="demo"></div>
    //                             <h6>Age : ${age}</h6>
    //                         </div>
    //                 </div>`
    //             )
    //             // 
    //             console.log(count)
    //             // if (data.users.length === count) {

    //             // }

    //         }


    //     })
    // })