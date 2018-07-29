<b:if cond='data:view.isPost'>
<!-- th3farhat -->
<script type='text/javascript'>
//<![CDATA[
function replaceText(){if(!document.getElementById){return;}
bodyText = document.getElementById("comments");
theText = bodyText.innerHTML;
theText = theText.replace(/\[img\].*?'.*?\[\/img\]/gi, "");
theText = theText.replace(/\[youtube\].*?'.*?\[\/youtube\]/gi, "");
theText = theText.replace(/\[img\]/gi, "<div style='clear:both'></div><img class='bsw-imgs' src='");
theText = theText.replace(/\[\/img\]/gi, "'/><div style='clear:both'></div>");
theText = theText.replace(/\[youtube\]http:\/\/youtu.be/gi, "<iframe width='100%' height='400' src='http://www.youtube.com/embed");
theText = theText.replace(/\[youtube\]http:\/\/www.youtube.com\/watch\?v=/gi, "<iframe width='480' height='390' src='http://www.youtube.com/embed/");
theText = theText.replace(/&amp;feature=/gi, "?rel=0' '");
theText = theText.replace(/\[\/youtube\]/gi, "?rel=0' frameborder='0' allowfullscreen></iframe>");
bodyText.innerHTML = theText;
}replaceText();
//]]>
</script>
<!-- th3farhat.com -->
</b:if>
