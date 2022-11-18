import tokenService from "./Token/tokenService";


function signUp(user){
    return fetch("http://localhost:3020/user/new",{
        method:"POST",
        headers: new Headers({'content-Type': 'application/json'}),
        body: JSON.stringify(user)
    })
    .then(res => {
        if(res.ok) return res.json();
        throw new Error('NOOOO lol');
    })
    .then(({token}) => {
        tokenService.setToken(token)
    }
)}

function logIn(user){
    return fetch("http://localhost:3020/user/logIn",{
        method:"POST",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(user)
    })
    .then(res =>{
        if(res.ok) return res.json();
        throw new Error("nopeee")
    })
    .then(({token})=>{
        tokenService.setToken(token)
    })
}


function getUser(){
    return tokenService.getUserFromToken
}

function logOut(){
    tokenService.removeToken()
}

export default {
    signUp,
    getUser,
    logOut,
    logIn
}