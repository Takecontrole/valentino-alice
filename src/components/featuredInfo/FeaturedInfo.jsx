import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "../../axios"
export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await axios.get("orders/income");
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Выручка</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₽{income[0]?.total}</span>
          <span className="featuredMoneyRate">
            %{Math.floor(perc)}{" "}
            {perc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" /> 
            )}
          </span>
        </div>
        <span className="featuredSub">По сравнению с предыдущим месяцем</span>
             
      </div>
    
      <div className="featuredItem">
        <span className="featuredTitle">Расходы</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₽40.225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">По сравнению с предыдущим месяцем</span>
      </div>
    </div>
  );
}