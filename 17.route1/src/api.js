import axios from "axios";

function fetchCountries(){
    try{
        const response = await axios.get("http://  /all");
    }catch(e){
        return [];
    }
}

function fetchSearchResults(q){
    try{
        const response = await axios.get(`http://  /search?q=${q}`);
        return response.data;
    }catch(e){
        return [];
    }
}

function fetchCountry(code){
    try{
        const response = await axios.get(`http://  /code/${code}`);
        return response.data;
    }catch(e){
        return [];
    }
}
