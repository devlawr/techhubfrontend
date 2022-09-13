import Navigation from "../../Components/Navigation/index";
import UserSideNav from "../../Components/userSideNav/allUserSidenav";
import Table from '../../Components/Table/Table';

const User = () => {

  return (
    <div>
      <Navigation />
      <div className="list-container">
        <UserSideNav />
        <div className="list">

          <div className="result">
              <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
