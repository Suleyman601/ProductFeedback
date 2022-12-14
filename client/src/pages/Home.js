import { React, useState, useEffect } from "react";
import axios from "axios";
import suggestionsImg from "../assets/suggestions/icon-suggestions.svg";
import emptyImg from "../assets/suggestions/illustration-empty.svg";
import plusIcon from "../assets/shared/icon-plus.svg";
import Dashboard from "../components/Dashboard";
import Dropdown from "../components/Dropdown";
import Feedback from "../components/Feedback";
import { Link } from "react-router-dom";

const BaseURL = "http://localhost:5000/feedbacks";

const Home = () => {
  const [active, setActive] = useState(false);
  const [select, setselect] = useState("Most Upvotes");
  const [feedbackData, setfeedbackData] = useState([]);

  useEffect(() => {
    axios.get(BaseURL).then((res) => {
      setfeedbackData(res.data);
    });
  }, []);

  const selectChange = (e) => {
    setselect(e.currentTarget.firstChild.innerHTML);
    setActive(!active);
  };

  let feedbackTotal = feedbackData.length;
  return (
    <div className="flex flex-col">
      <div className="md:px-9 md:py-14 max-w-[1110px] lg:grid lg:grid-cols-4 lg:mx-auto gap-[30px] h-full">
        <Dashboard />
        <div className="lg:col-span-3 lg:self-start">
          <div className="bg-dark p-4 text-white flex justify-between mt-[60px] md:mt-10 md:rounded-xl  lg:mt-0">
            <div className="flex items-center gap-10">
              <div className="hidden md:flex">
                <img
                  src={suggestionsImg}
                  alt="Suggestions Icon"
                  className="mr-4"
                />
                <p className="mr-2">0</p>
                <p>Suggestions</p>
              </div>
              <Dropdown
                selectChange={selectChange}
                active={active}
                select={select}
                activeChange={setActive}
              />
            </div>
            <Link
              to="/add"
              className="bg-purple flex px-6 py-3 text-white text-xs font-bold items-center gap-1 rounded-lg"
            >
              <img src={plusIcon} alt="Plus Icon" />
              <p>Add Feedback</p>
            </Link>
          </div>
          {feedbackTotal < 1 ? (
            <div className="bg-white mx-6 mt-8 rounded-xl flex flex-col justify-center items-center text-center py-20 px-7 md:mx-0 md:px-40">
              <img
                className=" mb-11"
                src={emptyImg}
                width="102"
                alt="Empty feedback list"
              />
              <p className=" text-lg font-bold text-navyBlue mb-4">
                There is no feedback yet.
              </p>
              <p className=" mb-7 text-sm">
                Got a suggestion? Found a bug that needs to be squashed? We love
                hearing about new ideas to improve our app
              </p>
              <Link
                to="/add"
                className="bg-purple flex px-6 py-3 text-white text-xs font-bold items-center gap-1 rounded-lg"
              >
                <img src={plusIcon} alt="Plus Icon" />
                <p>Add Feedback</p>
              </Link>
            </div>
          ) : (
            <div className="px-6 pt-8 pb-14 flex flex-col gap-4 md:px-0 lg:col-start-2 lg:col-span-4 lg:self-start">
              {feedbackData.map((feedback, index) => {
                return (
                  <Feedback
                    title={feedback.title}
                    description={feedback.details}
                    tag={feedback.category}
                    upvotes="112"
                    comments="2"
                    key={index}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
