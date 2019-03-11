function doTask() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve("success: -)");
        }, 1000);
        });
    
}

doTask().then((data) => console.log(data), (err) => console.log("Error:"+err));
