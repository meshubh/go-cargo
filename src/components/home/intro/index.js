import React from 'react';
import { Box, Typography, Tab, Tabs, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import getRates from '../../../assets/get-rates.png';
import quote from '../../../assets/quote.png';
import book from '../../../assets/book.png';
import track from '../../../assets/track.png';
import grow from '../../../assets/grow.png';

const Section = styled(Box)({
    backgroundColor: '#1b2145',
    padding: '300px', // Increase the padding value to increase the height
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
});

const Slogan = styled(Typography)({
    fontSize: '50px',
    marginTop: '60px',
    marginBottom: '20px',
    marginRight: '100px',
    color: '#ffffff',
    lineHeight: '1.2',
    fontFamily: "Circularstd book, sans-serif",
});

const ImageContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
});

const CustomTabs = styled(Tabs)({
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    flexGrow: 1,
    minWidth: '50%',
});

const CustomTab = styled(Tab)({
    fontWeight: 'bold',
    textTransform: 'none',
    '&.Mui-selected': {
        color: '#ffffff',
        backgroundColor: '#1b2145',
    },
});

const Image = styled('img')({
    width: '100%',
    height: '300px',
    objectFit: 'cover',
});

const IntroSection = () => {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Section>
            <Box sx={{ width: "45%" }}>
                <Slogan>Discover the world <br/> with Go Cargo</Slogan>
                {/* add button with text start for free */}
                <Button
                variant="contained"
                sx={{
                    transition: "box-shadow 0.3s ease 0s, transform 0.3s ease 0s",
                    bgcolor: '#e70a3e',
                    color: 'white',
                    '@media (max-width: 600px)': {
                    width: '100%',
                    },
                    ':hover': {
                        bgcolor: '#e70a3e',
                        color: 'white',
                    },
                }}
                >
                Start for free
            </Button>
            </Box>
            <Box sx={{ flexGrow: 1, width: "55%" }}>
                <CustomTabs value={selectedTab} variant="fullWidth" onChange={handleTabChange}>
                    <CustomTab label="Get rates" />
                    <CustomTab label="Quote" />
                    <CustomTab label="Book" />
                    <CustomTab label="Track" />
                    <CustomTab label="Grow" />
                </CustomTabs>
                <Grid item xs={2} sm={1}>
                    <ImageContainer>
                        {selectedTab === 0 && <Image src={getRates} alt="Get rates" />}
                        {selectedTab === 1 && <Image src={quote} alt="Quote" />}
                        {selectedTab === 2 && <Image src={book} alt="Book" />}
                        {selectedTab === 3 && <Image src={track} alt="Track" />}
                        {selectedTab === 4 && <Image src={grow} alt="Grow" />}
                    </ImageContainer>
                </Grid>
            </Box>
        </Section>
    );
};

export default IntroSection;
