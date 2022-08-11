import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlog] = useState([
        { title: 'My new website', body: 'Lorem ipsum ...', author: "Ikenna", id: 1 },
        { title: 'Welcome party', body: 'Lorem ipsum ...', author: "Charles", id: 2 },
        { title: 'My travel', body: 'Lorem ipsum ...', author: "Remigius", id: 3 },
    ]);
    
   
    // const handleClickAgain = (name, e) => {
    //     console.log("Hello " +name, e.target);
    // }

    return ( 
        <div className="home">
            <BlogList blogs = {blogs} title = "This is my blog" />

            {
            /* <h2>Home Page</h2>
            <button onClick = { handleClick }>Click me</button>
            <p>{ name } is { age } years old</p>
            <button onClick = {(e) => handleClickAgain("Ikenna", e)}>Click me again</button> */}
        </div>
     );
}
 
export default Home;