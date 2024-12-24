
export function Test({ imgSrc, stateTag, title, dateTime, attendees, classType, isFinished, buttonText }) {
    return (
        <div className={`reserve-row ${isFinished ? 'finish' : ''}`}>
            <div className="rowIMG">
                <img src={imgSrc} alt={title} />
            </div>
            <div className="reserve-content">
                <div className="txt">
                    <p className="tag-state">{stateTag}</p>
                    <h3>{title}</h3>
                    <p>課程時間：{new Date(dateTime).toLocaleString('zh-TW', { dateStyle: 'short', timeStyle: 'short' })}。{attendees}</p>
                    <p className="class-item">課程內容：{classType}</p>
                </div>
                <button className="btn-reserve">{buttonText}</button>
            </div>
        </div>
    );
}
