const Header = ({ change }) => {
  const logOut = () => {
    localStorage.setItem("loggedInUser", "");
    change("");
  };
  return (
    <>
      <div className="flex justify-between mt-3 text-xl">
        <h1>firstname 😎</h1>
        <button
          onClick={logOut}
          className="bg-red-600 text-white text-xl p-3 rounded"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Header;
