/*
 * Description of what this file is for
 *
 * @package  baukasten
 * @author David Hellmann [davidhellmann.com@gmail.com]
 * pageTitle
 */

const pageTitle = {
    cfg:  {
        name: 'pageTitle'
    },

    log(msg) {
        console.log(msg);
    },

    init() {
        this.log(`Init: ${this.cfg.name}`);
    }
};

export default pageTitle;
