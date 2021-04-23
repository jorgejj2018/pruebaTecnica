const d = document;
export default function Registro(){
    const $table = d.querySelector(".table-predio"),
    $totalRecibo = d.querySelector(".recibo"),
    $Form = d.getElementById("form-predio"),
    $template = d.getElementById("template-predios").content,
    $title = d.querySelector(".title"),
    resulAdmin = d.getElementById("resultado-admin"),
    resulAseo = d.getElementById("resultado-aseo"),
    resulGym = d.getElementById("gimPredio"),
    fecha = d.querySelector(".date"),
    nro = d.querySelector(".nro"),
    btnCalcularAdmin = d.getElementById("calcular-predio"),
    btnCalcularAseo = d.getElementById("calcular-aseo"),
    btnCalcularGym = d.getElementById("calcular-predio"),
    $fragment = d.createDocumentFragment();
    const getAll = async ()=>{
        try {
            let res = await axios.get("http://localhost:5000/regitros"),
            json = await res.data;
            json.forEach(el =>{
                $template.querySelector(".valorAdmin").textContent = el.valorAdmin
                $template.querySelector(".valorAseo").textContent = el.valorAseo
                $template.querySelector(".valorGym").textContent = el.valorGym
                $template.querySelector(".total").textContent = el.total
                $template.querySelector(".fecha").textContent = el.fecha
                $template.querySelector(".nroA").textContent = el.nroA
                $template.querySelector(".delete").dataset.id = el.id
                let $clone = d.importNode($template,true)
                $fragment.appendChild($clone)
            });
            $table.querySelector("tbody").appendChild($fragment)
            
        } catch (err) {
            //let ms = err.response.statusText || "Ocurrio un error";
            //$table.insertAdjacentHTML("afterend",`<p><b>Error: ${err.status}: ${ms}</b></p>`)
        }
    }
    
    d.addEventListener('DOMContentLoaded',getAll)
    d.addEventListener('submit',async (e)=>{
        if(e.target === $Form){
            e.preventDefault()
            if (!e.target.id.value && btnCalcularAdmin.classList.value === "listo" && btnCalcularAseo.classList.value === "listo" && btnCalcularGym.classList.value === "listo") {
                // Total conversion para poder sumar el total
                  let admin = parseInt(resulAdmin.innerText),
                  aseo = parseInt(resulAseo.innerText),
                  gym = parseInt(resulGym.innerText),
                  suma = admin + aseo + gym,
                  total = suma.toString()
                    try {
                        let options = {
                            method: "POST",
                            headers:{"Content-type":"Application/json; charset=utf-8"},
                            data:JSON.stringify({
                                valorAdmin:admin,
                                valorAseo:aseo,
                                valorGym:gym,
                                total:total,
                                fecha:fecha.value,
                                nroA:nro.value,
                                    }),
                        },
                        res = await axios("http://localhost:5000/regitros",options),
                        json = await res; 
                    } catch (err) {
                        let ms = err.response.statusText || "Ocurrio un error";
                        $form.insertAdjacentHTML("afterend",`<p><b>Error: ${err.status}: ${ms}</b></p>`)
                    }
                
            }

        }
    })
    d.addEventListener('click', async e =>{
        if(e.target.matches(".delete")){
            e.preventDefault()
            let idDelete = confirm(`¿Deseas Eliminar Este Registro?Registro ${e.target.dataset.id}`)
                if (idDelete) {
                try {
                        let options = {
                            method: "DELETE",
                            headers:{"Content-type":"Application/json; charset=utf-8"},
                        },
                        res = await axios(`http://localhost:5000/regitros/${e.target.dataset.id}`,options),
                        json = await res; 
                    } catch (err) {
                        let ms = err.statusText || "Ocurrio un error";
                        $form.insertAdjacentHTML("afterend",`<p><b>Error: ${err.status}: ${ms}</b></p>`)
                    }
                } else {
                console.log("eliminacion cancelada")
            }               
        }  
    })
}