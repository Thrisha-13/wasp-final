const ctx = document.getElementById('myChart').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [{
               
                data: [12, 19, 3, 5, 2, 3, 22],
                borderWidth: 1,
                borderRadius: 20,
                backgroundColor:  'rgba(239, 22, 22, 0.46)'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    stepSize: 5 // Set the step size to 5
                }
            },
            plugins: {
              legend: {
                  display: false
              }
          }
        }
    });