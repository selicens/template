import instance from "./request";

export const getData = () => {
  return instance.get("/api/");
};
