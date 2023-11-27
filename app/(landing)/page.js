import Header from "@/components/landing/header";
import CardForm from "@/components/landing/card-form";
const LandingPage = () => {
    return (
        <div className="flex justify-center">
            <div className="grid justify-items-stretch">
                <div><Header /></div>
                <div className="justify-self-center"><CardForm /></div>
            </div>
        </div>);
}

export default LandingPage;