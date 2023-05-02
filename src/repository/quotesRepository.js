import axios from "../custom-axios/axios";

const quotesService = {
    fetchQuoteByCategory: () => {
        return axios.get('', {
            params: {
                "category" : 'success'
              }
        });
    },
    fetchQuotesByCategoryWithlimit: () => {
        return axios.get('', {
            params: {
                "category" : 'success',
                "limit": "10"
            }
        })
    }
}
export default quotesService;