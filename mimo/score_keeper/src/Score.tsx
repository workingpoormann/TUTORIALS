import React from "react";

type ScoreProp = {
  teamname: string;
};

export function Score({ teamname }: ScoreProp) {
  const [score, setScore] = React.useState<number>(0);

  return (
    <section>
      <header className="mb-2">
        <p className="text-xl">
          {teamname} : {score}
        </p>
      </header>

      <button
        onClick={() => setScore((prev) => prev + 1)}
        className={`bg-green-800 text-gray-900 rounded-md px-2 text-xl`}
      >
        +1 {teamname}
      </button>
    </section>
  );
}
