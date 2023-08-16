// let url = "http://universities.hipolabs.com/search?name=";
// let button = document.querySelector('.btn');
// button.addEventListener('click', async () => {
//     let country = document.querySelector("input").value;
//     let colleges = await getFact(country);
//     show(colleges);
// })

// function show(colleges) {
//     let list = document.querySelector('#list');
//     list.innerText = "";
//     for (let college of colleges) {

//         let li = document.createElement("li");
//         li.innerText = college.name;
//         list.appendChild(li);
//     }
// }

// async function getFact(country) {
//     let res = await axios.get((url + country));
//     return (res.data);
// }



async function Greet(){
    return "Hello";
}
Greet().then((result)=>{
    console.log("Promise resolved");
    console.log(result);
}).catch((error)=>{
    console.log(error);
})
