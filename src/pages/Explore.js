import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Explore.module.css";
const Explore = () => {
  const navigate = useNavigate();

  const onGroupContainer12Click = useCallback(() => {
    navigate("/our-services");
  }, [navigate]);

  const onGetInvolvedTextClick = useCallback(() => {
    navigate("/get-involved");
  }, [navigate]);

  const onGroupContainer14Click = useCallback(() => {
    navigate("/self-assessment");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onHomepageTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className={styles.explore}>
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
        <img className={styles.groupItem} alt="" src="/group-451.svg" />
      </div>
      <div className={styles.groupParent1}>
        <div className={styles.image7Wrapper}>
          <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
        </div>
        <div className={styles.groupWrapper}>
          <div className={styles.groupFrame}>
            <div className={styles.groupFrame}>
              <div className={styles.groupFrame}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.groupInner} />
                  <div className={styles.donate}>Donate</div>
                </div>
                <div
                  className={styles.ourServicesParent}
                  onClick={onGroupContainer12Click}
                >
                  <div className={styles.ourServices}>Our Services</div>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector5.svg"
                  />
                </div>
                <div className={styles.getInvolvedParent}>
                  <div
                    className={styles.getInvolved}
                    onClick={onGetInvolvedTextClick}
                  >
                    Get Involved
                  </div>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector5.svg"
                  />
                </div>
                <div
                  className={styles.selfAssessmentParent}
                  onClick={onGroupContainer14Click}
                >
                  <div className={styles.selfAssessment}>Self Assessment</div>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector7.svg"
                  />
                </div>
                <div className={styles.aboutUsParent}>
                  <div className={styles.aboutUs} onClick={onAboutUsTextClick}>
                    About Us
                  </div>
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector8.svg"
                  />
                </div>
                <div className={styles.homepageParent}>
                  <div
                    className={styles.homepage}
                    onClick={onHomepageTextClick}
                  >
                    Homepage
                  </div>
                  <img
                    className={styles.vectorIcon4}
                    alt=""
                    src="/vector8.svg"
                  />
                </div>
                <div className={styles.lineDiv} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mentalHealthParent}>
          <div className={styles.mentalHealth}>Mental Health</div>
          <div className={styles.mentalHealthRefers}>
            Mental health refers to a person's psychological, emotional, and
            social well-being. It encompasses the way a person thinks, feels,
            and behaves, as well as their ability to handle stress and make
            decisions. Good mental health enables people to realize their
            potential, cope with the normal stresses of life, work productively,
            and contribute to their communities. Mental health conditions, such
            as depression, anxiety, bipolar disorder, and schizophrenia, can
            affect a person's thoughts, mood, and behavior, and may require
            professional treatment. It's important to prioritize mental health
            and seek help if you are experiencing symptoms of a mental health
            condition.
          </div>
        </div>
        <div className={styles.groupParent3}>
          <div className={styles.depressionParent}>
            <div className={styles.depression}>Depression</div>
            <div className={styles.depressionIsA}>
              Depression is a common mental health disorder characterized by
              persistent feelings of sadness, hopelessness, and loss of interest
              in activities that a person once enjoyed. Symptoms of depression
              can vary from person to person, but may include:
            </div>
            <div className={styles.depressionCanBe}>
              Depression can be caused by a variety of factors, including
              genetics, life events, and chemical imbalances in the brain.
              Treatment for depression may include therapy, medication,
              lifestyle changes, or a combination of these approaches. It's
              important to seek help if you think you or someone you know may be
              experiencing depression, as early intervention can lead to better
              outcomes.
            </div>
          </div>
          <div className={styles.groupParent4}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon5} alt="" src="/vector9.svg" />
              <div className={styles.persistentFeelingsOf}>
                Persistent feelings of sadness, anxiety, or emptiness
              </div>
            </div>
            <div className={styles.vectorGroup}>
              <img className={styles.vectorIcon6} alt="" src="/vector9.svg" />
              <div className={styles.persistentFeelingsOf}>
                Loss of interest in hobbies and activities
              </div>
            </div>
            <div className={styles.vectorContainer}>
              <img className={styles.vectorIcon7} alt="" src="/vector9.svg" />
              <div className={styles.persistentFeelingsOf}>
                Feelings of fatigue, low energy, or lethargy
              </div>
            </div>
            <div className={styles.vectorParent1}>
              <img className={styles.vectorIcon8} alt="" src="/vector9.svg" />
              <div className={styles.persistentFeelingsOf}>
                Sleep disturbances (insomnia or hypersomnia)
              </div>
            </div>
            <div className={styles.vectorParent2}>
              <img className={styles.vectorIcon9} alt="" src="/vector9.svg" />
              <div className={styles.persistentFeelingsOf}>
                Changes in appetite or weight
              </div>
            </div>
          </div>
        </div>
        <div className={styles.groupParent5}>
          <div className={styles.iAmLookingForSupportForParent}>
            <div className={styles.mentalHealth}>
              I am looking for Support for...
            </div>
            <div className={styles.goodThinkingSupports}>
              Good thinking supports, also known as cognitive supports, are
              techniques and strategies that can be used to improve cognitive
              function, promote mental clarity, and reduce negative thinking
              patterns.
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-30@2x.png"
            />
            <div className={styles.depressionIsOne}>
              Depression is one of the most common mental health disorders in
              young people, and it can have a significant impact on their
              social, academic, and personal lives. If you suspect that a young
              person in your life is struggling with depression, it's important
              to seek help from a mental health professional.
            </div>
            <div className={styles.continueReading}>Continue Reading</div>
            <div className={styles.youngPeople}>Young People</div>
          </div>
          <div className={styles.rectangleParent1}>
            <img
              className={styles.groupChild1}
              alt=""
              src="/rectangle-301@2x.png"
            />
            <div className={styles.someFaithsView}>
              Some faiths view mental illness as a spiritual issue or a
              punishment for sin, while others see it as a medical condition.
            </div>
            <div className={styles.faithsBeliefs}>{`Faiths & Beliefs`}</div>
            <div className={styles.continueReading1}>Continue Reading</div>
          </div>
          <div className={styles.rectangleParent2}>
            <img
              className={styles.groupChild2}
              alt=""
              src="/rectangle-302@2x.png"
            />
            <div className={styles.employeesWhoAre}>
              Employees who are struggling with mental health issues may
              experience difficulty concentrating, low productivity, and
              increased absenteeism.
            </div>
            <div className={styles.continueReading2}>Continue Reading</div>
            <div className={styles.workPlace}>Work-Place</div>
          </div>
          <div className={styles.rectangleParent3}>
            <img
              className={styles.groupChild1}
              alt=""
              src="/rectangle-303@2x.png"
            />
            <div className={styles.parentingCanBe}>
              Parenting can be challenging and stressful, and it's not uncommon
              for parents to experience mental health issues like depression.
            </div>
            <div className={styles.continueReading1}>Continue Reading</div>
            <div className={styles.parentsCarers}>{`Parents & Carers`}</div>
          </div>
          <div className={styles.rectangleParent4}>
            <div className={styles.rectangleDiv} />
            <div className={styles.readAll}>Read All</div>
          </div>
        </div>
        <div className={styles.groupParent6}>
          <div className={styles.iAmLookingForSupportForParent}>
            <div className={styles.mentalHealth}>I want help Regarding...</div>
            <div className={styles.goodThinkingSupports}>
              Asking for help for mental health and depression can be a
              difficult step, but it's an important one.
            </div>
          </div>
          <div className={styles.rectangleParent5}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-304@2x.png"
            />
            <div className={styles.depressionIsOne}>
              Anxiety is a natural response to stress and is a common experience
              for many people. However, when anxiety becomes excessive or
              interferes with daily activities, it can be classified as an
              anxiety disorder.
            </div>
            <div className={styles.continueReading}>Continue Reading</div>
            <div className={styles.anxiety}>Anxiety</div>
          </div>
          <div className={styles.rectangleParent6}>
            <img
              className={styles.groupChild1}
              alt=""
              src="/rectangle-305@2x.png"
            />
            <div className={styles.itIsA}>
              It is a non-specific term that is sometimes used to describe a
              period of intense emotional or psychological distress.
            </div>
            <div className={styles.breakdown}>Breakdown</div>
            <div className={styles.continueReading1}>Continue Reading</div>
          </div>
          <div className={styles.rectangleParent7}>
            <img
              className={styles.groupChild1}
              alt=""
              src="/rectangle-306@2x.png"
            />
            <div className={styles.angerIsA}>
              Anger is a natural emotion and It can be a normal and healthy
              response to situations that threaten our well-being or boundaries.
            </div>
            <div className={styles.continueReading1}>Continue Reading</div>
            <div className={styles.anger}>Anger</div>
          </div>
          <div className={styles.rectangleParent8}>
            <img
              className={styles.groupChild1}
              alt=""
              src="/rectangle-307@2x.png"
            />
            <div className={styles.stressIsA}>
              Stress is a natural response to a perceived threat or challenge.
              It is a normal part of life and can even be helpful in some
              situations.
            </div>
            <div className={styles.continueReading1}>Continue Reading</div>
            <div className={styles.stress}>Stress</div>
          </div>
          <div className={styles.rectangleParent9}>
            <div className={styles.rectangleDiv} />
            <div className={styles.readAll}>Read All</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
