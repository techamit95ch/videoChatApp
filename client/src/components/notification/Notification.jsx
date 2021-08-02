import React, { useState, useEffect, useContext } from 'react'
import { SocketContext } from "../../SocketContext";
import { CheckOutlined } from "@ant-design/icons";
import {
    Row,
    Col,
    Divider,
    Card,
    Avatar,
    Typography,
    Space,
    Modal,
    Button
  } from "antd";
  const { Text, Link, Title } = Typography;

function Notification() {
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
      } = useContext(SocketContext);
    //   console.log(call,callAccepted);
    return (
        <>
            { 
             call.isReceivingCall && !callAccepted && (
                <Space style={{ display:'flex', justifyContent:'center'}}>
                    <Text> {call.name} Is calling ....... </Text>
                    <Button icon={<CheckOutlined />} size="medium" type="primary"shape="circle" onClick={answerCall}/>
                </Space>
            )
            }
        </>
    )
}

export default Notification
