const Error = () => {
  return (
    <main>
      <div className="error">
        <h1>Unable to establish an internet connection.</h1>
        <button onClick={() => location.reload()}>Refresh to Reconnect</button>
      </div>
    </main>
  );
};

export default Error;
