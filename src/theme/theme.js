import { createTheme, alpha } from '@mui/material';

const createCustomTheme = (mode) => {
    const purpleBase = mode === 'light' ? '#6B4EE6' : '#9D86FF';

    return createTheme({
        palette: {
            mode,
            primary: {
                main: purpleBase,
                light: alpha(purpleBase, 0.8),
                dark: mode === 'light' ? '#5740B8' : '#7B66CC',
            },
            background: {
                default: mode === 'light' ? '#F8F7FC' : '#121212',
                paper: mode === 'light' ? '#FFFFFF' : '#1E1E1E',
            },
            text: {
                primary: mode === 'light' ? '#2D3748' : '#E2E8F0',
                secondary: mode === 'light' ? '#718096' : '#A0AEC0',
            },
        },
        typography: {
            fontFamily: "'Inter', sans-serif",
            h4: {
                fontWeight: 600,
                letterSpacing: '-0.02em',
            },
        },
        shape: {
            borderRadius: 12,
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        fontWeight: 500,
                        padding: '8px 16px',
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                            transform: 'translateY(-1px)',
                            boxShadow: '0 4px 12px rgba(107, 78, 230, 0.2)',
                        },
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        transition: 'all 0.3s ease-in-out',
                    },
                },
            },
            MuiCssBaseline: {
                styleOverrides: {
                    '@keyframes fadeIn': {
                        from: {
                            opacity: 0,
                            transform: 'translateY(10px)',
                        },
                        to: {
                            opacity: 1,
                            transform: 'translateY(0)',
                        },
                    },
                },
            },
        },
    });
};

export const lightTheme = createCustomTheme('light');
export const darkTheme = createCustomTheme('dark');