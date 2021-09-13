function generateBarChart(data, options, element) {
  const barWidth = $(element).width() / data.length / 2;
  const marginWidth = barWidth / 2;
  const heightBar = $(element).width() / Math.max(...data);
  let $element = "";
  for (let i = 1; i <= data.length; i++) {
    $element = "<div id=\"" + options.labels[i - 1] + "\" class=\"bar\"></div>";
    $(element).append($element);
    $("#" + options.labels[i - 1]).css({
      "left": ((i + (i - 1)) * barWidth) - marginWidth + "px",
      "width": barWidth + "px",
      "height": data[i - 1] * heightBar + "px",
      "top": $(element).height() - data[i - 1] * heightBar + "px",
      "background-color": "#" + Math.floor(Math.random() * 16777215).toString(16)
    });
    $("#" + options.labels[i - 1]).append("<span>" + options.labels[i - 1] + "</span>")
  }
}

function drawBarChart(data, options, element) {
	setTitle(options.title);
	setChartSize(options.xAxis, options.yAxis);
  generateBarChart(data, options, element);
}

function setChartSize(x, y) {
  $(".chart").css({
    "height": y + "px",
    "width": x + "px"
  });
}

function setTitle(title) {
	$("#title").text(title);
}

$("document").ready(function() {
  $("#bar-chart").on("click", ".bar", function() {
    const that = this;
    $(".color-picker").attr({
      "type": "color",
      "value": rgbToHex($(that).css("background-color")),
    });
    $(".color-picker").css({"left": $(that).css("left"),
														"top":  parseInt($(that).css("top"))- 30 + "px"
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

let data = [1,2,3,4,5,6,7,8];

let options = {
	yAxis: 1000,
  xAxis: 1000,
  labels: ["Adam", "B", "C", "D", "E", "F", "G", "H"] ,
  title: "Bar Chart"
}

let element = "#bar-chart";
drawBarChart(data, options, element);