import React, { useState, useEffect } from "react";
import Head from "next/head";

("use client");

// Helper function to calculate remaining time
const calculateTimeLeft = (targetDate) => {
  const now = new Date();
  const difference = +targetDate - +now;

  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const ComingSoon = (props) => {
  const targetDate = new Date("2024-11-01T00:00:00"); // Set your target date here
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <>
      <div className="coming-soon-container1">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta charSet="utf-8"></meta>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="./favicon.ico" />
          <meta property="twitter:card" content="summary_large_image"></meta>
          <title>SparkXplorer</title>
        </Head>
        <div className="coming-soon-coming-soon">
          <div className="coming-soon-frame1321314553">
            <div className="coming-soon-frame1321314586">
              <div className="coming-soon-frame1321314584">
                <div className="coming-soon-frame1321314577">
                  <img
                    src="/external/ellipse129703-hww-200h.png"
                    alt="Ellipse129703"
                    className="coming-soon-ellipse121"
                  />
                  <span className="coming-soon-text10">
                    <span>Days</span>
                  </span>
                  <span className="coming-soon-text12">
                    <span>{timeLeft.days}</span>
                  </span>
                </div>
                <div className="coming-soon-frame1321314578">
                  <img
                    src="/external/ellipse129703-3ltv-200h.png"
                    alt="Ellipse129703"
                    className="coming-soon-ellipse122"
                  />
                  <span className="coming-soon-text14">
                    <span>Hours</span>
                  </span>
                  <span className="coming-soon-text16">{timeLeft.hours}</span>
                </div>
                <span className="coming-soon-text17">:</span>
                <span className="coming-soon-text18">:</span>
                <span className="coming-soon-text19">:</span>
                <div className="coming-soon-frame1321314579">
                  <img
                    src="/external/ellipse129703-wi1f-200h.png"
                    alt="Ellipse129703"
                    className="coming-soon-ellipse123"
                  />
                  <span className="coming-soon-text20">
                    <span>Minutes</span>
                  </span>
                  <span className="coming-soon-text22">
                    <span>{timeLeft.minutes}</span>
                  </span>
                </div>
              </div>
              <div className="coming-soon-frame1321314583">
                <img
                  src="/external/ellipse129703-up7-200h.png"
                  alt="Ellipse129703"
                  className="coming-soon-ellipse124"
                />
                <span className="coming-soon-text24">
                  <span>Seconds</span>
                </span>
                <span className="coming-soon-text26">
                  <span>{timeLeft.seconds}</span>
                </span>
              </div>
            </div>
            <div className="coming-soon-frame1321314585">
              <img
                src="/external/image281719703-8fji-2300w.png"
                alt="IMAGE281719703"
                className="coming-soon-image28171"
              />
              <span className="coming-soon-text28">
                <span>
                  Get Ready to Explore New
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Academic Heights with
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Spark Xplorer
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
              </span>
              <img
                src="/external/sparkxplorerbrandguilines19673-jb2p-200h.png"
                alt="SparkXplorerBrandGuilines19673"
                className="coming-soon-spark-xplorer-brand-guilines1"
              />
              <span className="coming-soon-text34">
                <img
                  src="/coming.svg"
                  alt="Vector9674"
                  className="coming-vector"
                />
              </span>
              <div className="coming-soon-frame1321314588">
                <div className="coming-soon-frame1321314589">
                  <div className="coming-soon-container2">
                    <img
                      src="/external/image31012-rgqe-200h.png"
                      alt="image31012"
                      className="coming-soon-image3"
                    />
                    <div className="coming-soon-textlabel1">
                      <span className="coming-soon-text36">
                        <span>After-School Practice</span>
                      </span>
                    </div>
                    <span className="coming-soon-text38">
                      <span>
                        Overview of how students engage with the Spark Xplorers
                        platform for daily practice using IXL.com, with
                        continuous tracking of their performance and progress.
                      </span>
                    </span>
                  </div>
                  <div className="coming-soon-container3">
                    <img
                      src="/external/image41012-gzx-200h.png"
                      alt="image41012"
                      className="coming-soon-image41"
                    />
                    <div className="coming-soon-textlabel2">
                      <span className="coming-soon-text40">
                        <span>Tutoring Services</span>
                      </span>
                    </div>
                    <span className="coming-soon-text42">
                      <span>
                        Detailed description of the on-demand tutoring through
                        Tutor.com, with benefits like 24/7 access, wide subject
                        variety, and expert tutoring in core subjects.
                      </span>
                    </span>
                  </div>
                  <div className="coming-soon-container4">
                    <img
                      src="/external/image41012-i7gv-200h.png"
                      alt="image41012"
                      className="coming-soon-image42"
                    />
                    <div className="coming-soon-textlabel3">
                      <span className="coming-soon-text44">
                        <span>Test Prep and Assessment Skill Plans</span>
                      </span>
                    </div>
                    <span className="coming-soon-text46">
                      <span>
                        Spark Xplorers offers preparation tutorials for a
                        variety of tests
                      </span>
                    </span>
                  </div>
                  <div className="coming-soon-container5">
                    <img
                      src="/external/image51012-46zc-200h.png"
                      alt="image51012"
                      className="coming-soon-image5"
                    />
                    <div className="coming-soon-textlabel4">
                      <span className="coming-soon-text48">
                        <span>Learning Pathways</span>
                      </span>
                    </div>
                    <span className="coming-soon-text50">
                      <span>
                        Explanation of how personalized learning plans are
                        developed based on individual student progress, ensuring
                        they stay on track and reach their academic goals.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <span className="coming-soon-text52">
              <span>Our countdown is on.</span>
              <br></br>
              <span>Join us in the countdown to success!</span>
            </span>
            <div className="coming-soon-frame1321314587">
              <div className="coming-soon-group4">
                <img
                  src="/external/untitled11001-skt-200h.png"
                  alt="Untitled11001"
                  className="coming-soon-untitled1"
                />
                <img
                  src="/external/untitled21001-2tka-200h.png"
                  alt="Untitled21001"
                  className="coming-soon-untitled2"
                />
                <img
                  src="/external/untitled31001-ewco-200h.png"
                  alt="Untitled31001"
                  className="coming-soon-untitled3"
                />
                <img
                  src="/external/untitled51043-1c4e-200h.png"
                  alt="Untitled51043"
                  className="coming-soon-untitled5"
                />
              </div>
            </div>
          </div>
          <div className="coming-soon-layerx00201">
            <img
              src="/external/vector9673-t3st.svg"
              alt="Vector9673"
              className="coming-soon-vector"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .coming-soon-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .coming-soon-coming-soon {
            width: 100%;
            height: 1121px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(79, 70, 229, 1);
          }
          .coming-soon-frame1321314553 {
            top: 0px;
            left: 0px;
            width: 1728px;
            height: 1121px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(79, 70, 229, 1);
          }
          .coming-soon-frame1321314586 {
            top: 446px;
            left: 975px;
            width: 671px;
            height: 216.8091278076172px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .coming-soon-frame1321314584 {
            top: 0px;
            left: 0px;
            width: 525px;
            height: 148px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .coming-soon-frame1321314577 {
            top: 0px;
            left: 0px;
            width: 128px;
            height: 148px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .coming-soon-ellipse121 {
            top: 0px;
            left: 0px;
            width: 128px;
            height: 124px;
            position: absolute;
            border-color: rgba(224, 231, 255, 1);
            border-style: solid;
            border-width: 13px;
          }
          .coming-soon-text10 {
            top: 129px;
            left: 9px;
            color: rgba(255, 255, 255, 1);
            width: 109px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Bold;
            text-align: center;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .coming-soon-text12 {
            top: 37px;
            left: 18px;
            color: rgba(255, 255, 255, 1);
            width: 92px;
            height: auto;
            position: absolute;
            font-size: 48px;
            font-style: Bold;
            text-align: center;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .coming-soon-frame1321314578 {
            top: 0px;
            left: 181px;
            width: 128px;
            height: 148px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .coming-soon-ellipse122 {
            top: 0px;
            left: 0px;
            width: 128px;
            height: 124px;
            position: absolute;
            border-color: rgba(224, 231, 255, 1);
            border-style: solid;
            border-width: 13px;
          }
          .coming-soon-text14 {
            top: 129px;
            left: 9px;
            color: rgba(255, 255, 255, 1);
            width: 109px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Bold;
            text-align: center;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .coming-soon-text16 {
            top: 37px;
            left: 18px;
            color: rgba(255, 255, 255, 1);
            width: 92px;
            height: auto;
            position: absolute;
            font-size: 48px;
            font-style: Bold;
            text-align: center;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .coming-soon-text17 {
            top: 25px;
            left: 146px;
            color: rgba(255, 255, 255, 1);
            width: 17px;
            height: auto;
            position: absolute;
            font-size: 48px;
            font-style: Bold;
            text-align: center;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .coming-soon-text18 {
            top: 25px;
            left: 327px;
            color: rgba(255, 255, 255, 1);
            width: 17px;
            height: auto;
            position: absolute;
            font-size: 48px;
            font-style: Bold;
            text-align: center;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .coming-soon-text19 {
            top: 25px;
            left: 508px;
            color: rgba(255, 255, 255, 1);
            width: 17px;
            height: auto;
            position: absolute;
            font-size: 48px;
            font-style: Bold;
            text-align: center;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .coming-soon-frame1321314579 {
            top: 0px;
            left: 362px;
            width: 128px;
            height: 148px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .coming-soon-ellipse123 {
            top: 0px;
            left: 0px;
            width: 128px;
            height: 124px;
            position: absolute;
            border-color: rgba(224, 231, 255, 1);
            border-style: solid;
            border-width: 13px;
          }
          .coming-soon-text20 {
            top: 129px;
            left: 9px;
            color: rgba(255, 255, 255, 1);
            width: 109px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Bold;
            text-align: center;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .coming-soon-text22 {
            top: 37px;
            left: 18px;
            color: rgba(255, 255, 255, 1);
            width: 92px;
            height: auto;
            position: absolute;
            font-size: 48px;
            font-style: Bold;
            text-align: center;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .coming-soon-frame1321314583 {
            top: 0px;
            left: 543px;
            width: 128px;
            height: 216.8091278076172px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .coming-soon-ellipse124 {
            top: 0px;
            left: 0px;
            width: 128px;
            height: 124px;
            position: absolute;
            border-color: rgba(224, 231, 255, 1);
            border-style: solid;
            border-width: 13px;
          }
          .coming-soon-text24 {
            top: 129px;
            left: 9px;
            color: rgba(255, 255, 255, 1);
            width: 109px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Bold;
            text-align: center;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .coming-soon-text26 {
            top: 37px;
            left: 18px;
            color: rgba(255, 255, 255, 1);
            width: 92px;
            height: auto;
            position: absolute;
            font-size: 48px;
            font-style: Bold;
            text-align: center;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .coming-soon-frame1321314585 {
            top: 0px;
            left: 0px;
            width: 882px;
            height: 1121px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .coming-soon-image28171 {
            width: 2223.093017578125px;
            height: 1245.9661865234375px;
            object-fit: cover;
          }
          .coming-soon-text28 {
            top: 470px;
            left: 96px;
            color: rgba(79, 70, 229, 1);
            width: 690px;
            height: auto;
            position: absolute;
            font-size: 48px;
            font-style: ExtraBold;
            text-align: center;
            font-family: Plus Jakarta Sans;
            font-weight: 800;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .coming-soon-spark-xplorer-brand-guilines1 {
            top: 196px;
            left: 289px;
            width: 304px;
            height: 106px;
            position: absolute;
          }
          .coming-soon-text34 {
            font-family: "Plus Jakarta Sans";
            font-weight: 800;
            font-size: 64px;
            letter-spacing: 3.8125em;
            line-height: normal;
            text-align: center;
            text-transform: uppercase;
            color: #263238;
          }
          .coming-soon-frame1321314588 {
            top: 693px;
            left: 0px;
            width: 882px;
            height: 428px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .coming-soon-frame1321314589 {
            top: 22px;
            left: 92px;
            width: 697px;
            height: 383.0323486328125px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .coming-soon-container2 {
            gap: -1px;
            top: 12px;
            left: 17px;
            width: 315px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .coming-soon-image3 {
            width: 71px;
            height: 66px;
          }
          .coming-soon-textlabel1 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .coming-soon-text36 {
            color: rgba(13, 18, 22, 1);
            height: auto;
            font-size: 16px;
            font-style: ExtraBold;
            text-align: left;
            font-family: Plus Jakarta Sans;
            font-weight: 800;
            line-height: 32px;
            font-stretch: normal;
            text-decoration: none;
          }
          .coming-soon-text38 {
            color: rgba(49, 60, 68, 1);
            width: 315px;
            height: auto;
            font-size: 13px;
            font-style: Medium;
            text-align: left;
            font-family: Quicksand;
            font-weight: 500;
            line-height: 19px;
            font-stretch: normal;
            text-decoration: none;
          }
          .coming-soon-container3 {
            top: 0px;
            left: 382px;
            width: 315px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .coming-soon-image41 {
            width: 68px;
            height: 65px;
          }
          .coming-soon-textlabel2 {
            gap: -42px;
            display: flex;
            align-items: center;
          }
          .coming-soon-text40 {
            color: rgba(13, 18, 22, 1);
            height: auto;
            font-size: 16px;
            font-style: ExtraBold;
            text-align: left;
            font-family: Plus Jakarta Sans;
            font-weight: 800;
            line-height: 32px;
            font-stretch: normal;
            text-decoration: none;
          }
          .coming-soon-text42 {
            color: rgba(49, 60, 68, 1);
            width: 318px;
            height: auto;
            font-size: 13px;
            font-style: Medium;
            text-align: left;
            font-family: Quicksand;
            font-weight: 500;
            line-height: 19px;
            font-stretch: normal;
            text-decoration: none;
          }
          .coming-soon-container4 {
            gap: -1px;
            top: 199px;
            left: 17px;
            width: 315px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .coming-soon-image42 {
            width: 70px;
            height: 67px;
          }
          .coming-soon-textlabel3 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .coming-soon-text44 {
            color: rgba(13, 18, 22, 1);
            width: 293px;
            height: auto;
            font-size: 16px;
            font-style: ExtraBold;
            text-align: left;
            font-family: Plus Jakarta Sans;
            font-weight: 800;
            line-height: 32px;
            font-stretch: normal;
            text-decoration: none;
          }
          .coming-soon-text46 {
            color: rgba(49, 60, 68, 1);
            width: 318px;
            height: auto;
            font-size: 13px;
            font-style: Medium;
            text-align: left;
            font-family: Quicksand;
            font-weight: 500;
            line-height: 19px;
            font-stretch: normal;
            text-decoration: none;
          }
          .coming-soon-container5 {
            gap: -1px;
            top: 199px;
            left: 382px;
            width: 315px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .coming-soon-image5 {
            width: 68px;
            height: 65px;
          }
          .coming-soon-textlabel4 {
            gap: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .coming-soon-text48 {
            color: rgba(13, 18, 22, 1);
            height: auto;
            font-size: 16px;
            font-style: ExtraBold;
            text-align: left;
            font-family: Plus Jakarta Sans;
            font-weight: 800;
            line-height: 32px;
            font-stretch: normal;
            text-decoration: none;
          }
          .coming-soon-text50 {
            color: rgba(49, 60, 68, 1);
            width: 315px;
            height: auto;
            font-size: 13px;
            font-style: Medium;
            text-align: left;
            font-family: Quicksand;
            font-weight: 500;
            line-height: 19px;
            font-stretch: normal;
            text-decoration: none;
          }
          .coming-soon-text52 {
            top: 906px;
            left: 940px;
            color: rgba(255, 255, 255, 1);
            width: 707px;
            height: auto;
            position: absolute;
            font-size: 24px;
            font-style: Bold;
            text-align: center;
            font-family: Plus Jakarta Sans;
            font-weight: 700;
            line-height: 125.99999904632568%;
            font-stretch: normal;
            text-decoration: none;
          }
          .coming-soon-frame1321314587 {
            top: 996px;
            left: 882px;
            width: 846px;
            height: 125px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .coming-soon-group4 {
            top: 25px;
            left: 50px;
            width: 746px;
            height: 74px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .coming-soon-untitled1 {
            top: 5px;
            left: 0px;
            width: 152px;
            height: 69px;
            position: absolute;
          }
          .coming-soon-untitled2 {
            top: 0px;
            left: 540px;
            width: 206px;
            height: 74px;
            position: absolute;
          }
          .coming-soon-untitled3 {
            top: 0px;
            left: 187px;
            width: 74px;
            height: 74px;
            position: absolute;
          }
          .coming-soon-untitled5 {
            top: 2px;
            left: 296px;
            width: 209px;
            height: 70px;
            position: absolute;
          }
          .coming-soon-layerx00201 {
            top: -97px;
            left: 722px;
            width: 1104px;
            height: 1333.3175048828125px;
            display: flex;
            opacity: 0.2;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .coming-soon-vector {
            top: 0px;
            left: 0px;
            width: 1104px;
            height: 1333px;
            opacity: 0.3;
            position: absolute;
            box-shadow: -18px 12px 4px 0px rgba(0, 0, 0, 0.25);
          }
        `}
      </style>
    </>
  );
};

export default ComingSoon;
