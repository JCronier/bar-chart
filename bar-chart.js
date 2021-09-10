function generateBarChart(data) {
	const [barWidth, marginWidth] = setBarWidth(data);
  const heightBar = 500 / Math.max(...data);
  let $element = "";
	for (let i = 1; i <= data.length; i++) {
    $element = "<div id=\""+i+"\" class=\"bar\"></div>";
  	$("#bar-chart").append($element);
    $("#" + i).css({"left": ((i + (i - 1)) * barWidth) - marginWidth + "px",
    								"width": barWidth + "px",
                    "height": data[i - 1] * heightBar + "px",
                    "top" : 500 - data[i - 1] * heightBar + "px"});

   
  }
}


function drawBarChart(data, options, element) {
	generateBarChart(data);
}

function setBarWidth(data) {
	const widthOfBar = $("#bar-chart").width() / data.length / 2;
  const widthOfBarMargin = widthOfBar / 2;
  return [widthOfBar, widthOfBarMargin];
}

//generateBarChart([1,2,3,4,5,6,7,8,9,10]);
