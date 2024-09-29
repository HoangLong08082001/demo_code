import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicRouter } from "./routes";
import LayoutDefault from "./components/LayoutDefault/LayoutDefault";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {PublicRouter.map((router, index) => {
            let Layout = LayoutDefault;
            let Page = router.page;
            if (router.layout === true) {
              return (
                <Route
                  path={router.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            } else {
              return <Route path={router.path} element={<Page />} />;
            }
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
