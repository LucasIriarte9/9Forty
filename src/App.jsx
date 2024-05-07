import './App.css'
import Layout from './components/layoutHyF/layout';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemsByCategoria from './components/itemListContainer/itemsByCategory';
import { ItemDetailContainer } from './components/itemDetail/itemDetailContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />;
            <Route path="/productos" element={<ItemListContainer />} />;
            <Route path="/:category" element={<ItemsByCategoria />} />;
            <Route path="/item/:id" element={<ItemDetailContainer />} />;
            <Route path="/*" element={<h1>Not found</h1>} />;
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App;