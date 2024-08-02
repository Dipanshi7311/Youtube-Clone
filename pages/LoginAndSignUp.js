document.querySelector('.img__btn').addEventListener('click', function () {
    document.querySelector('.cont').classList.toggle('s--signup');
});

document.addEventListener("DOMContentLoaded",function () {
    const signUpButton=document.getElementById("Sign-Up_submit")

    signUpButton.addEventListener("click",function(){
        const name=document.getElementById("Sign-Up_name").value
        const email=document.getElementById("Sign-Up_email").value
        const password=document.getElementById("Sign-Up_password").value

        const signUpDataObject={
            Name:name,
            Email:email,
            Password:password
        }

        localStorage.setItem('signUpDataKey',JSON.stringify(signUpDataObject))
        alert("sign-Up successfull")
        document.getElementById("Sign-Up_name").value=""
        document.getElementById("Sign-Up_email").value=""
        document.getElementById("Sign-Up_password").value=""
    })
})
document.addEventListener('DOMContentLoaded',function(){
    const signInButton=document.getElementById("Sign-In_Submit")

    signInButton.addEventListener("click",function(){
        const email=document.getElementById("Sign-In_email").value
        const password=document.getElementById("Sign-In_password").value

        const storedSignUpData=localStorage.getItem("signUpDataKey")
        if(storedSignUpData){
            const storedData=JSON.parse(storedSignUpData)

            if(email==storedData.Email && password==storedData.Password){
                window.location.href="index.html";
            }else{
                alert("Email or Password doesn't match.!!")
            }
        }else{
            alert("New user? Sign-Up and create account")
        }
    })
})