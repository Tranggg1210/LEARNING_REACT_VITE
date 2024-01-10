import React, { useEffect, useState } from 'react';
import useFetch from '../customize/fetch';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddNewBlog from './AddNewBlog';
const Blogs = () => {
    const { data: dataBlogs, isLoading, isError } = useFetch('https://jsonplaceholder.typicode.com/posts')
    const navigate = useNavigate();
    const [data, setData] = useState([])
    useEffect(() => {
        let dataSlice = dataBlogs.slice(0, 13);
        if (dataBlogs && dataBlogs.length > 0) {
            setData(dataSlice)
        }
    }, [dataBlogs])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClick = (blog) => {
        data.unshift(blog);
        setData(data)
        setShow(false)
    }
    const handleDeleteBlog = (id) => {
        let checkDelete = confirm("Bạn có thực sự muốn xóa?")
        if (checkDelete !== 1) {
            let dataSlice = data.filter((blog) => blog.id !== id)
            setData(dataSlice)
        }

    }
    return (
        <>
            <div className='modalBlogs'>
                <Button variant="primary" onClick={handleShow}>
                    + Add new blog
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new blogs</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddNewBlog addNewBlog={handleClick} />
                    </Modal.Body>
                </Modal>
            </div>
            <>
                {/* <button className='btn-add-new'>
                    + Add new blog
                </button> */}
                <div className='blogs'>
                    {isLoading === false && data.map((blog) => (
                        <div className='blogItem' key={blog.id}>
                            <h2>{blog.title}</h2>
                            <p>{blog.body}</p>
                            <button onClick={() => { navigate(`/blog/${blog.id}`) }} className='viewDetail'>View detail</button>
                            <button onClick={() => handleDeleteBlog(blog.id)} className='viewDetail delete'>Delete</button>
                        </div>
                    ))}
                    {
                        isLoading === true && <div style={{ width: "100%", fontSize: 24, textAlign: "center" }}>Loading data...</div>
                    }
                </div>
            </>
        </>
    );
};

export default Blogs;




