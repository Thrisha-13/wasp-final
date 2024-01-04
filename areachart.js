google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Months', 'chick weight'],
          ['first', 0.5],
          ['second',1.5],
          ['third', 2.5],
          ['fourth', 3.0]
        ]);

        var options = {
          hAxis: {title: 'Chick Weight over Months', titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 1},
          areaOpacity: 0.3,
          colors: ['red'],
          legend: { position: 'none' } // Set legend position to none to hide it
        };
        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }



      
