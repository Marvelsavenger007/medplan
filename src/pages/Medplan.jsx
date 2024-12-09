import React, {useState} from 'react';
import "./medplan.css"
import medbground1 from "../components/images/medbground1.png";
import medbground2 from "../components/images/medbground2.png";
import medbground3 from "../components/images/medbground3.png";
import medbground4 from "../components/images/medbground4.png";
import medbground5 from "../components/images/medbground5.png";
import medbground6 from "../components/images/medbground6.png";
import medplanicon from "../components/images/medplanicon.png";
import medcycling from "../components/images/medcycling.png";
import medplanmock from "../components/images/medplanmock.png";
import medview from "../components/images/medview.png";
import read_cancel from "../components/images/read_cancel.png";
import medpatientgrp from "../components/images/medpatientgrp.png";
import medview2 from "../components/images/medview2.png";
import medpatientphone from "../components/images/medpatientphone.png";
import googleplay from "../components/images/googleplay.png";
import appstore from "../components/images/appstore.png";




const Medplan = () => {
    const [isHiddenVisible, setHiddenVisible] = useState(false);
    const [isImageOneVisible, setImageOneVisible] = useState(true);
  
    const handleReadClick = () => {
      setHiddenVisible(prevState => !prevState);
    };
    
    const handleImageClick = () => {
        setImageOneVisible(!isImageOneVisible);
    };
  

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
            <h1>Personalizing  chronic disease patient care</h1>
            <p>MedPlan app is built around the needs of chronic disease patients. It is designed to provide patients with the tools and resources they need to take control of their health, track their symptoms, and manage their conditions more effectively.</p>
        </div>
        <div className='medplan-med-containers'>
            <div className='medplan-container-info'>
                <h1>Medication Reminder</h1>
                <div className='medplan-props-container'>
                    <div className='medplan-props-ctn-text'>
                        <p>Stay on track</p>
                        <h1>Seamlessly manage your medication journey</h1>
                    </div>
                    <div className='medplan-image-container'>
                        <div className='medplan-ctn-image'>
                            <img
                                src={medplanmock}
                                width="100%"
                                height="90%"
                                alt='icon'
                            />
                        </div>
                        <div className='medplan-ctnx-image1'>
                            <img
                                src={medplanmock}
                                width="90%"
                                height="70%"
                                alt='icon'
                                className='medplan-trk-1'
                            />
                            <img
                                src={medview}
                                width="100%"
                                height="100%"
                                alt='icon'
                                className='medplan-trk-2'
                                onClick={handleReadClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='medplan-container-info1'>
                <h1>Health Diary</h1>
                <div className='medplan-props-container1'>
                    <div className='medplan-props-ctn-text1'>
                        <p>Take Charge of Your Health</p>
                        <h1>Track your health journey with ease</h1>
                    </div>
                    <div className='medplan-image-container1'>
                        <div className='medplan-ctn-image1'>
                            <img
                                src={medplanmock}
                                width="100%"
                                height="100%"
                                alt='icon'
                                className='medplan-mock'
                            />
                        </div>
                        <div className='medplan-ctn-image3'>
                            {isImageOneVisible ? (
                                <img
                                    src={medview}
                                    width="50px"
                                    height="50px"
                                    alt='icon'
                                    className='medplan-trk-3'
                                    onClick={handleImageClick}
                                />
                            ) : (
                                <img
                                    src={read_cancel}
                                    width="50px"
                                    height="50px"
                                    alt='icon'
                                    className='medplan-trk-3'
                                    onClick={handleImageClick}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className='medplan-props-hidden'>
                    <div className='medplan-hidden1'>
                        <div className='medplan-hidden1-text'>
                            <h2>Share with intention</h2>
                            <p>
                                By choosing to share your journey, you open the door to 
                                valuable guidance from professionals who can provide personalized 
                                recommendations based on your unique health data.
                            </p>
                        </div>
                        <div className="medplan-hidden-msg-img">
                            <img
                                src={medplanmock}
                                height='100%'
                                width='100%'
                                alt='icon'
                                className='hidden-med-icon'
                            />
                        </div>
                    </div>
                    <div className='medplan-hidden2'>
                        <p>Crush your Health goals</p>
                        <div className='medplan-hidden-msg-img1'>
                            <img
                                src={medcycling}
                                width="100%"
                                height="100%"
                                alt='icon'
                            />
                        </div>
                        <h1>
                            Monitor progress, <br />
                            Stay motivated, and <br />
                            Reach your health goals. 
                        </h1>
                    </div>
                </div>
            </div>
            <div className='medplan-container-info2'>
                <h1>Patients Community</h1>
                <div className='medplan-patient-container1'>
                    <div className='medplan-patient1'>
                        <div className='medplan-patient-text'>
                            <p>Connect and find support</p>
                        </div>
                        <div className="medplan-profile-pic">
                            <img
                                src={medpatientgrp}
                                width="100%"
                                height="100%"
                                alt='icon'
                            />
                        </div>
                        <h1>
                            Find Your Community.
                            Find Your Strength.
                            Discover Support, Encouragement, and Empowerment.
                        </h1>
                        <div className='medplan-see-more'>
                            {isImageOneVisible ? (
                                <img
                                    src={medview2}
                                    width="100%"
                                    height="100%"
                                    alt='icon'
                                    className='medplan-trk-3'
                                    onClick={handleImageClick}
                                />
                            ) : (
                                <img
                                    src={read_cancel}
                                    width="100%"
                                    height="100%"
                                    alt='icon'
                                    className='medplan-trk-3'
                                    onClick={handleImageClick}
                                />
                            )}
                        </div>
                    </div>
                    <div className='medplan-patient2'>
                        <h2>You're not alone</h2>
                        <p>
                            Discover patients like you in our safe and supportive community, 
                            where you can connect with others who understand what you're 
                            going through, also ask questions, and share your experiences. 
                        </p>
                        <div className="medplan-patient2-msg-img">
                        </div>
                    </div>
                </div>
            </div>
            <div className='medplan-container-info1'>
                <h1>Blog</h1>
                <div className='medplan-props-container1'>
                    <div className='medplan-props-ctn-text1'>
                        <p>Get health advice at your finger tips</p>
                        <h1>Get expert tips and helpful insights on your health</h1>
                    </div>
                    <div className='medplan-image-container1'>
                        <div className='medplan-ctn-image1'>
                            <img
                                src={medpatientphone}
                                width="95%"
                                height="100%"
                                alt='icon'
                                className='medplan-mock'
                            />
                        </div>
                        <div className='medplan-ctn-image3'>
                            {isImageOneVisible ? (
                                <img
                                    src={medview}
                                    width="50px"
                                    height="50px"
                                    alt='icon'
                                    className='medplan-trk-3'
                                    onClick={handleImageClick}
                                />
                            ) : (
                                <img
                                    src={read_cancel}
                                    width="50px"
                                    height="50px"
                                    alt='icon'
                                    className='medplan-trk-3'
                                    onClick={handleImageClick}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className='medplan-props-container2'>
                    <div className='medplan-tips-container'>
                        <div className='medplan-tips-text'>
                            <h2>A more interesting way to get health tips</h2>
                            <p>
                                Is reading starting to feel like a snooze fest? We've got 
                                an exciting alternative to keep you informed. Enjoy a 
                                collection of video tips designed to captivate your attention
                                and empower your wellness journey.
                            </p>
                        </div>
                        <div className='medplan-tips-image'>
                        </div>
                    </div>
                    <div className='medplan-tips-container'>
                        <div className='medplan-tips-text'>
                            <h2>A more interesting way to get health tips</h2>
                            <p>
                                Is reading starting to feel like a snooze fest? We've got 
                                an exciting alternative to keep you informed. Enjoy a 
                                collection of video tips designed to captivate your attention
                                and empower your wellness journey.
                            </p>
                        </div>
                        <div className='medplan-tips-image'>
                        </div>
                    </div>
                </div>
            </div>
            <div className='medplan-container-info4'>
                <h1>Medical Records</h1>
                <div className='medplan-props-container1'>
                    <div className='medplan-props-ctn-text4'>
                        <p>Stay On Track</p>
                        <h1>Access your medical record anywhere anytime</h1>
                    </div>
                    <div className='medplan-image-container1'>
                        <div className='medplan-ctn-image4'>
                            
                        </div>
                    </div>
                </div>
                <div className='medplan-props-container2'>
                    <div className='medplan-tips-container'>
                        <div className='medplan-tips-text4'>
                            <h2>Take charge of your health</h2>
                            <p>
                                keep track of your health history and make informed decision on your well being
                            </p>
                        </div>
                        <div className='medplan-tips-image7'>
                        </div>
                        <div className='medplan-see-more7'>
                            {isImageOneVisible ? (
                                <img
                                    src={medview}
                                    width="50px"
                                    height="50px"
                                    alt='icon'
                                    className='medplan-trk-3'
                                    onClick={handleImageClick}
                                />
                            ) : (
                                <img
                                    src={read_cancel}
                                    width="50px"
                                    height="50px"
                                    alt='icon'
                                    className='medplan-trk-3'
                                    onClick={handleImageClick}
                                />
                            )}
                        </div>                        
                    </div>
                    <div className='medplan-patient7'>
                        <div className='medplan-patient-text'>
                            <p>Your health is yours.</p>
                        </div>
                        <div className="medplan-profile-pic">
                            <img
                                src={medpatientgrp}
                                width="100%"
                                height="100%"
                                alt='icon'
                            />
                        </div>
                        <h1>
                            No one else but you can access you medical records.
                        </h1>
                    </div>
                </div>
            </div>
            <div className='medplan-container-info5'>
                <h1>Online Pharmacy</h1>
                <div className='medplan-props-container2'>
                    <div className='medplan-tips-container2'>
                        <div className='medplan-tips-text5'>
                            <h2>Get your medication refilled with a single click</h2>
                            <p>
                                Running low on medication? You can order your medication 
                                on the MedPlan online pharmacy where ever you are saving 
                                you time and ensuring you have the medications you need, 
                                when you need them.
                            </p>
                        </div>
                        <div className='medplan-tips-image'>
                        </div>
                    </div>
                    <div className='medplan-tips-container2'>
                        <div className='medplan-tips-text5'>
                            <h2>Delivery to Your Door</h2>
                            <p>
                                Receive your medications conveniently delivered to your doorstep. 
                                We take care of the delivery, ensuring your medications arrive safely 
                                and on time, so you can focus on what matters most getting better 
                                or maintaining your well-being.
                            </p>
                        </div>
                        <div className='medplan-tips-image'>
                        </div>
                    </div>
                </div>
            </div>
            <div className='medplan-container-info6'>
                <h1>Medical Records</h1>
                <div className='medplan-props-container1'>
                    <div className='medplan-props-ctn-text6'>
                        <p>Stay On Track</p>
                        <h1>Access your medical record anywhere anytime</h1>
                    </div>
                    <div className='medplan-image-container1'>
                        <div className='medplan-ctn-image4'>
                            
                        </div>
                    </div>
                </div>
                <div className='medplan-props-container2'>
                    <div className='medplan-tips-container2'>
                        <div className='medplan-tips-text6'>
                            <h2>Choose your preferred mode</h2>
                            <p>
                                Connect with medical professionals on your terms. 
                                Whether you prefer a face-to-face interaction, a 
                                clear voice call, or a convenient text chat, medplan 
                                offer multiple options to suit your needs and preferences.
                            </p>
                        </div>
                        <div className='medplan-tips-image'>
                        </div>
                    </div>
                    <div className='medplan-tips-container2'>
                        <div className='medplan-tips-text6'>
                            <h2>Do not miss an appointment</h2>
                            <p>
                                We understand life gets busy,that's why we offer a 
                                convenient reminder system to ensure you never miss 
                                an appointment with your healthcare provider.
                            </p>
                        </div>
                        <div className='medplan-tips-image'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='medplan-stories-download'>
            <div className='medplan-download'>
                <div className='medplan-download-text'>
                    <h1>
                        See all Medplan has to offer in empowering chronic 
                        diseases patients seamlessly manage their health
                    </h1>
                    <div className='medplan-download-ctn'>
                        <button className='download-medplan-btn'>
                            <img
                                src={googleplay}
                                width="100%"
                                height="100%"
                                alt='icon'
                            />
                        </button>
                        <button className='download-medplan-btn'>
                            <img
                                src={appstore}
                                width="100%"
                                height="100%"
                                alt='icon'
                            />
                        </button>
                    </div>
                </div>
                <div className='medplan-download-img'>
                    <img
                        src={medplanmock}
                        width="100%"
                        height="60%"
                        alt='icon'
                    />                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Medplan