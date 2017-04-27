<script type="text/javascript">
var template = '<div class="customblock">'+
    '<div><label>custom post</label></div>'+
    '<div style="display:inline-block;width:49%;">'+
        '<label>categotyId</label>'+
        '<input type="textarea" class="form-control" name="categotyId" placeholder="categotyId" />'+
    '</div>'+
    '<div style="display:inline-block;width:49%;">'+
        '<label>postId:</label>'+
        '<input type="textarea" class="form-control" name="postId" placeholder="postId" />'+
    '</div>'+
    '<div class="checkbox">'+
    '<input name="use-template" type="checkbox" onchange=\"$(this).parent().parent().find(".template").toggle()\"><label> use template ?</label>'+
    '</div>'+
    '<div class="template" style="display:none">'+
        '<label>template:</label>'+
        '<input type="textarea" class="form-control" name="template" placeholder="postId" />'+
    '</div>'+
'</div>';
</script>

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
        <input name="use-template" type="checkbox" onchange='$(this).parent().parent().find(".template").toggle()'><label>use template ?</label>
        </div>
        <div class="template" style="display:none">
            <label>template:</label>
            <input type="textarea" class="form-control" name="template" placeholder="postId" />
        </div>
    </div>
</div>
<div>
<button onclick='$("#custompost").append(template);'>+</button>
<button onclick='var list=$("#custompost .customblock");if(list.length < 2)return;$(list[list.length-1]).remove();'>-</button>
</div>


