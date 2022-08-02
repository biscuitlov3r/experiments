let books = [];

$("#add").on("click", () => {
    books.push({
        title: $("#title").val(),
        author: $("#author").val(),
        year: Number($("#year").val()),
    });
});
$("#delete").on("click", () => {
    books.splice(Number($("#idtodel").val()), 1);
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
        if (book.title == $("#title").val()) {
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
        if (book.author == $("#author").val()) {
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
        if (book.year == Number($("#year").val())) {
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
                books[Number($("#id").val())].title
            }</h1><p>${books[Number($("#id").val())].author}<br>${
                books[Number($("#id").val())].year
            }</p></div>`
        )
    );
});
