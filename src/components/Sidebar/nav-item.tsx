"use client";
import NextLink from 'next/link';
import { useRouter,usePathname } from 'next/navigation'; // Change this line
import PropTypes from 'prop-types';
import { Box, Button, ListItem } from '@mui/material';

interface NavItemProps {
    href?: string;
    icon?: React.ReactNode;
    title?: string;
}

const NavItem = (props:any) => {
    const { href, icon, title, ...others } = props;
    const router = useRouter(); // This line is okay now
    const pathname = usePathname();
    const active = href ? pathname === href : false;
    console.log(active,"pathname");
    return (
        <ListItem
            disableGutters
            sx={{
                display: 'flex',
                mb: 0.5,
                py: 0,
                px: 2,
            }}
            {...others}
        >
            <NextLink href={href as any} passHref>
                <Button
                    component="a"
                    startIcon={icon}
                    disableRipple
                    //@ts-ignore
                    sx={{
                        backgroundColor: active && 'rgba(255,255,255, 0.08)',
                        borderRadius: 1,
                        color: active ? 'secondary.main' : 'neutral.300',
                        fontWeight: active && 'fontWeightBold',
                        justifyContent: 'flex-start',
                        px: 3,
                        textAlign: 'left',
                        textTransform: 'none',
                        width: '100%',
                        '& .MuiButton-startIcon': {
                            color: active ? 'secondary.main' : 'neutral.400',
                        },
                        '&:hover': {
                            backgroundColor: 'rgba(255,255,255, 0.08)',
                        },
                    }}
                >
                    <Box sx={{ flexGrow: 1 }}>{title}</Box>
                </Button>
            </NextLink>
        </ListItem>
    );
};

export default NavItem;
