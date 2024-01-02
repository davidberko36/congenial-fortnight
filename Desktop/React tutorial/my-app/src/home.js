import { useState} from 'react'
import BlogList from './bloglist';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'Blog1', body: 'igpay igpay atinlay', author: 'Johnny sins', id: 69},
        {title: 'Blog2', body: 'siay hetay opestday', author: 'Cyborg', id: 420},
        {title: 'Blog3', body: 'Youve got this', author: 'God', id: 1}
    ]);
    return ( 
        <div>
       <BlogList blogs={blogs} title="Blogs"/>
       <BlogList blogs={blogs.filter((blogs) => blogs.id === 1)} title="Blogs2"/>
       </div>
     );
     

    
}
 
export default Home;