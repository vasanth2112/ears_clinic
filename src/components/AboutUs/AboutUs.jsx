import '../AboutUs/AboutUs.scss';
import { SERVICES } from '../../ListConstant';
export default function AboutUs() {

    return (<>
        <div className='aboutus'>
            <h1>
                <span class="letter_color">A</span>bout
                <span class="letter_color"> U</span>s</h1>
            <div className='aboutus_container'>
                <div className='aboutus_container_flex'>
                    <div>
                        <video autoPlay loop muted className='video' >
                            <source src="./AboutUs/video/aboutus.mp4" type="video/mp4" />
                        </video>
                        {/* <img src='./AboutUs/clinic_image.jpg' /> */}
                    </div>
                    <div className='who_we_are'>
                        <h2>Welcome to Bliss Tone Hearing and Speech</h2>
                        <h3>"Empowering Communication. Enhancing Lives"</h3>
                        <p>At <span className='highlight'> BLISS TONE Hearing and Speech Clinic</span>, we believe effective communication is the cornerstone of human connection. Our clinic was founded with a mission to bridge the gap for individuals facing hearing and speech challenges. Over the years, we’ve become a trusted partner for individuals and families seeking expert care, compassion, and transformative solutions.

                            Backed by a team of skilled professionals and a client-focused approach, we are dedicated to empowering you with the tools and support needed to overcome communication barriers and live life to the fullest.</p>
                    </div>
                </div>
            </div>
            <div className='aboutus_container_commitment'>
                <div className='aboutus_container_commitment_flex'>
                    <h2>Our Commitment to You</h2>
                    <div className='commitment_cards'>

                        {SERVICES.map((content, index) => (
                            <div className="card">
                                <div className="card_img">
                                    <img src={content.image}></img>
                                </div>
                                <h3>{content.title}</h3>
                                <p>{content.description}</p>
                            </div>
                        ))}


                        {/* <div className='card'>
                            <div className='card_img'><img src='./AboutUs/hearing.jpg' /></div>
                            <div><h3>Hearing Aid Trial</h3></div>
                            <div><p>At Bliss Tone Hearing and Speech Clinic, we provide thorough hearing assessments and speech evaluations to understand your unique needs. Our state-of-the-art diagnostic tools and experienced specialists ensure accurate identification of hearing impairments or speech difficulties.</p></div>
                        </div>
                        <div className='card'>
                            <div className='card_img'><img src='./AboutUs/session.jpg' /></div>
                            <div><h3>Advanced Hearing Aid Trials and Fittings</h3></div>
                            <div><p>We offer a personalized approach to selecting and fitting hearing aids, ensuring they perfectly suit your lifestyle and preferences. Our experts guide you through live trials, allowing you to experience various options in real-world scenarios. With precise adjustments, we guarantee optimal comfort, clarity, and satisfaction.</p></div>
                        </div>
                        <div className='card'>
                            <div className='card_img'><img src='./AboutUs/service.jpg' /></div>
                            <div><h3>Reliable Aftercare Services</h3></div>
                            <div><p>We provide professional maintenance to keep your hearing aids performing at their best. Our repair services address issues promptly to ensure seamless functionality. Additionally, we offer high-quality hearing aid batteries for consistent and reliable use.</p></div>
                        </div>
                        <div className='card'>
                            <div className='card_img'><img src='./AboutUs/hearing.jpg' /></div>
                            <div><h3>Comprehensive Hearing Assessments and Speech Evaluations</h3></div>
                            <div><p>At Bliss Tone Hearing and Speech Clinic, we provide thorough hearing assessments and speech evaluations to understand your unique needs. Our state-of-the-art diagnostic tools and experienced specialists ensure accurate identification of hearing impairments or speech difficulties.</p></div>
                        </div>
                        <div className='card'>
                            <div className='card_img'><img src='./AboutUs/session.jpg' /></div>
                            <div><h3>Advanced Hearing Aid Trials and Fittings</h3></div>
                            <div><p>We offer a personalized approach to selecting and fitting hearing aids, ensuring they perfectly suit your lifestyle and preferences. Our experts guide you through live trials, allowing you to experience various options in real-world scenarios. With precise adjustments, we guarantee optimal comfort, clarity, and satisfaction.</p></div>
                        </div>
                        <div className='card'>
                            <div className='card_img'><img src='./AboutUs/service.jpg' /></div>
                            <div><h3>Reliable Aftercare Services</h3></div>
                            <div><p>We provide professional maintenance to keep your hearing aids performing at their best. Our repair services address issues promptly to ensure seamless functionality. Additionally, we offer high-quality hearing aid batteries for consistent and reliable use.</p></div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </>)
}