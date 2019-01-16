$( document ).ready(function() {
    console.log( "ready!" );


    $(".list_add").click(function(){
      $('tbody .template_row:last').after('<tr class="template_row"><td class="controls"><a href="#" class="list_cancel" title="Delete Row">&nbsp;</a></td><td><input type="text" class="" id="productcode" name="" value=""/></td><td><input type="text" class="long" id="productname" name="" value=""/></td><td><input type="text" class="" id="stock" name="" value=""/></td><td><input type="text" class="" id="vendor" name="" value=""/></td><td><select name="" id="" class="label"><option value = ""></option></select></td><td><input type="text" class="" id="client" name="" value=""/></td></tr>');
  });

    $(".list_cancel").click(function(){
      console.log('remove');
      $("tbody .template_row:has(td)").click(function() {
        $(this).closest('tr').remove()
    });
    });

});

