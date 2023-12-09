import React, { useRef } from "react";
import kivotos from "./images/Kivotos_1.webp";
import logo from "./images/WaldoArchive_ba-style@nulla.top.png";
import reisa from "./images/reisa-dance-blue-archive.gif";
import arisu from "./images/arisu-blue-archive.gif";
import sweetclub from "./images/sweetclub.jpg";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const ref = useRef();

  return (
    <>
      <Parallax pages={1.5} ref={ref}>
        <ParallaxLayer
          speed={0.9}
          offset={0}
          factor={2}
          style={{
            backgroundImage: `url(${kivotos})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={1}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              maxWidth: "70%",
              maxHeight: "30%",
              height: "auto",
              width: "auto",
              minWidth: "140px",
              minHeight: "60px",
            }}
            className="my-28"
          />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.33, end: 0.7 }}
          onClick={() => ref.current.scrollTo(0)}
          speed={7}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={reisa}
            alt=""
            style={{
              height: "128px",
              width: "128px",
            }}
            className="ml-[50%]"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.1}
          speed={0}
          onClick={() => ref.current.scrollTo(2)}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={arisu}
            alt=""
            style={{
              height: "128px",
              width: "128px",
            }}
            className="mr-[50%]"
          />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
