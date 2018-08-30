 document.write("<scr" + "ipt type=\"text/javascript\" src=\"http://twemoji.maxcdn.com/twemoji.min.js\"></scr" + "ipt>");
      $('i[rel="pre"]').replaceWith(function(){return $("<pre><code>"+$(this).html()+"</code></pre>")});for(var 
                                                                                                            //Pre Auto Selection
                                                                                                            pres=document.querySelectorAll("pre,kbd,blockquote,i"),i=0;i<pres.length;i++)pres[i].addEventListener("dblclick",function(){var e=getSelection(),t=document.createRange();t.selectNodeContents(this),e.removeAllRanges(),e.addRange(t)},!1);
      //]]>
      jQuery(document).ready(function(e){var t=e(&quot;#backtotop&quot;);e(window).scroll(function(){e(this).scrollTop()&gt;=800?t.show(10).animate({opacity:&quot;1&quot;},10):t.animate({opacity:&quot;0&quot;},10)});t.click(function(t){t.preventDefault();e(&quot;html,body&quot;).animate({scrollTop:0},400)})})
                                                 $(function(){$(&quot;#simplify-click &gt; li&quot;).click(function(i){var l=$(&quot;ul&quot;,this);return $(&quot;#simplify-click &gt; li &gt; ul&quot;).not(l).slideUp(),l.stop(!0,!0).slideToggle(400),!1}),$(&quot;#simplify-click &gt; li &gt; ul &gt; li&quot;).click(function(i){i.stopPropagation()})});
