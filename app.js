const lista=document.getElementById('lista')
const boton=document.getElementById('agregarElemento')

boton.addEventListener('click',()=> {
    const nuevoli = document.createElement('li')
    nuevoli.textContent = 'ELEMENTO NUEVO'
    lista.appendChild(nuevoli)
})