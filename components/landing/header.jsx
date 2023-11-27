import { Metal_Mania } from "next/font/google";
import styles from "../../styles/animatedText.module.css"

const creepster = Metal_Mania({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
})

const Header = () => {
    return (
        <div className={`${styles.textContainer} grid justify-items-stretch `}>

            <h1 className={`${creepster.className} ${styles.animatedText} text-center text-9xl tracking-wider`}>Khodam Check</h1>
            <h1 className={`${creepster.className} text-xl tracking-wider text-center my-2`}>By. ngappers</h1>
        </div>
    );
}

export default Header;