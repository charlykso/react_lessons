import { useState } from "react";

const Create = () => {
    const [ title, setTitle] = useState('');
    const [ body, setBody] = useState('');
    const [ author, setAuthor] = useState('Ikenna');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, body, author };

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log("New blog created");
            setIsPending(false);
        })
    }
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required 
                    value={body} 
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author} 
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Ikenna">Ikenna</option>
                    <option value="Remigius">Remigius</option>
                    <option value="Charles">Charles</option>
                </select>
                { !isPending && <button>Add blog</button>}
                { isPending && <button>Adding blog...</button>}
                
            </form>
        </div>
     );
}
 
export default Create;