import React from 'react';
import { Table, Tag, Dropdown, Menu, Button } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

type StatusType = 'Invited' | 'Sub' | 'Not Bidding';

interface DataItem {
    key: string;
    isGroup?: boolean;
    title?: string;
    rebar?: string;
    status?: StatusType;
    bidAmount?: string;
}

const statusColors: Record<StatusType, string> = {
    Invited: 'green',
    Sub: 'red',
    'Not Bidding': 'purple',
};

const generateGroupedData = (): DataItem[] => {
    const groupData: Record<StatusType, number> = {
        Invited: 4,
        Sub: 3,
        'Not Bidding': 1,
    };

    let index = 1;
    const result: DataItem[] = [];

    for (const status of Object.keys(groupData) as StatusType[]) {
        result.push({ key: `group-${status}`, isGroup: true, title: status });
        for (let i = 0; i < groupData[status]; i++) {
            result.push({
                key: `${index++}`,
                rebar: 'Camblin',
                status,
                bidAmount: '$3,456,650',
            });
        }
    }

    return result;
};

const columns = [
    {
        title: 'Rebar',
        dataIndex: 'rebar',
        key: 'rebar',
        width: 200,
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width: 160,
        render: (text: StatusType) => (
            <Tag color={statusColors[text]} className="!rounded-full">{text}</Tag>
        ),
    },
    {
        title: 'Bid Amount',
        dataIndex: 'bidAmount',
        key: 'bidAmount',
        width: 160,
    },
    {
        title: 'Action',
        key: 'action',
        width: 100,
        render: () => (
            <Dropdown
                overlay={
                    <Menu>
                        <Menu.Item>Edit</Menu.Item>
                        <Menu.Item>Delete</Menu.Item>
                    </Menu>
                }
                trigger={['click']}
            >
                <Button type="text" icon={<MoreOutlined />} />
            </Dropdown>
        ),
    },
];

const Test: React.FC = () => {
    const data = generateGroupedData();

    return (
        <Table
            columns={columns}
            dataSource={data}
            rowSelection={{
                type: 'checkbox',
                columnWidth: 50,
                getCheckboxProps: (record) => ({
                    disabled: record.isGroup,
                }),
            }}
            pagination={false}
            tableLayout="fixed"
            rowKey="key"
            className="!rounded-xl border border-[#F2F2F2]"
            rowClassName={(record) => (record.isGroup ? 'bg-[#FAFAFA] font-semibold' : '')}
            components={{
                body: {
                    row: (props: any) => {
                        const recordKey = props['data-row-key'];
                        const record = data.find((item) => item.key === recordKey);

                        if (record?.isGroup) {
                            return (
                                <tr className="bg-[#FAFAFA] font-semibold">
                                    <td colSpan={columns.length + 1} className="py-2 px-4">
                                        {record.title}
                                    </td>
                                </tr>
                            );
                        }

                        return <tr {...props} />;
                    },
                },
            }}
        />
    );
};

export default Test;
