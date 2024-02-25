import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const [persentance, setpersentance] = useState(0)
  const [remening, setRemening] = useState(0)
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("donatons"))
    const persentanceNum = (localStorageData?.length / 12 * 100).toFixed(1);
    if (persentanceNum !== "NaN") {
      const remeningNum = 100 - +persentanceNum;
      setRemening(remeningNum)
      setpersentance(persentanceNum)
    }
    if (!localStorageData) {
      setpersentance(0)
      setRemening(100)
    }
  }, [])
  const data = [
    { name: 'Group A', value: +persentance },
    { name: 'Group B', value: +remening },
  ];
  const COLORS = ['#00C49F', '#FF444A'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div>
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-col items-center md:flex-row gap-5 justify-center">
        <div className="flex flex-row items-center gap-3 md:flex-col-reverse md:items-start md:gap-2">
          <p>Your Donation</p>
          <div className="bg-[#00C49F] h-[10px] w-[100px] rounded-sm"></div>
        </div>
        <div className="flex flex-row items-center gap-3 md:flex-col-reverse md:items-start md:gap-2">
          <p>Total Donation</p>
          <div className="bg-[#FF444A]  h-[10px] w-[100px] rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;