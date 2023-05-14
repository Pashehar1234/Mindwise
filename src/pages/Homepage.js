import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Homepage.module.css";
const Homepage = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/our-services");
  }, [navigate]);

  const onGetInvolvedTextClick = useCallback(() => {
    navigate("/get-involved");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/self-assessment");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onGroupContainer11Click = useCallback(() => {
    navigate("/explore");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/explore");
  }, [navigate]);

  const onGroupContainer26Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/self-assessment");
  }, [navigate]);

  const onGroupContainer48Click = useCallback(() => {
    navigate("/our-services");
  }, [navigate]);

  return (
    <div className={styles.homepage}>
      <div className={styles.groupParent}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupWrapper}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.donate}>Donate</div>
            </div>
            <div
              className={styles.ourServicesParent}
              onClick={onGroupContainer1Click}
            >
              <div className={styles.ourServices}>Our Services</div>
              <img className={styles.vectorIcon} alt="" src="/vector10.svg" />
            </div>
            <div className={styles.getInvolvedParent}>
              <div
                className={styles.getInvolved}
                onClick={onGetInvolvedTextClick}
              >
                Get Involved
              </div>
              <img className={styles.vectorIcon1} alt="" src="/vector10.svg" />
            </div>
            <div
              className={styles.selfAssessmentParent}
              onClick={onGroupContainer3Click}
            >
              <div className={styles.selfAssessment}>Self Assessment</div>
              <img className={styles.vectorIcon2} alt="" src="/vector11.svg" />
            </div>
            <div className={styles.aboutUsParent}>
              <div className={styles.aboutUs} onClick={onAboutUsTextClick}>
                About Us
              </div>
              <img className={styles.vectorIcon3} alt="" src="/vector8.svg" />
            </div>
            <div className={styles.homepageParent}>
              <div className={styles.homepage1}>Homepage</div>
              <img className={styles.vectorIcon4} alt="" src="/vector8.svg" />
            </div>
            <div className={styles.groupItem} />
          </div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.image7Wrapper}>
            <img className={styles.image7Icon} alt="" src="/image-71@2x.png" />
          </div>
          <div className={styles.takeControlOfYourThoughtsWrapper}>
            <div className={styles.takeControlOfContainer}>
              <p
                className={styles.takeControlOf}
              >{`Take control of your thoughts and emotions to achieve a happier life. `}</p>
              <p className={styles.takeControlOf}>&nbsp;</p>
              <p className={styles.takeControlOf}>
                Cultivate a positive mindset and gain the confidence to pursue
                your dreams. Embracing self-care and practising mindfulness can
                help you feel more empowered. Invest in your mental health and
                watch as your life flourishes before your eyes
              </p>
            </div>
          </div>
          <div className={styles.empowerYourMindElevateYouParent}>
            <div className={styles.empowerYourMind}>
              Empower Your Mind, Elevate Your Life
            </div>
            <div className={styles.groupInner} />
          </div>
          <div
            className={styles.rectangleGroup}
            onClick={onGroupContainer11Click}
          >
            <div className={styles.rectangleDiv} onClick={onRectangle1Click} />
            <div className={styles.learnMore}>Learn More</div>
          </div>
        </div>
      </div>
      <div className={styles.groupParent1}>
        <div className={styles.aboutUsGroup}>
          <div className={styles.aboutUs1}>About Us</div>
          <div className={styles.companyNameIsAServiceComParent}>
            <div className={styles.companyNameIs}>
              [company name] is a service company engaged in mental health
              consulting
            </div>
            <div className={styles.ourMissionIs}>
              Our mission is to provide accessible and reliable resources that
              promote mental wellness, support those struggling with mental
              health concerns, and help reduce stigma surrounding mental
              illness.
            </div>
          </div>
        </div>
        <div className={styles.groupParent2}>
          <img className={styles.groupIcon} alt="" src="/group-15.svg" />
          <div className={styles.groupFrame}>
            <div className={styles.rectangleContainer}>
              <div className={styles.groupChild1} />
              <div className={styles.vectorParent}>
                <img
                  className={styles.vectorIcon5}
                  alt=""
                  src="/vector12.svg"
                />
                <div className={styles.yourPresentCircumstancesContainer}>
                  <p className={styles.takeControlOf}>
                    Your present circumstances don't determine where you can go;
                    they merely determine where you start.
                  </p>
                  <p className={styles.takeControlOf}>&nbsp;</p>
                  <p className={styles.takeControlOf}>- Nido Qubein</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.groupParent3}>
          <div className={styles.vectorGroup}>
            <img className={styles.vectorIcon6} alt="" src="/vector13.svg" />
            <div className={styles.depressionDetectionTest}>
              Depression Detection Test
            </div>
          </div>
          <div className={styles.vectorContainer}>
            <img className={styles.vectorIcon7} alt="" src="/vector13.svg" />
            <div className={styles.depressionDetectionTest}>
              Mental Health Resources
            </div>
          </div>
          <div className={styles.vectorParent1}>
            <img className={styles.vectorIcon8} alt="" src="/vector13.svg" />
            <div className={styles.depressionDetectionTest}>
              Professional Support
            </div>
          </div>
          <div className={styles.vectorParent2}>
            <img className={styles.vectorIcon9} alt="" src="/vector13.svg" />
            <div className={styles.depressionDetectionTest}>
              Community Support
            </div>
          </div>
          <div className={styles.vectorParent3}>
            <img className={styles.vectorIcon10} alt="" src="/vector13.svg" />
            <div className={styles.depressionDetectionTest}>
              Self-Help Tools
            </div>
          </div>
        </div>
        <div
          className={styles.rectangleParent1}
          onClick={onGroupContainer26Click}
        >
          <div className={styles.groupChild2} />
          <div className={styles.learnMore}>Learn More</div>
        </div>
      </div>
      <div className={styles.groupParent4}>
        <div className={styles.groupParent5}>
          <div className={styles.vectorParent4}>
            <img className={styles.vectorIcon11} alt="" src="/vector13.svg" />
            <div className={styles.depressionDetectionTest}>
              Beck Depression Inventory (BDI-II)
            </div>
          </div>
          <div className={styles.vectorParent5}>
            <img className={styles.vectorIcon12} alt="" src="/vector13.svg" />
            <div className={styles.depressionDetectionTest}>
              Patient Health Questionnaire (PHQ-9)
            </div>
          </div>
          <div className={styles.vectorParent6}>
            <img className={styles.vectorIcon13} alt="" src="/vector13.svg" />
            <div className={styles.depressionDetectionTest}>
              Generalized Anxiety Disorder 7-item (GAD-7) scale
            </div>
          </div>
          <div className={styles.vectorParent7}>
            <img className={styles.vectorIcon14} alt="" src="/vector13.svg" />
            <div className={styles.depressionDetectionTest}>
              The Mood Disorder Questionnaire (MDQ)
            </div>
          </div>
          <div className={styles.vectorParent8}>
            <img className={styles.vectorIcon15} alt="" src="/vector13.svg" />
            <div className={styles.depressionDetectionTest}>
              The Young Mania Rating Scale (YMRS)
            </div>
          </div>
        </div>
        <img className={styles.image8Icon} alt="" src="/image-81@2x.png" />
        <div className={styles.selfAssessmentGroup}>
          <div className={styles.selfAssessment1}>Self Assessment</div>
          <div className={styles.aCollectionOfFreeOnlineTeParent}>
            <div className={styles.aCollectionOf}>
              A Collection of free Online Tests for you, let’s try it now
            </div>
            <div className={styles.thisTestCan}>
              This Test can measure the level of stress in you. The result of
              this test will greatly help you determine the state of your
              current mental health. Some of the test are listed below:
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.rectangleDiv} onClick={onRectangle4Click} />
          <div className={styles.learnMore}>Learn More</div>
        </div>
      </div>
      <div className={styles.groupParent6}>
        <div className={styles.image9Parent}>
          <img className={styles.image9Icon} alt="" src="/image-91@2x.png" />
          <div className={styles.rectangleParent3}>
            <div className={styles.groupChild4} />
            <div className={styles.groupChild5} />
            <div className={styles.groupChild6} />
            <div className={styles.groupChild7} />
            <div className={styles.groupChild8} />
          </div>
          <div className={styles.rectangleParent4}>
            <div className={styles.groupChild9} />
            <div className={styles.groupChild10} />
            <div className={styles.groupChild11} />
            <div className={styles.groupChild12} />
          </div>
        </div>
        <div className={styles.ourServicesGroup}>
          <div className={styles.ourServices1}>Our Services</div>
          <div className={styles.notOnlyConsultationSeeOurParent}>
            <div className={styles.notOnlyConsultation}>
              Not Only Consultation, See Our Services That Can Help You
            </div>
            <div className={styles.lifeIsFull}>
              Life is full of things, sometimes it feels as if you are trapped
              in a tight space that barely gives you the freedom to move here
              and there.
            </div>
          </div>
        </div>
        <div className={styles.groupParent7}>
          <div className={styles.vectorParent9}>
            <img className={styles.vectorIcon16} alt="" src="/vector13.svg" />
            <div className={styles.depressionDetectionTest}>Mentoring</div>
          </div>
          <div className={styles.vectorParent10}>
            <img className={styles.vectorIcon17} alt="" src="/vector13.svg" />
            <div className={styles.depressionDetectionTest}>Counselling</div>
          </div>
          <div className={styles.vectorParent11}>
            <img className={styles.vectorIcon18} alt="" src="/vector13.svg" />
            <div className={styles.depressionDetectionTest}>Online Classes</div>
          </div>
          <div className={styles.vectorParent12}>
            <img className={styles.vectorIcon19} alt="" src="/vector13.svg" />
            <div className={styles.depressionDetectionTest}>Webinar</div>
          </div>
        </div>
        <div
          className={styles.rectangleParent5}
          onClick={onGroupContainer48Click}
        >
          <div className={styles.groupChild2} />
          <div className={styles.learnMore}>Learn More</div>
        </div>
      </div>
      <div className={styles.toBeHeardIsToBeValidatedParent}>
        <div className={styles.toBeHeard}>
          To be heard is to be validated. To be validated is to feel understood.
          To be understood is to know you're not alone.
        </div>
        <img className={styles.vectorIcon20} alt="" src="/vector14.svg" />
        <img className={styles.vectorIcon21} alt="" src="/vector15.svg" />
      </div>
      <div className={styles.rectangleParent6}>
        <div className={styles.groupChild14} />
        <div className={styles.servicesParent}>
          <div className={styles.services}>Services</div>
          <div className={styles.mentoringParent}>
            <div className={styles.mentoring1}>Mentoring</div>
            <div className={styles.counselling1}>Counselling</div>
            <div className={styles.onlineClasses1}>Online Classes</div>
            <div className={styles.webinar1}>Webinar</div>
            <div className={styles.phycologicalTests}>Phycological Tests</div>
          </div>
        </div>
        <div className={styles.companyTaglineWithLogoAndWrapper}>
          <div
            className={styles.companyTaglineWith}
          >{`[ company tagline with logo and name ] `}</div>
        </div>
        <div className={styles.groupParent8}>
          <div className={styles.ourStoryParent}>
            <div className={styles.ourStory}>Our Story</div>
            <div className={styles.mentorPartners}>Mentor Partners</div>
            <div className={styles.psychologistPartners}>
              Psychologist Partners
            </div>
            <div className={styles.advisorPartners}>Advisor Partners</div>
            <div className={styles.help}>Help</div>
          </div>
          <div className={styles.company}>Company</div>
        </div>
        <div className={styles.groupParent9}>
          <div className={styles.mentorParent}>
            <div className={styles.mentor}>Mentor</div>
            <div className={styles.advisor}>Advisor</div>
            <div className={styles.psychologist}>Psychologist</div>
          </div>
          <div className={styles.joinUsAs}>Join Us As</div>
        </div>
        <div className={styles.groupParent10}>
          <div className={styles.ourWholeTeamIsDedicatedToWrapper}>
            <div className={styles.companyTaglineWith}>
              Our Whole Team Is Dedicated To Help Each And Every Individual To
              Live A Happy Life.
            </div>
          </div>
          <div className={styles.aboutOurMission}>About Our Mission</div>
        </div>
        <img className={styles.groupChild15} alt="" src="/group-452.svg" />
      </div>
    </div>
  );
};

export default Homepage;
