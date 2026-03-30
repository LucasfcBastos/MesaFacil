import '../../styles/footer.css'
import Button from "../btn/BtnImgNavigate";

function footer_notAuth({ list }) {
    return (
        <>
            <footer id="auth">
                {list && list.map((item) => (
                    <Button key={item.link} text={item.name} link={item.link} style={item.type} img={item.img} />
                ))}
            </footer>
        </>
    );
}

export default footer_notAuth;