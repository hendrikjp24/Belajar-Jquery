// Untuk add konten ada 4 cara 
// a. append() b. prepend() c.after() d.before()



$(document).ready(()=>{
// a.append() => digunakan untuk menambahkan konten di akhir    
    $("ol").append("<li>Ini dibuat dengan append()</li>");

// b.prepend() => digunakan untuk menambahkan konten di awal
    $("ol").prepend("<li>Ini dibuat dengan prepend()</li>");

// c.after() => digunakan untuk menambahkan konten setelah tag yang dimaksud
// disini kita akan memasukkan setelah list item 2

    $("ol li:nth-child(3)").after("<li>Ini ditambahkan dengan menggunakan after()</li>");

// d.before() => digunakan untuk menambahkan konten sebelum tag/element yang dimaksud
// disini saya akan menambahkan paragraf sebelum ol

    $("ol").before("<p>Ini ditambahkan melalui before()</p>");


    // Untuk menghapus konten ada 2 cara

// a. remove() => digunakan untuk benar-benar menghapus konten
// disini saya akan menghapus item 3 dari list

    $("li:eq(4)").remove();

// b. empty() => digunakan untuk mengahpus element tetapi tidak benar" menghapusnya, disini akan saya contohkan pada tag h1
    $("h1").css({
        "backgroundColor" : "red",
        "width" : "100px",
        "height" : "100px"
    });
    // $("h1").css("background-color","red");
    // $("h1").css("width","100px");
    // $("h1").css("height","100px");
    $("h1").empty();
    
});
