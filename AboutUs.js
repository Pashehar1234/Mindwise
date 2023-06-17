import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AboutUs.module.css";
const AboutUs = () => {
  const navigate = useNavigate();

  const onGroupContainer2Click = useCallback(() => {
    navigate("/our-services");
  }, [navigate]);

  const onGetInvolvedTextClick = useCallback(() => {
    navigate("/get-involved");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/self-assessment");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onHomepageTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className={styles.aboutUs}>
      <div className={styles.image15Parent}>
        <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.groupChild1} />
        <div className={styles.groupChild2} />
      </div>
      <div className={styles.groupParent}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupWrapper}>
            <div className={styles.groupWrapper}>
              <div className={styles.rectangleParent}>
                <div className={styles.groupChild3} />
                <div className={styles.donate}>Donate</div>
              </div>
              <div
                className={styles.ourServicesParent}
                onClick={onGroupContainer2Click}
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
                <img className={styles.vectorIcon1} alt="" src="/vector6.svg" />
              </div>
              <div
                className={styles.selfAssessmentParent}
                onClick={onGroupContainer4Click}
              >
                <div className={styles.selfAssessment}>Self Assessment</div>
                <img className={styles.vectorIcon2} alt="" src="/vector7.svg" />
              </div>
              <div className={styles.aboutUsParent}>
                <div className={styles.aboutUs1} onClick={onAboutUsTextClick}>
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
        </div>
        <div className={styles.aboutUsWrapper}>
          <div className={styles.aboutUs2}>About Us</div>
        </div>
      </div>
      <div className={styles.ourVisionOurVisionIsToCrParent}>
        <div className={styles.ourVisionOurContainer}>
          <p className={styles.ourVision}>Our Vision</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            Our vision is to create a world where mental health is a top
            priority and everyone has access to high-quality care and support.
          </p>
        </div>
        <div className={styles.groupChild4} />
      </div>
      <div className={styles.ourMissionOurMissionIsToParent}>
        <div className={styles.ourMissionOurContainer}>
          <p className={styles.ourVision}>Our Mission</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            Our mission is to provide comprehensive support and resources to
            individuals seeking to improve their mental health and well-being.
            We are committed to creating a safe and inclusive space where
            individuals can access depression detection tests, mental health
            resources, professional support, and community support. We believe
            in the power of mental health professionals and community support to
            improve mental health care and support. We strive to make mental
            health care and support accessible, compassionate, and
            non-judgmental for everyone.
          </p>
        </div>
        <div className={styles.groupChild5} />
      </div>
      <div className={styles.ourGoalOurGoalIsToEmpoweParent}>
        <div className={styles.ourMissionOurContainer}>
          <p className={styles.ourVision}>Our Goal</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            Our goal is to empower individuals to take charge of their mental
            health and well-being by providing them with comprehensive support
            and resources. We aim to reduce the stigma surrounding mental health
            and make it easier for individuals to seek the care and support they
            need. We also strive to improve the quality of mental health care
            and support by working with mental health professionals and
            developing evidence-based resources and tools. Ultimately, our goal
            is to create a world where mental health is a priority and everyone
            has access to the care and support they need to lead healthy and
            fulfilling lives.
          </p>
        </div>
        <div className={styles.groupChild6} />
      </div>
      <div className={styles.aboutUsOurWebsiteIsDesignParent}>
        <div className={styles.aboutUsOurContainer}>
          <p className={styles.ourVision}>About Us</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            Our website is designed to provide a safe and inclusive space for
            individuals to connect with mental health professionals, access
            resources and tools, and find community support. We offer a range of
            services, including depression detection tests, mental health
            resources, professional support, and access to a supportive
            community.
          </p>
          <p className={styles.blankLine}>
            Our team is made up of mental health professionals with diverse
            backgrounds and expertise, all dedicated to improving mental health
            care and support. We understand that seeking help for mental health
            concerns can be challenging, and we are committed to providing a
            compassionate and non-judgmental approach to care.
          </p>
          <p className={styles.blankLine}>
            At our mental health and depression detection website, we believe in
            the power of community and support. We strive to create a safe and
            inclusive space where individuals can connect with others who share
            similar experiences and challenges. We believe that by working
            together, we can create a world where mental health is a priority
            and everyone has access to the care and support they need.
          </p>
          <p className={styles.blankLine}>
            Thank you for visiting our website. We invite you to explore our
            services and resources and join us in our mission to improve mental
            health care and support.
          </p>
        </div>
        <div className={styles.groupChild6} />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild8} />
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
        <div className={styles.groupParent1}>
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
        <div className={styles.groupParent2}>
          <div className={styles.mentorParent}>
            <div className={styles.mentor}>Mentor</div>
            <div className={styles.advisor}>Advisor</div>
            <div className={styles.psychologist}>Psychologist</div>
          </div>
          <div className={styles.joinUsAs}>Join Us As</div>
        </div>
        <div className={styles.groupParent3}>
          <div className={styles.ourWholeTeamIsDedicatedToWrapper}>
            <div className={styles.companyTaglineWith}>
              Our Whole Team Is Dedicated To Help Each And Every Individual To
              Live A Happy Life.
            </div>
          </div>
          <div className={styles.aboutOurMission}>About Our Mission</div>
        </div>
        <img className={styles.groupIcon} alt="" src="/group-451.svg" />
      </div>
    </div>
  );
};

export default AboutUs;
