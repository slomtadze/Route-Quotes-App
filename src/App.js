import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NewQuote from "./pages/NewQuote";
import QuotesAll from "./pages/QuotesAll";
import QuotesDetails from "./pages/QuotesDetails";

function App() {
  return (
    <Layout>
      <Switch>
        <Redirect path= '/' to='/quotes' exact />
        <Route path='/quotes' exact>
          <QuotesAll />
        </Route>
        <Route path='/quotes/:qouteID'>
          <QuotesDetails />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
