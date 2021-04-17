import { Toolbar } from "../components/ToolBar";
import styles from "../styles/UserList.module.css";

const UserList = ({ users }) => {
  console.log(users);
  return (
    <div className="page-container">
      <Toolbar/>
      <div className={styles.main}>
        <img src={users.data[0].picture}></img>
        <span className={styles.userData}>
          <span>name: {users.data[0].firstName}</span>
          <span>email: {users.data[0].email}</span>
        </span>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const endpoint = "https://dummyapi.io/data/api/";
  const appId = "60773cfad4aae5505416b4a0";
  const dataSet = await fetch(endpoint + "user", {
    headers: {
      "app-id": appId,
    },
  });

  const users = await dataSet.json();

  return {
    props: {
      users,
    },
  };
};

export default UserList;
