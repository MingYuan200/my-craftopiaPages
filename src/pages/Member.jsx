import ChangePassword from '../component/ChangePassword'
import MemeberInfo from '../component/MemberInfo'
import '../scss/member.scss'
import Blob4 from "../assets/blob4.svg";
import Blob5 from "../assets/blob5.svg";
import ReserveCardsBox from '../component/ReserveCardsBox';
import SeeMore from '../component/SeeMore';
import MyShareBox from '../component/MyShareBox';
import ToTop from '../component/ToTop';
import ClassCardLatest from '../component/ClassCardLatest';

export default function Member() {
    const BASE_URL = import.meta.env.BASE_URL;

    //至頂按鈕樣式
    const initialStyle = {
        position: "fixed",
        bottom: "20px",
        right: "10px",
    };

   

    return (
        <>
            <main id='memberArea'>


                {/* 泡泡區 */}
                <div className="bg-blob">
                    <img className='infoBlob1' src={BASE_URL + "images/blob-3.svg"} alt="" />
                    <img className='infoBlob2' src={BASE_URL + "images/blob-4.svg"} alt="" />
                    <img className='infoBlob3' src={BASE_URL + "images/blob-5.svg"} alt="" />


                    <Blob5 className='infoBlob1 left-red' />
                    <Blob4 className='infoBlob2 left-white' />
                    <Blob4 className='right-yelllow' />
                    <Blob4 className='right-brown' />
                </div>

                {/* 會員資料區 */}
                <section id="member">
                    <div className="memberWrap">
                        {/* 會員簡歷 */}
                        <div className="resume">
                            <div className="avatarBox">
                                <div className="avatar">
                                    <div className="ava-photo">
                                        <img src={BASE_URL + "images/avatar/24-02.jpg"} alt="" />
                                    </div>
                                    <div className="camera">
                                        <img src={BASE_URL + "images/icon-tag/type=camera.svg"} alt="" />
                                    </div>
                                </div>

                                <div className="name-default">
                                    <p>阿明</p>
                                    <img className="icon-edit" src={BASE_URL + "images/icon-tag/type=edit.svg"} alt="" />
                                </div>
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
                        <div className="memberInformation">

                            {/* 會員基本資料 */}
                            <MemeberInfo />

                            {/* 修改密碼  */}
                            <ChangePassword />

                        </div>
                    </div>
                </section>

                {/* 預約記錄區 */}
                <section id="reserve" data-aos='fade-up' data-aos-duration='800'>
                    <div className="title">
                        <h2>
                            <img src={BASE_URL + "images/title/reserveTitle.svg"} alt="" />
                        </h2>
                    </div>
                    {/* 列表區 */}
                    <ReserveCardsBox />

                    {/* 看全部按鈕 */}
                    <div className="btn-area">

                        <SeeMore text={'See All'} imgBall={"./images/seeAll-dot.svg"} href={"/member"} />

                    </div>
                </section>

                {/* 收藏區 */}
                <section id="memberLike" data-aos='fade-up' data-aos-duration='800'>
                    <div className="title">
                        <h2><img src={BASE_URL + "images/title/likeTitle.svg"} alt="" /></h2>
                    </div>
                    {/* 卡片區 */}
                    <div className="card-area">
                        <ClassCardLatest />

                    </div>


                    {/* 看全部按鈕 */}
                    <div className="btn-area">

                        <SeeMore text={'See All'} imgBall={"./images/seeAll-dot.svg"} href={"/member"} />

                    </div>
                </section>

                {/* 心得區 */}
                <section id="experience" data-aos='fade-up' data-aos-duration='800'>
                    <div className="expWrapper">
                        <div className="expTitle">
                            <img className='expHeader' src="./images/title/myShare.svg" alt="" />
                            <div className="btn-area">

                                <SeeMore text={'See All'} imgBall={"./images/seeAll-dot.svg"} href={"/member"} />

                            </div>
                        </div>

                        <MyShareBox />

                    </div>

                    {/* blob裝飾 */}
                    <div className="bg-blob">
                        <img className='expBlob2' src="./images/expBlob-2.svg" alt="" />
                        <img className='expBlob3' src="./images/expBlob-3.svg" alt="" />
                    </div>
                </section>

            </main>

            {/* TO TOp */}
            <ToTop initialStyle={initialStyle} />

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