import { ConfigProvider } from "antd";
import BidCenterList from "./pages/BidCenterList";
import BidCenterMetrics from "./pages/BidCenterMetrics";
import BidCenterProjectDetail from "./pages/BidCenterProjectDetail";
import Test from "./pages/Test";
import Dashboard from "./pages/Dashboard";

const customTheme = {
  token: {
    colorPrimary: "#E91F27",
  },
};

function App() {
  return (
    <ConfigProvider theme={customTheme}>
      {/* <BidCenterList /> */}
      {/* <BidCenterMetrics /> */}
      {/* <BidCenterProjectDetail /> */}
      {/* <Test/> */}
      <Dashboard/>
    </ConfigProvider>
  );
}

export default App;
