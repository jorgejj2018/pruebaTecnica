const d = document;

export default function Guardar(FormBtnGuardar){
    const $Form = d.getElementById(FormBtnGuardar);
    let resulAdmin = d.getElementById("resultado-admin"),
        resulAseo = d.getElementById("resultado-aseo"),
        resulGym = d.getElementById("gimPredio"),
        fecha = d.querySelector(".date"),
        nro = d.querySelector(".nro"),
        nroApartamento = d.querySelector(".nro-a"),
        fechaCuota = d.querySelector(".cuota"),
        adminTotal = d.querySelector(".admin"),
        aseoTotal = d.querySelector(".aseo"),
        gymTotal = d.querySelector(".gym"),
        totalRecibo = d.querySelector(".total"),
        btnCalcularAdmin = d.getElementById("calcular-predio"),
        btnCalcularAseo = d.getElementById("calcular-aseo"),
        btnCalcularGym = d.getElementById("calcular-predio")
        
        d.addEventListener("submit",e =>{
            if (e.target === $Form ) {
                e.preventDefault()
                console.log()
                if (btnCalcularAdmin.classList.value === "listo" && btnCalcularAseo.classList.value === "listo" && btnCalcularGym.classList.value === "listo") {
                    // Total conversion para poder sumar el total
                      let admin = parseInt(resulAdmin.innerText),
                      aseo = parseInt(resulAseo.innerText),
                      gym = parseInt(resulGym.innerText),
                      suma = admin + aseo + gym,
                      total = suma.toString()
                      
                    fechaCuota.innerHTML = `${fecha.value}`;
                    nroApartamento.innerHTML = `${nro.value}`;
                    adminTotal.innerHTML = `${resulAdmin.innerText}`;
                    aseoTotal.innerHTML = ` ${resulAseo.innerText}`;
                    gymTotal.innerHTML = `${resulGym.innerText}`;
                    totalRecibo.innerHTML = `${total}`; 
                }else{
                    alert('Porfavor Ejecute todos los botones en el formulario')
                }
            
            }
        })

}