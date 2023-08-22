import React from 'react';
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, CircularProgress } from "@mui/material";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'userId', headerName: 'User ID', width: 90 },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'body', headerName: 'Body', width: 400 },
];

const SecondPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        setPosts(data)
      });
  }, []);

  return (
    <div className="main-div">
      <div style={{ height: 'calc(100% - 20%)', width: '70%', backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', padding: '40px' }}>

        <h3 style={{ fontSize: '34px', marginBottom: '30px' }}>Here is the all posts</h3>

        <div style={{ height: 'calc(100% - 68px)', width: 'full' }}>
          {loading ? <Box sx={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <CircularProgress />
          </Box> : <DataGrid rows={posts} columns={columns} />}
        </div>
      </div>
    </div>
  );
};


export default SecondPage;