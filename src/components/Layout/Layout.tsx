import React from 'react';
import styles from './Layout.module.css';
import Text from '../Text/Text';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <aside className={styles.sidebar}>
                <Text tag="h1" view="title">
                    UI Kit
                </Text>
                <nav>
                    <ul>
                        <li>
                            <a href="#buttons">Buttons</a>
                        </li>
                        <li>
                            <a href="#inputs">Inputs</a>
                        </li>
                        <li>
                            <a href="#checkboxes">Checkboxes</a>
                        </li>
                        <li>
                            <a href="#cards">Cards</a>
                        </li>
                        <li>
                            <a href="#dropdowns">Dropdowns</a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
};

export default Layout; 