
let limite = 10
for(let i = 0; i < 10; i++){
  console.log(i)  
}

const aDatos = [
    'Perro',
    'Gato',
    'Caballo',
    'Oveja',
]

for (let i = 0; i < aDatos.length; i++) {
    const item = aDatos[1];
    if(i > 0)
    console.log('Tengo ${i+1} ${item}')
}