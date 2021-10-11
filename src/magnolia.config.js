import Basic from './pages/Basic';
import Image from './components/Image';
import Headline from './components/Headline';
import Link from './components/Link';

const config = {
    'componentMappings':{
        // Page Components
        'no-light-module:pages/basic': Basic,
        // Components
        'no-light-module:components/image': Image,
        'no-light-module:components/headline': Headline,
        'no-light-module:components/link': Link,
    }
};

export default config;
