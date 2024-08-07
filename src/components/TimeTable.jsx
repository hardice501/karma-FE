import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Divider } from '@mui/material';
import CustomTypography from '../elements/CustomTypography';


const TimeTable = ({ fontColor = 'black', data, isDevil }) => {
    const tableHeader = [
        isDevil ? '업보' : '덕',
        isDevil ? '지금 집가면 남는 업보' : '지금 집가면 남는 덕',
        '노동시간', '남은 노동시간', '퇴근 가능시간',
    ];

    return (
        <TableContainer
            component={Box}
            sx={{
                width: '100%',
                height: '100%',
                border: '3px solid black',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: fontColor === 'black' ? 'white' : 'black',
            }}
        >
            <Table aria-label='simple table' sx={{ height: '100%', tableLayout: 'fixed' }}>
                <TableHead sx={{ height: '50%' }}>
                    <TableRow sx={{
                        height: '100%',
                    }}>
                        {tableHeader.map((header, index) => (
                            <TableCell
                                align='center'
                                key={index}
                                sx={{
                                    height: '100%',
                                    padding: 0,
                                    display: 'table-cell',
                                    verticalAlign: 'middle',
                                }}
                            >
                                <CustomTypography fontSize={16} sx={{ fontWeight: '500', color: fontColor }}>
                                    {header}
                                </CustomTypography>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody sx={{ height: '50%' }}>
                    <TableRow sx={{ height: '100%' }}>
                        {Object.values(data).map((value, index) => (
                            <TableCell
                                align='center'
                                key={index}
                                sx={{
                                    height: '100%',
                                    padding: 0,
                                    borderBottom: 'none',
                                    display: 'table-cell',
                                    verticalAlign: 'middle',
                                }}
                            >
                                <CustomTypography fontSize={16} sx={{ fontWeight: '500', color: fontColor }}>
                                    {value}
                                </CustomTypography>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TimeTable;
