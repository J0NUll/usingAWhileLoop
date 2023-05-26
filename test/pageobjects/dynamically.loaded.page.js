

import Page from './page.js';


class dynamitcally extends Page {


    get strtBttn () {
        return $('//*[@id="start"]/button'); 
        
    }



    get message () {
        return $('//*[@id="finish"]/h4')

    }

    






    open () {
        return super.open('dynamic_loading/2');
    }
}

export default new dynamitcally();
