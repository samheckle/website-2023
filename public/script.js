window.onload = () =>{
    document.getElementById('btn-forward').addEventListener('click', ()=>{
        let test = document.getElementsByClassName('carousel-item')
        test[test.length-1].scrollIntoView({behavior: "smooth", inline: "center"})
    })
    document.getElementById('btn-back').addEventListener('click', ()=>{
        let test = document.getElementsByClassName('carousel-item')
        test[0].scrollIntoView({behavior: "smooth", inline: "center"})
    })
}