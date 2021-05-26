import Button from "./Button";
import {useLocation} from 'react-router-dom'
const Header = ({onAdd,showAdd}) => {
  const location= useLocation()
  return (
    <header className="header">
      <h1> React Task </h1>
      {location.pathname==='/' && (<Button 
       onAdd={onAdd}
       text={showAdd ? 'Close': 'Add'}
       color={showAdd ? 'red': 'green'}
       />)}
    </header>
  );
};
export default Header;
