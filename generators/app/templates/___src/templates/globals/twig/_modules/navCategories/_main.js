/**
 * navCategories
 */

import Flickity from 'flickity'

const navCategories = {
    init() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const sliders = [...document.querySelectorAll('.js-navCategories')]
                if (sliders) {
                    sliders.forEach((sliders) => {
                        let slider = sliders.querySelector('.m-navCategories__inner')
                        const flkty = Flickity.data(slider)
                        flkty.resize()
                        slider.classList.add('is-visible')
                    })
                }
            }, 20)
        })
    }
}

export default navCategories
