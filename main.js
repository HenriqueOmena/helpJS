class Menu {

    constructor() {
        this.codes = document.querySelectorAll('pre');

        this.list = document.querySelectorAll('li')

        this.init();

    }

    init () {
        //just add none for all elements
        this.codes.forEach( el => {
            el.style.display = 'none';
        })

        this.list.forEach( el => {
            const preEl = el.nextSibling.nextSibling
            this.showHideCode(el, preEl)
        })
    }
    animeCode(element) {
        anime({
            targets: element,
            left: '40px',
            backgroundColor: 'red',
            borderRadius: ['0%', '10%'],
            easing: 'easeInOutQuad'
        });
    }
    animeLi(element, status = true) {
        if (status) {
            anime({
                targets: element,
                translateX: [10, 750], // from 100 to 250
                borderRadius: ['0%', '40%'],
                easing: 'easeInOutQuad'
            });
        } else {
            anime({
                targets: element,
                translateX: [750, 0], // from 100 to 250
                borderRadius: ['0%', '0%'],
                easing: 'easeInOutQuad'
            });
        }

    }


    showHideCode(clickEl, showEL) {
        console.log(clickEl);
        clickEl.addEventListener('click', () => {
            if (showEL.style.display === 'block') {
                //this.animationOut(showEL)
                this.animeLi(clickEl, false)
                showEL.style.display = 'none';
            } else {
                showEL.style.display = 'block';
                //this.animeCode(showEL)
                this.animeLi(clickEl)
            }
        })
    }
}


new Menu;
