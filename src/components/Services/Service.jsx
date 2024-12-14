import '../../components/Services/Service.scss';
import { SERVICES } from '../../ListConstant';

export default function Service() {
    return (<>
        <div className='aboutus_container_commitment'>
            <div className='aboutus_container_commitment_flex'>
                <h1><span className='letter_color'>O</span>ur <span className='letter_color'>S</span>ervices</h1>
                
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
                </div>
            </div>
        </div>
    </>)
}