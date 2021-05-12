const nombre = "Lorena"
const apellido = "Gallas"
var edad = 43
const fecha_nacimiento = "5 de Julio de 1977"
var alto = 70.5
var nucleo_familiar = [
    {
        nombre : "Mauricio",
        edad : 43,
        vinculo : "esposo"
    },
    {
        nombre : "Sofia",
        edad : 18,
        vinculo : "hija mayor"
    },
    
    {
        nombre : "Matias",
        edad : 16,
        vinculo : "hijo del medio"
    },
    {
        nombre : "Camila",
        edad : 10,
        vinculo : "hija menor"
    }
]

var placeres = ["tomar mate con bizcochos", "reunirme con amigos", 
        "ver peliculas en la cama un dia lluvioso", "compartir juegos de caja en familia",
        "estudiar temas que me motiven y me ayuden a progresar"]

var felicidad = true

function felicidad1(){
    if(felicidad==true){
        console.log("Soy Feliz")
    }
}

function yo(){
    console.log("Mi nombre es "+nombre+" "+apellido+ ", tengo "+edad+ 
                " de edad. Naci el " + fecha_nacimiento+ ". Mido "+alto+
                ". Mi nucleo familiar esta conformado por "+nucleo_familiar+ 
                ". Mis grandes placeres son "+placeres)
}

yo()
felicidad1()