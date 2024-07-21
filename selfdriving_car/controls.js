class Controls{
    constructor(){
        this.forward=false;
        this.left=false;
        this.right=false;
        this.reverse=false;

        this.#addKeyboardListeners();
    }

    // has a leading # because its a private method
    #addKeyboardListeners(){
        // using => allows 'this' to refer to the Controls object
        // otherwise 'this' would refer to the document object
        // since we would be inside the document.onkeydown function -> function(event)
        document.onkeydown=(event)=>{
            switch(event.key){
                case 'ArrowLeft':
                    this.left=true;
                    break;
                case 'ArrowRight':
                    this.right=true;
                    break;
                case 'ArrowUp':
                    this.forward=true;
                    break;
                case 'ArrowDown':
                    this.reverse=true;
                    break;
            }
        }

        document.onkeyup=(event)=>{
            switch(event.key){
                case 'ArrowLeft':
                    this.left=false;
                    break;
                case 'ArrowRight':
                    this.right=false;
                    break;
                case 'ArrowUp':
                    this.forward=false;
                    break;
                case 'ArrowDown':
                    this.reverse=false;
                    break;
            }
        }
    }
}