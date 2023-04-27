import React, { useEffect, useState } from "react";
import {
  Form,
  Image,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
} from "antd";
import { IProduct } from "../../model";
import { getAllll } from "../../../api/products";

const Dashboard: React.FC = () => {
  const [form] = Form.useForm();

  const [editingKey, setEditingKey] = useState("");
  const [product, setProduct] = useState([]);
  const fetProduct = async () => {
    const { data } = await getAllll();
    setProduct(
      data.docs.map((item: IProduct, index: any) => {
        return {
          stt: index + 1,
          id: item._id,
          name: item.name,
          price: item.price,
          original_price: item?.original_price,
          short_description: item?.short_description,
          description: item.description,
          images: item?.images?.[0]?.base_url,
        };
      })
    );
  };
  useEffect(() => {
    fetProduct();
  }, []);
  const columns = [
    {
      title: "Stt",
      dataIndex: "stt",
      width: "5%",
      editable: true,
      align: "center",
    },
    {
      title: "name",
      dataIndex: "name",
      width: "15%",
      editable: true,
      align: "center",
    },
    {
      title: "Giá",
      dataIndex: "price",
      width: "10%",
      editable: true,
      align: "center",
    },
    {
      title: "Giá gốc",
      dataIndex: "original_price",
      width: "10%",
      editable: true,
      align: "center",
    },
    {
      title: "Mô tả ngắn",
      dataIndex: "short_description",
      width: "15%",
      editable: true,
      align: "center",
      // render: (text: string) => (
      //   <span>{text.length > 20 ? `${text.slice(0, 30)}...` : text}</span>
      // ),
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      width: "15%",
      editable: true,
      align: "center",
      //   render: (text: string) => (
      //     <span>{text.length > 20 ? `${text.slice(0, 30)}...` : text}</span>
      //   ),
    },
    {
      title: "Hình ảnh",
      dataIndex: "images",
      width: "15%",
      editable: true,
      render: (text: string) => <Image width={100} src={text} />,
      align: "center",
    },
    {
      title: "Danh mục",
      dataIndex: "address",
      width: "40%",
      editable: true,
      align: "center",
    },
    {
      align: "center",
      title: "operation",
      dataIndex: "operation",
      render: (_: any, record: IProduct) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              //   onClick={() => save(record._id)}
              style={{ marginRight: 8 }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const isEditing = (record: IProduct) => record._id === editingKey;

  const edit = (record: Partial<IProduct> & { _id: React.Key }) => {
    form.setFieldsValue({ name: "", age: "", address: "", ...record });
    setEditingKey(record._id);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: IProduct) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Table
        bordered
        dataSource={product}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
        className="text-center"
      />
    </Form>
  );
};

export default Dashboard;
