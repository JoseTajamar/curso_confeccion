.recuadro { border: 0.1cm;
    color:rgb(3, 109, 12);
    border-style: solid;
    text-align: center;
    }

    .mainfooter {background-color: grey;
        color: rgb(0, 148, 12);
        height: 7vh;  
        text-align: center;
        padding: 0.02rem;
        background: rgb(19, 36, 21) ;
        text-align: center;
         }

        .mainheader {
            text-align: center;
            font-size: 1.33rem;
            margin-top: -2rem;
            color:rgb(136, 136, 136);
            font-weight: bold; /* Negrita se puede con strong pero así esta bien escrito */
            background: rgb(41, 59, 41);
            margin-left: -2cm;
             }

            .mainheader p{ 
                margin: 0rem 9
            rem 0rem 0rem;

        }
        .mainheader nav ul {
                list-style-type:none;

        }
        .mainheader nav li {
            display: inline-block;

        }
        .mainheader nav a {
            padding: 1cm;
        }
         body {
        margin: 0;
        margin-left: 0.5cm;
        background-color:rgb(170, 170, 170);
        color: rgb(0, 247, 255)
        }
        .content_wrappel{
            margin: 1rem 5rem 3rem 1rem; /* margen en el sentido de las agujas del reloj 1º rem arriba 2º rem dercha 3º rem abajo 4 rem izquierda */
        }  
        .imagen { text-align: center;
            max-width: 100%; /* para que la imagen ocupe como mucho el 100% y si quiero fijar el tamaño pongo width: y el ancho en pixles  */
        }
        .img{
            margin:0rem;
            max-width: 50%;/*  siempre para no pasarme de tamaño */
            
        }
        .img_wrappel_50{
            width: 50%;
        }
        
        .img_wrappel_25{
            width: 25%;
        }

        .img_wrappel_75{
            width: 75%;
        }
        .section_imagenes img{
            max-width: 25%;
            display: block; /*  para que las imagenes se comporten como bloke  */
            float: left;
            
        }/* height: 20vh; /* Altura */ */

        figure {
            margin:0rem;
            max-width: 100%;
        }
    
        .pie{
            text-align: center;
        }
        .figure {
            margin: 2cm;
        }
        h1 {
            font-size: 3rem;
            font-weight: bold;
        }
        h2 {
            font-size: 2.6rem;
            font-weight: bold;
            color:green;
            margin-left: 3.5cm;
        }
        h3 {
            font-size: 1.5rem;
            font-weight: bold;
            color: green;
            margin-left: 2cm; 
        }
        H3 {
            font-size: 1.5rem;
            font-weight: bold;
            color: green;
            margin-left: 2cm; 
        }
        h4{
            font-size: 1rem;
            font-weight: bold;
            color: rgb(19, 63, 19);
            margin-left: 1cm; 
            text-align: center;
        }
        Pre{
            font-family: inherit; /* inherit porque el navegador le aplica por defecto un estilo predeterminado; le hago un css e inherit o el que me de la gana ponerle pero ojo con los predeterminados se ven en el navegador f12 sobre la zona deseada y ya ne dice de donde esta sacando el estilo */
           
        } 
        blockquote{
            margin-block-start: 0px;
            margin-block-end: 0px;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            font-style: italic;
            border-left: 2px solid yellowgreen;
            padding-left: 10px;
        
        }   
        blockquote footer{ 
            margin-top: 0.5rem;
            border-top:3px solid green;
            margin-bottom: 0.5rem;
            width: fit-content;
           
        }
        .dt {
            float: left;
            clear: left;
            padding-left: 1cm;
            padding-right:0.5cm;
           
        }
        
        .clearfix{ 
            clear: both;

        }
        .dd { 
            float: left;
            clear: right;

        }
        a{
            color: darkgreen;
        }
        .verde{ 
            color: darkgreen;
            font-weight: bold;
            text-decoration: line-through red;
        }