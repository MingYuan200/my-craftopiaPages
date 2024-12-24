import { Test } from "./Test";


export default function TestFather() {
    const currentDate = new Date(); // 獲取當前時間

    const cardsData = [
        {
            imgSrc: './images/classIMG.jpg',
            title: '聖誕禮物首選!皮革證件套組~適合初學者',
            dateTime: '2024-12-31T13:30:00', // 使用 ISO 格式存課程時間，方便比較
            attendees: '成人1位',
            classType: '證件卡夾',
            buttonText: '修改訂單',
        },
        {
            imgSrc: './images/classIMG.jpg',
            title: '聖誕禮物首選!皮革證件套組~適合初學者',
            dateTime: '2024-12-01T13:30:00', // 過去的日期，用來測試"已完成"
            attendees: '成人1位',
            classType: '證件卡夾',
            buttonText: '分享心得',
        },
    ];

    const updatedCardsData = cardsData.map((card) => {
        const cardDateTime = new Date(card.dateTime); // 將課程時間轉成 Date 對象
        const isFinished = cardDateTime < currentDate; // 比較課程時間和當前時間
        return {
            ...card,
            isFinished,
            stateTag: isFinished ? '已完成' : '即將到來', // 根據完成狀態動態設置
        };
    });

    return (
        <div className="reserve-cardsBox">
            {updatedCardsData.map((card, index) => (
                <Test key={index} {...card} />
            ))}
        </div>
    );
}
