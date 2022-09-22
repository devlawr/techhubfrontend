import UserSideNav from "../../Components/userSideNav/allUserSidenav";
import Navigation from "../../Components/Navigation/index";
import SessionLists from "../../Components/Table/bookingList";

const SessionList = () => {
  return (
    <>
      <Navigation />
      <div className="list-container">
        <div className="list_nav">
        <UserSideNav />
        </div>
        <div className="list">
          <div className="result">
            <SessionLists />
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionList;
