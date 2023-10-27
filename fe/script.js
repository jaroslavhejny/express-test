
const button = document.getElementById("button");
const input = document.getElementById("input");
const response = document.getElementById('response')

const getNumber = () => {
    const value = input.value;
    console.log(value);
    fetch(`http://localhost:1208/${value}`)
    .then((res) => {
        res.json().then((result)=>{
            response.innerHTML = result.number
        }).catch(e=>console.error(e));
        
    })
    .catch(e=>console.error(e));
}



button.addEventListener("click", getNumber)
