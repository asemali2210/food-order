import App from '../components/App';
import CartProvider from '../store/CartPovider';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.scss';
function MyApp({ Component, pageProps }) {
  return(
    <CartProvider>
      <App>
        <div id='backDrop'></div>
      <Component {...pageProps} />
    </App>
    </CartProvider>
  ) 
}

export default MyApp
