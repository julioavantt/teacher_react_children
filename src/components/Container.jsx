const styles = {
  margin: "0 auto",
  width: 1170,
  background: "gray",
  height: "100vh",
  color: "white",
};

export const Container = (props) => {
  return <div style={styles}>{props.children}</div>;
};
