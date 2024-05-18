import axios from "axios";

const BASE_URL = 'http://localhost:3001';

const EmployeeService = {

    getEmployees: async () =>{

        try {
            const resp = await axios.get(`${BASE_URL}/get-all-emps`)
            return resp.data;

        } catch (error) {
            throw (error)
        }
    
    },
    updateEmployee: async (empId,updateData)=>{

        try {

        const resp = await axios.put(`${BASE_URL}/update-emp/${empId}`,updateData)

        return resp.data

        } catch (error) {

            throw new Error("Failed to Update")
        }
    },

    deleteEmployee: async (empId)=>{

        try {
                const resp = await axios.delete(`${BASE_URL}/delete-emp/${empId}`)
                return resp

        } catch (error) {

            throw new Error("Failed to Delete");
        }
    },
    addEmployee: async (employee)=>{

        try {
                const resp = await axios.post(`${BASE_URL}/register`,employee)
                console.log(resp);
                return resp.data

        } catch (error) {
            console.log(error);
            throw new Error("Failed to add");
        }
    }
}

export default EmployeeService