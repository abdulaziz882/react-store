import { useDispatch, useSelector } from 'react-redux';
import s from './Sort.module.scss';
import Select from 'react-select';
import { getAllProducts } from '../../store/products/productsSlice';

const options = [
  { value: '', label: 'Все товары' },
  { value: 'title', label: 'По названию' },
  { value: 'price', label: 'По цене' },
  { value: 'stock', label: 'По количеству' },
];

const Sort = ({ sortBy, onSortChange }) => {


  const dispatch = useDispatch();

  const { limit, skip } = useSelector((state) => state.products); 



  
  const defaultOption = options.find(option => option.value === sortBy) || options[0];

  const changeSort = (option) => {
    const newSortBy = option.value;
    

    if (newSortBy === sortBy) return;

    onSortChange(newSortBy);
    dispatch(getAllProducts({ sortBy: newSortBy, limit, skip: 0 }));
  };

  return (
    <div className={s.sort}>
      <h3 className={s.sort__title}>Сортировка:</h3>
      <Select
        options={options}
        defaultValue={defaultOption}
        onChange={changeSort}
      />
    </div>
  );
};

export default Sort;
