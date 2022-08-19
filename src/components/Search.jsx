const Search = ({ value, onChange }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "10vh",
      }}
    >
      <form
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          style={{
            padding: "15px",
            maxWidth: "600px",
            width: "60%",
            height: "auto",
            border: "none",
            outline: "none",
          }}
          type="text"
          placeholder="Search..."
          value={value}
          onChange={onChange}
        />
        <button className="searchBtn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
