import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

function Charts({ id }) {
  const [chartData, setChartData] = useState({});
  const [apiDays, setapiDays] = useState("13");

  useEffect(() => {
    let pricesData = [];
    let days = [];

    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${apiDays}&interval=daily`
      )
      .then((res) => {
        for (const [index, value] of res.data.prices.entries()) {
          pricesData.push(parseInt(value[1]));
          days.push(index + 1 + "d");
        }

        setChartData({
          labels: days,
          datasets: [
            {
              label: "",
              data: pricesData,
              backgroundColor: "#fff",
              borderColor: "#1F9B8B",
              borderWidth: 2,
              pointRadius: 1,
            },
          ],
        });
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "", display: false },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: true,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: true,
                  },
                },
              ],
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default Charts;
