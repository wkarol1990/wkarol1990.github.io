// 1. AJAX - fetch()

// fetch('https://jsonplaceholder.typicode.com/posts')
//    .then( response => response.json())
//    .then( response => console.log(response));

// 2. AJAX - $.get.JSON()

// $.getJSON(
//     'https://jsonplaceholder.typicode.com/posts',
//     response => {
//         console.log(response);
//     }
// )

// 3. AJAX - $.ajax() jQuery

// $.ajax({
//     url: "https://jsonplaceholder.typicode.com/users",
//     dataType: "json",
//     success: function (resultJSON) {
//         console.log(resultJSON);
//     },
//     onerror: function (msg) {
//         console.log(msg);
//     }
// });

// 4. AJAX - ajax() JS

const ajax = (method, url) => {
    // tworzymy obiekt
    let httpReq = new XMLHttpRequest();

    // otwieramy połączenie
    httpReq.open(method, url);

    // w momencie dotarcia do serwera
    httpReq.onreadystatechange = () => {

        // jeśli wszystko poszło pomyślnie i dane zastały zwrócone
        if (httpReq.readyState === 4 && httpReq.status === 200) {

            // wrzucamy gotowe dane do zmiennej
            let response = httpReq.responseText;

            // parsujemy JSON stringa do tablicy z obiektami
            response = JSON.parse(response);

            console.log(response);

            // rozłączamy  się z serwerem
            httpReq = null;
        }
    }

    // wysyłamy połączenie
    httpReq.send();
}

setInterval(() => {
    ajax('GET', 'https://jsonplaceholder.typicode.com/users');
}, 3000);
