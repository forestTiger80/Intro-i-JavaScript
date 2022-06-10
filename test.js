
/// The class "Robot"
class Robot{
    constructor(name, type){
        this.name = name;
        this.type = type;
        this.greeting = function(){
            return "Im "+ this.name + " and Im a " + this.type + " robot type.";
        }

    }
}
/// the object "r"
const r = new Robot('Rebekka', 'DFE45');
console.log(r.greeting());
