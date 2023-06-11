const styles = {
  margin: "0 auto 30px",
  width: 1170,
  background: "gray",
  height: "30vh",
  color: "white",
};

export const Container = (props) => {
  return <div style={styles}>{props.children}</div>;
};
