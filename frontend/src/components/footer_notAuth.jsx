import Button from "./btn/BtnNavigate";
import '../styles/footer.css'

function footer_notAuth() {
    return (
        <>
            <footer id="not">
                <Button text={"Logar"} link="/login" />
            </footer>
        </>
    );
}

export default footer_notAuth;