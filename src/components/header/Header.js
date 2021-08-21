import '../../App.css';
import Bar from './Bar.js';
import Profile from './Profile.js';

function Header() {
  return (
    <div className="Header">
      <Bar/>
      <Profile/>
    </div>
  );
}

export default Header;