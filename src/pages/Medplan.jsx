import React, { useState } from 'react';
import "./medplan.css"
import medbground1 from "../components/images/medbground1.png";
import medbground2 from "../components/images/medbground2.png";
import medbground3 from "../components/images/medbground3.png";
import medbground4 from "../components/images/medbground4.png";
import medbground5 from "../components/images/medbground5.png";
import medbground6 from "../components/images/medbground6.png";
import medplanicon from "../components/images/medplanicon.png";
import medoldpeople from "../components/images/medoldpeople.webp";
import medcycling from "../components/images/medcycling.png";
import healthdoc from "../components/images/healthdoc.webp";
import iphonehlth from "../components/images/iphonehlth.webp";
import iphonelang from "../components/images/iphonelang.webp";
import iphonetrk from "../components/images/iphonetrk.png";
import medtrad from "../components/images/medtrad.webp";
import iphonerecord from "../components/images/iphonerecord.webp";
import recordguy from "../components/images/recordguy.webp";
import medpatientgrp from "../components/images/medpatientgrp.png";
import padlock from "../components/images/padlock.webp";
import telemed from "../components/images/telemed.webp";
import statistics from "../components/images/statistics.png"

const Medplan = () => {
    return (
        <div className='medplan-main'>
            <div className='medplan-background'>
                <div className='medplan-background1'>
                    <div className='medbackground1-img1'>
                        <img
                            src={medbground1}
                            width="100%"
                            height="100%"
                            alt='icon'
                        />
                    </div>
                </div>
                <div className='medplan-background2'>
                    <div className='medbackground1-img2'>
                        <img
                            src={medbground2}
                            width="100%"
                            height="100%"
                            alt='icon'
                        />
                    </div>
                    <div className='medbackground1-img3'>
                        <img
                            src={medbground3}
                            width="100%"
                            height="100%"
                            alt='icon'
                        />
                    </div>
                </div>
                <div className='medplan-background3'>
                    <div className='medbackground1-img4'>
                        <img
                            src={medbground4}
                            width="100%"
                            height="100%"
                            alt='icon'
                        />
                    </div>
                    <div className='medbackground1-img5'>
                        <img
                            src={medbground5}
                            width="100%"
                            height="100%"
                            alt='icon'
                        />
                    </div>
                </div>
                <div className='medplan-background4'>
                    <div className='medbackground1-img6'>
                        <img
                            src={medbground6}
                            width="100%"
                            height="100%"
                            alt='icon'
                        />
                    </div>
                </div>
                <div className='medplan-title'>
                    <div className='medplan-logo'>
                        <img
                            src={medplanicon}
                            width="100%"
                            height="100%"
                            alt='icon'
                        />
                    </div>
                    <h1>MedPlan</h1>
                </div>
            </div>
            <div className='medplan-details'>
                <h1>Empowering Smarter Health Decisions Every Day</h1>
                <p>MedPlan app combines education, adherence, and expert support in one app to promote long-term health & wellness.</p>
            </div>
            <div className='medplan-med-containers'>
                <div className='medplan-container-info'>
                    <h1>Medication Reminder</h1>
                    <div className='medplan-props-container'>
                        <div className='med-rem-props'>
                            <div className='med-rem-ctn'>
                                <div className='med-props-text'>
                                    <h1>Seamlessly manage your medication journey</h1>
                                </div>
                                <img
                                    src={medoldpeople}
                                    width="100%"
                                    height="100%"
                                    alt='icon'
                                />
                            </div>
                            <div className='med-rem-ctn2'>
                                <img
                                    src={iphonetrk}
                                    width="100%"
                                    height="100%"
                                    alt='icon'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='medplan-container-info1'>
                    <h1>Health Diary</h1>
                    <div className='medplan-props-container'>
                        <div className='med-health-props'>
                            <div className='med-props-text'>
                                <h1>Track your health journey with ease.</h1>
                                <p>Effortlessly document your symptoms, track side effects, and monitor
                                    your health journey all in one place. Our health diary empowers you to stay
                                    informed about your well-being, identify patterns, and share accurate details
                                    with your healthcare provider for better-informed decisions and personalized care.
                                </p>
                                <h2>Take Charge of Your Health</h2>
                            </div>
                            <div className='med-health-img'>
                                <img
                                    src={iphonehlth}
                                    width="100%"
                                    height="100%"
                                    alt='icon'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='med-health-container'>
                    <div className='med-health-ctn'>
                        <h2>Share with intention</h2>
                        <p>By choosing to share your journey, you gain access to
                            valuable guidance from professionals who can provide personalized
                            recommendations based on your unique health data. Additionally,
                            you can select health companions to support your treatment journey,
                            offering reminders to take your medications and helping you stay on
                            track with your care plan.
                        </p>
                        <img
                            src={healthdoc}
                            width="100%"
                            height="100%"
                            alt='icon'
                        />
                    </div>
                    <div className='med-health-ctn2'>
                        <h2>Crush your health goals</h2>
                        <img
                            src={medcycling}
                            width="100%"
                            height="100%"
                            alt='icon'
                        />
                        <p>Monitor progress, <br />
                            Stay motivated, and <br />
                            Reach your health goals. <br />
                        </p>
                    </div>
                </div>
                <div className='medplan-container-info2'>
                    <h1>Multilang Health Insights</h1>
                    <div className='med-lang-props'>
                        <div className='med-lang-ctn'>
                            <img
                                src={medpatientgrp}
                                width="100%"
                                height="100%"
                                alt='icon'
                            />
                            <h1>Learn Better, <br />
                                Live Healthier – <br />
                                In the Language You Love. <br />
                            </h1>
                        </div>
                        <div className='med-lang-ctn1'>
                            <h2>Health Care in Your Native Language</h2>
                            <p>We believe that everyone deserves access to clear and helpful
                                health information, no matter their background. That’s why we
                                provide educational articles & videos designed to foster health
                                literacy in Nigeria's three major languages—Hausa, Yoruba, and
                                Igbo—as well as in Pidgin English. Our goal is to make essential
                                health knowledge relatable and easy to understand, empowering you
                                to make informed decisions for a healthier life.
                            </p>
                            <img
                                src={medtrad}
                                width="100%"
                                height="100%"
                                alt='icon'
                            />

                        </div>
                    </div>
                </div>
                <div className='medplan-props-container'>
                    <div className='med-health-props'>
                        <div className='med-props-text'>
                            <h1>A more interesting way to get health tips</h1>
                            <p>
                                Is reading starting to feel like a snooze fest? We've got an exciting
                                alternative to keep you informed. Enjoy a collection of video tips designed
                                to captivate your attention and empower your wellness journey.
                            </p>
                            <h3>Get health advice at your finger tips</h3>
                        </div>
                        <div className='med-health-img'>
                            <img
                                src={iphonelang}
                                width="100%"
                                height="100%"
                                alt='icon'
                            />
                        </div>
                    </div>
                </div>
                <div className='medplan-container-info3'>
                    <h1>Health Records</h1>
                    <div className='med-props-container'>
                        <div className='med-record-ctn'>
                            <img
                                src={iphonerecord}
                                width="100%"
                                height="100%"
                                alt='icon'
                            />
                        </div>
                        <div className='med-record-ctn1'>
                            <h2>Know your Numbers</h2>
                            <p>Access your health record anywhere anytime.</p>
                            <img
                                src={recordguy}
                                width="100%"
                                height="100%"
                                alt='icon'
                            />
                        </div>
                    </div>
                </div>
                <div className='med-health-container'>
                    <div className='med-rec2-ctn'>
                        <h2>Take charge of your health</h2>
                        <p>Keep track of your health history and make informed
                            decision on your well being
                        </p>
                        <img
                            src={statistics}
                            width="100%"
                            height="100%"
                            alt='icon'
                        />
                    </div>
                    <div className='med-rec2-ctn2'>
                        <h2>Your health is yours.</h2>
                        <img
                            src={padlock}
                            width="100%"
                            height="100%"
                            alt='icon'
                        />
                        <p>No one else but you <br />
                            can access you medical <br />
                            records.
                        </p>
                    </div>
                </div>
                <div className='medplan-container-info4'>
                    <h1>Telepharmacy</h1>
                    <div className='med-props-container'>
                        <div className='med-tele-ctn'>
                            <h1>24/7 Free Access to Pharmacists</h1>
                            <p>Enjoy free and easy access to expert medication advice
                                from pharmacists—your health questions answered, just a
                                message away!
                            </p>
                            <h2>Healthcare at Your Fingertips</h2>
                        </div>
                        <div className='med-tele-ctn2'>
                            <img
                                src={telemed}
                                width="100%"
                                height="100%"
                                alt='icon'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Medplan