function showpageCount(a){for(var e,s=home_page_url,n=new Array,t=1,r=1,l=0,p=0,i=0,o="",h="",g="",d=0;e=a.feed.entry[d];d++){var m=e.published.$t.substring(0,19)+e.published.$t.substring(23,29);timestamp=encodeURIComponent(m);var u=e.title.$t;""!=u&&(0!=l&&l%pageCount!=pageCount-1||(-1!=s.indexOf(timestamp)&&(t=r),""!=u&&r++,n[n.length]="/search?updated-max="+timestamp+"&max-results="+pageCount)),l++}for(b=0;b<n.length;b++)b>=t-displayPageNum-1&&b<t+displayPageNum&&(0==p&&b==t-2&&(h=2==t?'<span class="showpage"><a href="/">'+upPageWord+"</a></span>":'<span class="showpage"><a href="'+n[b]+'">'+upPageWord+"</a></span>",p++),o+=b==t-1?'<span class="showpagePoint">'+t+"</span>":0==b?'<span class="showpageNum"><a href="/">1</a></span>':'<span class="showpageNum"><a href="'+n[b]+'">'+(b+1)+"</a></span>",0==i&&b==t&&(g='<span class="showpage"> <a href="'+n[b]+'">'+downPageWord+"</a></span>",i++));t>1&&(o=h+" "+o+" "),o='<div class="showpageArea"><span style="COLOR: #000;" class="showpageOf"> Pages ('+(r-1)+")</span>"+o,t<r-1&&(o+=g),1==r&&r++,o+="</div>";var c=document.getElementsByName("pageArea"),f=document.getElementById("blog-pager");r<=2&&(o="");for(var b=0;b<c.length;b++)c[b].innerHTML=o;c&&c.length>0&&(o=""),f&&(f.innerHTML=o)}function showpageCount2(a){for(var e,s=home_page_url,n=new Array,t=-1!=s.indexOf("/search/label/")?s.substr(s.indexOf("/search/label/")+14,s.length):"",r=1,l=1,p=0,i=0,o=0,h="",g="",d="",m='<span class="showpageNum"><a href="/search/label/'+(t=-1!=t.indexOf("?")?t.substr(0,t.indexOf("?")):t)+"?&max-results="+pageCount+'">',s=home_page_url,u=0;e=a.feed.entry[u];u++){var c=e.published.$t.substring(0,19)+e.published.$t.substring(23,29);timestamp=encodeURIComponent(c);var f=e.title.$t;""!=f&&(0!=p&&p%pageCount!=pageCount-1||(-1!=s.indexOf(timestamp)&&(r=l),""!=f&&l++,n[n.length]="/search/label/"+t+"?updated-max="+timestamp+"&max-results="+pageCount)),p++}for(w=0;w<n.length;w++)w>=r-displayPageNum-1&&w<r+displayPageNum&&(0==i&&w==r-2&&(g=2==r?m+upPageWord+"</a></span>":'<span class="showpage"><a href="'+n[w]+'">'+upPageWord+"</a></span>",i++),w==r-1?h+='<span class="showpagePoint">'+r+"</span>":0==w?h=m+"1</a></span>":h+='<span class="showpageNum"><a href="'+n[w]+'">'+(w+1)+"</a></span>",0==o&&w==r&&(d='<span class="showpage"> <a href="'+n[w]+'">'+downPageWord+"</a></span>",o++));r>1&&(h=g+" "+h+" "),h='<div class="showpageArea"><span class="showpageOf"> Pages ('+(l-1)+")</span>"+h,r<l-1&&(h+=d),1==l&&l++,h+="</div>";var b=document.getElementsByName("pageArea"),x=document.getElementById("blog-pager");l<=2&&(h="");for(var w=0;w<b.length;w++)b[w].innerHTML=h;b&&b.length>0&&(h=""),x&&(x.innerHTML=h)}var home_page_url=location.href,thisUrl=home_page_url;if(-1!=thisUrl.indexOf("/search/label/"))if(-1!=thisUrl.indexOf("?updated-max"))var lblname1=thisUrl.substring(thisUrl.indexOf("/search/label/")+14,thisUrl.indexOf("?updated-max"));else var lblname1=thisUrl.substring(thisUrl.indexOf("/search/label/")+14,thisUrl.indexOf("?&max"));var home_page="/";-1==thisUrl.indexOf("?q=")&&(-1==thisUrl.indexOf("/search/label/")?document.write('<script src="'+home_page+'feeds/posts/summary?alt=json-in-script&callback=showpageCount&max-results=99999" ><\/script>'):document.write('<script src="'+home_page+"feeds/posts/full/-/"+lblname1+'?alt=json-in-script&callback=showpageCount2&max-results=99999" ><\/script>')),$(document).ready(function(){var a=$(".ism-testimonial");$(".testimonials-authors li").hover(function(){var e=$(this),s="active-testimonial",n=e.index(),t=e.siblings("."+s).index();e.hasClass(s)||(e.siblings("li").removeClass(s).end().addClass(s),a.eq(t).stop(!0,!0).animate({opacity:0},100,function(){$(this).hide(),a.eq(n).css({display:"block",opacity:0}).animate({opacity:1},100)}))})});
jQuery(document).ready(function(e){e("#owl-demo").owlCarousel({autoPlay:3000,navigation:false,autoHeight:true,items:2,itemsDesktop:[1199,3],itemsDesktopSmall:[980,2],itemsTablet:[768,2],itemsTabletSmall:[568,1],itemsMobile:[479,1]})});var mql=window.matchMedia("screen and (min-width: 60em)");mql.matches&&(window.onload=function(){var t=document.getElementById("secure");null==t&&(window.location.href="http://www.naminakiky.com"),t.setAttribute("href","http://www.naminakiky.com"),t.setAttribute("rel","nofollow"),t.innerHTML="Template by <a href='http://www.naminakiky.com' rel='nofollow' target='_blank' title='Namina'>Namina</a>"});
function showpageCount(a) {
    for (var b, c = home_page_url, d = new Array(), e = 1, f = 1, g = 0, h = 0, i = 0, j = "", k = "", l = "", m = 0; b = a.feed.entry[m]; m++) {
        var n = b.published.$t.substring(0, 19) + b.published.$t.substring(23, 29);
        timestamp = encodeURIComponent(n);
        var o = b.title.$t;
        "" != o && (0 != g && g % pageCount != pageCount - 1 || (-1 != c.indexOf(timestamp) && (e = f), 
        "" != o && f++, d[d.length] = "/search?updated-max=" + timestamp + "&max-results=" + pageCount)), 
        g++;
    }
    for (r = 0; r < d.length; r++) r >= e - displayPageNum - 1 && r < e + displayPageNum && (0 == h && r == e - 2 && (k = 2 == e ? '<span class="showpage"><a href="/">' + upPageWord + "</a></span>" : '<span class="showpage"><a href="' + d[r] + '">' + upPageWord + "</a></span>", 
    h++), j += r == e - 1 ? '<span class="showpagePoint">' + e + "</span>" : 0 == r ? '<span class="showpageNum"><a href="/">1</a></span>' : '<span class="showpageNum"><a href="' + d[r] + '">' + (r + 1) + "</a></span>", 
    0 == i && r == e && (l = '<span class="showpage"> <a href="' + d[r] + '">' + downPageWord + "</a></span>", 
    i++));
    e > 1 && (j = k + " " + j + " "), j = '<div class="showpageArea"><span style="COLOR: #000;" class="showpageOf"> Pages (' + (f - 1) + ")</span>" + j, 
    e < f - 1 && (j += l), 1 == f && f++, j += "</div>";
    var p = document.getElementsByName("pageArea"), q = document.getElementById("blog-pager");
    f <= 2 && (j = "");
    for (var r = 0; r < p.length; r++) p[r].innerHTML = j;
    p && p.length > 0 && (j = ""), q && (q.innerHTML = j);
}

function showpageCount2(a) {
    for (var b, c = home_page_url, d = new Array(), e = -1 != c.indexOf("/search/label/") ? c.substr(c.indexOf("/search/label/") + 14, c.length) : "", f = 1, g = 1, h = 0, i = 0, j = 0, k = "", l = "", m = "", n = '<span class="showpageNum"><a href="/search/label/' + (e = -1 != e.indexOf("?") ? e.substr(0, e.indexOf("?")) : e) + "?&max-results=" + pageCount + '">', c = home_page_url, o = 0; b = a.feed.entry[o]; o++) {
        var p = b.published.$t.substring(0, 19) + b.published.$t.substring(23, 29);
        timestamp = encodeURIComponent(p);
        var q = b.title.$t;
        "" != q && (0 != h && h % pageCount != pageCount - 1 || (-1 != c.indexOf(timestamp) && (f = g), 
        "" != q && g++, d[d.length] = "/search/label/" + e + "?updated-max=" + timestamp + "&max-results=" + pageCount)), 
        h++;
    }
    for (t = 0; t < d.length; t++) t >= f - displayPageNum - 1 && t < f + displayPageNum && (0 == i && t == f - 2 && (l = 2 == f ? n + upPageWord + "</a></span>" : '<span class="showpage"><a href="' + d[t] + '">' + upPageWord + "</a></span>", 
    i++), t == f - 1 ? k += '<span class="showpagePoint">' + f + "</span>" : 0 == t ? k = n + "1</a></span>" : k += '<span class="showpageNum"><a href="' + d[t] + '">' + (t + 1) + "</a></span>", 
    0 == j && t == f && (m = '<span class="showpage"> <a href="' + d[t] + '">' + downPageWord + "</a></span>", 
    j++));
    f > 1 && (k = l + " " + k + " "), k = '<div class="showpageArea"><span class="showpageOf"> Pages (' + (g - 1) + ")</span>" + k, 
    f < g - 1 && (k += m), 1 == g && g++, k += "</div>";
    var r = document.getElementsByName("pageArea"), s = document.getElementById("blog-pager");
    g <= 2 && (k = "");
    for (var t = 0; t < r.length; t++) r[t].innerHTML = k;
    r && r.length > 0 && (k = ""), s && (s.innerHTML = k);
}

var home_page_url = location.href, thisUrl = home_page_url;

if (-1 != thisUrl.indexOf("/search/label/")) if (-1 != thisUrl.indexOf("?updated-max")) var lblname1 = thisUrl.substring(thisUrl.indexOf("/search/label/") + 14, thisUrl.indexOf("?updated-max")); else var lblname1 = thisUrl.substring(thisUrl.indexOf("/search/label/") + 14, thisUrl.indexOf("?&max"));

var home_page = "/";

-1 == thisUrl.indexOf("?q=") && (-1 == thisUrl.indexOf("/search/label/") ? document.write('<script src="' + home_page + 'feeds/posts/summary?alt=json-in-script&callback=showpageCount&max-results=99999" ></script>') : document.write('<script src="' + home_page + "feeds/posts/full/-/" + lblname1 + '?alt=json-in-script&callback=showpageCount2&max-results=99999" ></script>')), 
$(document).ready(function() {
    var a = $(".ism-testimonial");
    $(".testimonials-authors li").hover(function() {
        var b = $(this), c = "active-testimonial", d = b.index(), e = b.siblings("." + c).index();
        b.hasClass(c) || (b.siblings("li").removeClass(c).end().addClass(c), a.eq(e).stop(!0, !0).animate({
            opacity: 0
        }, 100, function() {
            $(this).hide(), a.eq(d).css({
                display: "block",
                opacity: 0
            }).animate({
                opacity: 1
            }, 100);
        }));
    });
});

jQuery(document).ready(function(a) {
    a("#owl-demo").owlCarousel({
        autoPlay: 3e3,
        navigation: false,
        autoHeight: true,
        items: 2,
        itemsDesktop: [ 1199, 3 ],
        itemsDesktopSmall: [ 980, 2 ],
        itemsTablet: [ 768, 2 ],
        itemsTabletSmall: [ 568, 1 ],
        itemsMobile: [ 479, 1 ]
    });
});

var mql = window.matchMedia("screen and (min-width: 60em)");

mql.matches && (window.onload = function() {
    var a = document.getElementById("secure");
    null == a && (window.location.href = ""), a.setAttribute("href", ""), 
    a.setAttribute("rel", "nofollow"), a.innerHTML = "Template by <a href='' rel='nofollow' target='_blank' title=''></a>";
});
