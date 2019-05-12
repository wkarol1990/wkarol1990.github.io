// Ajax JS warsztat button click

const button = document.getElementById("button");
let dataGlobal;

const getData = () => {
    const data = fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(response => {
        const user = response;
        dataGlobal = response;

        const paragraf = document.createElement('p');

        paragraf.innerHTML = `
            <span>User ID: ${user.id}</span><br />
            <span>User NAME: ${user.name}</span><br />
            <span>User WEBSITE: ${user.website}</span>
        `;

        button.insertAdjacentElement('afterend', paragraf);

        // 2 sposób

        // const userKeys = Object.keys(user);
        // userKeys.forEach(key => {
        //     const = paragraf = document.createElement('p');

        //     if (typeof user[key] === 'string') {
        //         paragraf.innerHTML = `
        //         ${key.toUpperCase()} : ${user[key]}
        //         `;
        //     }
        // })
    })
}

button.addEventListener("click", getData);
