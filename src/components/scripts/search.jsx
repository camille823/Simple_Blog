//imports
    //fuse.js
    import Fuse from 'fuse.js';
    //react
    import { useState } from 'react';

// configs fuse.js
// https://fusejs.io/api/options.html
const options = {

	keys: ['post.frontmatter.title', 'post.frontmatter.description', 'post.frontmatter.slug'],
	includeMatches: true,
	minMatchCharLength: 2,
	threshold: 0.5,
};
//search function
function Search({ searchList }) {
	const [query, setQuery] = useState('');
    const fuse = new Fuse(searchList, options);
    // Set a limit to the posts: 5
        const posts = fuse
        .search(query)
        .map((result) => result.item)
        .slice(0, 5);
    // change query based on user input  
    function handleOnSearch({ target = {} }) {
        const { value } = target;
        setQuery(value);
    }
    return (
        <>
            <label>Search</label>
            <input type="text" value={query} onChange={handleOnSearch} placeholder="Search posts" />
            {query.length > 1 && (
                <p>
                    Found {posts.length} {posts.length === 1 ? 'result' : 'results'} for '{query}'
                </p>
            )}
            <ul>
                {posts &&
                    posts.map((post) => (
                        <li>
                            <a href={`/${post.data.slug}`}>{post.data.title}</a>
                            {post.data.description}
                        </li>
                    ))}
            </ul>
        </>
    );
}
export default Search;