import React from "react";

const Search = () => {
  let searchHandler = () => {};
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
        onSubmit={searchHandler}
      >
        <input
          style={{
            padding: "10px",
            maxWidth: "600px",
            width: "60%",
            height: "auto",
            border: "none",
            outline: "none",
          }}
          type="text"
          placeholder="Search..."
        />
        <button className="searchBtn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
