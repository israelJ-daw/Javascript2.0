const tags = ['js', 'JS', 'javascript', 'Js'];

function normalizarTags(array) {
  // Crear un Set vacío para guardar los tags normalizados
  const setTags = new Set();

  // Recorrer cada tag del array
  for (const tag of array) {
    // Convertir a minúsculas y añadir al Set
    setTags.add(tag.toLowerCase());
  }

  // Devolver el Set con tags únicos
  return setTags;
}

// Llamamos a la función y guardamos el resultado
const resultado = normalizarTags(tags);
console.log(resultado); // Set { 'js', 'javascript' }