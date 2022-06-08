import "../styles/buttonStyles.css";

const Button = ({text, styles, link}) => {
    return (
        <a className="button" style={styles} href={link}>{text}</a>
    )
};

export default Button;