import React,{useEffect,useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import EmployeeService from '../services/EmployeeService'

const EmpList = () => {

  const [show, setShow] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [updateData, setUpdateData] = useState({});
  const [selectedData,setSelectedData] = useState({});
  const [data,setData] = useState([]);
  const [searchValue,setSearchValue] = useState('');
  const [searchedData,setSearchedData] = useState([]);

  useEffect(()=>{
    // toast.success('Successfully Logged In')
      EmployeeService.getEmployees().then((resp)=>{
        setData(resp);
      }).catch((error)=>{
        toast.error(error.message)
      })
    
},[])


  const handleClose = () => setShow(false);
  const handleCloseDelete = () => setShowDeleteModal(false);
  
  const handleShow = (e) => {
    setSelectedData(e)
    setUpdateData({
      employeeId:e.employeeId,
      name: e.name,
      email: e.email,
      salary: e.salary,
      aadhaar: e.aadhaar
    })
    setShow(true);
  }

  const handleInputChange = (event)=>{
    setUpdateData({...updateData,[event.target.name]:event.target.value})
  }

  const handleSubmit = () => {
    
    EmployeeService.updateEmployee(selectedData.employeeId,updateData).then((resp)=>{
      setData(data.map(item => item.employeeId === selectedData.employeeId ? updateData : item));
      console.log("Update Successfull")
      toast.success("Record Updated")
    }).catch((error)=>{
      toast.error(error.message)
    })
    setShow(false);
    
  }

    const removeItem = (id)=>{
      setSelectedData({employeeId:id})
      setShowDeleteModal(true)
    }

    const confirmDelete = ()=>{

      EmployeeService.deleteEmployee(selectedData.employeeId).then((resp)=>{
        setData(data.filter(item => item.employeeId !== selectedData.employeeId));
        toast.success("Employee Deleted")

      }).catch((error)=>{
        toast.error(error.message)
      })
        setShowDeleteModal(false);
    }

    const handleSearchChange = (e)=>{
      setSearchValue(e.target.value)
    }

    useEffect(() => {
      setSearchedData(data.filter((emp) => emp.name.toLowerCase().startsWith(searchValue.toLowerCase())));
    }, [searchValue]); 

  return (
    <>
        <h2>Employees:</h2>
        <input className="form-control me-2" name='search' type="search" value={searchValue} placeholder="Search" aria-label="Search" onChange={handleSearchChange}></input>
        {/* <input name='search' value={searchValue} placeholder='Search' onChange={handleSearchChange}/> */}
        <table className="table table-striped">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Salary</th>
      <th scope="col">Aadhaar</th>
    </tr>
  </thead>
  <tbody>
  {searchValue ? searchedData.map((e) => (
  <tr key={searchedData.indexOf(e) + 1}>
    <th scope="row">{searchedData.indexOf(e) + 1}</th>
    <td>{e.name}</td>
    <td>{e.email}</td>
    <td>{e.salary}</td>
    <td>{e.aadhaar}</td>
    <td><button className="btn btn-sm btn-danger" onClick={() => removeItem(e.employeeId)}>Delete</button></td>
    <td><Button className='btn-sm' variant="primary" onClick={() => handleShow(e)}>Update</Button></td>
  </tr>
)) : data.map((e) => (
  <tr key={data.indexOf(e) + 1}>
    <th scope="row">{data.indexOf(e) + 1}</th>
    <td>{e.name}</td>
    <td>{e.email}</td>
    <td>{e.salary}</td>
    <td>{e.aadhaar}</td>
    <td><button className="btn btn-sm btn-danger" onClick={() => removeItem(e.employeeId)}>Delete</button></td>
    <td><Button className='btn-sm' variant="primary" onClick={() => handleShow(e)}>Update</Button></td>
  </tr>
))}
</tbody></table>
        <Modal show={show} onHide={handleClose}  backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={updateData.name} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" value={updateData.email} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="salary">
              <Form.Label>Salary</Form.Label>
              <Form.Control type="text" name="salary" value={updateData.salary} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="aadhaar">
              <Form.Label>Aadhaar</Form.Label>
              <Form.Control type="text" name="aadhaar" value={updateData.aadhaar} onChange={handleInputChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDeleteModal} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this employee?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>


        <ToastContainer/>
    </>
  )
}

export default EmpList