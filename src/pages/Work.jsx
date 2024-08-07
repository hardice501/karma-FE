import { Box, CircularProgress, List, ListItem } from '@mui/material';
import { useEffect, useState } from 'react';
import { ReactComponent as BtnBut } from '../icons/btn_but.svg';
import { ReactComponent as BtnDevil } from '../icons/btn-devil.svg';
import { ReactComponent as Heaven } from '../icons/heaven.svg';
import { ReactComponent as Hell } from '../icons/hell.svg';
import { ReactComponent as Happy } from '../icons/happy.svg';
import { ReactComponent as UnHappy } from '../icons/unhappy.svg';
import TimeTable from '../components/TimeTable';
import CustomTypography from '../elements/CustomTypography';
import axios from 'axios';

const NAME_DATA = [
    'Thomas',
    '강신육',
    '구희정',
    '김두연',
    '김설룡',
    '김성주',
    '김애린',
    '김형준',
    '박다혜',
    '송상현',
    '송재룡',
    '양원우',
    '양재우',
    '윤필상',
    '이누리',
    '이영호',
    '이원준',
    '이인근',
    '임규민',
    '임희호',
    '조승표',
    '최재경',
];

const ShowImg = ({ isDevil, isHappy }) => {

    if (isDevil) {
        if (isHappy) {
            return <UnHappy style={{
                width: '100%',
                height: '100%',
            }}/>;
        }
        return <Hell style={{
            width: '100%',
            height: '100%',
        }}/>;
    }
    if (isHappy) {
        return <Happy style={{
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
    const [isLoading, setIsLoading] = useState(true);

    const [isDevil, setIsDevil] = useState(false);
    const [isHappy, setIsHappy] = useState(false);
    const [duck, setDuck] = useState({
        duck: '-',
        leaveDuck: '-',
        workingTime: '-',
        hell: '-',
        heaven: '-',
    });
    const [fontColor, setFontColor] = useState('black');

    const handleClickName = async (name) => {
        setIsLoading(true); // 로딩 시작
        try {
            const response = await axios.get(`http://192.168.40.11:30000/hc/test/karma?name=${name}`);
            const data = response.data;

            setDuck({
                duck: formatTime(data.karma),
                leaveDuck: formatTime(data.remain_karma_time_if_check_out_now),
                workingTime: formatTime(data.sum_of_working_time),
                hell: formatTime(data.remain_working_time),
                heaven: formatDate(new Date(data.check_out_time)),
            });

            setIsDevil(data.karma.isKarma);
            setIsHappy(Math.random() >= 0.5);
        } catch (error) {
            setDuck({
                duck: '-',
                leaveDuck: '-',
                workingTime: '-',
                hell: '-',
                heaven: '-',
            });
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    };

    const formatTime = (timeData) => {
        const formatUnit = (unit) => unit.toString().padStart(2, '0');

        return (timeData.isKarma ? '-' : '')
            + `${formatUnit(timeData.hours)}:${formatUnit(timeData.minutes)}:${formatUnit(timeData.seconds)}`;
    };

    const formatDate = (date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');

        return `${hours}:${minutes}:${seconds}`;
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
            backgroundColor: isDevil ? '#890C0F' : '#FFED90',
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
                    }}>
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
                        <TimeTable fontColor={fontColor} data={duck} isDevil={isDevil}/>
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
                        height: '100%',
                        display: 'flex',
                        backgroundColor: fontColor === 'black' ? 'white' : 'black',
                        borderRadius: '30px',
                        borderColor: 'black',
                        borderWidth: '3px',
                        borderStyle: 'solid',
                    }}>
                        <List sx={{
                            width: '100%',
                            height: '100%',
                            overflowY: 'auto',
                            '&::-webkit-scrollbar': {
                                display: 'none',
                            },
                            msOverflowStyle: 'none',
                            scrollbarWidth: 'none',
                        }}>
                            {NAME_DATA.map((name, index) => (
                                <ListItem
                                    key={index}
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: isDevil ? 'white' : '#0000001F',
                                    }}
                                    onClick={() => handleClickName(name)}
                                >
                                    <CustomTypography fontSize={14} sx={{ fontWeight: '400', color: fontColor }}>
                                        {name}
                                    </CustomTypography>
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    <Box sx={{
                        width: '74.35%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {isLoading ? (
                            <CircularProgress />
                        ) : (
                            <ShowImg isDevil={isDevil} isHappy={isHappy}/>
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Work;
