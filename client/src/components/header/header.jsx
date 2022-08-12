import { ContentWrapper } from '../content-wrapper/content-wrapper';
import WaveImage from './wave.svg';
import styles from './styles.module.css';

export const Header = () => {
    return (
        <div className={ styles.header }>
            <ContentWrapper>
                <h1 className={ styles.title }>
                    { `Путешествуйте с\n Комфортом` }
                </h1>
                <p className={ styles.descr }>
                    { `С нашей компанией вы забудете обо всем, кроме\n высокого уровня путешествий` }
                </p>
            </ContentWrapper>
            <img src={ WaveImage } alt='wave' className={ styles.wave } />
        </div>
    )
}