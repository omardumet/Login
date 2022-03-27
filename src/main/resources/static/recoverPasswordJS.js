


async function getPassword(){
    let userEmail = {};
    userEmail.email = $("#recoverUserEmail").val();
    console.log('testing: '+ JSON.stringify(userEmail))


   const rawResponse = await fetch('post4', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userEmail)
    });

    const content = await rawResponse.text();

    console.log("testing: "+content);

    $("#generatedPassword").text("Your password is: "+content)


}