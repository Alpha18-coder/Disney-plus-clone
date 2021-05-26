import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import playBlackIcon from "../images/play-icon-black.png";
import playWhiteIcon from "../images/play-icon-white.png";
import group from "../images/group-icon.png";
import { useParams } from "react-router-dom";
import db from "../firebase";

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
        // Grab movie info from db
        db.collection("movies")
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    //save the movie data
                    setMovie(doc.data());
                }
                else {
                    //redirect to home page
                }
            })
    }, [id])


    return (
        <Container>
            {movie && (
                <>
                    <Background>
                        <img src={movie.backgroundImg} alt="" />
                    </Background>

                    <ImageTitle>
                        <img src={movie.titleImg} alt="" />
                    </ImageTitle>

                    <Controls>
                        <PlayButton>
                            <img src={playBlackIcon} alt="" />
                    PLAY
                </PlayButton>

                        <TrailerButton>
                            <img src={playWhiteIcon} alt="" />
                    Trailer
                 </TrailerButton>

                        <AddButton>
                            <span>+</span>
                        </AddButton>

                        <GroupMatchButton>
                            <img src={group} alt="" />
                        </GroupMatchButton>
                    </Controls>
                    <SubTitle>
                        {movie.subTitle}
                    </SubTitle>

                    <Description>
                        {movie.description}
                    </Description>
                </>
            )}
        </Container>
    )
}

export default Detail;

const Container = styled.div`
min-height: calc(100vh - 70px);
padding: 0px calc(3.5vw + 5px);
position: relative;
`

const Background = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: -1;
opacity: 0.8;

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`

const ImageTitle = styled.div`
height: 30vh;
margin-top: 60px;
min-height: 170px;
width: 35vw;
min-width: 200px;

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`

const Controls = styled.div`
display: flex;
align-items: center;
`

const PlayButton = styled.div`
border-radius: 4px;
font-size: 15px;
padding: 0px 24px;
margin-right: 22px;
display: flex;
align-items: center;
height: 56px;
background: rgb(249, 249, 249);
border: none;
letter-spacing: 1.8px;
cursor: pointer;
color: black;

&:hover {
    background: rgb(198, 198, 198);
}
`

const TrailerButton = styled(PlayButton)`
display: flex;
align-items: center;
background: rgba(0, 0, 0, 0.3);
border: 1px solid rgb(249, 249, 249);
color: rgb(249, 249, 249);
text-transform: uppercase;
`

const AddButton = styled.div`
margin-right: 16px;
height: 44px;
width: 44px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%; 
border: 2px solid white;
background-color: rgba(0, 0, 0, 0.6);
cursor: pointer;
span {
    font-size: 30px;
    color white;
    margin-bottom: 4px;
    margin-left: 1px;
}
`

const GroupMatchButton = styled(AddButton)`
background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
color: rgb(249, 249, 249,);
font-size: 15px;
min-height: 20px;
margin-top: 26px;
`

const Description = styled.div`
line-height: 1.4;
font-size: 20px;
margin-top: 16px;
color: rgb(249, 249, 249);
max-width 760px;
`