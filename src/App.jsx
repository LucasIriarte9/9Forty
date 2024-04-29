import './App.css'
import ItemList from './components/tienda/itemList';
import Layout from './components/layoutHyF/layout';
import ItemListContainer from './components/itemListContainer/itemListContainer';

function App() {
  return (
    <>
      <Layout>
        <ItemList />
        <ItemListContainer />
      </Layout>
    </>
  )
}

export default App;