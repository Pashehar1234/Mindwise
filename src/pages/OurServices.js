import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OurServices.module.css";
const OurServices = () => {
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

  const onHomepageTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onExploreMoreText3Click = useCallback(() => {
    navigate("/speaking");
  }, [navigate]);

  return (
    <div className={styles.ourServices}>
      <div className={styles.ourServicesChild} />
      <div className={styles.groupParent}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupContainer}>
            <div className={styles.groupContainer}>
              <div className={styles.rectangleParent}>
                <div className={styles.groupChild} />
                <div className={styles.donate}>Donate</div>
              </div>
              <div
                className={styles.ourServicesParent}
                onClick={onGroupContainer1Click}
              >
                <div className={styles.ourServices1}>Our Services</div>
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
                onClick={onGroupContainer3Click}
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
              <div className={styles.groupItem} />
            </div>
          </div>
        </div>
        <div className={styles.image9Parent}>
          <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
          <div className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <div className={styles.rectangleDiv} />
            <div className={styles.groupChild1} />
            <div className={styles.groupChild2} />
            <div className={styles.groupChild3} />
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild4} />
            <div className={styles.groupChild5} />
            <div className={styles.groupChild6} />
            <div className={styles.groupChild7} />
          </div>
        </div>
        <div className={styles.rectangleParent1}>
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
        <div className={styles.ourServicesGroup}>
          <div className={styles.ourServices2}>Our Services</div>
          <div className={styles.atTheCore}>
            At the core of our services is a commitment to helping individuals
            improve their mental health and well-being. We believe that everyone
            deserves access to high-quality mental health support and resources,
            and we are dedicated to providing that support in a compassionate,
            non-judgmental, and accessible way.
          </div>
        </div>
        <div className={styles.ourMentalHealthServicesAreWrapper}>
          <div className={styles.ourMentalHealth}>
            Our mental health services are designed to provide comprehensive
            support and resources to individuals seeking to improve their mental
            health and well-being. We offer a range of services that go beyond
            traditional mental health consultancy, including depression
            detection tests, mental health resources, professional support, and
            access to a supportive community.
          </div>
        </div>
        <div className={styles.groupParent4}>
          <div className={styles.lineParent}>
            <img className={styles.lineIcon} alt="" src="/line-3.svg" />
            <div className={styles.rectangleParent2}>
              <div className={styles.groupChild9} />
              <div className={styles.rectangleParent3}>
                <div className={styles.groupChild10} />
                <div className={styles.exploreMore}>Explore More</div>
              </div>
              <img
                className={styles.teacherIcon}
                alt=""
                src="/teacher@2x.png"
              />
              <div className={styles.webinars}>Webinars</div>
            </div>
            <img className={styles.groupChild11} alt="" src="/group-68.svg" />
          </div>
          <div className={styles.lineGroup}>
            <img className={styles.groupChild12} alt="" src="/line-3.svg" />
            <div className={styles.rectangleParent4}>
              <div className={styles.groupChild9} />
              <div className={styles.rectangleParent5}>
                <div className={styles.groupChild10} />
                <div className={styles.exploreMore}>Explore More</div>
              </div>
              <img
                className={styles.videoCallIcon}
                alt=""
                src="/video-call@2x.png"
              />
              <div className={styles.onlineClasses1}>Online Classes</div>
            </div>
            <img className={styles.groupChild15} alt="" src="/group-70.svg" />
          </div>
          <div className={styles.groupParent5}>
            <div className={styles.rectangleParent6}>
              <div className={styles.groupChild16} />
              <div className={styles.rectangleParent7}>
                <div className={styles.groupChild10} />
                <div className={styles.exploreMore}>Explore More</div>
              </div>
              <img className={styles.talkIcon} alt="" src="/talk@2x.png" />
              <div className={styles.counselling1}>Counselling</div>
            </div>
            <img className={styles.groupChild18} alt="" src="/group-70.svg" />
          </div>
          <div className={styles.lineContainer}>
            <div className={styles.lineDiv} />
            <img className={styles.groupChild19} alt="" src="/group-68.svg" />
            <div className={styles.rectangleParent6}>
              <div className={styles.groupChild16} onClick = {onExploreMoreText3Click}/>
              <img className={styles.helpIcon} alt="" onClick = {onExploreMoreText3Click} src="/help@2x.png" />
              <div className={styles.mentoring1}>Mentoring</div>
              <div className={styles.rectangleParent9}>
                <div className={styles.groupChild10} />
                <div
                  className={styles.exploreMore3}
                  onClick={onExploreMoreText3Click}
                >
                  Explore More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
