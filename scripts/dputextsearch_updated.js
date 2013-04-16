//DePaul fix for Full Text Search Issue in CDM.  Replaces the Text Search with a display of passed search terms 
if(fullTextSearchTerm.length != 0){		
$("#img_view_search_box").replaceWith("<div id='img_view_search_box_dpu' style='position: absolute; min-width: 623px; display: block;'><div id='img_view_search_box_open_dpu' style='display: block; '><table style='display:inline;'><tbody><tr><td><span class='icon_10 ui-icon-search' style=''></span></td><td><strong>You searched for:</strong> <span id='dpufulltextsearchterm'></span>&nbsp;|&nbsp;<a tabindex='3' href='javascript://;' id='search_content_adv_link' class='action_link_10'>Refine your search</a></td><td></td></tr></tbody></table></div>");
$("#dpufulltextsearchterm").prepend(fullTextSearchTerm);
}
else {
$("#img_view_search_box").replaceWith("<div id='img_view_search_box_dpu' style='display: none; border:none !important;'></div>");
  }
  
  
  
  
