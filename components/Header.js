import ButtonUI from './ButtonUI';
import styles from './header.module.scss';
import Container from './Container';
import Logo from './Logo';
import Nav from './Nav';
import Row from './Row'; 
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
const Header = () =>{
    const [isMobileNavOpen, setIsMobileNavOpen ] = useState(false);
    return <header className={styles.header}>
        <Container>
            <Row justifyContent="space-between">
                <Link href='/'>
                <Logo />
                </Link>
                <Nav.Desktop />
                <ButtonUI icon ="menu"clickHandler={() => {
                    setIsMobileNavOpen(true);
                }} />
                <AnimatePresence>
                    {isMobileNavOpen && <Nav.Mobile closeHandler={()=> {
                        setIsMobileNavOpen(false);
                    }}/>}
                </AnimatePresence>

            </Row>
        </Container>
    </header>

}
export default Header;
