import { useState } from 'react';
import logo from '../assets/img/react.svg'

const Home = () => {
    const [name, setName] = useState('tôi');
    const [values, setValues] = useState('')
    const handleClick = () => {
        setName(values)
    }
    const handleInput = (values) => {
        setValues(values)
    }
    return (
        <div className='home'>
            <img src={logo} alt="Đây là hình ảnh minh họa reactjs" />
            <h1>Học React với {name.length > 0 ? name : 'tôi'} !!!</h1>
            <input size={40} onChange={e => handleInput(e.target.value)} type="text" placeholder='Nhập từ bạn muốn thay thế!' />
            <button onClick={handleClick}>Replace!</button>
        </div>
    )
}

export default Home;