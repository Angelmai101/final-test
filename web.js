fetch("api2.json", {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*'
    }
  })
    .then((response) => response.json())
    .then((Data) => {
        console.log(Data);
        let html='';
        for(i = 0; i < Data.length; i++) {
            let htmlSegment = `
            
            <h2 class="heading">${Data[i].heading}</h2>
            <div class="container1"> 
            <h5 class="sub-title">${Data[i].subtitle}</h5>
            <img class="image" src="${Data[i].image}">
          </div>
                        `;

        html += htmlSegment;
    };

    let container = document.querySelector('.test');
    container.innerHTML = html;
    console.log(html)
    });