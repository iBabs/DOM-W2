//getElementsByTagName
//getElementById
//getElementsByClassName
//querySelector
const txt = document.querySelector('#txt')
const submit = document.querySelector('#submit')
const todo = document.querySelector('#todo')

submit.addEventListener('click',(e)=>{
e.preventDefault()
    if(txt.value == ''){
        alert('input cannot be empty')
    }else{const li = document.createElement('li')
    li.innerText = txt.value
    todo.appendChild(li)
    li.addEventListener('click',()=>{
        li.style.textDecoration = 'line-through'
    })
    const button = document.createElement('button')
    button.innerHTML= 'x'
    li.appendChild(button)
    li.classList.add('item')
    button.addEventListener('click', ()=>{
        todo.removeChild(li)
    })}
    txt.value = ''
})

