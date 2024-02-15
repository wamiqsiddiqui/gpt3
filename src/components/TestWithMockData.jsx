export const TestWithMockData = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              {item.id}
              {item.first_name}
              {item.last_name}
              {item.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const TestWithMockDataBranches = ({
  data,
  displayUnorderedList,
  handleClick,
}) => {
  return (
    <div>
      {displayUnorderedList ? (
        <ul>
          {data.map((item) => {
            return (
              <li key={item.id}>
                {item.id}
                {item.first_name}
                {item.last_name}
                <a
                  onClick={() => {
                    console.log("email link clicked");
                    handleClick();
                  }}
                >
                  {item.email}
                </a>
                {item.age > 50 ? "Senior" : "Not Senior"}
              </li>
            );
          })}
        </ul>
      ) : (
        <ol>
          {data.map((item) => (
            <li key={item.id}>Last Name: {item.last_name}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

export const TestInputFieldAndButtons = () => {
  return (
    <div>
      <input placeholder="Enter name" />
      <button>Submit</button>
    </div>
  );
};
