// COPY AND PASTE: return (`< id="${this.id}" class="${this.cl}" style="${this.style}">`)
import { Element } from './elements.js';

class Accordion extends Element {//tbc

}

class Alert extends Element {
    constructor(id, cl, style, content, color) {
        super(id, cl, style);
        this.content = content;
        this.color = color;
    }

    getContent() {
        return this.content;
    }
    getColor() {
        return this.color;
    }

    setContent(newContent) {
        this.content = newContent;
    }
    setColor(newColor) {
        this.color = newColor;
    }

    getAlert() {
        return (`<div id="${this.id}" class="alert alert-${this.color} ${this.cl}" style="${this.style}">${this.content}</div>`)
    }
}

class Badges extends Element {//tbc

}

class Breadcrumb extends Element {//tbc

}

class Buttons extends Element {

}

class ButtonGroup extends Element {

}

class Card extends Element {

}

class Carousel extends Element {

}

class CloseButton extends Element {

}

class Collapse extends Element {

}

class Dropdowns extends Element {

}

class ListGroup extends Element {

}

class Modal extends Element {

}

class Navbar extends Element {

}

class NavandTabs extends Element {

}

class Offcanvas extends Element {
    
}

class Pagination extends Element {
    
}

class Placeholders extends Element {
    
}

class Popovers extends Element {
    
}

class Progress extends Element {
    
}

class Scrollspy extends Element {
    
}

class Spinners extends Element {
    
}

class Toasts extends Element {
    
}

class Tooltips extends Element {
    
}


// export the finished
export { Alert }