import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Панельу правления</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Домашняя страница
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Аналитика (в разработке)
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Продажи (в разработке)
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Меню </h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Пользователи
              </li>
            </Link>
            <Link to="/view-products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Товары
              </li>
              </Link>
                     <Link to="/view-orders" className="link">
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Заказы
            </li>
            </Link>
            
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Уведомления</h3>
          <ul className="sidebarList">
            
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Отзывы (в разработке)
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Сообщения (в разработке)
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Штаб</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Управление (в разработке)
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Аналитика (в разработке)
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Отчёты (в разработке)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
