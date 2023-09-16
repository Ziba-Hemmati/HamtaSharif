import Info from "../../components/Info";
import Board from "../../components/Board";

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen flex justify-between items-center">
      <Info />
      <Board />
    </div>
  );
};

export default Dashboard;
