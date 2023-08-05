import ReCAPTCHA from 'react-google-recaptcha';

const Recaptcha = ({ onChange }) => {
    return <ReCAPTCHA sitekey="6LeQRIAnAAAAAMPfvS3C2YYUAIb9uaHhRzNO16tO" onChange={onChange} />
};

export default Recaptcha;