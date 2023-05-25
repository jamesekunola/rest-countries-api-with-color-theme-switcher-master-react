const Error = () => {
  return (
    <div className="error">
      <h1>Unable to establish an internet connection.</h1>
      <button onClick={() => location.reload()}>Refresh to Reconnect</button>
    </div>
  );
};

export default Error;
