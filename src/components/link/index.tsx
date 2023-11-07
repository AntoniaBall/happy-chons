type linkProps = {
    text: string;
}

const Link = (props: linkProps) : JSX.Element => {
    const {text} = props;
    return <>
            <p>{text}</p>
        </>;
};

export default Link;