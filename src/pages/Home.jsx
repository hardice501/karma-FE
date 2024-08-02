import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { ReactComponent as BtnBut } from '../icons/btn_but.svg';
import { ReactComponent as BtnDevil } from '../icons/btn-devil.svg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [hover, setHover] = useState(false);

    const handleClick = () => {
        navigate('/work');
    }

    return (
        <Box sx={{
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: hover ? '#FFED90' : '#890C0F',
        }}>
            <Button
                sx={{
                    borderRadius: '30px',
                    overflow: 'hidden',
                    padding: 0,
                    backgroundColor: hover ? 'white' : 'transparent',
                    '&:hover': {
                        backgroundColor: 'white', // 호버 시 배경색을 흰색으로 변경
                    },
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={handleClick}
            >
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '30px',
                    overflow: 'hidden',
                }}>
                    {hover ? <BtnDevil /> : <BtnBut />} {/* 호버 시 아이콘 교체 */}
                </Box>
            </Button>
        </Box>
    )
}

export default Home;
