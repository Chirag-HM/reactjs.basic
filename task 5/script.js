document.getElementById("load-btn").addEventListener("click", () => {
    document.getElementById("status").innerText = "Loading . . ."

    let promise = new Promise((resolve, reject) => {
        if(Math.random() > 0.1){
        setTimeout(() => {
            resolve("data loaded");
        }, 2000)
    }else{
        setTimeout(() => {
            reject("Error in loading data");
        }, 2000)
    }
    })
    promise.then((data) =>{
        document.getElementById("status").innerText = data
    })
    promise.catch((data) =>{
        document.getElementById("status").innerText = error
    })
    promise.finally((data) =>{
        document.getElementById("status").innerText = "loading completed!!"
    })
})
