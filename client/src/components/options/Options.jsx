import React, { useState, useEffect, useContext } from "react";
import { Form, Input, Button } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { StopOutlined, CopyOutlined, PhoneOutlined } from "@ant-design/icons";
import { SocketContext } from "../../SocketContext";
// import ScreenShareIcon from '@material-ui/icons/ScreenShare';
const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function Options({ children }) {
  const {
    stream,
    me,
    call,
    name,
    callAccepted,
    callEnded,
    myVideo,
    userVideo,
    connectionRef,
    answerCall,
    callUser,
    leaveCall,
    shareScreen,
    setName,
    setMe,
    screenType, setScreenType
  } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  return (
    <>
      <Form
        name="basic"
        labelCol={
          {
            // span: 8,
          }
        }
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout={"inline"}
      >
        <Form.Item
          label="Username"
          name="username"
          wrapperCol={{
            span: 16,
          }}
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            defaultValue={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 8,
          }}
        >
          <CopyToClipboard text={me} >
            <Button icon={<CopyOutlined />} size="medium" type="primary" onClick={()=>setIdToCall(me)}  shape="circle">
              
            </Button>
          </CopyToClipboard>
        </Form.Item>
        <Form.Item
          label="Id To Call"
          name="idtocall"
          wrapperCol={{
            span: 16,
          }}
          rules={[
            {
              required: true,
              message: "Please Id to call Here!",
            },
          ]}
        >
          <Input
            input={idToCall}
            onChange={(event) => setIdToCall(event.target.value)}
          />
        </Form.Item>
        {callAccepted && !callEnded ? (
          <Form.Item
            wrapperCol={{
              span: 8,
            }}
          >
            <Button icon={<StopOutlined />} size="medium" type="primary" shape="circle" onClick={leaveCall}  danger >
              
            </Button>
          </Form.Item>
        ) : (
          <Form.Item
            wrapperCol={{
              span: 8,
            }}
          >
            <Button
              icon={<PhoneOutlined />}
              size="medium"
              type="primary"
              shape="circle"
              onClick={()=>callUser(idToCall)}
              
            >
              
            </Button>
          </Form.Item>
        )}
      </Form>
    </>
  );
}

export default Options;
