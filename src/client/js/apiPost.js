const updateUI = async (requestOptions) => {
    console.log(requestOptions)
    const response =await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    try{
        // Post to API
        const recentData = await response.json();
        // Update HTML
        console.log(recentData)
        document.getElementById('results').innerHTML ='confidence:' + recentData.confidence
      }catch(error){
        console.log('error')
      }
}


async function apiCall(){
    console.log('abc')
    const request =fetch('http://localhost:8081/test2')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        const inputMessage = document.getElementById('name').value;
        //make input data for api
        const formdata = new FormData();
        formdata.append("key", data.key);
        // formdata.append("txt", "John is a very good football player!");
        formdata.append("txt", inputMessage);
        formdata.append("lang", "en");  // 2-letter code, like en es fr ...
        const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };
        console.log(data.key)
        //post to api
        updateUI(requestOptions)
    })
}

export { apiCall }
