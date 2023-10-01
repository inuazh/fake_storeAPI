
import { Product } from './components/Product';
import { useProducts } from './hooks/products';
import { IProduct } from './models';
import {Loader} from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';
import { Modal } from './components/Modal';
import { CreateProduct } from './components/createProducts';

//111 '


function App() {

    const { loading, error, products } = useProducts()


    return (
        <div className='container mx-auto max-w-2xl pt-5'>

            {loading && <Loader />}
            {error && <ErrorMessage error={error}/>}

            {products.map((product: IProduct) => <Product product={product} key={product.id} />)}

<Modal title=' create new'>
    <CreateProduct></CreateProduct>
</Modal>
        </div>
    )
}

export default App;
