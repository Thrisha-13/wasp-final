
    // barchart2.js

// Use an immediately-invoked function expression (IIFE) to create a local scope
(function() {
  var ctx = document.getElementById('barchart').getContext('2d');

  // Check if ctx is defined before creating the chart
  if (ctx) {
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels:  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
        
          data: [50, 49,49, 48, 48, 47, 46 ],
          backgroundColor: 'rgba(239, 22, 22, 0.63)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false // Set display to false to hide the legend
          }
        }
      }
    });
  } else {
    console.error("Canvas context 'ctx' not found.");
  }
})();
