import { useRef, useState } from 'react';
import ShowQa from '../component/ShowQa'
import '../scss/qa.scss'
import Blob from "../assets/blob.svg";
import Blob2 from "../assets/blob2.svg";
import Blob3 from "../assets/blob3.svg";




export default function Qa() {

    const qaData = {
        member: [
            {
                id: 1,
                question: '如何註冊會員',
                ans: '透過信箱綁定，未來會支援手機綁定功能，可以追總我們保持關注。',
                isClicked: false,
            },
            {
                id: 2,
                question: '如何更改會員資料',
                ans: '請登入後至會員中心頁面修改。',
                isClicked: false,
            },
            {
                id: 3,
                question: '會員點數是什麼',
                ans: '是你花錢的證明，一種回饋石頭們的獎勵機制，鼓勵您持續投入創作熱情，未來有更多功能可以用點數解鎖，更加暢遊手作世界。是你花錢的證明，一種回饋石頭們的獎勵機制，鼓勵您持續投入創作熱情，未來有更多功能可以用點數解鎖，更加暢遊手作世界。',
                isClicked: false,
            },
            {
                id: 4,
                question: '如何獲得會員點數',
                ans: '可以透過報名課程、分享心得獲得。\n1.課程積點+20點\n2.分享心得+10點',
                isClicked: false,
            },
        ],
        class: [
            {
                id: 1,
                question: '如何報名課程',
                ans: '進入課程頁面，選擇課程進行報名',
                isClicked: false,
            },
            {
                id: 2,
                question: '課程是否有包含材料費用',
                ans: '依據每個課程會有不同的機制，可以詳閱每一堂課程的說明',
                isClicked: false,
            },
        ],
        reserve: [
            {
                id: 1,
                question: '預約後可以修改時間嗎',
                ans: '可以，需在課程上課日前三天修改，若該課程有額外的規定，請依課程內容為主。',
                isClicked: false,
            },
            {
                id: 2,
                question: '如何取消預約',
                ans: '請登入後至會員中心頁面，點擊愈取消的課程項目，若無該項目，可點擊【see all】按鈕查看完整的項目。可進行取消的時間與權力，依據該課程的店家規定，本平台並無強制規定，還請多加留意。',
                isClicked: false,
            },
        ],
    };
    

    // 一開始就要先渲染sctive1 所以要先在useState給值
    const [activeId, setActiveId] = useState('qaPart1');
    const refPart1 = useRef();
    const refPart2 = useRef();
    const refPart3 = useRef();

    const handleClick = (id, ref) => {
        setActiveId(id);
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* <!-- 主要內容區 --> */}
            <section id="banner">
                <div className="banner-mask"> </div>
            </section>


            <main>
                <div id="qa-content">
                    {/* 麵包穴 */}
                    <div className="bread">
                        <a href="#">首頁</a>
                        <img src="images/icon-tag/type=arrowRight_bold.svg" alt="" />
                        <a href="/qa">常見問題</a>
                    </div>

                    <div className="qa-contentBox">
                        <ul id="QA-left">
                            <div className="QaLeftSticky">
                                <li>
                                    <a className="left-list" href="#" 
                                    onClick={(e) => {
                                            e.preventDefault(); // 阻止預設行為
                                            handleClick('qaPart1', refPart1);
                                        }}>
                                        <Blob className={`leftIcon  ${activeId === 'qaPart1' ? 'active' : ''}`}></Blob>
                                        會員相關
                                    </a>
                                </li>
                                <li>
                                    <a className="left-list" href="#" 
                                    onClick={(e) => {
                                        e.preventDefault(); // 阻止預設行為
                                        handleClick('qaPart2', refPart2);
                                    }}>
                                        <Blob2 className={`leftIcon ${activeId === 'qaPart2' ? 'active' : ''}`}></Blob2>
                                        課程相關
                                    </a>
                                </li>
                                <li>
                                    <a className="left-list" href="#" 
                                    onClick={(e) => {
                                        e.preventDefault(); // 阻止預設行為
                                        handleClick('qaPart3', refPart3);
                                    }}>
                                        <Blob3 className={`leftIcon ${activeId === 'qaPart3' ? 'active' : ''}`}></Blob3>
                                        預約相關
                                    </a>
                                </li>
                            </div>

                        </ul>

                        <div id="QA-right">
                            <section id='qaPart1' ref={refPart1} data-aos='fade-up' data-aos-duration='800'>
                                <h2 className="title">
                                    <img src="./images/title/會員相關.svg" alt="" />
                                </h2>
                                <ul className="list">
                                    <ShowQa data={qaData.member}/>
                                </ul>
                            </section>

                            <section id='qaPart2' ref={refPart2} data-aos='fade-up' data-aos-duration='800'>
                                <h2 className="title">
                                    <img src="./images/title/課程相關.svg" alt="" />
                                </h2>
                                <ul className="list">
                                    <ShowQa data={qaData.class}/>
                                </ul>
                            </section>

                            <section id='qaPart3' ref={refPart3} data-aos='fade-up' data-aos-duration='800'>
                                <h2 className="title">
                                    <img src="./images/title/預約相關.svg" alt="" />
                                </h2>
                                <ul className="list">
                                    <ShowQa data={qaData.reserve}/>
                                </ul>
                            </section>

                        </div>
                    </div>
                </div>
            </main>

            {/* 頁尾區 */}
            <footer>
                <div className="footer-bgDeco">
                    <img src="./images/footer-deco.png" alt="" />
                </div>
                <div className="foot-content">
                    <img src="./images/footer-logo.svg" alt="" />
                    {/* 選單*/}
                    <ul className="menu">
                        <li><a href="">首頁</a></li>
                        <li>
                            <a href="">發掘店家</a>
                            <ul>
                                <li><a href="">金工</a></li>
                                <li><a href="">陶藝</a></li>
                                <li><a href="">皮革</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">預約課程</a>
                            <ul>
                                <li><a href="">熱門課程</a></li>
                                <li><a href="">最新課程</a></li>
                            </ul>
                        </li>
                        {/* <li>
                            <a href="">商城</a>
                            <ul>
                                <li><a href="">商城</a></li>
                            </ul>
                        </li> */}
                        <li>
                            <a href="">會員中心</a>
                            <ul>
                                <li><a href="">會員資料</a></li>
                                <li><a href="">預約紀錄</a></li>
                                <li><a href="">收藏紀錄</a></li>
                                <li><a href="">我的分享</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="">常見問題</a>
                            <ul>
                                <li><a href="">會員相關</a></li>
                                <li><a href="">預約相關</a></li>
                                <li><a href="">課程相關</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <small> Copyright© 2024 CRAFTOPIA All rights reserved. </small>
            </footer>

        </>
    )
}