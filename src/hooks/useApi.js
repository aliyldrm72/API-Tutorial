import axios from "axios";

function useApi (){
axios.defaults.headers.common['content-type']='content-type: application/json;charset=UTF-8'
return axios
}

export default useApi