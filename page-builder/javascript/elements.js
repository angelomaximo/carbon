class Element {
    constructor(id, cl, style) {
        this.id = id;
        this.cl = cl;
        this.style = style;
    }

    // GETTERS \\
    getId() {
      return this.id;
    }
    getCl() {
      return this.cl;
    }
    getStyle() {
      return this.style;
    }
    // SETTERS \\
    setId(newId) {
        this.id = newId;
    }
    setCl(newCl) {
        this.cl = newCl;
    }
    setStyle(newStyle) {
        this.style = newStyle;
    }
}

class Div extends Element {
  constructor(id, cl, style) {
    super(id, cl, style);
  }
  getDiv() {
    return (`<div id="${this.id}" class="${this.cl}" style="${this.style}"`)
  }
}

class Img extends Element {
  constructor(id, cl, style, src, alt) {
    super(id, cl, style);
    this.src = src;
    this.alt = alt;
  }

  // GETTERS \\
  getSrc() {
    return this.src;
  }
  getAlt() {
    return this.alt;
  }
  // SETTERS \\
  setSrc(newSrc) {
    this.src = newSrc;
  }
  setAlt(newAlt) {
    this.alt = newAlt;
  }

  getImg() {
    return (`<img id="${this.id}" class="${this.cl}" style="${this.style}" src="${this.src}" alt="${this.alt}">`)
  }
}

class Paragraph extends Element {
  constructor(id, cl, style, content, weight, fontsize, fontfamily) {
    super(id, cl, style);
    this.content = content;
    this.weight = weight;
    this.fontsize = fontsize;
    this.fontfamily = fontfamily;
  }
  // GETTERS \\
  getContent() {
    return this.content;
  }
  getWeight() {
    return this.weight;
  }
  getFontsize() {
    return this.fontsize;
  }
  getFontfamily() {
    return this.fontfamily;
  }
  // SETTERS \\
  setContent(newContent) {
    return this.content = newContent;
  }
  setWeight(newWeight) {
    return this.weight = newWeight;
  }
  setFontsize(newFontsize) {
    return this.fontsize = newFontsize;
  }
  setFontfamily(newFontfamily) {
    return this.fontfamily = newFontfamily;
  }

  getParagraph() {
    return (`<p id="${this.id}" class="${this.cl}" style="${this.style}; font-weight: ${this.weight}; font-size: ${this.fontsize}; font-family: ${this.fontfamily};"> ${this.content} </p>`)
  }
}

class Header extends Element {
  constructor(id, cl, style, header, content) {
    super(id, cl, style);
    this.header = header;
    this.content = content;
  }
  getHeader() {
    return this.header;
  }
  setHeader(newHeader) {
    this.header = newHeader;
  }

  getHeader() {
    return (`<${this.header} id="${this.id}" class="${this.cl}" style="${this.style}">${this.content}</${this.header}>`)
  }
}

class Hr extends Element {
  constructor(id, cl, style, bgcolor) {
    super(id, cl, style);
    this.bgcolor = bgcolor;
  }
  // GETTERS \\
  getBgcolor() {
    return this.bgcolor;
  }
  // SETTERS \\
  setBgcolor(newBgcolor) {
    this.bgcolor = newBgcolor;
  }

  getHr() {
    return (`<hr id="${this.id}" class="${this.cl}" style="${this.style}">`)
  }
}

class Input extends Element {
  constructor(id, cl, style, type) {
    super(id, cl, style)
    this.type = type;
  }
  getType() {
    return this.type;
  }
  setType(newType) {
    this.type = newType;
  }

  getInput() {
    return (`<input id="${this.id}" class="${this.cl}" style="${this.style}" type="${this.type}">`)
  }
}

class Anchor extends Element {
  constructor(id, cl, style, content, link) {
    super(id, cl, style);
    this.content = content;
    this.link = link;
  }
  getContent() {
    return this.content;
  }
  getLink() {
    return this.link;
  }

  setContent(newContent) {
    this.content = newContent;
  }
  setLink(newLink) {
    this.link = newLink;
  }

  getAnchor() {
    return (`<a id="${this.id}" class="${this.cl}" style="${this.style}" href="${this.link}">${this.content}</a>`)
  }
}

class Button extends Element { // fix
  constructor(id, cl, style, content) {
    super(id, cl, style)
    this.content = content;
  }

  getButton() {
    return (`<button id="${this.id}" class="${this.cl}" style="${this.style}">${this.content}</button>`)
  }
}

class Span extends Element { // fix
  constructor(id, cl, style, content) {
    super(id, cl, style)
    this.content = content;
  }

  getSpan() {
    return (`<span id="${this.id}" class="${this.cl}" style="${this.style}">${this.content}</span>`)
  }
}

class Iframe extends Element { // fix allowfullscreen optionality
  constructor(id, cl, style, title, src) {
    super(id, cl, style)
    this.title = title;
    this.src = src;
  }

  getIframe() {
    return (`<iframe id="${this.id}" class="${this.cl}" style="${this.style}" title="${this.title}" src="${this.src}" allowfullscreen></iframe>`)
  }
}


export { Element,
        Div, Img, Paragraph,
        Header, Hr, Input,
        Anchor, Button, Span,
        Iframe }