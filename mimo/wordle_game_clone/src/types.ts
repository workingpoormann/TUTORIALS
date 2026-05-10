export type WordAnswerType = {
  word: string;
  pos: "allGood" | "same" | "wrong";
};

export type Status = "exact" | "partial" | "none" | "unused";

export type Result = {
  char: string;
  status: Status;
};

export type WordResultType = {
  char: string;
  status: Status;
};

export type WordType = {
  word: string;
  result: WordResultType[];
};
