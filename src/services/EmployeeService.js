import axios from "axios";

const BASE_URL = 'http://localhost:8081/emp';

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
                const resp = await axios.post(`${BASE_URL}/add-emp`,employee)
                return resp

        } catch (error) {

            throw new Error("Failed to Delete");
        }
    }
}

export default EmployeeService