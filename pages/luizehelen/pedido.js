import { useState } from "react";

const Index = () => {
  const [buttonNoStyle, setButtonNoStyle] = useState({});

  const handleNoButtonClick = () => {
    const randomPosition = () => Math.random() * (window.innerWidth - 100);
    setButtonNoStyle({
      position: "absolute",
      top: `${Math.random() * (window.innerHeight - 100)}px`,
      left: `${randomPosition()}px`,
    });
  };

  const handleYesButtonClick = () => {
    alert("Você fez a melhor escolha da sua vida!!!");
    window.location.href = "https://youtu.be/vSsUDOpzYOs?si=ADcttkxOsTf17JAs";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "200px" }}>
      <style jsx global>{`
        html,
        body {
          height: 100%;
          margin: 0;
          padding: 0;
          background-color: #ffc0cb;
        }
      `}</style>
      <h1>Helen, você aceita namorar comigo?</h1>
      <div style={{ marginTop: "20px" }}>
        <button style={{ marginRight: "10px" }} onClick={handleYesButtonClick}>
          Sim
        </button>
        <button onClick={handleNoButtonClick} style={buttonNoStyle}>
          Não
        </button>
      </div>
    </div>
  );
};

export default Index;
