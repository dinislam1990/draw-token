

const names = ['Sharif', 'Mostafiz-1', 'Shawon', 'Sakib', 'Azad', 'Alamin', 'Din Islam', 'Shohidul', 'Mostafiz-2', 'Saju'];
const randomIndex = Math.floor(Math.random() * names.length)
const getName = names[randomIndex]

const namePlate = document.getElementById('draw-btn').addEventListener('click', () =>{
    const input = document.getElementById('show-name')
    input.value = `${getName}`
})




