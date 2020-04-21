import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
    cardContent: {
        background: 'pink',
    },
});

const ButtonStyled = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%) !important',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 48,
    padding: '0 30px',
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image='https://statik.tempo.co/data/2017/11/16/id_663183/663183_720.jpg'
                    title='Contemplative Reptile'
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' component='h2'>
                        Lizard
                    </Typography>
                    <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                    >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* <Button size='small' color='primary'>
                    Share
                </Button>
                <Button size='small' color='primary'>
                    Learn More
                </Button> */}

                <ButtonStyled>Learn More</ButtonStyled>
            </CardActions>
        </Card>
    );
}
