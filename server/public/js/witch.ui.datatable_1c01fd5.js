!function(t){t.fn.witchDataTable=function(a){function n(){var t="<thead><tr>",n=a.thead;for(var e in n)t+='<th style="width:'+n[e]+'">'+e+"</th>";t+="</tr></thead>";var d=a.data,r=i.data("line");t+="<tbody>";for(var h in d)t+="<tr><td>"+r+'</td><td class="uname">'+h+"</td><td>"+d[h]+"</td></tr>",i.data("line",++r);t+="</tbody>",i.append(t)}function e(){var n=t.trim(t(a.search.input).val());t(".uname").each(function(){var t=this;-1==t.html().indexOf(n)&&t.parent().css("display","none")})}var d={thead:{},data:{},search:{id:"#search",input:"#input",url:""}},a=t.extend(d,a),i=this;i.data("line",1),n(),a.search&&t(a.search.input).bind({keydown:function(){e()},keyup:function(){e()}})}}(jQuery);