import React from "react"


const Navbar = () => {
  return (
    <div>
      {/* Nome no topo */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "70px",
          backgroundColor: "#A5FDD0",
        }}
      >
        <a
          style={{
            color: "#010324",
            flex: "1",
            textAlign: "center",
            fontSize: "25px",
          }}
          href="#"
        >
          PINARQ
        </a>
        <a style={{ color: "#010324", fontSize: "8px" }} href="#">
          HOME
        </a>
      </div>

      {/* Lista de links abaixo */}
      <div>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#A5FDD0",
            borderBottom: "3px solid #3CA670",
            borderTop: "3px solid #3CA670",
            fontSize: "12px",
            padding: "8px",
            listStyleType: "none",
            width: "100%",   
          }}
        >
          <li style={{ display: "flex", alignItems: "center", padding: "0 8%"  }}>
            <a style={{ color: "#010324", borderBottom: "2px solid #010324" }} href="/sobrePinarq">
              Sobre a PINARQ
            </a>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0 8%",
              borderLeft: "1px solid #3CA670",
            }}
          >
            <a style={{ color: "#010324", borderBottom: "2px solid #010324" }} href="#">
              Sobre Nós
            </a>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0 8%",
              borderLeft: "1px solid #3CA670",
            }}
          >
            <a style={{ color: "#010324", borderBottom: "2px solid #010324" }} href="#">
              Projetos
            </a>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0 8%",
              borderLeft: "1px solid #3CA670",
            }}
          >
            <a style={{ color: "#010324",borderBottom: "2px solid #010324" }} href="#">
              Contato
            </a>
          </li>
        </ul>
      </div>

     {/* Container principal com fundo colorido */}
     <div
        style={{
          backgroundColor: "#FFEDED",
          minHeight: "100vh",
          display: "flex",


        }}
      >
        {/* Texto centralizado */}
        <h3 style={{ fontSize: "40px", textAlign: "Left", padding: "5%", color: "#FE9C9C" }}>
        Há um gosto de vitória e encanto <br /> na condição de ser simples.
  Não é <br />preciso muito para ser muito.   
  <p style={{ fontSize: "15px", textAlign: "Left", color: "#5B5858" }}>Lina Bo Bardi</p>    
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
