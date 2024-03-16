import { Box } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingNewIssuePage = () => {
  return (
    <Box className="max-w-xl">
      <form className="space-y-3">
        <Skeleton />

        <Skeleton height="20rem" />

        <Skeleton />
      </form>
    </Box>
  );
};

export default LoadingNewIssuePage;
