import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

//VITE_API_KEY=iLyHjgUlJh35YKAhX2G_OwLp_MKx3W9W8QsvXDo3YCg

const CLIENTID = import.meta.env.VITE_API_KEY;

const url = `https://api.unsplash.com/search/photos?client_id=${CLIENTID}`

const Gallery = () => {

  const {searchTerm} = useGlobalContext();


  const response = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);

      return result.data
    }
  })


if(response.isLoading){
  return (<section className="image-container">
    <h4>Loading...</h4>
  </section>)
}

if(response.isError){
  return (<section className="image-container">
    <h4>There was an error</h4>
  </section>)
}

const results = response.data.results

if(results.length < 1) {
  return (<section className="image-container">
  <h4>No results found</h4>
</section>)
}


  return (<section className="image-container">
  {
   results.map((item) => {
    const url = item?.urls?.regular
    return <img src={url}  className="img" key={item.id} alt={item.alt_description}/>
   })
  }
  </section>)
}

export default Gallery