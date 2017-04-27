var n=1;
var template = '<div class="customblock"><label>custom post</label>'+
    '<div style="display:inline-block;width:49%;">'+
        '<label>categotyId</label>'+
        '<input type="textarea" class="form-control" name="categotyId" placeholder="categotyId" />'+
    '</div>'+
    '<div style="display:inline-block;width:49%;">'+
        '<label>postId:</label>'+
        '<input type="textarea" class="form-control" name="postId" placeholder="postId" />'+
    '</div>'+
    '<div class="checkbox">'+
    '<label><input name="use-template" type="checkbox"> use template ?</label>'+
    '</div>'+
    '<div class="template" style="display:none">'+
        '<label>template:</label>'+
        '<input type="textarea" class="form-control" name="template" placeholder="postId" />'+
    '</div>'+
'</div>';


function add(){
    document.getElementById("custompost").appendChild(template);
}

function del(){
    var list = document.getElementById("custompost").getElementsByClassName("customblock");
    if(list.length < 2){
        return;
    }
    document.getElementById("custompost").removeChild(list[list.length-1]);
}