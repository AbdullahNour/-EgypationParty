$(document).ready(function () {
    
    $("#openNav").click(function () {
        $("#myNav").animate({ left: '0' }, 500);
        $("#openNav").animate({ left: '19%' }, 500);
        $("#main").animate({ left: '45%' }, 500);
    })

    $("#close").click(function () {
        let boxWidth = $("#myNav").outerWidth(true);
        $("#myNav").animate({ left: `-${boxWidth}px` }, 500);
        $("#openNav").animate({ left: '1%' }, 500);
        $("#main").animate({ left: '35%' }, 500);
    })

    let wScroll = $(window).scrollTop();

    $("a").click(function () {
        let aHref = $(this).attr("href");
        $("html,body").animate({ scrollTop: $(aHref).offset().top }, 1000)
    })


    $("#details h3").click(function () {
        $(this).next("div").slideToggle(500).not(this).siblings("div").slideUp(500);
    })
        ;


    function countDown() {
        let eventDate = (new Date("2020-09-25T12:00:00Z")).getTime();
        let currentDate = (new Date().getTime());
        let remTime = eventDate - currentDate;
        let d = new Date(remTime);
        $("#days").text("-" + d.getDay() + " D");
        $("#hours").text("0-" + d.getHours() + " h");
        $("#minutes").text("0-" + d.getMinutes() + " m");
        $("#seconds").text("0-" + d.getSeconds() + " s");
    }
    setInterval(countDown, 1000);

// validation part
    let maxLength = 100;
    $("textarea").keyup(function () {
        let enterLength = $(this).val().length;
        let characters = maxLength - enterLength;
        if (characters < 0) {
            $("#charNum").text("your available character finished");
            $("#charNum").siblings().text("");
            $("#formSubmit").attr("disabled","true");
        }
        else {
            $("#charNum").text(characters);
            $("#charNum").siblings().text(" Characyer Reamining");
            $("#formSubmit").removeAttr("disabled");
        }
    })



    $("#userName").keyup(function()
    {
        let userName = $(this).val();
        let userNameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        if(userNameRegex.test(userName) == false)
        {
            $("#formSubmit").attr("disabled","true");
        }
        else
        {
            $("#formSubmit").removeAttr("disabled");
        }
    })
    
    $("#userEmail").keyup(function()
    {
        let userEmail = $(this).val();
        let userEmailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        if(userEmailRegex.test(userEmail) == false)
        {
            $("#formSubmit").attr("disabled","true");
        }
        else
        {
            $("#formSubmit").removeAttr("disabled");
        }
    })

})




