import Title from "components/Title";
import HistoryWidget from "./HistoryWidget";

import "styles/historyStyles.css";

const History = () => {
  const workHistory = [
    {
      year: 2022,
      details: "Lecturer at Fleming Tech Institute"
    },
    {
      year: 2020,
      details: "Radio presenter at VBN Radio"
    },
    {
      year: 2020,
      details: "Digital marketing and Communication strategist at Mwatate United FC"
    },
    {
      year: 2020,
      details: "Digital marketing and Communication strategist at Tawhiid Muslim High School"
    },
    {
      year: 2020,
      details: "Digital marketing and Communication strategist at Bigspoon Investment Limited"
    },
    {
      year: 2017,
      details: "Radio presenter and Sports editor at Radio Salam"
    },
    {
      year: 2017,
      details: "Stand-up comedian at Churchill Show"
    },
    {
      year: 2017,
      details: "CEO and host at Pwani Laughs comedy show"
    },
    {
      year: 2017,
      details: "Student at Technical University of Mombasa"
    },
    {
      year: 2016,
      details: "Actor at Jameni Show KTN"
    },
    {
      year: 2015,
      details: "Radio presenter Bibilia Husema Radio"
    },
    {
      year: 2014,
      details: "Student at Elgon View College"
    },
    {
      year: 2013,
      details: "Student at Kivagala High School"
    }
  ]
  return (
    <div className="history-container">
        <Title value="History" />
       <div className="history-title">
           <h3>Work History</h3>
       </div>
       <div className="history">
         {workHistory.map((work, index) => {
           return <HistoryWidget key={index} details={work.details} year={work.year} />
         })}
       </div>
    </div>
  )
}

export default History