import { useContext } from "react";
import ApiContext from "./context/Context";

const App = () => {
  const data = useContext(ApiContext);

  const { userdata, postdata } = data;
  console.log("🚀 ~ App ~ postdata:", postdata)
  console.log("🚀 ~ App ~ userdata:", userdata);

  return (
    <>
      <div>App</div>
    </>
  );
};

export default App;
