let books = [];

$("#add").on("click", () => {
    books.push({
        title: $("#title").val(),
        author: $("#author").val(),
        year: Number($("#year").val()),
    });
});
$("#delete").on("click", () => {
    console.log(Number($("#idtodel").val()));
    books.splice(Number($("#idtodel").val()), 1);
    console.log(books);
});
$("#read").on("click", () => {
    for (book of books) {
        $("body").append(
            $(
                `<div class='book'><h1>${book.title}</h1><p>${book.author}<br>${book.year}</p></div>`
            )
        );
    }
});
$("#modify").on("click", () => {
    books[Number($("#idtochange").val())] = {
        title: $("#title").val(),
        author: $("#author").val(),
        year: Number($("#year").val()),
    };
});
$("#searchbyname").on("click", () => {
    for (book of books) {
        if (book.title == $("#titlee").val()) {
            $("body").append(
                $(
                    `<div class='result'><h1>${book.title}</h1><p>${book.author}<br>${book.year}</p></div>`
                )
            );
        }
    }
});
$("#searchbyauthor").on("click", () => {
    for (book of books) {
        if (book.author == $("#authorr").val()) {
            $("body").append(
                $(
                    `<div class='result'><h1>${book.title}</h1><p>${book.author}<br>${book.year}</p></div>`
                )
            );
        }
    }
});
$("#searchbyyear").on("click", () => {
    for (book of books) {
        if (book.year == Number($("#yearr").val())) {
            $("body").append(
                $(
                    `<div class='result'><h1>${book.title}</h1><p>${book.author}<br>${book.year}</p></div>`
                )
            );
        }
    }
});
$("#searchbyid").on("click", () => {
    $("body").append(
        $(
            `<div class='result'><h1>${
                books[Number($("#idd").val())].title
            }</h1><p>${books[Number($("#idd").val())].author}<br>${
                books[Number($("#idd").val())].year
            }</p></div>`
        )
    );
});
