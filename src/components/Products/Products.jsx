import s from '../Products/Products.module.scss';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts, searchProducts } from "../../store/products/productsSlice";
import { Link } from 'react-router-dom';
import Sort from '../Sort/Sort';
import Search from '../Search/Search';
import Pagination from '../Pagination/Pagination';




const Products = () => {



  const { products, totalProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [limit] = useState(9);  
  const [skip, setSkip] = useState(0);  
  const [currentPage, setCurrentPage] = useState(1);  
  const [sortBy, setSortBy] = useState('');  
  const [searchText, setSearchText] = useState(''); 


  const pageCount = Math.ceil(totalProducts / limit);


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setSkip((newPage - 1) * limit);
  };


  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    setCurrentPage(1);  
    setSkip(0);  
  };

  
  const handleSearchChange = (searchQuery) => {
    setSearchText(searchQuery);
    setCurrentPage(1);  
    setSkip(0);  
  };

  useEffect(() => {
    if (searchText) {
      dispatch(searchProducts(searchText));  
    } else {
      dispatch(getAllProducts({ limit, skip, sortBy }));  
    }
  }, [dispatch, limit, skip, sortBy, searchText]);


  const showPagination = products.length >= 9;



  return (
    <>
      <div className={s.main}>
        <div className={s.products__filter}>
          <Sort sortBy={sortBy} onSortChange={handleSortChange} />

          <Search onSearchChange={handleSearchChange} />

        </div>
        <div className={s.box}>
          {products && products.map((item) => {

            return (

              <Link to={`/Products/${item.id}`} key={item.id} className={s.item}>
                <img src={item.thumbnail} alt="" className={s.items__img} />
                <h2 className={s.item__title}>{item.title}</h2>
                <p className={s.item__text}>{item.description}</p>
                <p className={s.item__price}>{item.price} $</p>
              </Link>

            );

          })}
        </div>




        {showPagination && (
          <Pagination
            currentPage={currentPage}
            pageCount={pageCount}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </>
  );
};

export default Products;
