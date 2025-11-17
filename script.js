document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.show-card-btn');
  const cards = document.querySelectorAll('.timeline-card');

  buttons.forEach((button, index) => {
    // Show card on click
    button.addEventListener('click', () => {
      cards.forEach(card => card.classList.remove('active')); // Hide all cards
      if (cards[index]) {
        cards[index].classList.add('active'); // Show the corresponding card
      }
    });

    // Show card on hover
    button.addEventListener('mouseenter', () => {
      cards.forEach(card => card.classList.remove('active')); // Hide all cards
      if (cards[index]) {
        cards[index].classList.add('active'); // Show the corresponding card
      }
    });
  });

  // Optional: Hide all cards when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.show-card-btn') && !e.target.closest('.timeline-card')) {
      cards.forEach(card => card.classList.remove('active'));
    }
  });

  // Debugging: Log button and card index
  console.log('Buttons:', buttons);
  console.log('Cards:', cards);

  function activateDesktopTimeline() {
    const events = document.querySelectorAll('.timeline-event-horizontal');
    events.forEach(ev => {
      ev.addEventListener('mouseenter', function() {
        events.forEach(e => e.classList.remove('active'));
        this.classList.add('active');
      });
      ev.addEventListener('click', function() {
        events.forEach(e => e.classList.remove('active'));
        this.classList.add('active');
      });
      ev.addEventListener('focus', function() {
        events.forEach(e => e.classList.remove('active'));
        this.classList.add('active');
      });
      ev.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          events.forEach(e => e.classList.remove('active'));
          this.classList.add('active');
        }
      });
    });

    // Ensure the first event is active by default
    if (events.length > 0) {
      events[0].classList.add('active');
    }
  }

  function activateMobileTimeline() {
    const events = document.querySelectorAll('.timeline-event-vertical');
    events.forEach(ev => {
      ev.addEventListener('click', function() {
        events.forEach(e => e.classList.remove('active'));
        this.classList.add('active');
      });
      ev.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          events.forEach(e => e.classList.remove('active'));
          this.classList.add('active');
        }
      });
    });

    // Ensure the first event is active by default
    if (events.length > 0) {
      events[0].classList.add('active');
    }
  }

  function setupTimeline() {
    const isDesktop = window.innerWidth >= 1301;
    if (isDesktop) {
      activateDesktopTimeline();
    } else {
      activateMobileTimeline();
    }
  }

  setupTimeline();
  window.addEventListener('resize', setupTimeline);
});