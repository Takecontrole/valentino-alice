import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Chart from "../components/chart/Chart";
import FeaturedInfo from "../components/featuredInfo/FeaturedInfo";
import "./AdminDashboard.css";
import { userData } from "../dummyData";
import WidgetSm from "../components/widgetSm/WidgetSm";
import WidgetLg from "../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import axios from "../axios";

function AdminDashboard() {
    const [userStats, setUserStats] = useState([]);
    const [pStats, setPStats] = useState([]);
    

  const MONTHS = useMemo(
    () => [
      "Янв",
      "Фев",
      "Мар",
      "Апр",
      "Май",
      "Июн",
      "Июл",
      "Авг",
      "Сен",
      "Окт",
      "Ноя",
      "Дек",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Активных пользователей": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);
  
useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/orders/income" );
        const list = res.data.sort((a,b)=>{
            return a._id - b._id
        })
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Сумма продаж": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);
    return (
      <div >
      
       <div className="adminpage-container">
        <Sidebar />
     <div className="adminpage">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="Пользовательская аналитика"
        grid
        dataKey="Активных пользователей"
      />
      <Chart
        data={pStats}
        title="Аналитика продаж"
        grid
        dataKey="Сумма продаж"
      />
      <Chart data={userData} title="Пример" grid dataKey="Active User"/>
      <div className="homeWidgets" style={{overflow:"scroll"}}>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
    </div>
    </div>
    
    );
}

export default AdminDashboard;
