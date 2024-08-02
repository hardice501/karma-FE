
export const getGlobalTheme = (mode) => ({
    palette: {
        mode,
        ...({
            background: '#FFED90',
        }),
    },
    typography: {
        fontFamily: 'Pretendard',
    },
});
