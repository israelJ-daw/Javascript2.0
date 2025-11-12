const tareasConDuplicados = ["Comprar pan", "Programar", "Estudiar JS", "Comprar pan", "Estudiar JS", "Comer"];


let tareasUnicas = new Set(tareasConDuplicados)


for (tarea of tareasUnicas){
    if (tarea.includes("pan")){
        continue
    }
    if (tarea == "Comer"){
        break
    }

    console.log(tarea)
}

 