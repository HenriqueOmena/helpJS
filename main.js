class Menu {

    constructor() {
        this.codes = document.querySelectorAll('pre');

        this.list = document.querySelectorAll('li')

        this.hideCodes();
    }

    hideCodes() {
        anime({
            targets: 'div',
            translateX: 250,
            rotate: '1turn',
            backgroundColor: 'red',
            duration: 6800
          });
        this.codes.forEach( el => {

        })
    }

}


new Menu;
