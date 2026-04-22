(function (P) {
  P.initContact = function () {
    gsap.from('#contact-section .contact-icon-wrap', {
      y: -12, opacity: 0, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: '#contact-section', start: 'top 82%' },
    });

    gsap.from('#contact-section .contact-avail, #contact-section .contact-heading, #contact-section .contact-sub, #contact-section .contact-btns', {
      y: 20, opacity: 0, duration: 0.65, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: '#contact-section', start: 'top 78%' },
    });
  };
})(window.Portfolio);
