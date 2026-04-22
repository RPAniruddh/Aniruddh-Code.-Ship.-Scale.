(function (P) {
  P.initFaq = function () {
    // Word-split all answer paragraphs
    document.querySelectorAll('#faq-section .faq-answer-inner').forEach(function (p) {
      p.innerHTML = p.innerHTML.replace(/(<[^>]+>|[^<\s]+)/g, function (token) {
        if (token.startsWith('<')) return token;
        return '<span class="fqw-wrap" style="overflow:hidden;display:inline-block;vertical-align:bottom;">' +
               '<span class="fqw" style="display:inline-block;transform:translateY(110%);">' + token + '</span></span> ';
      });
    });

    function animateWords(inner) {
      gsap.to(inner.querySelectorAll('.fqw'), {
        y: '0%', duration: 0.45, stagger: 0.018, ease: 'power3.out', delay: 0.15,
      });
    }

    function resetWords(inner) {
      gsap.set(inner.querySelectorAll('.fqw'), { y: '110%' });
    }

    document.querySelectorAll('#faq-section .faq-item').forEach(function (item) {
      var question = item.querySelector('.faq-question');
      var answer   = item.querySelector('.faq-answer');
      var inner    = item.querySelector('.faq-answer-inner');

      if (item.classList.contains('open')) {
        answer.style.maxHeight = inner.scrollHeight + 'px';
        animateWords(inner);
      }

      question.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');

        document.querySelectorAll('#faq-section .faq-item').forEach(function (el) {
          el.classList.remove('open');
          el.querySelector('.faq-answer').style.maxHeight = '0';
          resetWords(el.querySelector('.faq-answer-inner'));
        });

        if (!isOpen) {
          item.classList.add('open');
          answer.style.maxHeight = inner.scrollHeight + 'px';
          animateWords(inner);
        }
      });
    });

    // Heading reveal
    gsap.from('#faq-section .faq-tag, #faq-section .faq-heading, #faq-section .faq-cta-label, #faq-section .faq-cta-link', {
      y: 20, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: '#faq-section', start: 'top 82%' },
    });

    gsap.utils.toArray('#faq-section .faq-item').forEach(function (item, i) {
      gsap.from(item, {
        y: 16, opacity: 0, duration: 0.55, ease: 'power3.out', delay: i * 0.06,
        scrollTrigger: { trigger: item, start: 'top 90%' },
      });
    });
  };
})(window.Portfolio);
