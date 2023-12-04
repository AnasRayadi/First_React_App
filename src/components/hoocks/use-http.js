import {useCallback, useState} from "react";
import axios from "axios";
const useHttp = () =>{
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, passData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.request({
                method: requestConfig.method,
                url: requestConfig.url,
                data: requestConfig?.data
            })
          if (!response.status===200) {
            throw new Error('Request failed!') 
          }
          const personData = response.data;
          passData(personData)
          // console.log(personData)
        } catch (err) {
          setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
      },[]);
      return {isLoading, error, sendRequest }
}
export default useHttp