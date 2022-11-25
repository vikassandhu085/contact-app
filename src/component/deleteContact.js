import React,{useState,useEffect} from "react";
import { Button, Modal } from "antd";

function Delete() {
    const [ loading, setLoading ] = useState(false);
  const [ visible, setVisible ] = useState(false);
 useEffect(()=>{
 setVisible(true)
 },[])
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };
    return(
        <div className="main">
      <div className="maindiv">

        <Modal
    visible={visible}
    title="Delete Contact"
    onOk={handleOk}
    onCancel={handleCancel}
    footer={[
      <Button key="back" onClick={handleCancel} >Return</Button>,
      <Button key="submit" type="primary" loading={loading} onClick={handleOk} >Delete</Button>
    ]}

    >
      <h1 style={{color: 'red'}} > Are you sure you want to delete Contact !! </h1>
    </Modal>
    </div>
    </div>
    )
};

export default Delete;