function timelineOne(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#main",
            start: "top top",
            scrub: 1,
            markers: true,
            pin: true,
            // end: "+=6000",
            end: "bottom -750%"
        }
    });
    
    tl
        .to("#centerimg", {
            left: "50%",
            scale: 1,
            duration: 5,
            ease: Power1
        }, "first")
        .to("#overlay #hidden h1", {
            bottom: "0%",
            rotate: "0deg",
            duration: 2,
            ease: Power1
        }, "first")
        .to("#black", {
            x: 2000,
            scale: 1,
            duration: 5,
            stagger: 1,
            ease: Power1
        }, "second-half")
        .to("#centerimg h5", {
            // x: 530,
            right: "100%",
            scale: 1,
            duration: 5,
            ease: Power1
        }, "second-half")
        .to("#home #bgimg", {
            duration: 1,
            stagger: .1,
            ease: Power1,
            scrollTrigger: {
                scrub: 2,
            }
        }, "second")
        .to("#circle #btm img", {
            rotate: "-180deg",
            scale: 1,
            duration: 5,
            stagger: .3,
            ease: Power1
        }, "second")
        .to("#circle #top img", {
            scale: 1,
            duration: 5,
            stagger: .1,
            ease: Power1
        }, "second")
        .to("#cimage img", {
            scale: "0",
            duration: 5,
            stagger: .1,
            ease: Power1
        }, "second")
        .to("#centerimg h5", {
            opacity: 0,
            duration: 0.3,
            stagger: .1,
            ease: Power1
        }, "second")
        .to("#circle", {
            scale: 0.6,
            duration: 1,
            ease: Power1
        }, "second")
        .to("#overlay #hidden h1", {
            bottom: "-150%",
            duration: 8,
            ease: Power1
        }, "second")
        .to("#overlay #pinkc", {
            top: "50%",
            scale: 2,
            duration: 2,
            ease: Power1
        }, "second")
        .to("#overlay #pinkc", {
            opacity: 0,
            duration: 2,
            ease: Power1
        }, "third")
        .to("#home #bgimg", {
            scale: 1,
            duration: 5,
            stagger: .1,
            ease: Power1,
            scrollTrigger: {
                scrub: 2,
            }
        }, "third")
        .to("#smcircle", {
            scale: 0,
            duration: 3,
            ease: Power1
        }, "third")
        .to("#circle", {
            scale: 0,
            duration: 2,
            ease: Power1
        }, "third")
        .to("#overlay #hidden2 h1", {
            bottom: "5%",
            rotate: "0deg",
            duration: 5,
            ease: Power1
        }, "third")
        .to("#overlay #info", {
            bottom: "0%",
            duration: 5,
            ease: Power1
        }, "fourth")
        .to("#overlay #info", {
            // bottom: "0%",
            duration: 2,
            ease: Power1
        }, "fifth")
        .to("#overlay #info", {
            bottom: "100%",
            duration: 5,
            ease: Power1
        }, "sixth")
}

function timelineTwo(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#main2",
            start: "top top",
            scrub: 1,
            markers: true,
            pin: true,
            // end: "+=6000",
            end: "bottom -250%"
        }
    });

    tl2.to(".s-circle", {
            // y: "50%",
            duration: 3,
            ease: Power1
        })
}

timelineOne();
// timelineTwo();