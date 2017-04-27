<div id="custompost">
    <div class="customblock">
        <div><label>custom post</label></div>
        <div style="display:inline-block;width:49%;">
            <label>categotyId</label>
            <input type="textarea" class="form-control" name="categotyId" placeholder="categotyId" />
        </div>
        <div style="display:inline-block;width:49%;">
            <label>postId:</label>
            <input type="textarea" class="form-control" name="postId" placeholder="postId" />
        </div>
        <div class="checkbox">
        <label><input name="use-template" type="checkbox"> use template ?</label>
        </div>
        <div class="template" style="display:none">
            <label>template:</label>
            <input type="textarea" class="form-control" name="template" placeholder="postId" />
        </div>
    </div>
</div>
<div><button onclick="add()">+</button><button onclick="del()">-</button></div>

<script>
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
    '<input name="use-template" type="checkbox" onchange="change(this)"><label> use template ?</label>'+
    '</div>'+
    '<div class="template" style="display:none">'+
        '<label>template:</label>'+
        '<input type="textarea" class="form-control" name="template" placeholder="postId" />'+
    '</div>'+
'</div>';

function add(){
    $("#custompost").append(template);
}

function del(){
    var list = $("#custompost .customblock");
    if(list.length < 2){
        return;
    }
    $(list[list.length-1]).remove();
}

function change(_this){
    $(_this).parent().parent().find(".template").toggle();
}
</script>