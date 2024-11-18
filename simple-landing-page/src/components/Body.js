import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>
      <div style={styles.wrapper}>
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
        <img src={"/Pernerovskyi_Andrea.jpg"} alt="Andrea Pernerovskyi" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Andrea Pernerovskyi</h2>
          <p style={styles.position}>Front-end developer</p>
        </div>
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
    backgroundImage: "url('/technopyzyky_new.jpg')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat", 
    minHeight: "100vh",
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    height: "700px",
    margin: "380px auto 0",
    width: "70%",
    justifyContent: "space-between"
  },
  card: {
    width: "28%",
    padding: "1em",
    height: "330px",
    borderRadius: "10px",
    backgroundColor: "transparent",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "270px",
    height: "270px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "26px",
    fontWeight: "bold",
    color: "#fff",
    marginTop: "3px",
    letterSpacing: "2px",
  },
  position: {
    fontSize: "26px",
    color: "#ff7070", // Same purple color as header
    margin: "0.5em 0 0.5em 0",
  },
};

export default Body;
