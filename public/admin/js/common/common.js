function serializeToJson(form){
    var a=form.serializeArray();
    var result={};
      a.forEach(function(item){
        // console.log(item);
        result[item.name]=item.value;
      });
    return result;
   }