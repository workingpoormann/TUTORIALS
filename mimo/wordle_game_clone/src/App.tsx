import React from "react";
import "./App.css";
import { KeyMap } from "./KeyMap";
import { genResult, getBgColor } from "./lib/wordle";
import type { Result, WordType } from "./types";

function App() {
  const [words, setWords] = React.useState<WordType[]>([]);
  const [inputWord, setInputWord] = React.useState<string>("");
  const [answer, _] = React.useState<string>("words");
  const [results, setResults] = React.useState<Result[]>(genResult());

  const judgedResult: Result[] = Array.from(inputWord).map((char) => ({
    char,
    status: "none",
  }));

  const newWord: WordType = {
    word: inputWord,
    result: judgedResult,
  };

  React.useEffect(() => {
    setWords((prev) => [...prev, newWord]);
  }, []);

  return (
    <main
      className={`min-h-screen bg-gray-900 flex flex-col
      items-center`}
    >
      <section
        className={`bg-gray-300 px-20 rounded-md mt-10 py-5 flex flex-col
          items-center`}
      >
        <header className="mb-5 flex justify-center">
          <h1 className="text-3xl font-bold">Wordle</h1>
        </header>

        <section id="inputSection" className="mb-5">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();

              if (inputWord.length !== 5) {
                return;
              }

              const judgedResult: Result[] = Array.from(inputWord).map(
                (char) => ({
                  char,
                  status: "none",
                }),
              );

              setWords((prev) => [
                ...prev,
                {
                  word: inputWord,
                  result: judgedResult,
                },
              ]);

              setInputWord("");
            }}
          >
            <input
              type="text"
              id="input"
              name="word"
              placeholder="Enter"
              className="w-28 border px-2 py-2 text-3xl text-center"
              maxLength={5}
              value={inputWord}
              onChange={(e) => setInputWord(e.target.value)}
            />
          </form>
        </section>

        <section className="flex flex-col gap-2 items-center mb-4">
          {words.map((word, wordIndex) => {
            return (
              <div key={wordIndex} className="flex gap-1">
                {word.result.map((item, charIndex) => {
                  const bgColor = getBgColor(item.status);

                  return (
                    <div
                      key={charIndex}
                      className={`w-12 h-12 border flex items-center
                        justify-center text-xl font-bold ${bgColor}`}
                    >
                      {item.char}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </section>

        <KeyMap
          words={words}
          answer={answer}
          results={results}
          setResults={setResults}
        />
      </section>
    </main>
  );
}

export default App;
