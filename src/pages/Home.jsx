import {UnderHeader} from "../section/UnderHeader/UnderHeader";
import {Header} from "../section/Header/Header";
import {Main} from "../section/Main/Main";
import {Footer} from "../section/Footer/Footer";

const Home = ({clientInfo, setClientInfo}) => {
    return(
        <>
          <UnderHeader />
          <Header />
          <Main />
          <Footer />
        </>
    )
}

export default Home;
