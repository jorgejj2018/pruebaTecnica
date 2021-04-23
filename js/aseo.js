const d = document;
export default function Aseo(MT,btnCalcular,CtnResultado){
    const $metrosCuadrados = d.querySelector(MT),
    $btnCalcular = d.getElementById(btnCalcular),
    $Resultado = d.getElementById(CtnResultado);
    let metrosCuadrados,
    Admin,
    Aseo;

    d.addEventListener("click",e =>{
            if (e.target === $btnCalcular) {
                metrosCuadrados=  parseFloat($metrosCuadrados.value) ;
                Admin = metrosCuadrados * 1.500 * 50.000;
                Aseo =(Admin * 0.1 * 1.000)
                $Resultado.innerHTML = Aseo;
                $btnCalcular.classList.add("listo")
            }
            if (e.target === $btnCalcular && $metrosCuadrados.value === "") {
                Admin = 0
                $Resultado.innerHTML = Admin;
                $btnCalcular.classList.add("listo")
            }
    })


}