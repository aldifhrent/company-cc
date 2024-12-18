import { api } from "@/lib/api";

export const getTeams = async () => {
  try {
    const res = await api.get("/api/?results=8");

    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};
