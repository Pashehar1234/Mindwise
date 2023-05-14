import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SelfAssessment.module.css";
const SelfAssessment = () => {
  const navigate = useNavigate();

  const onGroupContainer11Click = useCallback(() => {
    navigate("/our-services");
  }, [navigate]);

  const onGetInvolvedTextClick = useCallback(() => {
    navigate("/get-involved");
  }, [navigate]);

  const onGroupContainer13Click = useCallback(() => {
    navigate("/self-assessment");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onHomepageTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className={styles.selfAssessment}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.servicesParent}>
          <div className={styles.services}>Services</div>
          <div className={styles.mentoringParent}>
            <div className={styles.mentoring}>Mentoring</div>
            <div className={styles.counselling}>Counselling</div>
            <div className={styles.onlineClasses}>Online Classes</div>
            <div className={styles.webinar}>Webinar</div>
            <div className={styles.phycologicalTests}>Phycological Tests</div>
          </div>
        </div>
        <div className={styles.companyTaglineWithLogoAndWrapper}>
          <div
            className={styles.companyTaglineWith}
          >{`[ company tagline with logo and name ] `}</div>
        </div>
        <div className={styles.groupParent}>
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
        <div className={styles.groupContainer}>
          <div className={styles.mentorParent}>
            <div className={styles.mentor}>Mentor</div>
            <div className={styles.advisor}>Advisor</div>
            <div className={styles.psychologist}>Psychologist</div>
          </div>
          <div className={styles.joinUsAs}>Join Us As</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.ourWholeTeamIsDedicatedToWrapper}>
            <div className={styles.companyTaglineWith}>
              Our Whole Team Is Dedicated To Help Each And Every Individual To
              Live A Happy Life.
            </div>
          </div>
          <div className={styles.aboutOurMission}>About Our Mission</div>
        </div>
        <img className={styles.groupItem} alt="" src="/group-452.svg" />
      </div>
      <div className={styles.image8Parent}>
        <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
        <div className={styles.groupWrapper}>
          <div className={styles.groupParent1}>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupInner} />
              <div className={styles.donate}>Donate</div>
            </div>
            <div
              className={styles.ourServicesParent}
              onClick={onGroupContainer11Click}
            >
              <div className={styles.ourServices}>Our Services</div>
              <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
            </div>
            <div className={styles.getInvolvedParent}>
              <div
                className={styles.getInvolved}
                onClick={onGetInvolvedTextClick}
              >
                Get Involved
              </div>
              <img className={styles.vectorIcon1} alt="" src="/vector5.svg" />
            </div>
            <div
              className={styles.selfAssessmentParent}
              onClick={onGroupContainer13Click}
            >
              <div className={styles.selfAssessment1}>Self Assessment</div>
              <img className={styles.vectorIcon2} alt="" src="/vector7.svg" />
            </div>
            <div className={styles.aboutUsParent}>
              <div className={styles.aboutUs} onClick={onAboutUsTextClick}>
                About Us
              </div>
              <img className={styles.vectorIcon3} alt="" src="/vector8.svg" />
            </div>
            <div className={styles.homepageParent}>
              <div className={styles.homepage} onClick={onHomepageTextClick}>
                Homepage
              </div>
              <img className={styles.vectorIcon4} alt="" src="/vector8.svg" />
            </div>
            <div className={styles.lineDiv} />
          </div>
        </div>
        <div className={styles.chooseSelfAssessmentParent}>
          <div className={styles.chooseSelf}>Choose Self - Assessment</div>
          <div className={styles.selfAssessmentTestsAre}>
            Self-assessment tests are tools designed to help individuals
            identify potential mental health issues or symptoms. These tests can
            be a helpful first step in seeking support and treatment for mental
            health concerns. Self-assessment tests are typically designed to be
            completed independently, and they can be accessed online or through
            mental health providers.
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild1} />
          <div className={styles.beckDepressionInventory}>
            Beck Depression Inventory (BDI-II)
          </div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.rectangleDiv} />
          <img className={styles.image10Icon} alt="" src="/image-11@2x.png" />
          <div className={styles.groupChild4} />
          <div className={styles.groupChild4} />
          <div className={styles.theYoungMania}>
            The Young Mania Rating Scale (YMRS)
          </div>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.rectangleDiv} />
          <img className={styles.image10Icon} alt="" src="/image-12@2x.png" />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild1} />
          <div className={styles.theMoodDisorder}>
            The Mood Disorder Questionnaire (MDQ)
          </div>
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.rectangleDiv} />
          <img className={styles.image10Icon} alt="" src="/image-13@2x.png" />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild1} />
          <div className={styles.generalizedAnxietyDisorder}>
            Generalized Anxiety Disorder 7-item (GAD-7) scale
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfAssessment;
