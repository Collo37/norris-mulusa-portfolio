import "styles/historyWidgetStyles.css";

const HistoryWidget = ({details, year}) => {
  return (
    <div className="history-widget-container">
        <p className="history-widget-details">{details}</p>
        <div className="history-widget-pointer">
            <div className="history-widget-line"></div>
            <div className="history-widget-year">{year}</div>
        </div>
    </div>
  )
}

export default HistoryWidget