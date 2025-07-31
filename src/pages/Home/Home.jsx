import React from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';

function Home() {
  
  const [category, setCategory] = useState("All");

  return (
    <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <ProductDisplay category={category} />
    </div>
  )
}

export default Home