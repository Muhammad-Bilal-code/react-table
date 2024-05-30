import { Box, Button } from "@mui/material";
import axios from "axios";
import React, { ReactNode, useEffect, useState } from "react";
import MyTable from "../components/MyTable";

const ApiHandling = () => {
  const api = "https://jsonplaceholder.typicode.com/users";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [dataScreen, setDataScreen] = useState(false);

  useEffect(() => {}, []);

  const handleGetData = () => {
    setDataScreen(true);
    setLoading(true);
    axios
      .get(api)
      .then((res) => {
        // console.log(res);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    //   .finally(() => setLoading(false));
  };
  console.log(data);

  interface Column {
    key: string;
    label: string;
    btn?: ReactNode;
  }

  const columns = [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "name",
      label: "Name",
    },
    {
      key: "",
      label: "Action",
      btn: (row: any) => {
        // console.log(row);
        return (
          <Box>
            <Button>Edit</Button>
            <Button onClick={() => console.log(row)}>Delete</Button>
          </Box>
        );
      },
    },
  ];
  return (
    <div>
      <Button variant="contained" onClick={handleGetData}>
        Get Data
      </Button>
      {/* {loading ? "Data" : "Loading"} */}
      <MyTable
        loading={loading}
        dataScreen={dataScreen}
        data={data}
        columns={columns}
      />
    </div>
  );
};

export default ApiHandling;
