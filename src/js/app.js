import * as image from "./modules/webpSupport.js";
import * as mm from "./modules/mobileMenu.js";
import * as animation from "./modules/animation.js";
import * as mask from "./modules/maskedPhone.js";

image.isWebp();
mm.init();
animation.animate();
mask.init();
