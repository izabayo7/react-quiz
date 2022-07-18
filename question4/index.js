var server_echo;
var json = {
    json: JSON.stringify({
        a: 1,
        b: 2
    }),
    delay: 3
};
fetch('/echo/', {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
})
    .then(function (response) {
        /** In the line below, we must check if response is not undefined or null
         * to avoid errors in converting response to json in case of request error.
         * We must also ensure that response data has echo property if not server_echo can be set to empty array. 
         */
        server_echo = response.json().echo
        /**
         * In line below, consuming response.json() twice will cause an error
         * "body stream already read error" because the response body is already read and the stream is closed.
         * So, we must consume the response body only once or otherwise use response.clone() 
         */
        return response.json();
    })
    .then(function (result) {
        alert(result);
    })
    .catch(function (error) {
        console.log('Request failed', error);
    });
/** The line below will throw an error
 * TypeError: Cannot read properties of undefined (reading 'forEach')
 * This is because fetch is asynchronous hence the lines below will be executed while server_echo is still undefined.
 * To fix this we can put this line inside .then after setting server_echo or use async await.
 */
server_echo.forEach(
    element => console.log(element)
)
