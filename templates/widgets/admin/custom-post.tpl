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
    '<label><input name="use-template" type="checkbox" onchange=\'$(this).parent().parent().parent().find(".customtemplate").toggle()\'>use template ?</label>'+
    '</div>'+
    '<div class="customtemplate">'+
        '<label>template:</label>'+
        '<input type="textarea" class="form-control" name="customtemplate" placeholder="postId" />'+
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
        <label><input name="use-template" type="checkbox" onchange='$(this).parent().parent().parent().find(".customtemplate").toggle()'>use template ?</label>
        </div>
        <div class="customtemplate" style="display:none;">
            <label>template:</label>
            <input type="textarea" class="form-control" name="customtemplate" placeholder="postId" />
        </div>
    </div>
</div>
<div style="text-align: center;">
<div style="display: inline-block;padding: 0px 8px;border: 1px #ccc solid;margin: 0px 10px;" onclick='$("#custompost").append(template);'>+</div>
<div style="display: inline-block;padding: 0px 8px;border: 1px #ccc solid;margin: 0px 10px;" onclick='$("#custompost .customblock").length>1&&$($("#custompost .customblock")[$("#custompost .customblock").length-1]).remove();'>-</div>
</div>


