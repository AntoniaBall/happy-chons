type logoProps = {
    text: string;
}
const Logo = (props: logoProps): JSX.Element => {
    const {text} = props;
    return <>
            <p>{text}</p>
        </>;
};

export default Logo;