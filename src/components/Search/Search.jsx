import { useState } from 'react';
import s from './search.module.scss';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../../store/products/productsSlice';
import closesearch from '../../assets/images/searchclose.svg';

const Search = ({ onSearchChange }) => {
  
  const [text, setText] = useState('');
  const dispatch = useDispatch();



  const reset = () => {
    setText('');
    onSearchChange(''); 
    dispatch(searchProducts(''));  
  };




  const submit = (event) => {
    event.preventDefault();
    onSearchChange(text);  
    dispatch(searchProducts(text));
  };




  return (

    <form className={s.form} onSubmit={submit}>
      <div className={s.form__box}>
        <input 
          type="text" 
          className={s.form__box_input}
          placeholder="Поиск..."
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        {text && (
          <img onClick={reset} src={closesearch} alt="" className={s.form__box_icon} />
        )}
      </div>
      <button className={s.form__btn}>Поиск</button>
    </form>
  );
};

export default Search;


