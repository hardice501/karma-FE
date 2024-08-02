import { Box, List, ListItem } from '@mui/material';
import { useEffect, useState } from 'react';
import { ReactComponent as BtnBut } from '../icons/btn_but.svg';
import { ReactComponent as BtnDevil } from '../icons/btn-devil.svg';
import { ReactComponent as Heaven } from '../icons/heaven.svg';
import { ReactComponent as Hell } from '../icons/hell.svg';
import { ReactComponent as Chain } from '../icons/chain.svg';
import TimeTable from '../components/TimeTable';
import CustomTypography from '../elements/CustomTypography';

const NAME_DATA = [
    'Thomas',
    '강신육',
    '공공사용',
    '구희정',
    '김두연',
    '김봉규',
];

const DUCK = {
    duck: '00:00',
    leaveDuck: '00:00',
    workingTime: '00:00',
    hell: '00:00',
    heaven: '00:00',
};

const ShowImg = ({ isDevil }) => {

    if (isDevil) {
        return <Hell style={{
            width: '100%',
            height: '100%',
        }}/>;
    }

    return <Heaven style={{
        width: '100%',
        height: '100%',
    }}/>;
};


const Work = () => {
    const [isDevil, setIsDevil] = useState(false);
    const [fontColor, setFontColor] = useState('black');

    const handleClick = () => {
        setIsDevil(!isDevil);
    };

    useEffect(() => {
            setFontColor(isDevil ? 'white' : 'black');
        },
        [isDevil]);

    return (
        <Box sx={{
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isDevil ? '#890C0F': '#FFED90',
        }}>
            <Box
                sx={{
                    width: '93.08%',
                    height: '86.58%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    height: '13.18%',
                    justifyContent: 'space-between',
                }}>
                    <Box sx={{
                        display: 'flex',
                        width: '24.16%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} >
                        {isDevil ? (<BtnDevil style={{
                            width: 'auto',
                            height: '100%',
                            borderRadius: '30px',
                            borderColor: 'black',
                            borderWidth: '3px',
                            borderStyle: 'solid',
                        }}/>) : (
                            <BtnBut style={{
                                width: 'auto',
                                height: '100%',
                                borderRadius: '30px',
                                borderColor: 'black',
                                borderWidth: '3px',
                                borderStyle: 'solid',
                            }}/>)
                        }
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        width: '74.35%',
                    }}>
                        <TimeTable fontColor={fontColor} data={DUCK}/>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    height: '83.72%',
                    justifyContent: 'space-between',
                }}>
                    <Box sx={{
                        width: '24.16%',
                        display: 'flex',
                        backgroundColor: fontColor === 'black' ? 'white' : 'black',
                        borderRadius: '30px',
                        borderColor: 'black',
                        borderWidth: '3px',
                        borderStyle: 'solid',
                    }}>
                        <List sx={{
                            width: '100%',
                        }}>
                            {NAME_DATA.map((name, index) => (
                                <ListItem
                                    key={index}
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: isDevil ? 'white' : '#0000001F',
                                    }}>
                                    <CustomTypography fontSize={14} sx={{ fontWeight: '400', color: fontColor }}>
                                        {name}
                                    </CustomTypography>
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    <Box sx={{
                        width: '74.35%',
                    }}>
                        <ShowImg isDevil={isDevil}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Work;
