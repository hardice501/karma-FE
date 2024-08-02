import { Typography } from '@mui/material';

const CustomTypography = ({ children, fontSize, sx }) => {
    const generateClampedFontSize = (size) => {
        const minSize = size * 0.1; // 최소 크기 (기본 크기의 75%)
        const maxSize = size * 1.5;  // 최대 크기 (기본 크기의 150%)
        return `clamp(${minSize}px, ${size / 15}vw, ${maxSize}px)`;
    };

    return (
        <Typography
            sx={{
                fontSize: generateClampedFontSize(fontSize), // 자동으로 clamp 처리된 fontSize 적용
                ...sx,
            }}
        >
            {children}
        </Typography>
    );
};

export default CustomTypography;
