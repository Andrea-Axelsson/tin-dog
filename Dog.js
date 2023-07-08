// Create the Dog class here

class Dog {
    constructor(data){
        Object.assign (this, data)
    }

getDogHtml(){
    const {name, avatar, age, bio} = this
    return `<div class="match-photo fade-in" style="background-image: url(${avatar});">
                <div class="text">
                    <h1>${name}, ${age}</h1>
                    <p>${bio}</p>
                </div>
                
            </div>`

}



}


export default Dog


