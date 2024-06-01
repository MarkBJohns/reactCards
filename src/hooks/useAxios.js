// ==============================================================
//    STEP THREE
// ==============================================================

// import { useState } from "react";
// import axios from "axios";
// import { v1 as uuid } from "uuid";

// const useAxios = (baseUrl) => {
//   const [data, setData] = useState([]);
  
//   const addData = async (url) => {
//     const response = await axios.get(url);
//     setData(data => [...data, { ...response.data, id: uuid() }]);
//   }
  
//   return [data, addData]
// }

// export default useAxios;

// ==============================================================
//    STEP FOUR REFACTOR
// ==============================================================

import { useState } from "react";
import axios from "axios";
import { v1 as uuid } from "uuid";

const useAxios = (baseUrl) => {
    const [data, setData] = useState([]);
    
    const addData = async (searchTerm = "") => {
        const url = searchTerm ? `${baseUrl}${searchTerm}` : baseUrl;
        const response = await axios.get(url);
        setData(data => [...data, { ...response.data, id: uuid() }]);
    }
    
    return [data, addData];
}

export default useAxios;