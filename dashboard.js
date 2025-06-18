document.getElementById("withdraw-money-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const amount = parseFloat(document.getElementById("withdraw-amount").value);
  if (amount > 0 && amount <= balance) {
    balance -= amount;
    updateBalanceDisplay();
    closeModal("withdraw");
    this.reset();

    // Simulate redirect after short delay
    setTimeout(() => {
      window.location.href = 'withdraw-confirmation.html';
    }, 800);
  } else {
    alert("Invalid amount. You can’t withdraw more than your current balance.");
  }
});
  // Sample data - replace with real data integration later
  const balanceData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Account Balance ($)',
      data: [12000, 12100, 12250, 12100, 12450, 12500, 12450],
      borderColor: '#00bcd4',
      backgroundColor: 'rgba(0,188,212,0.3)',
      fill: true,
      tension: 0.3,
      pointRadius: 4,
      pointHoverRadius: 6
    }]
  };

  const balanceConfig = {
    type: 'line',
    data: balanceData,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false,
          ticks: {
            color: '#fff'
          },
          grid: {
            color: '#2c3e50'
          }
        },
        x: {
          ticks: { color: '#fff' },
          grid: { color: '#2c3e50' }
        }
      },
      plugins: {
        legend: {
          labels: { color: '#00bcd4' }
        }
      }
    }
  };

  // Portfolio Distribution Pie Chart
  const portfolioData = {
    labels: ['BTC', 'ETH', 'USDT', 'Others'],
    datasets: [{
      label: 'Portfolio',
      data: [50, 25, 15, 10],
      backgroundColor: ['#f7931a', '#627eea', '#26a17b', '#888888'],
      hoverOffset: 30
    }]
  };

  const portfolioConfig = {
    type: 'pie',
    data: portfolioData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: '#fff' }
        }
      }
    }
  };

  // Trading Volume Bar Chart
  const volumeData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Trading Volume',
      data: [5000, 7000, 4000, 9000, 8000, 10000, 6000],
      backgroundColor: '#00bcd4'
    }]
  };

  const volumeConfig = {
    type: 'bar',
    data: volumeData,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: '#fff' },
          grid: { color: '#2c3e50' }
        },
        x: {
          ticks: { color: '#fff' },
          grid: { color: '#2c3e50' }
        }
      },
      plugins: {
        legend: {
          labels: { color: '#00bcd4' }
        }
      }
    }
  };

  // Render Charts
  window.onload = function() {
    const balanceChart = new Chart(
      document.getElementById('balanceChart'),
      balanceConfig
    );

    const portfolioChart = new Chart(
      document.getElementById('portfolioChart'),
      portfolioConfig
    );

    const volumeChart = new Chart(
      document.getElementById('volumeChart'),
      volumeConfig
    );
  }
  const paymentMethodSelect = document.getElementById('payment-method');
const bankDetailsDiv = document.getElementById('bank-details');

paymentMethodSelect.addEventListener('change', () => {
  if (paymentMethodSelect.value === 'bank') {
    bankDetailsDiv.style.display = 'block';
  } else {
    bankDetailsDiv.style.display = 'none';
  }
});

// Optional: Handle form submission
document.getElementById('add-money-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const amount = parseFloat(document.getElementById('add-amount').value);
  const method = paymentMethodSelect.value;

  if (!amount || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }
  if (!method) {
    alert('Please select a payment method.');
    return;
  }

  if (method === 'bank') {
    alert(`Please transfer $${amount.toFixed(2)} to the bank account shown.\nYour funds will be credited after confirmation.`);
    closeModal('add');
  } else {
    // TODO: Implement card payment processing here
    alert(`Processing card payment of $${amount.toFixed(2)}...`);
    closeModal('add');
  }

  // Reset form after submission
  this.reset();
  bankDetailsDiv.style.display = 'none';
});

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  window.location.href = `dashboard.html?user=${encodeURIComponent(username)}`;
});

const params = new URLSearchParams(window.location.search);
const user = params.get('user');
if (user) {
  document.getElementById('welcome-user').textContent = `Welcome, ${user}!`;
}
