
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import LocationOnIcon from '@mui/icons-material/LocationOn';


export const Agent = () => {
    return (
        <Box>
            <Grid container spacing={2} className='Rolex'>
                
                <Grid xs={4}>
                        
                    <Box width='18.38px' height='17.72px' top='1.97px' left='1.31px'>
                        <img src={process.env.PUBLIC_URL + '/publish.svg'} alt=""></img>
                        
                        <Box width='119px' height='36px' top='523px' left='201px'>
                            <Typography  variant="body2">Published</Typography>
                        </Box>
                        
                    </Box>
                    
                </Grid>
                
                <Grid xs={2}>
                    <Box width='144px' height='41px' top='511px' left='848px' borderRadius='5px' bgcolor='white'>
                        <Button startIcon={<AddIcon/>} variant="text" >Add Listing</Button>
                    </Box>
                </Grid>
                
                <Grid xs={4}>
                   <Box width='374px' height='41px' top='511px' left='1008px' borderRadius='5px'> 
                    <Button startIcon={<AddIcon/>} variant="text" >Maps</Button>
                    <Button startIcon={<AddIcon/>} variant="text" >Cards</Button>
                    <Button startIcon={<AddIcon/>} variant="text" >Table</Button>
                    </Box>
                </Grid>
                
                <Grid xs={2}>
                    <Box width='127px' height='41px' top='512px' left='1397px' borderRadius='5px'>
                    <Button endIcon={<AddIcon/>} variant="text" >Lable</Button>
                    </Box>
                </Grid>
                <Grid xs={4}>
                <Card sx={{ width: 432, height: 719, top: 590, left: 150, borderRadius: 15 }} className='card-outer'>
                    <Card sx={{ maxWidth: 402, maxHeight: 302, top: 605 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCu_5fDK1jhDGCAwewGXaPxm2Rr4SV4bR_w&usqp=CAU"
                            alt="green iguana"
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {<LocationOnIcon/>} 56 Owen Street North Bondi
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                    </Card>
                </Card>
                   
                </Grid>
            </Grid>
        </Box>
    )
}

