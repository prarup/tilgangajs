$(document).ready(function() {
      
          // Initialize jSignature
          var $sigdiv = $("#signature").jSignature({
              'UndoButton' : true
          });
          true
          $('#click').click(function() {
              // Get response of type image
              var data = $sigdiv.jSignature('getData', 'image');
      
              // Storing in textarea
              $('#output').val(data);
      
              // Alter image source 
              $('#sign_prev').attr('src', "data:" + data);
              $('#sign_prev').show();
          });
      });
