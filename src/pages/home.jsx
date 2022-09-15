import React from 'react';
import poster from "../../src/assets/images/dontbeboring.png";
import desktop from "../../src/assets/images/Desktop background.png";

const Home = () => {
    return ( 
        <div className="layout__grid--home">
            <div className="pages__home--left">
                <img src={poster}/> 
            </div>
            <div className="pages__home--right">
                <img src={desktop}/>
                <nav>
                    <h2>Jesi Allen</h2>
                    <h4>Choose a book to begin reading...</h4>
                    <p>icon</p>
                </nav>
                
                bookshelf- 3 buttons overlayed clear for books
                computerscreen
            </div>
        </div>
     );
}
 
export default Home;