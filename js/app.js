var pantalla = document.getElementById("display");
var signo = ''
var resul = 0;
var numero1 = ''
var numero2 = ''

var calculadora = {

    //Inicialización variables
    screen1 : document.getElementById("display"),

    //Function noname aplicar tipo de botón

    init: (function(){
        this.eventosteclas();
        this.operacionMatematica = [];
        this.ultimoNumero = ''
    }),

    //Función que verifica los eventos en cada tecla requerida para la operación
    eventosteclas: function(){
        var resultado = document.getElementById('display');
        //Tecla 0 
        document.getElementById("0").addEventListener("click", function() { 
        calculadora.asignarNumeroEnPantalla(0, resultado.innerHTML.length)
        });
        
        //Tecla 1
        document.getElementById("1").addEventListener("click", function() { 
            calculadora.asignarNumeroEnPantalla(1, resultado.innerHTML.length)
        });

        //Tecla 2
        document.getElementById("2").addEventListener("click", function() { 
            calculadora.asignarNumeroEnPantalla(2, resultado.innerHTML.length)
        });

        //Tecla 3
        document.getElementById("3").addEventListener("click", function() { 
            calculadora.asignarNumeroEnPantalla(3, resultado.innerHTML.length)
        });

        //Tecla 4
        document.getElementById("4").addEventListener("click", function() { 
            calculadora.asignarNumeroEnPantalla(4, resultado.innerHTML.length)
        });

        //Tecla 5
        document.getElementById("5").addEventListener("click", function() { 
            calculadora.asignarNumeroEnPantalla(5, resultado.innerHTML.length)
        });

        //Tecla 6
        document.getElementById("6").addEventListener("click", function() { 
            calculadora.asignarNumeroEnPantalla(6, resultado.innerHTML.length)
        });

        //Tecla 7
        document.getElementById("7").addEventListener("click", function() { 
            calculadora.asignarNumeroEnPantalla(7, resultado.innerHTML.length)
        });

        //Tecla 8
        document.getElementById("8").addEventListener("click", function() { 
            calculadora.asignarNumeroEnPantalla(8, resultado.innerHTML.length)
        });

        //Tecla 9
        document.getElementById("9").addEventListener("click", function() { 
            calculadora.asignarNumeroEnPantalla(9, resultado.innerHTML.length)
        });

        //Tecla punto
        document.getElementById("punto").addEventListener("click", function() { 
            calculadora.asignarNumeroEnPantalla('.', resultado.innerHTML.length)
        });

        //Limpiar resultado
        document.getElementById('on').addEventListener('click', function(){
            resul = 0;
            resultado.innerHTML = '0';
            calculadora.operacionMatematica = []
        });

        //Cambiar signo
        document.getElementById('sign').addEventListener('click', function(){
            calculadora.cambiarSigno(resultado);
        });

        //Sumar
        document.getElementById('mas').addEventListener('click', function(){
            calculadora.ingresarDigitos( '+' );
        });

        //Restar
        document.getElementById('menos').addEventListener('click', function(){
            calculadora.ingresarDigitos( '-' );
        });

        //Multiplicar
        document.getElementById('por').addEventListener('click', function(){
            calculadora.ingresarDigitos( '*' );
        });

        //Dividir
        document.getElementById('dividido').addEventListener('click', function(){
            calculadora.ingresarDigitos( '/' );
        });

        //Igual
        document.getElementById('igual').addEventListener('click', function(){
            calculadora.igual();
        });
    },

    //Se cambia el signo del número en pantalla
    cambiarSigno : function(resultado){
        let numero = parseInt( resultado.innerHTML );
        if( numero > 0){
            resultado.innerHTML = '-' + numero
        }else{
            resultado.innerHTML =  - numero
        }
    },

    //Se asigna el número en la pantalla se hace validación de 
    //puntos y la longitud del números
    asignarNumeroEnPantalla : function(numero, longitud){
        if( longitud < 8 ){
            if( longitud === 1 && pantalla.innerHTML === '0' && numero !== '.'){
                pantalla.innerHTML = ''
            }
            
            if( numero === '.' ){
                if( pantalla.innerHTML.indexOf('.') !== -1){
                    return;
                }
            }
            pantalla.innerHTML += numero
        }
    },

    ingresarDigitos : function( caracter ){
        // alert('INGRESAR DIGITOS')
        let signo = ''
        switch( caracter ){
            case '+':
                signo = '+'
                break;
            case '-':
                signo = '-'
                break;
            case '*':
                signo = '*'
                break;
            case '/':
                signo = '/'
                break;
        }
        caracterPantalla = document.getElementById('display').innerHTML
        console.log(caracterPantalla)
        tamanioArreglo = calculadora.operacionMatematica.length
        
        if( caracterPantalla !== ''){
            // if( tamanioArreglo === 0 ){
                 console.log('INGRESAR DIGITOs SI ' + calculadora.operacionMatematica)
                calculadora.operacionMatematica.push( caracterPantalla )
                 
                calculadora.operacionMatematica.push( signo )
                console.log( this.operacionMatematica )
                calculadora.ultimoNumero = caracterPantalla
            // }else{
                // this.operacionMatematica.push( caracterPantalla )
                // this.operacionMatematica.push( signo )
                // this.ultimoNumero = caracterPantalla
            // }
            console.log('Ultimo caracter ' + this.ultimoNumero)
        }else{
            console.log('Ultimo caracter ' + this.ultimoNumero)
            console.log(calculadora.operacionMatematica[tamanioArreglo - 1].includes('+', '-', '*', '/'))
            // if( calculadora.operacionMatematica[tamanioArreglo - 1].includes('+', '-', '*', '/') ){
               console.log('Contiene ' + signo)
                this.operacionMatematica.pop()
                this.operacionMatematica.push( signo )
            // }
        }
        console.log(this.operacionMatematica)
        // this.operacionMatematica.push( document.getElementById('display').innerHTML )
        // if( numero1 === ''){
        //     numero1 = document.getElementById('display').innerHTML
        // }

        // this.numerosDigitados.push(numero1 )
        document.getElementById('display').innerHTML = ''
    },

    igual : function(){
        let caracter = document.getElementById('display').innerHTML
        if( caracter !== '' ){
            this.operacionMatematica.push( caracter )
        }
       let operacion = this.operacionMatematica.toString()
       operacion = operacion.replace(/,/g, '')
        // alert('NUEVA Operacion ' + operacion)

       resultado = eval(operacion)
        // resul = parseInt(numero1) + parseInt(numero2)
        document.getElementById('display').innerHTML = resultado
        numero1 = ''
        numero2 = ''
        resul = 0
        this.operacionMatematica = resultado
    }

};

calculadora.init();
