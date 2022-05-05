export const apiURL = () => {
    return window.location.hostname === "localhost"
      ? "https://parentapp.herokuapp.com"
      : "https://parentapp.herokuapp.com";
  };
  