
export default function Navigation() {
  const styles = {
    main: {
      backgroundColor: "#f1f1f1",
      margin: "20px",
      border: "4px solid black",
      padding: "20px"
    },
    link: {
      padding: "30px",
      color: "blue",
    },
  };
  return (
    <div style={styles.main}>
      <h1>Navigation</h1>
      <a style={styles.link} href="/client">Client</a>
      <a style={styles.link} href="/server">Server</a>
    </div>
  )
}