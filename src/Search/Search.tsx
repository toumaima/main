import { SearchButton ,SearchInput, Header, Wrapper, Label, Container, ItemWrapper, Message} from './Search.style';

import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as types from  '../Redux/actionTypes'
import {RootState} from '../Redux/store';



const Search: React.FC = ({children}) => {
  
  const [search, setSearch]= useState("");
  const [query, setQuery]= useState("chicken");
  

  const updateSearch =() =>{ 
    setQuery(search);
    setSearch("");
  }
  const dispatch = useDispatch();

  const recipes= useSelector<RootState, Array<any>>(state => state.data.recipes.hits);


  useEffect(() => {

    dispatch({type:types.FETCH_RECIPIE_START, query});
  }, [query]);

  
  const handleRecipeSearch =(e:any) => {setSearch(e.target.value)}
 
  return <>
    <Wrapper>
    <Header>Search for a recipie</Header>
    <SearchInput value ={search} placeholder='search...' onChange={handleRecipeSearch}>
    </SearchInput>
    <SearchButton onClick={updateSearch}> {children}
    </SearchButton> 
    </Wrapper>
    <Container>
    {( recipes && recipes.length !==0)?<>{recipes.map((item) => {return <ItemWrapper><Label>{item.recipe.label}</Label><img src={item.recipe.image} alt='image'/></ItemWrapper>})}</>: <Message>Sorry! We don't find your recipe !</Message>} </Container>
    </>}


export default Search;