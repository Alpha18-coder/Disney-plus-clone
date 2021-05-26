import React, { useEffect } from 'react';
import styled from "styled-components";
import { auth, provider } from "../firebase";
import logo from "../images/logo.svg";
import home from "../images/home-icon.svg"
import search from "../images/search-icon.svg"
import watchlist from "../images/watchlist-icon.svg"
import originals from "../images/original-icon.svg"
import movies from "../images/movie-icon.svg"
import series from "../images/series-icon.svg"
import { useHistory } from "react-router-dom";
import {
    selectUserName,
    selectUserPhoto,
    setUserLogin,
    setSignOut
} from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Header() {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                history.push("/")
            }
        })
    }, [dispatch, history])
    const signIn = () => {
        //login with google
        auth.signInWithPopup(provider)
        .then((result) => {
            let user = result.user
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
        })
        history.push('/');
    }

    const signOut = () => {
        auth.signOut()
            .then(() => {
                dispatch(setSignOut());
                history.push("/login")
            })
    }

    return (
        <Container>
            <Logo src={logo} />
            { !userName ?
                <Login onClick={signIn}>Login</Login> :
                <>
                    <NavMenu>
                        <a href>
                            <img src={home} alt="home icon" />
                            <span>HOME</span>
                        </a>


                        <a href>
                            <img src={search} alt="search icon" />
                            <span>SEARCH</span>
                        </a>


                        <a href>
                            <img src={watchlist} alt="" />
                            <span>WATCHLIST</span>
                        </a>

                        <a href>
                            <img src={originals} alt="" />
                            <span>ORIGINALS</span>
                        </a>


                        <a href>
                            <img src={movies} alt="" />
                            <span>MOVIES</span>
                        </a>

                        <a href>
                            <img src={series} alt="" />
                            <span>SERIES</span>
                        </a>
                    </NavMenu>

                    <UserImg
                        onClick={signOut}
                        src={userPhoto} />
                </>}

        </Container>
    )
}

export default Header;

const Container = styled.nav`
    height: 70px;
    width: 100%;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
    position: relative;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a {
        display: flex; 
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0; 
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`

const Login = styled.button`
border: 1px solid #f9f9f9;
padding: 8px 16px;
color: white;
border-radius: 5px;
letter-spacing: 1.5px;
text-transform: uppercase;
background-color: rgba(0, 0, 0, 0.6);
transition: all 0.2s ease 0s;
cursor: pointer;
position:absolute;
right: 50px;

&:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
}
`