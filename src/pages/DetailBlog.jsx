import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../customize/fetch'

const DetailBlog = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const { data: dataBlogDetail, isLoading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const handleClick = () => {
        navigate('/blog')
    }
    return (
        <div style={{ color: "#fff" }}>
            <br /><br /><br /><br /> <br /><br />
            <div style={{ textAlign: "center", fontSize: 24, cursor: 'pointer' }}><span onClick={handleClick}>&lt;--back</span></div>
            <br />
            {isLoading && dataBlogDetail && <p style={{ textAlign: "center", fontSize: 24, cursor: 'pointer' }}>Loading data...</p>}
            {isLoading === false && isError == false &&
                <div>
                    <hr />
                    <h1 style={{ textAlign: "center", lineHeight: "80px" }}>Thông tin chi tiết của blog thứ {id}</h1>
                    <h2 style={{ textAlign: "center", lineHeight: "80px" }}>title: {dataBlogDetail.title}</h2>
                    <p style={{ textAlign: "center", lineHeight: "80px" }}>Body: {dataBlogDetail.body}</p>
                    <hr />
                </div>
            }
            {
                isError && <h1 style={{ textAlign: "center", fontSize: 24, cursor: 'pointer' }}>Lấy dữ liệu không thành công</h1>
            }
        </div>
    );
};

export default DetailBlog;