import { UserCard } from "./components/UserCard";
import "./App.css";
import { useAllUsers } from "./components/hooks/useAllUsers";

const user = {
  id: 1,
  name: "testユーザー",
  email: "123@aaa.com",
  address: "東京都墨田区",
};

function App() {
  const { getUsers, userProfile, loading, error } = useAllUsers();

  const onClickFetchUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfile.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
