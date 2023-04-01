import Iframe from 'react-iframe'

export const GoogleMap = () => {
    const googleMapStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "15px"
    };
    return (
        <>
            <div style={googleMapStyle}>
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7737221876796!2d139.7434949152461!3d35.65794623019978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bbd9009ec09%3A0x481a93f0d2a409dd!2z5p2x5Lqs44K_44Ov44O8!5e0!3m2!1sja!2sjp!4v1680387801121!5m2!1sja!2sjp" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
            </div>
        </>
    );
}