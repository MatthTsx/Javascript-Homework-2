import React from 'react'

class Test{
    static instance_ : Test
    hidden
    
    constructor(){
        if(Test.instance_){
            return Test.instance_
        }
        Test.instance_ = this
        this.hidden = true
    }

    public element(){
        console.log("a")
        return(
            <div id="test" className={`bg-blue-500 w-32 h-32 ${this.hidden && 'hidden'}`}>
                Test
            
                <style>{`
                    .hidden{
                        display: none;
                    }
                `}</style>
            </div>
        )
    }
}

export default Test