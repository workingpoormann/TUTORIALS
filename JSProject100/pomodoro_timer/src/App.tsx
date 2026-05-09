import React from "react";
import "./App.css";

const secToMin = (second: number): string => {
  const min = Math.floor(second / 60);
  const sec = second % 60;
  if (sec < 10) {
    return `${min} : 0${sec}`;
  } else {
    return `${min} : ${sec}`;
  }
};

export default function App() {
  const [seconds, setTimer] = React.useState<number>(25 * 60);
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const [darkmode, setDarkmode] = React.useState<boolean>(true);

  React.useEffect(() => {
    let interval = undefined;

    if (isActive) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <>
      <section id="center">
        <section
          className={`w-100 h-64 px-2 pt-6 border rounded-md
          flex flex-col gap-2 ${darkmode ? "bg-sky-950" : "bg-sky-500"}`}
        >
          <header
            className={`underline underline-offset-2 text-gray-900
            ${darkmode ? "decoration-sky-100" : "decoration-sky-900"}`}
          >
            <h2 className={darkmode ? "text-gray-200" : "text-gray-900"}>
              Pomodoro Timer
            </h2>
          </header>

          <section className="my-10">
            <p
              className={`text-5xl ${darkmode ? "text-gray-200" : "text-gray-900"}`}
            >
              {secToMin(seconds)}
            </p>
          </section>

          <section className="flex justify-around">
            <button
              className={`border px-2 rounded-sm text-xl
              bg-green-900 text-green-100`}
              onClick={() => {
                setIsActive(true);
                setDarkmode(false);
              }}
            >
              Start
            </button>
            <button
              className={`border px-2 rounded-sm text-xl
              bg-amber-900 text-amber-100`}
              onClick={() => {
                setIsActive(false);
                setDarkmode(true);
              }}
            >
              STOP
            </button>
            <button
              className={`border px-2 rounded-sm text-xl
              bg-gray-900 text-gray-100`}
              onClick={() => setTimer(25 * 60)}
            >
              RESET
            </button>
          </section>
        </section>
      </section>
    </>
  );
}
