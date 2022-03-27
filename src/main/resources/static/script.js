




async function registerUser(){

    userData = {}
    userData.firstName = document.getElementById("fnameHTML").value;
    userData.lastName = document.getElementById("lnameHTML").value;
    userData.birthDate = document.getElementById("birthdateHTML").value;
    userData.email = document.getElementById("emailHTML").value;
    userData.password = document.getElementById("passwordHTML").value;

    let password2 = document.getElementById("passwordHTML2").value;

    if(password2 !== userData.password){
        alert("passwords don't match, enter again.");
        document.getElementById("passwordHTML2").value = "";
        document.getElementById("passwordHTML").value = "";
        return;
    }

        const rawResponse = await fetch('post2', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        //const content = await rawResponse.json();
       // console.log(content);
    alert("user registered!")
    window.location='index.html';
}


async function loginUser(){
    userData={}
    userData.email = document.getElementById("loginEmailHTML").value;
    userData.password = document.getElementById("passwordHTML").value;
    console.log("testing: "+JSON.stringify(userData))

    const rawResponse = await fetch('post3', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    const content = await rawResponse.text();
    console.log(content);

    if(content == 'true') {
        alert("login successful");
        window.location = 'homepage.html';
    }else {
        alert("login failed, try again.")
        document.getElementById("loginPasswordHTML").value = "";
    }

}


//jquery to toggle password when clik icon

    $('#togglePassword').on('click', function(){
        var passInput=$("#passwordHTML");


        if(passInput.attr('type') == 'password')
        {
            passInput.attr('type','text');
        }else{
            passInput.attr('type','password');
        }
    }
    )








