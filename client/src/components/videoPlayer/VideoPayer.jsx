import React, { useEffect, useContext, useState } from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  Divider,
  Card,
  Avatar,
  Typography,
  Space,
  Modal,
  Button,
} from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  CopyOutlined,
  RightSquareFilled
} from "@ant-design/icons";
import { SocketContext } from "../../SocketContext";
import "./styles.css";
import Options from "../options/Options";
import Notification from "../notification/Notification";
// import ScreenShareIcon from "@material-ui/icons/ScreenShare";

const { Meta } = Card;
const { Text, Link, Title } = Typography;

const VideoPayer = () => {
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
    screenType,
    setScreenType,
  } = useContext(SocketContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <Row
        style={{ marginLeft: 20, marginRight: 20, justifyContent: "center" }}
      >
        {/* User video */}
        {callAccepted && !callEnded && (
          <Col span={24}>
            <Card
              cover={""}
              actions={[
                <Text>{call ? call.name : "Name"}</Text>,
                // <Options />,
              ]}
            >
              <video playsInline ref={userVideo} autoPlay muted/>
            </Card>
          </Col>
        )}

        {/* Own video */}
        {stream && (
          <Col span={!callAccepted || callEnded ? 24 : 24}>
            <Card
              cover={""}
              actions={[
                <Button
                  icon={<RightSquareFilled />}
                  size="medium"
                  type="primary"
                  shape="circle"
                  onClick={() => setScreenType(!screenType)}
                ></Button>,

                <Options />,
                <Notification />,

                // <PhoneOutlined onClick={()=>{setIsModalVisible(true)}}/>,
              ]}
              style={{ margin: 0, padding: 0 }}
            >
              <video
                className={"videoPlayer_me"}
                ref={myVideo}
                playsInline
                muted
                autoPlay
              />
            </Card>
            {/* <Modal title="Basic Modal" visible={isModalVisible}  onCancel={()=>{setIsModalVisible(false)}}> */}
            {/* </Modal> */}
          </Col>
        )}
      </Row>
    </>
  );
};

export default VideoPayer;
