import './app.css'
import TodoForm from "./components/TodoForm";
import Header from "./components/Header";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,

} from '@apollo/client'
import Footer from "./components/Footer";

const client = new ApolloClient({
    uri:'http://localhost:4000/',
    cache: new InMemoryCache()
})

function App() {
  return (
    <div className="main">
        <Header/>
        <ApolloProvider client={client}>
            <TodoForm/>
        </ApolloProvider>
        <Footer/>
    </div>
  );
}

export default App;
