import '../css/componentes.css';
import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre) => {
     //Img
     console.log(webpacklogo);
     const img = document.createElement('img');
     img.src = webpacklogo;
     document.body.append(img);
     
    console.log('creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola developer 
    ${nombre} eres un champ!!!`;

    document.body.append(h1)

   

}