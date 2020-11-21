import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

const Home = ({ isLoggedIn }) => {
    return (
        <>
            <div className="mainContainer">
                <h1 className="mainTitle">
                    시각장애인의 눈과 발이 되어주세요.
                </h1>
                <h3 className="explanation">
                    문제 설명...
                </h3>

                <div className="linkBox">
                    <div className="addWalkway_text">산책로 정보 추가하기</div>
                    <Link to="/add-road-info" className="addWalkway">
                        +
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;