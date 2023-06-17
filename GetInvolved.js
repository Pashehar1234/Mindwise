import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GetInvolved.module.css";
const GetInvolved = () => {
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
    <div className={styles.getInvolved}>
      <div className={styles.getInvolvedChild} />
      <div className={styles.groupParent}>
        <div className={styles.image14Parent}>
          <img className={styles.image14Icon} alt="" src="/image-14@2x.png" />
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
          <div className={styles.rectangleDiv} />
          <div className={styles.groupChild1} />
        </div>
        <div className={styles.groupWrapper}>
          <div className={styles.groupContainer}>
            <div className={styles.groupContainer}>
              <div className={styles.rectangleParent}>
                <div className={styles.groupChild2} />
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
                  className={styles.getInvolved1}
                  onClick={onGetInvolvedTextClick}
                >
                  Get Involved
                </div>
                <img className={styles.vectorIcon1} alt="" src="/vector5.svg" />
              </div>
              <div
                className={styles.selfAssessmentParent}
                onClick={onGroupContainer4Click}
              >
                <div className={styles.selfAssessment}>Self Assessment</div>
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
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild3} />
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
        <div className={styles.getInvolvedWithUsWrapper}>
          <div className={styles.getInvolvedWith}>Get Involved With Us</div>
        </div>
        <div className={styles.groupParent4}>
          <div className={styles.asAMentorYouWillHaveTheWrapper}>
            <div className={styles.asAMentor}>
              As a mentor, you will have the opportunity to guide and support
              individuals who are looking for advice and guidance on their
              mental health journey. Your expertise and experience will help our
              clients navigate challenges, identify potential solutions, and
              make informed decisions about their mental health care.
            </div>
          </div>
          <div className={styles.groupFrame}>
            <div className={styles.groupParent5}>
              <div className={styles.rectangleContainer}>
                <div className={styles.groupChild4} />
                <div className={styles.rectangleParent1}>
                  <div className={styles.groupChild5} />
                  <div className={styles.joinToday}>JOIN TODAY</div>
                </div>
                <img
                  className={styles.supportIcon}
                  alt=""
                  src="/support@2x.png"
                />
                <div className={styles.mentor1}>Mentor</div>
              </div>
              <img className={styles.groupChild6} alt="" src="/group-681.svg" />
            </div>
          </div>
        </div>
        <div className={styles.groupParent6}>
          <div className={styles.asAnAdvisorYouWillWorkWWrapper}>
            <div className={styles.asAnAdvisor}>
              As an advisor, you will work with our team to develop and curate
              mental health resources that are accessible, relevant, and
              evidence-based. Your input will help us create a comprehensive
              range of resources and tools that support individuals in improving
              their mental health and well-being.
            </div>
          </div>
          <div className={styles.groupParent7}>
            <div className={styles.rectangleParent2}>
              <div className={styles.groupChild4} />
              <div className={styles.rectangleParent3}>
                <div className={styles.groupChild5} />
                <div className={styles.joinToday}>JOIN TODAY</div>
              </div>
              <div className={styles.advisor1}>Advisor</div>
              <img
                className={styles.supportIcon1}
                alt=""
                src="/support@2x.png"
              />
            </div>
            <img className={styles.groupChild9} alt="" src="/group-70.svg" />
          </div>
        </div>
        <div className={styles.groupParent8}>
          <div className={styles.asAPsychologistYouWillWoWrapper}>
            <div className={styles.asAPsychologistContainer}>
              <p className={styles.asAPsychologist}>
                As a psychologist, you will work with our team to provide
                ongoing support and treatment to individuals seeking
                professional mental health services. You will have the
                opportunity to connect with individuals, assess their mental
                health concerns, and develop personalized treatment plans that
                meet their unique needs.
              </p>
            </div>
          </div>
          <div className={styles.groupParent9}>
            <div className={styles.rectangleParent2}>
              <div className={styles.groupChild4} />
              <div className={styles.rectangleParent3}>
                <div className={styles.groupChild5} />
                <div className={styles.joinToday}>JOIN TODAY</div>
              </div>
              <img
                className={styles.supportIcon1}
                alt=""
                src="/support@2x.png"
              />
              <div className={styles.psychologist1}>Psychologist</div>
            </div>
            <img className={styles.groupChild9} alt="" src="/group-70.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
