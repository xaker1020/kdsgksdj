// const input=document.getElementById("input");
// const btn=document.getElementById("btn");
// const ol=document.getElementById("ol");

// async function view(ism){
//      const response= await fetch(`https://api.nationalize.io/?name=${ism}`);
//      const data= await response.json();
//      ol.innerHTML="";
//      data.country.map(e=>{
//         const li =document.createElement("li");
//         li.innerHTML=`
//          <img src="https://flagcdn.com/20x15/${e.country_id.toLowerCase()}.png" alt="" />   
//          ${e.country_id} - ${(e.probability*100).toFixed(2)}%
//         `;
//         ul.appendChild(li);
//      })
     
// }

// btn.addEventListener("click",()=>{
//     view(input.value)
// })





// const btn = document.getElementById("btn");
//     const ol = document.getElementById("ol");
//     const input = document.getElementById("text");

//     async function getData(ism) {
//       const res = await fetch("https://api.nationalize.io/?name=" + ism);
//       const data = await res.json();
//       console.log(data.country);
//       chizish(data.country);
//     }

//     btn.addEventListener("click", () => {
//       if (input.value.trim().length < 1) {
//         alert("Ism kiriting!!");
//       } else {
//         getData(input.value);
//       }
//     });

//     function chizish(davlatlar) {
//       ol.innerHTML = "";
//       davlatlar.map(d => {
//         const li = document.createElement("li");
//         const p = document.createElement("p");
//         const img = document.createElement("img");
//         img.src = https://flagcdn.com/16x12/$%7Bcountry_code%7D.png
//         img.alt = d.country_id;

//         li.appendChild(img);
//         p.textContent = d.country_id + ":" + (d.probability * 100).toFixed(2) + "%";
//         li.appendChild(p);
//         ol.appendChild(li);
//       });
//     }


     const btn = document.getElementById("btn");
    const ol = document.getElementById("ol");
    const input = document.getElementById("text");

    async function getData(ism) {
      const res = await fetch("https://api.nationalize.io/?name=" + ism);
      const data = await res.json();
      console.log(data.country);
      chizish(data.country);
    }

    btn.addEventListener("click", () => {
      if(input.value.trim().length<1){
        alert("Ism kiriting!!");
      }else{
        getData(input.value);
      }
    })

    function chizish(davlatlar) {
      ol.innerHTML = "";
      davlatlar.map(d => {
        const li = document.createElement("li");
        const p = document.createElement("p");
        const img = document.createElement("img");
        img.src = `https://flagcdn.com/16x12/${d.country_id.toLowerCase()}.png;`
        li.appendChild(img);
        p.textContent = d.country_id + " : " + (d.probability * 100).toFixed(2) + "%";
        li.appendChild(p);
        ol.appendChild(li);
      });
    }