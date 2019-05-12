// jQuery button click


$(() => {
    // let clicked = false;

    const getData = () => {
        $.getJSON('https://jsonplaceholder.typicode.com/users/1', 
        response => {
            const paragraf = $('<p>');
            const user = response;

            paragraf.html(`
            <span>User ID: ${user.id}</span><br />
            <span>User NAME: ${user.name}</span><br />
            <span>User WEBSITE: ${user.website}</span>
            `);
            $('button').after(paragraf);
        });
    }

    $('#button').click(() => {
        getData();
        // if (!clicked) {
        //     getData();
        //     clicked = true;
        // } else {
        //     return;
        // }
    })
})