import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const modalValue = atom({
  key: "modalValue",
  default: 0,
});
