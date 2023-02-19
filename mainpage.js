// async function getDatas() {
//     let url = 'api.json';
//     try {
//         let res = await fetch(url);
//         return await res.json();
//     } catch (error) {
//         console.log(error);
//     }
// }
// async function renderDatas() {
//     let Datas = await getDatas();
//     let html = '';
//     Datas.forEach(Data => {
//         let htmlSegment = `
//         <div class="${Data.card} mb-3 col-md-3">
//         <div class="row no-gutters">
//           <div class="col-md-4 img-zoom">
//             <img src="${Data.image}" class="card-img-top" alt="...">
//           </div>
//           <div class="col-md-8">
//             <div class="card-body">
//               <h5 class="card-title">${Data.title}</h5>
//               <i class="card-sub">${Data.italic}</i>
//               <p class="card-text">${Data.detail}</p>
//               <a href="${Data.href}" class="btn btn-primary">View More</a>
//             </div>
//           </div>
//         </div>
//       </div>
//                         `;

//         html += htmlSegment;
//     });

//     let container = document.querySelector('.example');
//     container.innerHTML = html;
// }

// renderDatas();


fetch("api.json", {
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
        <div class="${Data[i].card} mb-3 col-md-3">
        <div class="row no-gutters">
          <div class="col-md-4 img-zoom">
            <img src="${Data[i].img}" class="card-img-top" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${Data[i].title}</h5>
              <i class="card-sub">${Data[i].italic}</i>
              <p class="card-text">${Data[i].detail}</p>
              <a href="${Data[i].href}" class="btn btn-primary">View More</a>
            </div>
          </div>
        </div>
      </div>
                        `;

        html += htmlSegment;
    };

    let container = document.querySelector('.example');
    container.innerHTML = html;
    console.log(html)
    });