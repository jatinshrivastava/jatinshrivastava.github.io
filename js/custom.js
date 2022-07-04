/* Animated Iam */
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 100 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};

//bar
var ctxB = document.getElementById("barChart").getContext('2d');
var myBarChart = new Chart(ctxB, {
    type: 'bar',
    data: {
        labels: ["Dart", "Swift", "Kotlin", "C", "Python", "Java", "C++"],
        datasets: [{
            label: 'Skill Level',
            data: [9,8,6,7,5,5,4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(236, 126, 6, 0.2)',
                'rgba(175, 137, 200, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(236, 126, 6, 1)',
                'rgba(175, 137, 200, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 10,
                    min: 0,
                    stepSize: 1,
                    beginAtZero: true,
                    fontColor: "#93a2c2",
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "#93a2c2",
                }
            }]
        }
    }
});




//line
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
    type: 'line',
    data: {
        labels: ["Flutter", "Django", "HTML", "CSS", "JavaScript", "PHP", "MYSQL", ],
        datasets: [{
                label: "Skill Level",
                data: [9, 7, 9, 8, 6, 5, 6],
                backgroundColor: [
                    'rgba(105, 0, 132, .2)',
                ],
                borderColor: [
                    'rgba(200, 99, 132, .7)',
                ],
                borderWidth: 2
            },

        ]
    },
    options: {
        legend: {
            display: false,
        },
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    max: 10,
                    min: 0,
                    stepSize: 1,
                    beginAtZero: true,
                    fontColor: "#93a2c2",
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "#93a2c2",
                }
            }]
        }
    }

});
//radar
var ctxR = document.getElementById("radarChart").getContext('2d');
var myRadarChart = new Chart(ctxR, {
    type: 'radar',
    data: {
        labels: ["Problem Solving", "Creativity", "Analytical Thinking", "Teamwork", "Communication", "Organized", "Agile"],
        datasets: [{
                label: "My First dataset",
                data: [95, 100, 85, 90, 92, 94, 90],
                backgroundColor: [
                    'rgba(105, 0, 132, .2)',
                ],
                borderColor: [
                    'rgba(200, 99, 132, .7)',
                ],
                borderWidth: 2
            },

        ]
    },
    options: {
        scale:{
            pointLabels:{
               fontColor:"#93a2c2",
            },
            ticks: {
                display: false,
                max: 100,
        min: 80,
        stepSize: 5
              }
        },
        legend: {
            display: false,
        },
        responsive: true
    }
});

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
    document.querySelectorAll('*'),
    function(el) {
        if (el.offsetWidth > docWidth) {
            console.log(el);
        }
    }
);