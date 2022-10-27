$(document).ready(function(){
    // Menambahkan css lebih dari satu properti

    $("h1").click(function(){
        $("h1").css({
            'color' : "red",
            "backgorundColor" : "yellow",
            "fontSize" : "100px",
            "border" : "2px solid red",
            "display" : "inline-block",
            "margin" : "0px"
        });
    });

    $("h1").after("<p>Ini ditambahkan melalui jquery</p>");

    $("body").append("<h2 class='warna'>Ini ditambahkan dengan metode append</h2>");

    $(".list").before("<h3>Ini ditambahkan dengan menggunakan metode before</h3>");
    // menambahkan class

    $("p").addClass("warna");

    // menghapus class yang sudah ada

    $("h2").removeClass("warna");

    // mengecek otomatis class. jika sudah ada maka akan dihapus, jika belum ada maka akan ditambah
    // disini akan saya taruh triggernya pada  button submit

    $("form").submit(function(e){
        $("h3").toggleClass("warna");
        e.preventDefault();
    });
});