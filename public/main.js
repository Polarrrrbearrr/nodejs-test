console.log('aaa')

getCSS.onclick = () => {
    const request = new XMLHttpRequest
    request.open('GET', '/style.css');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                console.log('CSS load-Done')
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            } else {
                alert('fail to load')
            }

        }
    };
    request.send();
};




getJS.onclick = () => {

    const request = new XMLHttpRequest
    request.open('GET', '/2.js');
    request.onload = () => {
        console.log('JSdone')

        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)

    };
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest
    request.open('GET', '/1.html');
    request.onload = () => {
        console.log('newHTML DONE')
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    };
    request.send()
}


getXML.onclick = () => {
    const request = new XMLHttpRequest
    request.open('GET', '/1.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName("warning")[0].textContent;
            console.log(text.trim());
        }
    };
    request.send();
};


getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/1.json');
    request.onreadystatechange = () => {

        if (request.readyState === 4 && request.status === 200) {

            const object = JSON.parse(request.response)
            myName.textContent = object.name


        }

    };
    request.send()
};

let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", `/page${n + 1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n += 1
        }
    };
    request.send();
};