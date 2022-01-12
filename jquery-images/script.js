$("button").click(function(){
    $(".container").toggle(1000);
});


$("img").click(function(){
    let src = $(this).attr("src");
    $(".container").css("display","none");
    $("#show").css(
        "background-image", `(${src})`
    )
})

