function generateBarChart(data, options) {
  setChartSize(options);
  const barWidth = $("#bar-chart").width() / data.length / 2;
  const marginWidth = barWidth / 2;
  const heightBar = $("#bar-chart").width() / Math.max(...data);
  let $element = "";
  for (let i = 1; i <= data.length; i++) {
    $element = "<div id=\"" + i + "\" class=\"bar\"></div>";
    $("#bar-chart").append($element);
    $("#" + i).css({
      "left": ((i + (i - 1)) * barWidth) - marginWidth + "px",
      "width": barWidth + "px",
      "height": data[i - 1] * heightBar + "px",
      "top": $("#bar-chart").height() - data[i - 1] * heightBar + "px",
      "background-color": "#" + Math.floor(Math.random() * 16777215).toString(16)
    });
    //$("#bar-chart").append(<input type="color" id=);
  }
}

function drawBarChart(data, options, element) {
  setChartSize(options);
  generateBarChart(data, options);
}

/*$(".input").keypress(function(event) {
  if ( event.which == 13 ) {
     event.preventDefault();
     let $val = $(this).val();
  }
});*/

function setChartSize(options) {
  /*	let $height = $("#y-axis").val();
    let $width = $("#x-axis").val();*/
  $(".chart").css({
    "height": options[1] + "px",
    "width": options[0] + "px"
  });
}

$("document").ready(function() {
  $("#bar-chart").on("click", ".bar", function() {
    const that = this;
    $("#bar-color").attr({
      "type": "color",
      "value": rgbToHex($(that).css("background-color"))
    });
  });
});

function rgbToHex(rgb) {
  // Choose correct separator
  let sep = rgb.indexOf(",") > -1 ? "," : " ";
  // Turn "rgb(r,g,b)" into [r,g,b]
  rgb = rgb.substr(4).split(")")[0].split(sep);

  let r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}


//generateBarChart([1,2,3,4,5,6,7,8,9,10]);