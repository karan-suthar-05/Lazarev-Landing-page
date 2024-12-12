// Locomotive setup start
gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#container"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#container", {
    scrollTop(value) {
        return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    }


});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
// locomotive setup end

// navigation animation
document.getElementById("links").addEventListener("mouseenter", function () {
    const navTl = gsap.timeline();
    navTl.to("#links .link-item .link-item-div", {
        height: "auto",
        duration: 0.5,
    });
    navTl.to("#links .link-item .link-item-div h5 span", {
        y: 0,
        stagger: {
            amount: 0.2
        }
    });

});
document.getElementById("links").addEventListener("mouseleave", function () {
    const navTl = gsap.timeline();
    navTl.to("#links .link-item .link-item-div", {
        height: 0,
        duration: 0.5,
    });
    navTl.to("#links .link-item .link-item-div h5 span", {
        y: "200%",
        stagger: {
            amount: 0.2
        }
    });
});
document.querySelector("#section1 #main-text h1 span").addEventListener("mouseenter", function () {
    gsap.to("#section1 #main-text h1 span svg path:nth-child(1)", {
        opacity: 0,
        duration: 0.4
    });
    gsap.to("#section1 #main-text h1 span svg path:nth-child(2)", {
        opacity: 1,
        duration: 0.4
    });
});
document.querySelector("#section1 #main-text h1 span").addEventListener("mouseleave", function () {
    gsap.to("#section1 #main-text h1 span svg path:nth-child(2)", {
        opacity: 0,
        duration: 0.4
    });
    gsap.to("#section1 #main-text h1 span svg path:nth-child(1)", {
        opacity: 1,
        duration: 0.4
    });
});

// section1 animation
// loading animation
function loadingAnimationSquareBox() {
    let sec1 = document.querySelector("#section1");
    let sections = document.querySelectorAll("#container > div:not(:first-child)");
    let nav = document.querySelector("nav");

    gsap.to(sec1, {
        transform: "scaleX(1) scaleY(1) translateY(0)",
        borderRadius: "0",
        duration: 3,
        ease: "power4.out"
    });
    gsap.to(nav, {
        transform: "scaleY(1)",
        delay: 2,
        duration: 0.5,
        ease: "power4.out"
    });
    gsap.from(sections, {
        opacity: 0,
        delay: 2,
        duration: 0.5,
        ease: "power4.out"
    });
    gsap.to("#container", {
        backgroundColor: "#111",
        delay: 2,
        duration: 0.5,
        ease: "power4.out"
    });
}
loadingAnimationSquareBox();
gsap.from("#section1 #main-text h1,#section1 p,#section1 #brands", {
    opacity: 0,
    delay: 1,
    duration: 2,
    stagger: {
        amount: 1
    },
    ease: "power4.out"
});
function graylineAnimation(target, trigger, top) {
    gsap.to(target, {
        width: "100%",
        duration: 2,
        scrollTrigger: {
            scroller: "#container",
            trigger: trigger,
            start: `top ${top}%`
        }
    });
}
graylineAnimation("#section2 .gray-line", "#section2", 60);






// section 2 
const rigthItems = document.querySelectorAll("#section2 #sec2-right .right-item");
rigthItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
        gsap.to(item.childNodes[5], {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power4.out"
        });
    });
});
rigthItems.forEach((item) => {
    item.addEventListener("mouseleave", function () {
        gsap.to(item.childNodes[5], {
            opacity: 0,
            scale: 0,
            duration: 0.5,
            ease: "power4.out"
        });
    });
});
rigthItems.forEach((item) => {
    item.addEventListener("mousemove", function (e) {
        gsap.to(item.childNodes[5], {
            x: e.x - item.getBoundingClientRect().x - 55,
            y: e.y - item.getBoundingClientRect().y - 50,
            ease: "power1.out"
        });
    });
});

const video = document.querySelector("#section3 video");
const playBtn = document.querySelector("#section3 #sec3-center-div #play-video-icon");
playBtn.addEventListener("click", function () {
    gsap.to(video, {
        opacity: 1,
        transform: "scaleX(1) scaleY(1)",
        borderRadius: "0",
        duration: 0.5,
        ease: "power3.out"
    });
    video.play();
});
video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
        opacity: 0,
        transform: "scaleX(0.2) scaleY(0)",
        borderRadius: "50px",
        duration: 0.5,
        ease: "power3.out"
    });
});

// section4
let sec4h1 = document.querySelectorAll("#section4 #sec4-left h1");
splitTextInSpan(sec4h1, " ");
gsap.from("#section4 #sec4-left h1 span", {
    opacity: 0,
    y: 80,
    duration: 1,
    stagger: {
        amount: 0.5
    },
    scrollTrigger: {
        scroller: "#container",
        trigger: "#section4",
        start: "top 50%",
    }
});


// section 5
const sec5right = document.querySelectorAll("#section5 .sec5-right");
sec5right.forEach((item) => {
    item.addEventListener("mouseenter", function () {
        gsap.to(item.childNodes[1], {

            scale: 1,
            duration: 0.5
        });
        item.childNodes[5].style.zIndex = 0;
        item.childNodes[5].load();
        item.childNodes[5].play();
    });
});
sec5right.forEach((item) => {
    item.addEventListener("mouseleave", function () {
        gsap.to(item.childNodes[1], {

            scale: 0,
            duration: 0.5
        });
        item.childNodes[5].style.zIndex = -1;
        item.childNodes[5].pause();
    });
});
sec5right.forEach((item) => {
    item.addEventListener("mousemove", function (e) {
        gsap.to(item.childNodes[1], {
            x: e.x - (item.getBoundingClientRect().left + item.childNodes[1].getBoundingClientRect().width / 2),
            y: e.y - (item.getBoundingClientRect().top + + item.childNodes[1].getBoundingClientRect().height / 2)
        });
    });
});
graylineAnimation("#section5 .sec5-left .gray-line", "#section5", 50);


// section6 animations
// button animation 
function splitTextInSpan(target, delemeter = '') {
    // pass heading tags which contains text inside
    target.forEach(item => {
        const text = item.textContent.split(delemeter);
        item.innerHTML = "";
        text.forEach((letter) => {
            let span = document.createElement("span");
            span.innerHTML = letter;
            item.appendChild(span);
        });
    });
}
function animateButton(target) {
    // Pass parent element which contains heading tags
    /*
        REQUIRE STRUCTURE FOR BUTTON TO ANIMATE 
        <a>
            // h5 and svg must be there in a tag.
            <div> // can have parent divs
                // two h5 is must
                <h5>text</h5>
                <h5>text</h5>
                </div>
                <div>
                // two svg is must
                <svg></svg>
                <svg></svg>
            </div>
        </a>
    */
    target.addEventListener("mouseenter", function () {
        const h5 = this.querySelectorAll("h5");
        const svgs = this.querySelectorAll("svg");
        gsap.to(this, {
            scale: 1.1,
            duration: 0.5,
            ease: "power3.out"
        });
        gsap.to(h5[0].childNodes, {
            y: "-50%",
            opacity: 0,
            transform: "scaleY(0)",
            duration: 0.5,
            stagger: {
                amount: 0.3
            },
            ease: "power3.out",
        });
        gsap.to(h5[1].childNodes, {
            y: "-50%",
            opacity: 1,
            transform: "scaleY(1)",
            duration: 0.5,
            stagger: {
                amount: 0.3
            },
            ease: "power3.out",
        });
        gsap.to(svgs[0], {
            y: "-30%",
            x: "30%",
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
        });
        gsap.to(svgs[1], {
            y: "-30%",
            left: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
        });

    });
    target.addEventListener("mouseleave", function () {
        const h5 = this.querySelectorAll("h5");
        const svgs = this.querySelectorAll("svg");
        gsap.to(this, {
            scale: 1,
            duration: 0.5,
            ease: "power3.out"
        });
        gsap.to(h5[0].childNodes, {
            y: 0,
            opacity: 1,
            transform: "scaleY(1)",
            duration: 0.5,
            stagger: {
                amount: 0.3
            },
            ease: "power3.out",
        });
        gsap.to(h5[1].childNodes, {
            y: 0,
            opacity: 0,
            transform: "scaleY(0)",
            duration: 0.5,
            stagger: {
                amount: 0.3
            },
            ease: "power3.out",
        });
        gsap.to(svgs[0], {
            y: 0,
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
        });
        gsap.to(svgs[1], {
            y: 0,
            left: "-30%",
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
        });
    });
}
let h5text = document.querySelectorAll("#section6 .sec6-left a #sec6-left-text h5");
splitTextInSpan(h5text);
let sec6button = document.querySelector("#section6 .sec6-left a");
animateButton(sec6button);
const detailsItem = document.querySelectorAll("#section6 #sec6-main .sec6-item .detail-item");
const details = document.querySelectorAll("#section6 #sec6-main .sec6-item");
details.forEach((item) => {

    item.addEventListener("click", function () {

        const target = item.querySelector("svg"); // Get the computed transform style

        // Get the current rotationX value
        const currentRotationX = gsap.getProperty(target, "rotateX");
        // Toggle rotationX between 0 and 180 degrees
        const newRotationX = currentRotationX === 180 ? 0 : 180;
        console.log(newRotationX);
        const summary = item.querySelector("summary");
        if (newRotationX === 180) {
            gsap.to(summary, {
                borderTop: "1px solid #fff",
            });
        }
        else {
            gsap.to(summary, {
                borderTop: "1px solid #333",
            });

        }
        gsap.to(target, {
            transform: `rotateX(${newRotationX}deg)`,
            duration: 0.5,
            ease: "power3.out"
        });

    });
});

detailsItem.forEach((item) => {
    item.addEventListener("mouseenter", function () {
        gsap.killTweensOf(item.childNodes[1]);
        gsap.set(item.childNodes[1], { y: '-100%' });
        gsap.to(item.childNodes[1], {
            y: 0,
            duration: 0.5,
            ease: "power3.out"
        });
        gsap.to(item, {
            borderTop: "1px solid #fff",
            duration: 0.2,
            ease: "power3.out"
        });
        const h2 = item.querySelector("h2");
        const svg = item.querySelector("svg");
        gsap.to(h2, {
            paddingLeft: "1vw",
            duration: 0.4,
            ease: "power3.out"
        });
        gsap.set(svg, { y: -20, opacity: 0 });
        gsap.to(svg, {
            marginRight: "1vw",
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power3.out"
        });
    });
});
detailsItem.forEach((item) => {
    item.addEventListener("mouseleave", function () {
        gsap.killTweensOf(item.childNodes[1]);
        gsap.to(item.childNodes[1], {
            y: "100%",
            duration: 0.5,
            ease: "power3.out"
        });
        gsap.to(item, {
            borderTop: "1px solid #333",
            duration: 0.2,
            ease: "power3.out"
        });
        const h2 = item.querySelector("h2");
        const svg = item.querySelector("svg");
        gsap.to(h2, {
            paddingLeft: "0",
            duration: 0.4,
            ease: "power3.out"
        });
        gsap.set(svg, { y: -20, opacity: 0 });
        gsap.to(svg, {
            marginRight: "0",
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power3.out"
        });
    });
});

// section 7
let sec7h5 = document.querySelectorAll("#section7 #sec7-left a #sec7-text h5");
splitTextInSpan(sec7h5);
let sec7Btn = document.querySelector("#section7 #sec7-left a");
animateButton(sec7Btn);

document.querySelectorAll("#section7 #sec7-bottom div .sec7-bottom-item").forEach((item) => {
    gsap.from(item, {
        transform: "translateX(0%)",
        scrollTrigger: {
            scroller: "#container",
            trigger: "#section7 #sec7-bottom",
            start: "top 80%",
            end: "top -40%",
            scrub: 1
        }
    });
});

// section8 
graylineAnimation("#section8 .gray-line", "#section8", 50);


// mobile menu 
const menu = document.querySelector("nav #menu");
const close = document.querySelector("nav #close");
const mobileMenuTl = gsap.timeline({ paused: true });
mobileMenuTl.to("nav #mobile-links", {
    transform: "translateX(0%)",
    duration: 0.7,
    ease: "power3.out"
});
menu.addEventListener("click", function () {
    mobileMenuTl.play();
});
close.addEventListener("click", function () {
    mobileMenuTl.reverse();
});

// mobile menu details svg animation
const mobileDetails = document.querySelectorAll(".mobile-links-item details summary");
mobileDetails.forEach((item => {
    item.addEventListener("click", function () {
        const svg = item.querySelector("svg");
        gsap.to(svg, {
            transform: !item.parentNode.open ? "rotateX(180deg)" : "rotateX(0)",
            duration: 0.5,
            ease: "power3.out"
        });
    })
}))