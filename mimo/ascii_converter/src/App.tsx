import React from "react";
import "./App.css";

type KeyType = {
  key: string;
  code: number;
};

function App() {
  const [inputChar, setInputChar] = React.useState<KeyType>({
    key: "",
    code: 0,
  });

  React.useEffect(() => {
    const InputKey = (e: KeyboardEvent) => {
      if (e.key == " ") {
        setInputChar({ ...inputChar, key: "Space", code: -1 });
      } else {
        setInputChar({ ...inputChar, key: e.key, code: e.keyCode });
      }
    };

    document.addEventListener("keydown", InputKey);
    return () => {
      document.removeEventListener("keydown", InputKey);
    };
  }, []);

  return (
    <>
      <main id="center">
        <section className="w-100 border rounded-md py-2 px-4 flex flex-col">
          <header>
            <h1 className="text-sm">ASCII CONVERTER</h1>
          </header>

          <div className="text-5xl flex justify-between mx-10">
            <div>{inputChar.key}</div>
            <div>{inputChar.code}</div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
