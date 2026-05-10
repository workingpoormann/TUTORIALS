import React from "react";
import { checkWord } from "./lib/wordle";
import type { Result, WordType } from "./types";

export function KeyMap({
  words,
  answer,
  results,
  setResults,
}: {
  words: WordType[];
  answer: string;
  results: Result[];
  setResults: React.Dispatch<React.SetStateAction<Result[]>>;
}) {
  React.useEffect(() => {
    const result_clone = results.map((item) => ({ ...item }));

    for (const word of words) {
      const res = checkWord(word.word, answer);

      for (const newItem of res) {
        const index = result_clone.findIndex(
          (item) => item.char === newItem.char,
        );

        if (index !== -1) {
          result_clone[index] = newItem;
        }
      }
    }

    setResults(result_clone);
  }, [words, answer]);

  return (
    <section className="w-64 flex gap-2 flex-wrap bg-sky-200">
      {results.map((res, index) => {
        return (
          <div
            key={index}
            className={`w-6 text-center border rounded-md ${
              res.status == "exact"
                ? "bg-green-500"
                : res.status == "partial"
                  ? "bg-yellow-500"
                  : res.status == "unused"
                    ? "bg-gray-800"
                    : ""
            }`}
          >
            {res.char}
          </div>
        );
      })}
    </section>
  );
}
