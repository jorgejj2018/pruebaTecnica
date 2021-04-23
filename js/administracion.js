const d = document;

export default function Administracion(MT,Tipo,btnCalcular,CtnResultado){
    const $metrosCuadrados = d.querySelector(MT),
    $Select = d.getElementById(Tipo),
    $btnCalcular = d.getElementById(btnCalcular),
    $Resultado = d.getElementById(CtnResultado)
    let Admin,
    metrosCuadrados;

    d.addEventListener("click",e =>{
        if (e.target === $btnCalcular && $Select.value === "casa") {
            metrosCuadrados=  parseFloat($metrosCuadrados.value);
            Admin = metrosCuadrados * 1.500 * 100.000
            $Resultado.innerHTML = Admin;
            $btnCalcular.classList.add("listo")
        }
        
        if (e.target === $btnCalcular && $Select.value === "apartamento") {
            metrosCuadrados=  parseFloat($metrosCuadrados.value);
            Admin = metrosCuadrados * 1.500 * 50.000
            $Resultado.innerHTML = Admin;
            $btnCalcular.classList.add("listo")
        }
        if (e.target === $btnCalcular && $Select.value === "casa" && $metrosCuadrados.value === "") {
            Admin = 0
            $Resultado.innerHTML = Admin;
            $btnCalcular.classList.add("listo")
        }
        if (e.target === $btnCalcular && $Select.value === "apartamento" && $metrosCuadrados.value === "") {
            Admin = 0
            $Resultado.innerHTML = Admin;
            $btnCalcular.classList.add("listo")
        }
    })

    d.addEventListener("keyup" , e=>{
        if (e.target === $metrosCuadrados) {
            let Exp = /^[0-9]{1,3}$/;
            if (!Exp.exec($metrosCuadrados.value) ) {
                $btnCalcular.disabled = true;
                $btnCalcular.style.backgroundColor = "grey"
            }else{
                $btnCalcular.disabled = false;
                $btnCalcular.style.backgroundColor = "#5690a7"
            }
        }
    })

}