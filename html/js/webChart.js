$(function(){

	var chart1 = document.getElementById("Chart1");
	var chrData = {
		labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
		datasets: [{
			label: "라벨 이름입니당", // 라벨 이름
			data: [0, 59, 75, 20, 20, 55, 40],
			lineTension: 0,
			fill: false, // 라인 일 경우 채울 것인지, 안 채울 것인지
			borderColor: 'orange',
			backgroundColor: 'transparent',
			pointBorderColor: 'orange',
			pointBackgroundColor: 'rgba(255,150,0,0.5)',
			borderDash: [5, 5], // 라인 그래프 대시
			pointRadius: 10, // 표시된 동글뱅이
			pointHoverRadius: 20, // 동글뱅이 hover
			pointHitRadius: 10, // 이건 뭔지 모르겠다
			pointBorderWidth: 2, // 표시된 동글뱅이 보더 굵기
			pointStyle: 'rectRounded' // 둥근 사각형으로 표시
		}]
	};
	var chrOptions = {
		// 라벨
		legend: {
			display: true, // 라벨 표시
			position: 'right', // 라벨 위치
			labels: {
				boxWidth: 50,
				// 높이 값도 찾아보기
				fontColor: 'black'
			}
		},
		scales: {
			// X축 설정
			xAxes: [{
				gridLines: {
					display: false,
					color: "black"
				},
				scaleLabel: {
					display: true,
					labelString: "이것이 바로 x축!!",
					fontColor: "red"
				}
			}],
			// Y축 설정
			yAxes: [{
				gridLines: {
					color: "black",
					borderDash: [2, 5], // 그래프 내 x/y축 라인 대시로 
				},
				scaleLabel: {
					display: true,
					labelString: "이것이 바로 y축!!",
					fontColor: "green"
				}
			}]
		}
	};
	var lineChart = new Chart(chart1, {
		type: 'line',
		data: chrData,
		options: chrOptions
	});


//**********  두번째!!!!! ********
	var densityCanvas = document.getElementById("Chart2");

  var densityData = {
    label: '라벨 이름',
    data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638],
    backgroundColor: 'rgba(0, 99, 132, 0.6)',
    borderColor: 'rgba(0, 99, 132, 1)',
    borderWidth: 2,
    hoverBorderWidth: 4 // hover시 보더 굵기 설정
  };
  var chartOptions = {
    scales: {
      yAxes: [{
        barPercentage: 0.7, // 가로 그래프 바 굵기 설정
        gridLines: {
          display: false
        }
      }],
      xAxes: [{
        gridLines: {
          zeroLineColor: "black",
          zeroLineWidth: 2 // 처음 시작하는 라인 굵기
        },
        ticks: {
          min: 500, // 최소값
          max: 6000, // 최대값
          stepSize: 1300 // 늘어나는 범위
        },
        scaleLabel: {
          display: true,
          labelString: "가로값 X"
        }
      }]
    },
    elements: {
      rectangle: {
        borderSkipped: 'left',
      }
    }
  };
  var barChart = new Chart(densityCanvas, {
    type: 'horizontalBar', // 가로 그래프
    data: {
      labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
      datasets: [densityData],
    },
    options: chartOptions
  });


// ********* 3번째 *********
  var chart3 = document.getElementById("Chart3");
  var marksData = {
    labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
    datasets: [{
      label: "Student A",
      backgroundColor: "transparent",
      borderColor: "rgba(200,0,0,0.6)",
      fill: false, // 방사형에서는 fill은 true가 안됨
      radius: 6,
      pointRadius: 6,
      pointBorderWidth: 3,
      pointBackgroundColor: "pink",
      pointBorderColor: "rgba(200,0,0,0.6)",
      pointHoverRadius: 10,
      data: [65, 75, 70, 80, 60, 80]
    }, {
      label: "Student B",
      backgroundColor: "transparent",
      borderColor: "rgba(0,0,200,0.6)",
      fill: false,
      radius: 6,
      pointRadius: 6,
      pointBorderWidth: 3,
      pointBackgroundColor: "cornflowerblue",
      pointBorderColor: "rgba(0,0,200,0.6)",
      pointHoverRadius: 10,
      data: [54, 65, 60, 70, 70, 75]
    }]
  };
  var marksOptions = {
    scale: {
      gridLines: {
        color: "black",
        lineWidth: 3
      },
      angleLines: {
        display: false
      },
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 100,
        stepSize: 20
      },
      pointLabels: { // 각 요소들 라벨
        fontSize: 22,
        fontColor: "green",
        //display: none 아예 그래프가 사라짐.
      }
    },
    legend: {
      position: 'bottom'
    }
  };
  var radarChart = new Chart(chart3, {
    type: 'radar', // 육각형
    data: marksData,
    options: marksOptions
  });


// 4번째
  var chart4 = document.getElementById("Chart4");
	var douData = {
		labels: ["한식", "중식", "일식", "양식", "동남아", "퓨전"],
		datasets: [{
			label: "지역 1",
			data: [18, 30, 24, 15, 3, 10],
			fill: true,
			borderColor: [
        "rgba(0, 39, 214, 0.6)",
        "rgba(212, 2, 2, 0.6)",
        "rgba(147, 28, 163, 0.6)",
        "rgba(0, 190, 25, 0.6)",
        "rgba(238, 223, 16, 0.6)",
        "rgba(21, 97, 141, 0.6)",
      ],
			backgroundColor: [
        "rgba(0, 39, 214, 0.4)",
        "rgba(212, 2, 2, 0.4)",
        "rgba(147, 28, 163, 0.4)",
        "rgba(0, 190, 25, 0.4)",
        "rgba(238, 223, 16, 0.4)",
        "rgba(21, 97, 141, 0.4)",
      ]
		},
		{
			label: "지역 2",
			data: [10, 5, 10, 25, 10, 30],
			fill: true,
			borderColor: [
        "rgba(0, 39, 214, 1)",
        "rgba(212, 2, 2, 1)",
        "rgba(147, 28, 163, 1)",
        "rgba(0, 190, 25, 1)",
        "rgba(238, 223, 16, 1)",
        "rgba(21, 97, 141, 1)",
      ],
			backgroundColor: [
        "rgba(0, 39, 214, 0.8)",
        "rgba(212, 2, 2, 0.8)",
        "rgba(147, 28, 163, 0.8)",
        "rgba(0, 190, 25, 0.8)",
        "rgba(238, 223, 16, 0.8)",
        "rgba(21, 97, 141, 0.8)",
      ]
		},
  ]
	};
	var douOptions = {
		// 라벨
		legend: {
			display: true, // 라벨 표시
			position: 'right', // 라벨 위치
			labels: {
				boxWidth: 30,
				// 높이 값도 찾아보기
				fontColor: 'black'
			}
		},
    cutoutPercentage: 0 // 도넛 구멍
	};
	var pieChart = new Chart(chart4, {
		type: 'doughnut',
		data: douData,
		options: douOptions
	});


  // 5번째 다른 차트 22
  var chartDub = document.getElementById("Chart5");

	var DubData = {
    labels: ["11월 21일", "11월 22일", "11월 23일", "11월 24일", "11월 25일", "11월 26일", "11월 27일"],
    datasets: [{
      label: '7일 평균',
      type: 'line',
      fill: false,
      data: [2969, 3051, 3184, 3277, 3400, 3522, 3639],
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 2
    },
    {
      label: '신규확진자',
      type: 'bar',
      data: [2827, 2698, 4115, 3937, 3899, 4067, 3928],
      backgroundColor:'rgba(54, 162, 235, 0.4)',
      borderColor:'rgba(54, 162, 235, 1)',
      borderWidth: 2
    }]
    // 컬러 다중일뗀 [''] 단일일땐 ''
  };
  var DubOptions = {
		legend: {
			display: true, // 라벨 표시
			position: 'right', // 라벨 위치
			labels: {
				boxWidth: 50,
				// 높이 값도 찾아보기
				fontColor: 'black'
			}
		},
		scales: {
			// X축 설정
			xAxes: [{
				barPercentage: 0.5,
        ticks: {
          beginAtZero: true
        },
				scaleLabel: {
					display: true,
					labelString: "날짜",
					fontColor: "black"
				}
			}],
			// Y 축
			yAxes: [{
        ticks: {
          beginAtZero:true,
          max: 5000,
          stepSize: 1000
        },
        gridLines: {
					borderDash: [8, 2],
				},
				scaleLabel: {
					display: true,
					labelString: "확신자 수",
					fontColor: "red"
				}
			}]
		}
	};

	var myChart5 = new Chart(chartDub, {
    type: 'bar',
		data: DubData,
		options: DubOptions
	});


  // 5번째 다른 차트 22
  var chartDub = document.getElementById("Chart5-1");
	var DubData = {
    labels: ["11월 21일", "11월 22일", "11월 23일", "11월 24일", "11월 25일", "11월 26일", "11월 27일"],
    datasets: [{
      label: '7일 평균',
      type: 'line',
      fill: false,
      data: [2969, 3051, 3184, 3277, 3400, 3522, 3639],
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 2
    },
    {
      label: '신규확진자',
      type: 'bar',
      data: [2827, 2698, 4115, 3937, 3899, 4067, 3928],
      backgroundColor:'rgba(54, 162, 235, 0.4)',
      borderColor:'rgba(54, 162, 235, 1)',
      borderWidth: 2
    }]
    // 컬러 다중일뗀 [''] 단일일땐 ''
  };
  var DubOptions = {
		legend: {
			display: true, // 라벨 표시
			position: 'right', // 라벨 위치
			labels: {
				boxWidth: 50,
				// 높이 값도 찾아보기
				fontColor: 'black'
			}
		},
		scales: {
			// X축 설정
			xAxes: [{
				barPercentage: 0.5,
        ticks: {
          beginAtZero: true
        },
				scaleLabel: {
					display: true,
					labelString: "날짜",
					fontColor: "black"
				}
			}],
			// Y 축
			yAxes: [{
        ticks: {
          beginAtZero:true,
          max: 5000,
          stepSize: 1000
        },
        gridLines: {
					borderDash: [8, 2],
				},
				scaleLabel: {
					display: true,
					labelString: "확신자 수",
					fontColor: "red"
				}
			}]
		},
		//**************  툴팁 설정 *********
    tooltips: {
			display: false,
      backgroundColor: 'rgba(171, 236, 222, 0.7)',
      titleFontSize: 12,
      titleFontColor: '#0066ff',
      bodyFontColor: '#000',
      bodyFontSize: 14,
      displayColors: false // 차이를 잘 모르겠다
  	}
	};
	var myChart5 = new Chart(chartDub, {
    type: 'bar',
		data: DubData,
		options: DubOptions
	});

	// 4번째 파이/도넛 차트
	var chart4 = document.getElementById("Chart4-1");
	var douData = {
		labels: ["한식", "중식", "일식", "양식", "동남아", "퓨전"],
		datasets: [{
			label: "지역 1",
			data: [18, 30, 24, 15, 3, 10],
			fill: true,
			borderColor: [
        "rgba(0, 39, 214, 0.6)",
        "rgba(212, 2, 2, 0.6)",
        "rgba(147, 28, 163, 0.6)",
        "rgba(0, 190, 25, 0.6)",
        "rgba(238, 223, 16, 0.6)",
        "rgba(21, 97, 141, 0.6)",
      ],
			backgroundColor: [
        "rgba(0, 39, 214, 0.4)",
        "rgba(212, 2, 2, 0.4)",
        "rgba(147, 28, 163, 0.4)",
        "rgba(0, 190, 25, 0.4)",
        "rgba(238, 223, 16, 0.4)",
        "rgba(21, 97, 141, 0.4)",
      ]
		},
  ]
	};
	var douOptions = {
		// 라벨
		legend: {
			display: true, // 라벨 표시
			position: 'right', // 라벨 위치
			labels: {
				boxWidth: 30,
				// 높이 값도 찾아보기
				fontColor: 'black'
			}
		},
		tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var label = data.labels[tooltipItem.index];
          return label;
        }
      }
    },
    cutoutPercentage: 0 // 도넛 구멍
	};
	var pieChart = new Chart(chart4, {
		type: 'doughnut',
		data: douData,
		options: douOptions
	});


	// ********* % 
	var chart4_2 = document.getElementById("Chart4-2");
	var douData = {
		labels: ["한식", "중식", "일식", "양식", "동남아", "퓨전"],
		datasets: [{
			label: "지역 1",
			data: [30, 64, 28, 50, 22, 16],
			fill: true,
			borderColor: [
        "rgba(0, 39, 214, 0.6)",
        "rgba(212, 2, 2, 0.6)",
        "rgba(147, 28, 163, 0.6)",
        "rgba(0, 190, 25, 0.6)",
        "rgba(238, 223, 16, 0.6)",
        "rgba(21, 97, 141, 0.6)",
      ],
			backgroundColor: [
        "rgba(0, 39, 214, 0.4)",
        "rgba(212, 2, 2, 0.4)",
        "rgba(147, 28, 163, 0.4)",
        "rgba(0, 190, 25, 0.4)",
        "rgba(238, 223, 16, 0.4)",
        "rgba(21, 97, 141, 0.4)",
      ]
		},
  ]
	};
	var douOptions = {
		// 라벨
		legend: {
			display: true, // 라벨 표시
			position: 'right', // 라벨 위치
			labels: {
				boxWidth: 30,
				// 높이 값도 찾아보기
				fontColor: 'black'
			}
		},
		tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
					var label = data.labels[tooltipItem.index];
        	var dataset = data.datasets[tooltipItem.datasetIndex];
          var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
            return previousValue + currentValue;
          });
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = Math.floor(((currentValue/total) * 100)+0.5);   
          return label + ": " + percentage + "%" + "(" + currentValue + ")";
        }
    	},
		},
		cutoutPercentage: 0 // 도넛 구멍
	};
	var pieChart = new Chart(chart4_2, {
		type: 'doughnut',
		data: douData,
		options: douOptions
	});


	// ********** 툴팁 항상 표시하기
  var chart_tip = document.getElementById("Chart5-2");
	var tip_Data = {
    labels: ["11월 21일", "11월 22일", "11월 23일", "11월 24일", "11월 25일", "11월 26일", "11월 27일"],
    datasets: [{
      label: '신규확진자',
      type: 'bar',
      data: [2827, 2698, 4115, 3937, 3899, 4067, 3928],
      backgroundColor:'rgba(54, 162, 235, 0.4)',
      borderColor:'rgba(54, 162, 235, 1)',
      borderWidth: 2
    }]
    // 컬러 다중일뗀 [''] 단일일땐 ''
  };
  var tip_Options = {
		legend: {
			display: true, // 라벨 표시
			position: 'right', // 라벨 위치
			labels: {
				boxWidth: 50,
				// 높이 값도 찾아보기
				fontColor: 'black'
			}
		},
		scales: {
			// X축 설정
			xAxes: [{
				barPercentage: 0.5,
        ticks: {
          beginAtZero: true
        },
				scaleLabel: {
					display: true,
					labelString: "날짜",
					fontColor: "black"
				}
			}],
			// Y 축
			yAxes: [{
        ticks: {
          beginAtZero:true,
          max: 5000,
          stepSize: 1000
        },
        gridLines: {
					borderDash: [8, 2],
				},
				scaleLabel: {
					display: true,
					labelString: "확신자 수",
					fontColor: "red"
				}
			}]
		},
		
		tooltips: {
			enabled: false,
		},
		hover: {
			animationDuration: 0
		},
		animation: {
			duration: 1,
			onComplete: function () {
				var chartInstance = this.chart,
					ctx = chartInstance.ctx;
				ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
				ctx.fillStyle = 'purple';
				ctx.textAlign = 'center';
				ctx.textBaseline = 'bottom';

				this.data.datasets.forEach(function (dataset, i) {
					var meta = chartInstance.controller.getDatasetMeta(i);
					meta.data.forEach(function (bar, index) {
						var data = dataset.data[index];							
						ctx.fillText(data, bar._model.x, bar._model.y - 5);
					});
				});
			}
		},
		
	};
	var myChart5 = new Chart(chart_tip, {
    type: 'bar',
		data: tip_Data,
		options: tip_Options
	});

 
	// ********** 툴팁 같이 표시하기
	var chartDub = document.getElementById("Chart5-3");
	var DubData = {
    labels: ["11월 21일", "11월 22일", "11월 23일", "11월 24일", "11월 25일", "11월 26일", "11월 27일"],
    datasets: [{
      label: '7일 평균',
      type: 'line',
      fill: false,
      data: [2969, 3051, 3184, 3277, 3400, 3522, 3639],
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 2
    },
    {
      label: '신규확진자',
      type: 'bar',
      fill: false,
      data: [2827, 2698, 4115, 3937, 3899, 4067, 3928],
      backgroundColor:'rgba(54, 162, 235, 0.4)',
      borderColor:'rgba(54, 162, 235, 1)',
      borderWidth: 2
    }]
    // 컬러 다중일뗀 [''] 단일일땐 ''
  };
  var DubOptions = {
		legend: {
			display: true, // 라벨 표시
			position: 'right', // 라벨 위치
			labels: {
				boxWidth: 50,
				// 높이 값도 찾아보기
				fontColor: 'black'
			}
		},
		scales: {
			// X축 설정
			xAxes: [{
				barPercentage: 0.5,
        ticks: {
          beginAtZero: true
        },
				scaleLabel: {
					display: true,
					labelString: "날짜",
					fontColor: "black"
				}
			}],
			// Y 축
			yAxes: [{
        ticks: {
					min: 2000,
          max: 5000,
          stepSize: 1000
        },
        gridLines: {
					borderDash: [8, 2],
				},
				scaleLabel: {
					display: true,
					labelString: "확신자 수",
					fontColor: "red"
				}
			}]
		},
		//**************  툴팁 설정 *********
    tooltips: {
			mode: 'index',
      intersect: true, // 이것이 바로 두개의 툴팁을 중간으로 함께 보여주는 것이다!!!!
			display: false, // 효과가 없는 것 같다..?
      backgroundColor: 'rgba(171, 236, 222, 0.7)',
      titleFontSize: 12,
      titleFontColor: '#0066ff',
      bodyFontColor: '#000',
      bodyFontSize: 14,
      displayColors: false, // 차이를 잘 모르겠다
			//callbacks: {
			//	label: function(tooltipItem, data) {
			//		var label = data.labels[tooltipItem.index];
			//		var dataset = data.datasets[tooltipItem.datasetIndex];
			//		var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
			//			return previousValue + currentValue;
			//		});
			//		var currentValue = dataset.data[tooltipItem.index];
			//		var percentage = Math.floor(((currentValue/total) * 100)+0.5);   
			//		return "<span>" + label + ":</span> " + percentage + "%" + "(" + currentValue + ")";
			//	}
			//},
  	},
	};
	var myChart5 = new Chart(chartDub, {
    type: 'bar',
		data: DubData,
		options: DubOptions
	});
});