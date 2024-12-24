import { useState } from "react";
import Blob from "../assets/blob.svg";
import ChangePassword from "../component/ChangePassword";
import MemeberInfo from "../component/MemberInfo";
import ReserveCardsBox from "../component/ReserveCardsBox";
import TestFather from "../component/TestFather";
import SeeMore from "../component/SeeMore";



export default function Try() {

    


    return (
        <>
            999
            <Blob ></Blob>
            <br />



            <SeeMore text={'See All'} imgBall={"./images/seeAll-dot.svg"} href={"#"}/>

            {/* 會員資料區 */}
            <section id="member">
                <div className="memberWrap">
                    {/* 會員簡歷 */}
                    <div className="resume">
                        <div className="avatar">
                            <div className="ava-photo">
                                <img src="./images/avatar/member-avatar.svg" alt="" />
                            </div>
                            <div className="camera">
                                <img src="./images/icon-tag/type=camera.svg" alt="" />
                            </div>
                        </div>

                        <div className="name-default">
                            <p>阿明</p>
                            <img className="icon-edit" src="./images/icon-tag/type=edit.svg" alt="" />
                        </div>

                        <div className="member-level">
                            <p>等級：小俗投
                                <br />
                                <span>距離下個俗投還差 400 pt</span>
                            </p>
                            <p className="level-count">累積點數: 100 pt</p>
                        </div>

                    </div>

                    {/* 會員資料盒子 */}
                    <div className="information">
                        {/* 會員基本資料 */}
                        {/* <MemeberInfo /> */}

                        

                        

                        {/* <ChangePassword /> */}

                    </div>
                </div>
            </section>

            {/* 預約記錄區 */}
            <section id="reserve">
                <div className="title">
                    <h2>
                        <img src="./images/title/預約紀錄.svg" alt="" />
                    </h2>
                </div>
                {/* 列表區 */}
                
                <TestFather/>

                <ReserveCardsBox/>


                
                {/* 看全部按鈕 */}
                <div className="btn-area">
                    <div className="btn-seeAll">
                        <p>
                            See All
                        </p>
                        <img src="./images/icon-tag/type=arrowRight_bold.svg" alt="" />
                        <img className="seeAll-deco" src="./images/seeAll-dot.svg" alt="" />

                    </div>
                </div>
            </section>


        </>
    )
}