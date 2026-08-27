import TopNav from './topNav';
import BottomNav from './bottomNav';
import './layout.css';

export default function Layout({ children }) {
return (
<div className="layout">
<TopNav />
<main>{children}</main>
<BottomNav />
</div>
)
}