$(document).ready(function(){
  $("form#survey").submit(function(event){
    event.preventDefault();
    $("#results").show();
    $("input:checkbox[name=survey]:checked").each(function(){

      var surveyResults = $(this).val();
      console.log(surveyResults);
      $("#results").append(surveyResults + "<br>");
    });

  });
});

// $(document).ready(function(){
//   $("form#transportation_survey").submit(function(event){
//     event.preventDefault();
//     $("#work-responses").show();
//     $("input:checkbox[name=work-transportation]:checked").each(function(){
//       var workTransportationMode = $(this).val();
//       $('#work-responses').append(workTransportationMode + "<br>");
//     });
//     $('#transportation_survey').hide();
//   });
// });
