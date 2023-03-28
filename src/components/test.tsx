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
        return(
            <div id="test" className={`w-32 h-32 ${this.hidden && 'hidden'} cursor-pointer bg-red-500`}>
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