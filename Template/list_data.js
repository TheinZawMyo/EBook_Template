let book_list = [
    {
        'id' : 1,
        'name' : 'PHP special',
        'author': 'anyone',
        'detail' : 'php is the server side programming language. bar nyar'
    },
    {
        'id' : 2,
        'name' : 'Java special',
        'author': 'anyone',
        'detail' : 'php is the server side programming language. bar nyar'
    },
    {
        'id' : 3,
        'name' : 'C# special',
        'author': 'anyone',
        'detail' : 'php is the server side programming language. bar nyar'
    },
    {
        'id' : 4,
        'name' : 'React special',
        'author': 'anyone',
        'detail' : 'php is the server side programming language. bar nyar'
    },
    {
        'id' : 5,
        'name' : 'Vue special',
        'author': 'anyone',
        'detail' : 'php is the server side programming language. bar nyar'
    },
    {
        'id' : 6,
        'name' : 'PHP special',
        'author': 'anyone',
        'detail' : 'php is the server side programming language. bar nyar'
    },
    {
        'id' : 7,
        'name' : 'PHP special',
        'author': 'anyone',
        'detail' : 'php is the server side programming language. bar nyar'
    },
    {
        'id' : 8,
        'name' : 'PHP special',
        'author': 'anyone',
        'detail' : 'php is the server side programming language. bar nyar'
    },
]

let div = '';
book_list.forEach(item => {
    // console.log(item.id)
    div += `<div class="card">
                <div class="card_title">
                    <div class="card_img">
                        <img src="img/book.svg" alt="Book">
                    </div>
                </div>
                <div class="card_footer">
                    <div class='name'>${item.name}</div>
                    <div class='author'>${item.author}</div>
                </div>
            </div>`;
    document.getElementById('name').innerHTML = div;
})