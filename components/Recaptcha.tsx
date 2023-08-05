import ReCAPTCHA from 'react-google-recaptcha';

const Recaptcha = ({ onChange }) => {
    return <ReCAPTCHA sitekey="6LfiUoAnAAAAALbug1vNvfGmYZEM2lFtTph3nWw4" onChange={onChange} />
};

export default Recaptcha;