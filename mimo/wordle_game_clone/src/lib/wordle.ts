import type { Result } from "../types";

export function checkWord(answer: string, input: string): Result[] {
  const result: Result[] = [];
  const usedAnswer = Array(answer.length).fill(false);

  // 初期化
  for (let i = 0; i < input.length; i++) {
    result.push({
      char: input[i],
      status: "none",
    });
  }

  // exact 判定
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === input[i]) {
      result[i].status = "exact";
      usedAnswer[i] = true;
    }
  }

  // partial 判定
  for (let i = 0; i < input.length; i++) {
    if (result[i].status === "exact") continue;

    for (let j = 0; j < answer.length; j++) {
      if (usedAnswer[j]) continue;

      if (input[i] === answer[j]) {
        result[i].status = "partial";
        usedAnswer[j] = true;
        break;
      }
    }
  }

  return result;
}

function genLowerAlphabet() {
  return Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
}

export function genResult() {
  const result: Result[] = [];
  for (const word of genLowerAlphabet()) {
    result.push({ char: word, status: "none" });
  }
  return result;
}

export function getBgColor(status: string) {
  console.log(status);
  switch (status) {
    case "exact":
      return "bg-green-400";

    case "partial":
      return "bg-yellow-700";

    case "unused":
      return "bg-gray-500";

    case "none":
    default:
      return "bg-white";
  }
}
