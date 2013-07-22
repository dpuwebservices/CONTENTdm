// JavaScript Document
//Adding DisQus Plugin to CONTENTdm
//Styling of the plugin is managed by the disqus.css 
//CONFIGURATION VARIABLES: 
var disqus_shortname = 'dpudigicoll'; // required: replace example with your forum shortname
// Insert Disqus thread after details area in CDM
$('#details').after('<div id="disqus_thread"></div>'); 
            /* * * DON'T EDIT BELOW THIS LINE * * */
            (function() {
                var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            })();
      
       
