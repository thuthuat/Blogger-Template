function getId(e){return document.getElementById(e)}function showResult(e){var t,n,l,r=e.feed.entry?e.feed.entry:"";skeleton="<h4>"+config.resultTitle+" &quot;"+input.value+"&quot;</h4>",skeleton+='<a title="Close" style="display:block;position:absolute;top:0px;right:0px;line-height:normal;text-decoration:none;color:inherit;font-size:250%;" href="#close" onclick="closeSearch();resultContainer.style.display=\'none\';return false;">&times;</a><ol>',""===r&&(skeleton+="<li>"+config.noResult+"</li>");for(var i=0;i<config.numPost&&i!=r.length;i++){for(var a=new RegExp(input.value,"ig"),s=r[i],o=s.title.$t.replace(a,"<mark>"+input.value+"</mark>"),u=0;u<s.link.length;u++)if("alternate"==s.link[u].rel){t=s.link[u].href;break}n="summary"in s&&config.summaryPost===!0?s.summary.$t:"",config.resultThumbnail===!0&&(l="media$thumbnail"in s?s.media$thumbnail.url.replace(/.*?:\/\//g,"//").replace(/\/s[0-9]+\-c/g,"/s"+config.thumbSize+"-c"):config.fallbackThumb),n=n.replace(/<br ?\/?>/gi," ").replace(/<.*?>/g,"").replace(/[<>]/g,""),n.length>config.summaryLength&&(n=n.substring(0,config.summaryLength)+"..."),n=n.replace(a,"<mark>"+input.value+"</mark>"),skeleton+='<li><img style="width:'+config.thumbSize+"px;height:"+config.thumbSize+'px;" src="'+l+'" alt="" /><a href="'+t+'" target="_blank" title="'+o+'">'+o+"</a>"+n+"</li>"}skeleton+="</ol>",resultContainer.innerHTML=skeleton,resultLoader.style.display="none",resultContainer.style.display="block"}function updateScript(){resultContainer.style.display="none",resultLoader.style.display="block";var e=getId("search-feed-script"),t=document.createElement("script"),n=input.value;return t.id="search-feed-script",t.type="text/javascript",t.src=config.url+"/feeds/posts/summary?alt=json-in-script&q="+n+"&max-results="+config.numPost+"&callback=showResult",e.parentNode.removeChild(e),document.getElementsByTagName("head")[0].appendChild(t),!1}function resetField(){""===input.value&&(resultContainer.style.display="none",resultLoader.style.display="none")}var config=searchFormConfig,input=getId("feed-q-input"),resultContainer=getId("search-result-container"),resultLoader=getId("search-result-loader"),skeleton="";!function(){var e=document.createElement("script");e.type="text/javascript",e.id="search-feed-script",document.getElementsByTagName("head")[0].appendChild(e)}();