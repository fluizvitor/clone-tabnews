import { useState } from "react";

const Index = () => {
  const [buttonNoStyle, setButtonNoStyle] = useState({});

  const handleNoButtonClick = () => {
    const randomPosition = () => Math.floor(Math.random() * 10) - 5;
    setButtonNoStyle({
      position: "absolute",
      top: `${50 + randomPosition()}vh`,
      left: `${50 + randomPosition()}vw`,
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "200px" }}>
      <h1>Helen, quer namorar comigo?</h1>
      <div style={{ marginTop: "20px" }}>
        <button style={{ marginRight: "10px" }}>Sim</button>
        <button onClick={handleNoButtonClick} style={buttonNoStyle}>
          Não
        </button>
      </div>
    </div>
  );
};

export default Index;
