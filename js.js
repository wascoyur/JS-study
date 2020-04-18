'use strict';

class DomElement{
    selector = '';
    height = 0;
    width = 0;
    bg = 0;
    fontSize = 0;
    domElement;
    constructor(selector, height, width, bg, fontSize){
        this.height = height;
        this.width = width;
        this .bg = bg;
        this.fontSize = +fontSize;
        let tKey = selector[0];
        let с =selector.length;
        let bsel = selector.slice(1,);
        let el;
        switch(tKey){
            case('.'):
                el = document.createElement('div');
                el.style.cssText = `width:${this.width};
                    height:${this.height};
                    background-color: ${this.bg};
                    font-size:${this.fontSize};
                `
                el.classList.add(bsel);
                el.textContent = "Yellow block text";
                this.domElement = el;
                break;
            case('#'):
                el = document.createElement('div');
                el.style.cssText = `width:${this.width};
                    height:${this.height};
                    background-color: ${this.bg};
                    font-size:${this.fontSize};
                `;
                el.setAttribute('id',bsel);
                el.textContent = 'Green block text';
                this.domElement = el;
                break;
        }
    }
    insertDomEl(){
        document.body.append(this.domElement);
    }
}
let dom1 = new DomElement('.block', '50px','70px','yellow','40');
let dom2 = new DomElement('#block', '50px','70px','green','25');
dom1.insertDomEl();
dom2.insertDomEl();
