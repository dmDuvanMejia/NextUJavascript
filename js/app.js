var calculadora = {
    
    // constructor(){
    //      alert('Calculadora');
    // }

    //   init : function(){
    //       alert('Calculadora');
    //       pressKeyCalculator()
    //   }

// return {
//      pressKeyCalculator : function () {
//         document.getElementById('1').addEventListener('click', function(){return alert(1)});
//     }
// }

    tecla1 : function(){
        document.getElementById('1').addEventListener('click', function(){alert(1)} );
    }
    
   
};

 function e(){
    var tecla = document.getElementsByClassName('tecla')
 
    for(var i=0; i < tecla.length; i++){
        tecla[i].addEventListener('click', function (ev) {
            alert(ev );
        }, false);
    }
 }

 tecla1 = function(){
        document.getElementById('1').addEventListener('click', function(){alert(1)} );
    }

tecla1();    