const d = document;

export default function gimnasio(CtnHabitante,BtnCalcular,CtnGymTotal){
    const $CtnHabitantes = d.querySelector(CtnHabitante),
    $BtnCalcularPredio = d.getElementById(BtnCalcular),
    $CtnGymTotal = d.getElementById(CtnGymTotal)
    let edades = d.querySelector(".edad")
    
    
    //Funcion para Agregar y Eliminar Inputs de Habitantes 
    d.addEventListener("click", (e)=>{
        if(e.target === $BtnCalcularPredio){
            let edad = parseInt(edades.value),
            genero = d.getElementById("genero").value
            if (edad == "" && genero == "") {
                $CtnGymTotal.innerHTML = 0
                $BtnCalcularPredio.classList.add("listo")
            }            
            if (edad < 10 && genero === "m") {
                $CtnGymTotal.innerHTML = 0
                $BtnCalcularPredio.classList.add("listo")
            }
            if (edad >= 10 && edad < 20 && genero === "m") {
                $CtnGymTotal.innerHTML = 20
                $BtnCalcularPredio.classList.add("listo")
            }
            if (edad >= 20 && edad < 40 && genero === "m") {
                $CtnGymTotal.innerHTML = 15
                $BtnCalcularPredio.classList.add("listo")
            }
            if (edad >= 40 && edad < 60 && genero === "m") {
                $CtnGymTotal.innerHTML = 10
                $BtnCalcularPredio.classList.add("listo")
            }
            if (edad > 60 && genero === "m") {
                $CtnGymTotal.innerHTML = 0
                $BtnCalcularPredio.classList.add("listo")
            }
            //Condicionales para las femeninas
            if (edad < 10 && genero === "f") {
                $CtnGymTotal.innerHTML = 0
                $BtnCalcularPredio.classList.add("listo")
            }
            if (edad >= 10 && edad < 18 && genero === "f") {
                $CtnGymTotal.innerHTML = 15
                $BtnCalcularPredio.classList.add("listo")
            }
            if (edad >= 18 && edad < 35 && genero === "f") {
                $CtnGymTotal.innerHTML = 12
                $BtnCalcularPredio.classList.add("listo")
            }
            if (edad >= 35 && edad < 55 && genero === "f") {
                $CtnGymTotal.innerHTML = 8
                $BtnCalcularPredio.classList.add("listo")
            }
            if (edad >= 55 && genero === "f") {
                $CtnGymTotal.innerHTML = 0
                $BtnCalcularPredio.classList.add("listo")
            }
        }
    })

    d.addEventListener("keyup" , e=>{
        if (e.target === edades) {
            let Exp = /^[0-9]{1,2}$/;
            if (!Exp.exec(edades.value) ) {
                $BtnCalcularPredio.disabled = true;
                $BtnCalcularPredio.style.backgroundColor = "grey"
                
            }else{
                $BtnCalcularPredio.disabled = false;
                $BtnCalcularPredio.style.backgroundColor = "#5690a7"
            }
        }
    })


   
}