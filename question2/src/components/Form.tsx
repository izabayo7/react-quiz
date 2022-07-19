import dateSvg from '../assets/icons/dateIcon.svg'
import '../assets/css/form.css'

function Form() {

    return (
        <form className="form">
            {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
            <div className="input-group">
                <label htmlFor="names">Your full given name:</label>
                <input type="text" id="names" />
            </div>
            <div className="flex">
                <div className="input-group small">
                    <label htmlFor="dateOfBirth">Date of birth</label>
                    <img className="icon" src={dateSvg} alt="dateIcon" />
                    <input type="date" id="dateOfBirth" className='small' />
                </div>
                <div className="input-group small">
                    <label htmlFor="country">Country of residence or citizenship:</label>
                    <input type="text" id="country" className='small' />
                </div>
            </div>
            <div className="input-group">
                <label htmlFor="shool">What school do you plan to attend?</label>
                <input type="text" id="school" />
            </div>
            <div className="input-group">
                <label htmlFor="studyArea">Please take a moment to describe your intended area of study:</label>
                <textarea id="studyArea" placeholder='Enter details here' />
            </div>
        </form>
    )
}

export default Form
