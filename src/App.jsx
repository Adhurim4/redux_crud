import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUser } from './features/Users';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [newUsername, setNewUsername] = useState('');

  return (
    <div className="p-4">
      <div className="flex flex-col mb-10">
    
      <h1 className="text-2xl font-bold mb-10">Redux Toolkit CRUD form</h1>
        <input
          type="text"
          placeholder="Name"
          className="mb-2 px-2 py-1 border border-gray-300 rounded text-lg"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Username"
          className="mb-2 px-2 py-1 border border-gray-300 rounded text-base"
          value={username}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => {
            dispatch(addUser({ id: userList[userList.length - 1].id + 1, name, username }));
            setName('');
            setUserName('');
          }}
        >
          Add User
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {userList.map((user) => (
          <div className="bg-white rounded shadow p-4" key={user.id}>
            <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
            <h1 className="text-base text-gray-500 mb-4">{user.username}</h1>
            
            <input
              type="text"
              placeholder="New Username..."
              className="mb-2 px-2 py-1 border border-gray-300 rounded"
              onChange={(event) => {
                setNewUsername(event.target.value);
              }}
            />

            <button className="px-4 mx-2  py-2 bg-green-500 text-white rounded"
                onClick={() => {
                  dispatch(
                    updateUser({ id: user.id, username: newUsername })
                  );
                }}
               >
                {" "}
                Update Username
              </button>


            <button
              className="px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => {
                dispatch(deleteUser({ id: user.id }));
              }}
            >
              Delete User
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
