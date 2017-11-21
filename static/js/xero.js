
   function activadiseno(){

    document.getElementById('h2diseno').style.backgroundColor="";
    document.getElementById('h2diseno').style.color="white";
    document.getElementById('h2marketing').style.backgroundColor="white";
    document.getElementById('h2marketing').style.color="#6F7072";
    document.getElementById('h2imagen').style.backgroundColor="white";    
    document.getElementById('h2imagen').style.color="#6F7072"; 




   }

    function activamarketing(){

    document.getElementById('h2diseno').style.backgroundColor="white";
    document.getElementById('h2diseno').style.color="#6F7072";
    document.getElementById('h2marketing').style.backgroundColor="#00afec";
    document.getElementById('h2marketing').style.color="white";
    document.getElementById('h2imagen').style.backgroundColor="white";    
    document.getElementById('h2imagen').style.color="#6F7072";    

   } 


   function activaimagen(){

    document.getElementById('h2diseno').style.backgroundColor="white";
    document.getElementById('h2diseno').style.color="#6F7072";
    document.getElementById('h2marketing').style.backgroundColor="white";
    document.getElementById('h2marketing').style.color="#6F7072";
    document.getElementById('h2imagen').style.backgroundColor="#00afec";    
    document.getElementById('h2imagen').style.color="white";    

   }



    $(document).ready(function(){
      $('#eventos').bxSlider(
        {
            controls: false,
            mode: "vertical",
            auto: true,
            autoHover: false,
            pager:false,  
            adaptiveHeight: true,
            pause: 4000,  
            speed: 1000,            
        }
      );
    });

    $(document).ready(function(){
      $('#eventostwo').bxSlider(
        {
            controls: false,
            mode: "fade",
            auto: true,
            autoHover: false,
            pager:false,
            // autoDelay: 2000,
            pause: 4000,
            speed: 1000,

        }
      );
    });



        $('#js_contacto_page').on('submit', function(e){
        console.log('Mande el Formulario')
        e.preventDefault()

        var pet = $('#js_contacto_page').attr('action')
        console.log(pet)
        var met = $('#js_contacto_page').attr('method')
        console.log(met)

        $.ajax({
          beforeSend: function(){
            var opts = {
              radius:10,
              width:10,
              height:10,
              lenght:10,
            }
            var target = document.getElementById('js_load_response')
            var spinner = new Spinner(opts).spin(target)
          

          },
          url: pet,
          type: met,
          data: $('#js_contacto_page').serialize(), 
          success: function(resp){
            $('#js_load_response').html('<img class="img-responsive" style="max-height:100%; margin:auto;" src="{% static "img/ok.png" %}">')
            $('#js_load_response').append('<h2>'+resp+'</h2>')
            console.log(data)
            console.log(resp)
          }, 
          error: function(jqXHR, estado, error){
            $('#js_load_response').html('<img class="img-responsive" style="max-height:100%;" src="{% static "img/x.png" %}">')
            console.log(error)
            // document.write(error)
          },
          complete: function(jqXHR, estado){
            console.log(estado)
          },
          timeout: 10000    
      })


      })
    

