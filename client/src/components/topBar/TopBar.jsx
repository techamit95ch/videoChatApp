import React from 'react'
import { PageHeader, Button, Descriptions,Divider  } from 'antd';
import  './style.css'; 
 const TopBar = (props) => {
    return (
        <div>
            <div className="site-page-header-ghost-wrapper">
    <PageHeader
      ghost={false}
      title="Video Chat App"
      subTitle="Call Function"
      extra={[
        <Button key="3">Cancel Call</Button>,
        <Button key="2">Hold Call</Button>,
        <Button key="1" type="primary">
          Share Screen
        </Button>,
      ]}
    >
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
        <Descriptions.Item label="Association">
          <a>421421</a>
        </Descriptions.Item>
        <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
        <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
        <Descriptions.Item label="Remarks">
          Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
    </PageHeader>
    

  </div>
        </div>
    )
}


export default TopBar;
