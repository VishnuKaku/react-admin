import axios from "axios";

const BASE_URL = 'http://localhost:3001';

const AdminService =  {

    login : async (credentials) => {

        try {
            
            const response = await axios.post('http://localhost:3001/login', credentials);
            return response

        } catch (error) {
            
            throw (error);
        },


    getAdmin: async (adminId,token) =>{
        try {
            const resp = await axios.get(`${BASE_URL}/adminProfile/${adminId}`,{ headers: {
                'Authorization': `Bearer ${token}`}
              })
              return resp.data;
        } catch (error) {
            throw (error)
        }
    
    },
    updateAdmin: async (adminId,token,updateData)=>{
        try {
            const resp = await axios.put(`http://localhost:3001/adminProfile/${adminId}`,updateData, { headers: {
                'Authorization': `Bearer ${token}`},Body: updateData
              })

            return resp.data

        } catch (error) {

            throw (error)
        }
    }
  
}

export default AdminService
