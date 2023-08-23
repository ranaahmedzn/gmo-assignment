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

const AllPosts = () => {
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
        <div style={{ height: 'calc(100vh - 20vh)', width: '70%', backgroundColor: 'rgba(255, 255, 255, 0.85)', borderRadius: '20px', overflow: 'hidden', padding: '40px' }}>

            <h3 style={{ fontSize: '34px', marginBottom: '30px' }}>Review all the Posts</h3>

            <div style={{ height: 'calc(100% - 68px)', width: 'full' }}>
                {loading ? <Box sx={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <CircularProgress />
                </Box> : <DataGrid rows={posts} columns={columns} />}
            </div>
        </div>
    );
};

export default AllPosts;