

export default class _Math{
    static instance: any

    constructor(){
        if(_Math.instance) return _Math.instance
        _Math.instance = this
    }

    isPar(value: number){
        if(value % 2 == 0) return true
        return false
    }

    Bigger(values : number[]){
        const bigger = {
            value: values[0] || 0,
            index: 0
        }
        values.forEach((value, index) => {
            if(value > bigger.value){
                bigger.value = value
                bigger.index = index
            }
        })
        return bigger
    }

    isOld(age: number){
        //0 = young
        //1 = adult
        //2 = old
        if(age < 18) return 0
        if(age > 65) return 2
        return 1
    }

    checkInt(value: number){
        //0 = value equals zero
        //1 = value is negative
        //2 = value is positive
        if(value == 0) return 0
        if(value < 0) return 1
        return 2
    }

    createTabuada(value: number){ //not finished
        const table = [] 
        new Array(10).forEach((value) => {
            console.log(value)
        })
    }

    Average(values: number[]){
        let avg = 0
        values.forEach((value) => {
            avg += value
        })
        avg /= values.length
        return avg
    }
}