import Pagination from "./components/Pagination";

export default function Home() {
  return (
    <div>
      <Pagination itemCount={100} pageSize={20} currentPage={2} />
    </div>
  );
}
