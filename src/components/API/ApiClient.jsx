// src/utils/apiClient.js
const ApiClient = () => {

   
    const BASE_URL_API = `${process.env.VITE_API_BASE_URL}/film/`;

    const getRequestApi = async (endpoint, options = {}) => {
        try {
            const params = new URLSearchParams(options);
            let apiUrl = `${BASE_URL_API}${endpoint}`;
            if (params) {
                console.log({ params })
                apiUrl += `?${params}`
            }
            const response = await fetch(apiUrl, {
                method: "get",
                headers: {
                    // "Content-Type": "application/json",
                    //  Authorization: 'Bearer ' + token
                },
                credentials: 'include'
            });

            if (response.status == 401) {
                //localStorage.removeItem('token');
                //  navigate('/login'); // Redirect to login page
                return;
            }

            // Parse JSON response if the status code is not 401
            const data = await response.json();
            return data;
        } catch (error) {

            localStorage.removeItem('token');
            console.error('API request error:', error);
            //  navigate('/login');
            //throw error;
        }

    };

   

    return { getRequestApi };
};

export default ApiClient;
