import { useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { ChartsContainer, StatsContainer } from "../components";

export const loader = async () => {
  try {
    const response = await customFetch.get("/jobs/stats");
    return response.data;
  } catch (error) {
    return error;
  }
};
const Stats = () => {
  const { stats, monthlyApplications } = useLoaderData();

  return (
    <>
      <StatsContainer stats={stats} />
      {monthlyApplications?.length > 1 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
};

export default Stats;
