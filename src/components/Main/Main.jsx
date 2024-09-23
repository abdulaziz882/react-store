import s from'./Main.module.scss'
import Products from '../Products/Products'




const Main = () => {





  return (
    <>
    <main className={s.main}>
        <div className={s.container}>
                 <h1>Товары</h1>


      <Products/>


        </div>

     

    </main>
    </>
  )
}

export default Main