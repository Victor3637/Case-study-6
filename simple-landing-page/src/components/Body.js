import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>
      <div style={styles.card}>
        <img src={"/victor.png"} alt="Victor Piznak" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Victor Piznak</h2>
          <p style={styles.position}>Backend developer</p>
        </div>
      </div>
   <div style={styles.card}>
        <img src={"/Lupak.jpg"} alt="Denys Lupak" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Denys Lupak</h2>
          <p style={styles.position}>Project manager</p>
        </div>
      </div>
  <div style={styles.card}>
        <img src={"/Pavlyshyn_Ivanna.jpg"} alt="Pavlyshyn Ivanna" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Pavlyshyn Ivanna</h2>
          <p style={styles.position}>Frontend developer</p>
        </div>
      </div>
  <div style={styles.card}>
        <img src={"/Viktoriia.jpg"} alt="Viktoriia Mykhailovych" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Viktoriia Mykhailovych</h2>
          <p style={styles.position}>UI/UX Designer</p>
        </div>
      </div>
  <div style={styles.card}>
        <img src={"/Daryna.jpg"} alt="Daryna Lunych" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Daryna Lunych</h2>
          <p style={styles.position}>Scrum Master</p>
        </div>
      </div>
   <div style={styles.card}>
        <img src={"/Pernerovskyi_Andrea.png"} alt="Andrea Pernerovskyi" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Andrea Pernerovskyi</h2>
          <p style={styles.position}>Front-end developer</p>
        </div>
      </div>
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center", 
    backgroundImage: "url('/techopyzyky.jpg')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat", 
    minHeight: "100vh",
    padding: "2em", 
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "#6a0dad", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;
