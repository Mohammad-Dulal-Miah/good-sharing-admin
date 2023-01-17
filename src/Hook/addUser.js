const addUser = (email)=>{


    const data  = findUser();
    localStorage.setItem("u" , JSON.stringify(email));
    

}


const findUser = ()=>{

    const user = localStorage.getItem("u");
    if(user){
        return JSON.parse(user)
    }
    else{
        return {}
    }
}

export{
    addUser,
    findUser
}