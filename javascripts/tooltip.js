// Generated by CoffeeScript 1.4.0

$.fn.tooltip = function() {
  return $.each($(this), function(index, element) {
    var content, left, tooltip, top;
    content = $(element).data("title");
    tooltip = $("<div class=\"tooltip\"><div class=\"arrow\"></div>" + content + "</div>");
    $(element).after(tooltip);
    top = $(element).position().top - tooltip.height() - $(element).outerHeight();
    left = $(element).position().left;
    tooltip.css({
      "top": top
    }).css({
      "left": left
    });
    return $(element).hover(function() {
      return tooltip.toggleClass('show');
    });
  });
};
