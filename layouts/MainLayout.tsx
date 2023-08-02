import HomePageHeader from '../components/HomePageHeader';
import HomePageFooter from '../components/HomePageFooter';

const MainLayout = ({ children }) => {
    return (
        <div className='max-w-fit mx-auto min-w-fit'>
            <HomePageHeader />
            {children}
            <HomePageFooter />
        </div>
    );
}

export default MainLayout;