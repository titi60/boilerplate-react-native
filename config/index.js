import dev from './config.development.json';
import staging from './config.staging.json';
// import staging from './config.production.json';

export default (__DEV__ ? dev : staging);
