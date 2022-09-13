import UserSideNav from "../../Components/userSideNav/allUserSidenav";
import Navigation from "../../Components/Navigation/index";
import BookingList from "../../Components/Table/bookingList";

const SessionList = () => {
  return (
    <>
      <Navigation />
      <div className="list-container">
        <UserSideNav />
        <div className="list">
          <div className="result">
            <BookingList />
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionList;
