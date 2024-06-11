import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaHandPointRight } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
// import OffloadAnalysisReport from '../../../assets/png/OffloadAnalysisReport.png';
// import ConversationAnalysisReport from '../../../assets/png/ConversationAnalysisReport.png';
// import ConversationAnnotaion from '../../../assets/png/ConversationAnnotation.png';
// import Directory from '../../../assets/png/Directory.png';

import './SingleProject.css';

function SingleProject({ id, name, demo, image, theme }) {
    // const [isOpen, setIsOpen] = useState(false);
    // const images = [OffloadAnalysisReport, ConversationAnalysisReport, ConversationAnnotaion, Directory];
    // const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // const [isFading, setIsFading] = useState(false);

    const useStyles = makeStyles((t) => ({
        iconBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 50,
            border: `2px solid ${theme.tertiary}`,
            color: theme.tertiary,
            transition: 'all 0.2s',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.primary,
                transform: 'scale(1.1)',
                border: `2px solid ${theme.secondary}`,
            },
        },
        icon: {
            fontSize: '1.1rem',
            transition: 'all 0.2s',
            '&:hover': {},
        },
        // modal: {
        //     display: isOpen ? 'block' : 'none',
        //     position: 'fixed',
        //     zIndex: 1,
        //     left: 0,
        //     top: 0,
        //     width: '100%',
        //     height: '100%',
        //     overflow: 'auto',
        //     backgroundColor: 'rgb(0,0,0)',
        // },
        // modalContent: {
        //     position: 'relative',
        //     margin: 'auto',
        //     padding: '80px 0',
        //     width: '80%',
        // },
        // close: {
        //     position: 'absolute',
        //     top: '10px',
        //     right: '-55px',
        //     color: '#fff',
        //     fontSize: '55px',
        //     fontWeight: 'bold',
        //     '&:hover': {
        //         color: '#bbb',
        //         textDecoration: 'none',
        //         cursor: 'pointer',
        //     },
        // },
        // arrow: {
        //     cursor: 'pointer',
        //     position: 'absolute',
        //     top: '50%',
        //     width: 'auto',
        //     padding: '16px',
        //     marginTop: '-22px',
        //     color: '#fff',
        //     fontWeight: 'bold',
        //     fontSize: '40px',
        //     transition: '0.6s ease',
        //     borderRadius: '0 3px 3px 0',
        //     userSelect: 'none',
        //     '&:hover': {
        //         backgroundColor: 'rgba(0,0,0,0.8)',
        //     },
        // },
        // leftArrow: {
        //     left: '-70px',
        //     borderRadius: '3px 0 0 3px',
        // },
        // rightArrow: {
        //     right: '-70px',
        //     borderRadius: '3px 3px 0 0',
        // },
        // image: {
        //     display: 'block',
        //     width: '100%',
        //     height: 'auto',
        //     transition: 'opacity 0.5s ease-in-out',
        // },
        // fadeOut: {
        //     opacity: 0,
        // },
    }));

    const classes = useStyles();

    // const openModal = (event) => {
    //     event.preventDefault();
    //     setIsOpen(true);
    // };

    // const closeModal = () => {
    //     setIsOpen(false);
    // };

    // const changeImage = (newIndex) => {
    //     setIsFading(true);
    //     setTimeout(() => {
    //         setCurrentImageIndex(newIndex);
    //         setIsFading(false);
    //     }, 300);
    // };

    // const nextImage = () => {
    //     changeImage((currentImageIndex + 1) % images.length);
    // };

    // const prevImage = () => {
    //     changeImage((currentImageIndex - 1 + images.length) % images.length);
    // };

    return (
        <Fade bottom>
            <div
                key={id}
                className='singleProject'
                style={{ backgroundColor: theme.primary400 }}
            >
                <div className='projectContent'>
                    <h2
                        id={name.replace(' ', '-').toLowerCase()}
                        style={{ color: theme.tertiary }}
                    >
                        {name}
                    </h2>
                    <img src={image} alt={name} />
                    {id === 1 ?                    
                        <div className='project--showcaseBtn'>
                            <a
                                href={demo}
                                target='_blank'
                                rel='noreferrer'
                                className={classes.iconBtn}
                                aria-labelledby={`${name.replace(' ', '-').toLowerCase()} ${name.replace(' ', '-').toLowerCase()}-demo`}
                                //onClick={id === 1 ? openModal : undefined}
                            >
                                <FaHandPointRight
                                    id={`${name.replace(' ', '-').toLowerCase()}-demo`}
                                    className={classes.icon}
                                    aria-label='Demo'
                                />
                            </a>
                        </div> : <h2 style={{ color: theme.tertiary }}>Message me!</h2>
                    }
                </div>
            </div>
            {/* <div className={classes.modal}>
                <div className={classes.modalContent}>
                    <span className={classes.close} onClick={closeModal}>&times;</span>
                    <img
                        src={images[currentImageIndex]}
                        alt="Popup"
                        className={`${classes.image} ${isFading ? classes.fadeOut : ''}`}
                    />
                    <a className={`${classes.arrow} ${classes.leftArrow}`} onClick={prevImage}>&#10094;</a>
                    <a className={`${classes.arrow} ${classes.rightArrow}`} onClick={nextImage}>&#10095;</a>
                </div>
            </div> */}
        </Fade>
    );
}

export default SingleProject;
