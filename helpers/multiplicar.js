const fs = require('fs');
const colors = require('colors');
const crearArchivo = async( base = 5, listar= false, li= 10) => {
    console.log('li', li);
    try {
        console.log('=======MULTIPLICACION======'.yellow);
        let salida ='';
        for (let index = 1; index <= li; index++) {
            salida += `${base} * ${index} = ${base * index}\n`;   
        }
    
        if(listar){
            console.log('listar true');
            console.log(salida.green);
        }
            
        fs.writeFileSync(`./salida/tablaSync-${base}.txt`, salida)
        //console.log('tabla creada');
        return `tablaSync-${base}.txt`
    
        // fs.writeFile(`tabla-${base}.txt`,salida, (error) =>{
        //     if (error) throw error;
        //     console.log('tabla creada');
        // } )
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}