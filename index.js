let ham = document.getElementById("ham");
let nav = document.getElementsByClassName("nav")[0];
let navlist_second = document.getElementsByClassName("nav-list-second")[0];

ham.addEventListener("click", () => {
    nav.classList.toggle("active-nav");
    navlist_second.classList.toggle("active-nav-list-second");
    if (nav.classList.contains("active-nav")) {
        ham.scr = "cross.svg";
    } else {
        ham.scr = "ham.svg";
    }
});

function showSection(sectionId) {
    console.log(`Showing section: ${sectionId}`); // Debug log
    // Hide all sections
   // const sections = document.querySelectorAll('.section');
   // sections.forEach(section => {
      //  section.classList.remove('active');
   // });
    
    // Show the selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Close mobile menu if open
    nav.classList.remove("active-nav");
    navlist_second.classList.remove("active-nav-list-second");
    
    // Scroll to the target section
    targetSection.scrollIntoView({ behavior: 'smooth' });
}

var typed = new Typed('#profession', {
      strings: ['Web Developer','Software Developer','Tester'],
      typeSpeed: 150,
      backSpeed:150,
      loop:true
    });
let htmlprog=document.getElementsByClassName("html-prog")[0];
let cssprog=document.getElementsByClassName("css-prog")[0];
let jsprog=document.getElementsByClassName("js-prog")[0];
let htmlvalue=document.getElementsByClassName("html-value")[0];
let cssvalue=document.getElementsByClassName("css-value")[0];
let jsvalue=document.getElementsByClassName("js-value")[0];
let h=0,c=0,j=0;
let htmlinterval = setInterval(() => {
    h++;
    htmlvalue.innerHTML = `${h}%`;
    htmlprog.style.background = `conic-gradient(hwb(251 25% 6% / 0.998) ${3.6*h}deg, #353434 0deg) `;
    if (h == 90) {
        clearInterval(htmlinterval);
    }
}, 50);
let cssinterval = setInterval(() => {
    c++;
    cssvalue.innerHTML = `${c}%`;
    cssprog.style.background = `conic-gradient(hwb(251 25% 6% / 0.998) ${3.6*c}deg, #353434 0deg) `;
    if (c == 70) {
        clearInterval(cssinterval);
    }
}, 50);
let jsinterval = setInterval(() => {
    j++;
    jsvalue.innerHTML = `${j}%`;
    jsprog.style.background = `conic-gradient(hwb(251 25% 6% / 0.998) ${3.6*j}deg, #353434 0deg) `;
    if (j == 70) {
        clearInterval(jsinterval);
    }
}, 50);
let reactprog=document.getElementsByClassName("inner-react-prog")[0];
let pythonprog=document.getElementsByClassName("inner-python-prog")[0];
let javaprog=document.getElementsByClassName("inner-java-prog")[0];
let phpprog=document.getElementsByClassName("inner-php-prog")[0];
let reactvalue=document.getElementsByClassName("react-value")[0];
let pythonvalue=document.getElementsByClassName("python-value")[0];
let javavalue=document.getElementsByClassName("java-value")[0];
let phpvalue=document.getElementsByClassName("php-value")[0];
let r=0,p=0,jav=0,ph=0;
let reactinterval = setInterval(() => {
    r++;
    reactvalue.innerHTML = `${r}%`;
    reactprog.style.width=`${60*(1/100)*r}vw`;
    if (r == 80) {
        clearInterval(reactinterval);
    }
}, 50);
let pythoninterval = setInterval(() => {
    p++;
    pythonvalue.innerHTML = `${p}%`;
    pythonprog.style.width=`${60*(1/100)*p}vw`;
    if (p == 75) {
        clearInterval(pythoninterval);
    }
}, 50);
let javainterval = setInterval(() => {
    jav++;
    javavalue.innerHTML = `${jav}%`;
    javaprog.style.width=`${60*(1/100)*jav}vw`;
    if (jav == 50) {
        clearInterval(javainterval);
    }
}, 50);
let phpinterval = setInterval(() => {
    ph++;
    phpvalue.innerHTML = `${ph}%`;
    phpprog.style.width=`${60*(1/100)*ph}vw`;
    if (ph == 85) {
        clearInterval(phpinterval);
    }
}, 50);
let t1=gsap.timeline();
t1.from(".nav",{
    x:-300,
    opacity:0,
    duration:0.5
})
t1.from(".left-nav",{
    y:-100,
    opacity:0,
    duration:0.5
})
t1.from(".list-items",{
    y:-60,
    opacity:0,
    duration:0.5,
    stagger:1
})
let t2= gsap.timeline();
t2.from(".line",{
    x:-80,
    opacity:0,
    duration:0.5,
    stagger:1
})
gsap.from("#logo",{
    x:100,
    opacity:0,
    duration:0.5
})
let t3=gsap.timeline();
t3.from(".heading",{
    x:-200,
    opacity:0,
    duration:0.5,
    scrollTrigger: {
        trigger: ".heading",
        scroller: "body",
        
        start: "top 80%",
        end: "top 60%",
        scrub: 2,
    }
})
t3.from(".about-details",{
    y:-200,
    opacity:0,
    duration:2,
    scrollTrigger: {
        trigger: ".box",
        scroller: "body",
        
        start: "top 75%",
        end: "top 60%",
        scrub: 2,
    }
})
t3.from(".box",{
    x:200,
    opacity:0,
    duration:0.5,
    stagger:1,
    scrollTrigger: {
        trigger: ".box",
        scroller: "body",
        
        start: "top 50%",
        end: "top 40%",
        scrub: 2,
    }
})
let t4=gsap.timeline();
t4.from(".heading-skill",{
    x:-200,
    opacity:0,
    duration:3,
    scrollTrigger: {
        trigger: ".heading-skill",
        scroller: "body",
        
        start: "top 80%",
        end: "top 60%",
        scrub: 2,
    }
})
t4.from(".prog",{
    x:200,
    opacity:0,
    rotate:360,
    duration:3,
    stagger:1,
    scrollTrigger: {
        trigger: ".prog",
        scroller: "body",
        
        start: "top 80%",
        end: "top 60%",
        scrub: 2,
    }
})
t4.from(".linear-prog",{
    x:-200,
    opacity:0,
    duration:3,
    stagger:1,
    scrollTrigger: {
        trigger: ".linear-prog",
        scroller: "body",
        start: "top 80%",
        end: "top 60%",
        scrub: 2,
    }
})
t4.from(".skill-content",{
    x:200,
    opacity:0,
    duration:3,
    stagger:1,
    scrollTrigger: {
        trigger: ".skill-content",
        scroller: "body",
        
        start: "top 80%",
        end: "top 60%",
        scrub: 2,
    }
})
let t5=gsap.timeline();
t5.from(".right-contact",{
    x:400,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger: ".right-contact",
        scroller: "body",
      
        start: "top 70%",
        end: "top 50%",
        scrub: 2,
    }
})
t5.from(".left-contact",{
    x:-500,
    opacity:0,
    duration:0.5,
    stagger:1,
    scrollTrigger: {
        trigger: ".left-contact",
        scroller: "body",
       
        start: "top 90%",
        end: "top 60%",
        scrub: 2,
    }
})

// Projects section animations - updated to come from right side
let t6=gsap.timeline();
t6.from(".heading-projects",{
    x:200,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger: ".heading-projects",
        scroller: "body",
        start: "top 80%",
        end: "top 60%",
        scrub: 2,
    }
})
t6.from(".project-card",{
    x:200,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger: {
        trigger: ".projects-container",
        scroller: "body",
        start: "top 80%",
        end: "top 60%",
        scrub: 2,
    }
})

// Contact form functionality
function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Create mailto link for sending email
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`;
    const mailtoLink = `mailto:amulya.ld@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Clear form after sending
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    
    alert('Opening your email client to send the message!');
}
