// Configuration
const NAV_ITEMS = [
  { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>', text: 'Book an appointment', url: '#book-appointment' },
  { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>', text: 'My Profile', url: '#profile' },
  { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>', text: 'Messages', url: '#messages' },
  { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>', text: 'Documents', url: '#documents' },
  { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>', text: 'Help Center', url: '#help' },
  { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>', text: 'Security', url: '#security' }
];

// Header height configuration
const HEADER_HEIGHTS = {
  desktop: '110px',
  mobile: '59.25px'
};

// Mobile breakpoint
const MOBILE_BREAKPOINT = '768px';

// For TypeScript support with ScrollMagic
declare const ScrollMagic: any;

export function home() {
  // Create container
  const $homeContainer = $("<div id='ncm-home-container'></div>").css({
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    padding: '20px'
  });
  
  // Create welcome message
  const $welcomeMessage = $("<div id='welcome-message'></div>")
    .text("Welcome to NCM360, Catherine")
    .css({
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '30px',
      textAlign: 'center',
      padding: '20px 0',
      transition: 'opacity 0.3s ease'
    });
  
  // 1. Create normal navigation grid
  const $normalNav = createNormalNavigation();

  // 2. Create sticky navigation (initially hidden)
  const $stickyNav = createStickyNavigation();
  
  // 3. Create content area for demo
  const $contentPlaceholder = $("<div id='content-placeholder'></div>")
    .html("<p style='padding: 20px 0;'>This is where the main page content would go...</p>".repeat(10))
    .css({
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '12px'
    });
  
  // Assemble the page
  $homeContainer.append($welcomeMessage).append($normalNav).append($contentPlaceholder);
  
  // Add the sticky navigation to the body (outside the container)
  $("body").append($stickyNav);
  
  // Add styles for the navigation
  addNavStyles();
  
  // Set up ScrollMagic when document is ready
  $(document).ready(function() {
    setTimeout(function() {
      initScrollBehavior($welcomeMessage, $normalNav, $stickyNav);
    }, 100);
  });
  
  return $homeContainer;
}

// Create the normal grid navigation
function createNormalNavigation() {
  const $normalNav = $("<div id='normal-nav'></div>").css({
    display: 'grid',
    gridTemplateColumns: window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT})`).matches ? 
      'repeat(3, 1fr)' : 'repeat(2, 1fr)',
    gap: '20px',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxSizing: 'border-box'
  });
  
  // Add navigation items
  NAV_ITEMS.forEach(item => {
    const $box = $("<a></a>")
      .attr('href', item.url)
      .css({
        backgroundColor: '#f5f5f7',
        borderRadius: '12px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        color: '#333',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        height: '180px',
        cursor: 'pointer'
      })
      .hover(
        function(this: HTMLElement) { 
          $(this).css({
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
          }); 
        },
        function(this: HTMLElement) { 
          $(this).css({
            transform: '',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }); 
        }
      );

    const $icon = $(item.icon).css({
      marginBottom: '15px',
      color: '#555',
      width: '48px',
      height: '48px'
    });
    
    const $text = $("<div class='nav-text'></div>")
      .text(item.text)
      .css({
        textAlign: 'center',
        fontWeight: 'bold'
      });

    $box.append($icon).append($text);
    $normalNav.append($box);
  });
  
  // Handle responsive layout
  $(window).on('resize', function() {
    if (window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT})`).matches) {
      // Desktop: 3 columns
      $normalNav.css('gridTemplateColumns', 'repeat(3, 1fr)');
    } else {
      // Mobile: 2 columns
      $normalNav.css('gridTemplateColumns', 'repeat(2, 1fr)');
    }
  });
  
  return $normalNav;
}

// Create the sticky navigation bar
function createStickyNavigation() {
  // Get header height
  const headerHeight = getHeaderHeight();
  
  // Create container
  const $stickyNav = $("<div id='sticky-nav'></div>").css({
    position: 'fixed',
    top: headerHeight + 'px',
    left: '0',
    width: '100%',
    backgroundColor: 'white',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    zIndex: 100,
    opacity: 0,
    transform: 'translateY(-20px)',
    pointerEvents: 'none', // Initially disable interactions
    padding: '8px 20px',
    boxSizing: 'border-box'
  });
  
  // Create the row container
  const $rowContainer = $("<div class='sticky-row'></div>").css({
    display: 'grid',
    gridTemplateColumns: `repeat(${NAV_ITEMS.length}, 1fr)`,
    gap: '8px',
    maxWidth: '1200px',
    margin: '0 auto'
  });
  
  // Add navigation items
  NAV_ITEMS.forEach(item => {
    const $box = $("<a></a>")
      .attr('href', item.url)
      .css({
        backgroundColor: '#f5f5f7',
        borderRadius: '8px',
        padding: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        color: '#333',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        height: '48px',
        cursor: 'pointer'
      })
      .hover(
        function(this: HTMLElement) { 
          $(this).css({
            backgroundColor: '#efeff2',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }); 
        },
        function(this: HTMLElement) { 
          $(this).css({
            backgroundColor: '#f5f5f7',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }); 
        }
      );

    // Create smaller icon
    const $icon = $(item.icon)
      .css({
        width: '32px',
        height: '32px',
        color: '#555'
      });

    $box.append($icon);
    $rowContainer.append($box);
  });
  
  $stickyNav.append($rowContainer);
  
  // Update position on resize
  $(window).on('resize', function() {
    const newHeaderHeight = getHeaderHeight();
    $stickyNav.css('top', newHeaderHeight + 'px');
    $rowContainer.css('gap', '8px');
    $stickyNav.css('padding', '8px 20px');
  });
  
  return $stickyNav;
}

// Add styles for both navigations
function addNavStyles() {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    #sticky-nav {
      opacity: 0;
      transform: translateY(-20px);
      transition: transform 0.4s ease, opacity 0.4s ease;
      will-change: transform, opacity;
      pointer-events: none;
    }
    
    #sticky-nav.visible {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
    
    @media (max-width: ${MOBILE_BREAKPOINT}) {
      #sticky-nav .sticky-row {
        gap: 4px;
      }
      
      #sticky-nav .sticky-row a {
        padding: 4px;
      }
    }
  `;
  document.head.appendChild(styleElement);
}

// Initialize ScrollMagic controller and scenes
function initScrollBehavior($welcomeMessage: JQuery, $normalNav: JQuery, $stickyNav: JQuery) {
  // Initialize ScrollMagic
  const controller = new ScrollMagic.Controller();
  
  // Welcome message fade scene
  new ScrollMagic.Scene({
    triggerElement: '#welcome-message',
    duration: 150,
    offset: 50
  })
  .on("progress", function(event: any) {
    const opacity = Math.max(0, 1 - event.progress);
    $welcomeMessage.css('opacity', opacity);
  })
  .addTo(controller);
  
  // Calculate trigger point
  const headerHeight = getHeaderHeight();
  
  // Show/hide sticky navigation - important changes here
  let stickyVisible = false;
  
  const stickyScene = new ScrollMagic.Scene({
    triggerElement: '#normal-nav',
    triggerHook: 0,
    offset: -headerHeight
  })
  .on('enter', function() {
    console.log('Showing sticky navigation');
    stickyVisible = true;
    $stickyNav.addClass('visible');
  })
  .on('leave', function() {
    console.log('Hiding sticky navigation');
    stickyVisible = false;
    $stickyNav.removeClass('visible');
  })
  .addTo(controller);
  
  // Add additional scroll handler for extra reliability
  $(window).on('scroll', function() {
    const normalNavTop = $normalNav.offset()?.top || 0;
    const scrollTop = $(window).scrollTop() || 0;
    
    // Check if we've scrolled past the navigation
    if (scrollTop + headerHeight >= normalNavTop && !stickyVisible) {
      stickyVisible = true;
      $stickyNav.addClass('visible');
    } else if (scrollTop + headerHeight < normalNavTop && stickyVisible) {
      stickyVisible = false;
      $stickyNav.removeClass('visible');
    }
  });
  
  // Update on resize
  $(window).on('resize', function() {
    const newHeaderHeight = getHeaderHeight();
    $stickyNav.css('top', newHeaderHeight + 'px');
    stickyScene.offset(-newHeaderHeight);
    controller.update(true);
  });
}

// Get header height based on screen size
function getHeaderHeight(): number {
  const isMobile = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT})`).matches;
  const headerHeight = isMobile ? 
    parseInt(HEADER_HEIGHTS.mobile) : 
    parseInt(HEADER_HEIGHTS.desktop);
  
  return headerHeight;
}
