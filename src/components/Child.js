import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { setEmpObj } from '../redux/EmpSlice';

const Child = (props) => {

    const parentDataInChild = props.parentToChild;
    const childData = 'Monu';

    const passDataToParent = () => {
        console.log(childData);
        props.childToParent(childData)
       
    };

    // ======================================================

const dispatch = useDispatch();
const dataFromStore = useSelector(store => store.emp.empObj);
    useEffect(() => { }, [dataFromStore]);

    const sendDataToStore = () => {
        console.log('sendDataToStore');
        const dataToSend = {
            firstName: 'Siddharth', salary: 13.50
        };
        dispatch(setEmpObj(dataToSend));
    }
    console.log(dataFromStore);

// ======================================================


    return (
        <>

{dataFromStore && <h1>{dataFromStore.firstName}</h1>}

<button onClick={sendDataToStore} >Send data to store</button>

            <h1>Child component</h1>
            <p>Child data in child component: {childData}</p>
            <p>Parent data in child component: {parentDataInChild}</p>
            <button onClick={passDataToParent} >Pass Data to Parent</button>
        </>
    );
};

export default Child;