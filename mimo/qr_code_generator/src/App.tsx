import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";
import "./App.css";

function App() {
  return (
    <>
      <section id="center" className="">
        <section className={`border m-20 p-20 flex gap-10 bg-gray-200`}>
          <QRCodeSVG value="https://reactjs.org/" />
          <QRCodeCanvas value="https://reactjs.org/" />
        </section>
      </section>
    </>
  );
}

export default App;
