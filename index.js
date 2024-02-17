// sidebar toggle

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}



//line chart
const lineChartOptions = {
  series: [
    {
      name: 'Attendance Percentage',
      data: [30, 40, 45, 65, 60, 55],
    },
  ],
  chart: {
    height: 350,
    type: 'line',
    toolbar: {
      show: false,
    },
  },
  colors: ['#002244'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  },
  yaxis: {
    title: {
      text: 'Attendance Percentage',
    },
  },
};

const lineChart = new ApexCharts(
  document.querySelector('#line-chart'),
  lineChartOptions
);
lineChart.render();

// donut chart
const donutChartOptions = {
  series: [90, 10, 12],
  chart: {
    type: 'donut',
    height: 350,
  },
  labels: ['Present', 'Absent', 'Late'],
  colors: ['#008000', '#cc3c43', '#FFD700'],
  legend: {
    show: true,
    position: 'bottom',
  },
};

const donutChart = new ApexCharts(
  document.querySelector('#donut-chart'),
  donutChartOptions
);
donutChart.render();
