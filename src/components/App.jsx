import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import { getPicturesRequest } from '../API/API'
import ImageGallery from './ImageGallery';
import Button from './Button'
import Loader from "./Loader";


export const App = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery === '') {
      return
    }
  
    const newRequest = async () => {
      setIsLoading(true)
      try {
      await getPicturesRequest(searchQuery, page).then(images => 
      setPictures(prevPictures => [...prevPictures, ...images]))
      } catch (error) {
      console.log(error); 
      } finally {
      setIsLoading(false)
      }
    }

    newRequest();
  },[page, searchQuery])
  
  
  const querySubmit = (newSearchQuery) => { 
    if (newSearchQuery === searchQuery) {
      return
    }
    setPictures([])
    setSearchQuery(newSearchQuery) 
    setPage(1)
  } 
  const loadMoreBtnHandler = () =>  setPage((page) => page + 1) 
  

    return (
    <>
        <Searchbar onSubmit={querySubmit} />
        <ImageGallery gallery={pictures} />
        {pictures.length !== 0 && !isLoading &&
          <Button onClick={loadMoreBtnHandler} />}
        {isLoading && <Loader />}
    </>
  )
  
}
