import * as image from "./modules/webpSupport.js";
import * as mm from "./modules/mobileMenu.js";
import * as animation from "./modules/animation.js";
import * as mask from "./modules/maskedPhone.js";
import * as slider from "./modules/slider.js";
import * as sliderCompanies from "./modules/sliderCompanies.js";
import * as fixedNav from "./modules/fixedNav.js";
import * as tabs from "./modules/tabs.js";
import * as modal from "./modules/modal.js";

image.isWebp();
mm.init();
animation.animate();
mask.init();
slider.init();
sliderCompanies.init();
fixedNav.init();
tabs.init();
modal.init();
