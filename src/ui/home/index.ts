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

// Style definitions
const CONTAINER_STYLES = {
  padding: '20px',
  maxWidth: '1200px',
  margin: '0 auto',
  fontFamily: 'Arial, sans-serif'
};

const WELCOME_STYLES = {
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '30px',
  textAlign: 'center',
  padding: '20px 0',
  transition: 'opacity 0.3s ease'
};

const GRID_STYLES = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)', // Default for mobile (< 768px)
  gap: '20px',
  width: '100%',
  backgroundColor: 'white',
  borderRadius: '12px',
  padding: '20px',
  boxSizing: 'border-box',
  transition: 'box-shadow 0.3s ease, grid-template-columns 0.3s ease, gap 0.3s ease, padding 0.3s ease'
};

const NAV_ITEM_STYLES = {
  base: {
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
  },
  hover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
  },
  icon: {
    marginBottom: '15px',
    color: '#555',
    transition: 'all 0.3s ease'
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    transition: 'all 0.3s ease'
  }
};

const STICKY_GRID_STYLES = {
  position: 'fixed',
  // The top value will be set dynamically based on screen size
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  zIndex: 100
};

const SPACER_STYLES = {
  width: '100%',
  display: 'none'
};

export function home() {
  // Create components
  const $homeContainer = createHomeContainer();
  const $welcomeMessage = createWelcomeMessage();
  const $gridContainer = createNavigationGrid();
  
  // Assemble the page
  $homeContainer.append($welcomeMessage).append($gridContainer);
  
  // Setup dynamic behavior
  setupScrollBehavior($welcomeMessage, $gridContainer);
  
  return $homeContainer;
}

function createHomeContainer() {
  return $("<div id='ncm-home-container'></div>").css(CONTAINER_STYLES);
}

function createWelcomeMessage() {
  return $("<div id='welcome-message'></div>")
    .text("Welcome to NCM360, Catherine")
    .css(WELCOME_STYLES);
}

function createNavigationGrid() {
  const $gridContainer = $("<div id='grid-container'></div>").css(GRID_STYLES);
  
  // Create and add each navigation box
  NAV_ITEMS.forEach(item => {
    const $box = createNavigationItem(item);
    $gridContainer.append($box);
  });
  
  return $gridContainer;
}

function createNavigationItem(item: { icon: string, text: string, url: string }) {
  const $box = $("<a></a>")
    .attr('href', item.url)
    .css(NAV_ITEM_STYLES.base)
    .hover(
      function(this: any) { 
        $(this).css(NAV_ITEM_STYLES.hover); 
      },
      function(this: any) { 
        $(this).css({
          transform: '',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }); 
      }
    );

  const $icon = $(item.icon).css(NAV_ITEM_STYLES.icon);
  
  const $text = $("<div class='nav-text'></div>")
    .text(item.text)
    .css(NAV_ITEM_STYLES.text);

  return $box.append($icon).append($text);
}

function setupScrollBehavior($welcomeMessage: JQuery, $gridContainer: JQuery) {
  // State variables
  let isSticky = false;
  let gridContainerHeight = 0;
  let transitionInProgress = false;

  // Initialize measurements when document is ready
  $(document).ready(function() {
    setTimeout(function() {
      updateSpacerHeight();
      setupEventListeners();
      updateGridLayout();
      setupIntersectionObserver();
      
      // Add transition end event listener
      $gridContainer.on('transitionend', function() {
        transitionInProgress = false;
      });
    }, 200);
  });

  function updateSpacerHeight() {
    gridContainerHeight = $gridContainer.outerHeight() || 0;
    $('#grid-spacer').css('height', gridContainerHeight + 'px');
  }

  function createSpacer() {
    // Create a spacer element for when grid is fixed
    const $spacer = $("<div id='grid-spacer'></div>").css({
      ...SPACER_STYLES,
      height: gridContainerHeight + 'px'
    });
    
    $gridContainer.before($spacer);
  }

  function setupEventListeners() {
    // Create spacer element
    createSpacer();
    
    // Create sentinel element for intersection observer
    const $sentinel = $("<div id='grid-sentinel'></div>").css({
      position: 'absolute',
      height: '1px',
      width: '100%',
      visibility: 'hidden',
      pointerEvents: 'none'
    });
    $gridContainer.after($sentinel);
    
    // Handle scroll events for welcome message fade only
    $(window).on('scroll', handleWelcomeFade);
    
    // Update measurements on window resize
    $(window).on('resize', function() {
      // Update spacer height on resize
      if (!isSticky) {
        updateSpacerHeight();
        updateGridLayout();
      }
      // Reposition sentinel
      positionSentinel();
    });
  }

  function positionSentinel() {
    // Place sentinel at position where we want grid to become sticky
    // (50px from the bottom of the viewport when grid is in normal position)
    const viewportHeight = $(window).height();
    const sentinelPosition = $gridContainer.offset()?.top + 
                            $gridContainer.outerHeight() -
                            viewportHeight + 50;
    
    $('#grid-sentinel').css('top', sentinelPosition + 'px');
  }

  function setupIntersectionObserver() {
    if (!window.IntersectionObserver) {
      // Fallback for browsers that don't support IntersectionObserver
      $(window).on('scroll', handleLegacyStickyBehavior);
      return;
    }
    
    // Position the sentinel element
    positionSentinel();
    
    // Create the observer
    const options = {
      threshold: [0, 1]
    };
    
    const observer = new IntersectionObserver((entries) => {
      // Skip if transition is already in progress
      if (transitionInProgress) return;
      
      const entry = entries[0];
      
      // If sentinel is intersecting (visible), remove sticky state
      if (entry.isIntersecting && isSticky) {
        transitionInProgress = true;
        revertGridToNormal();
      } 
      // If sentinel is not intersecting (not visible) and we've scrolled, add sticky state
      else if (!entry.isIntersecting && !isSticky && $(window).scrollTop() > 0) {
        transitionInProgress = true;
        makeGridSticky();
      }
    }, options);
    
    // Start observing the sentinel
    const sentinelElement = document.getElementById('grid-sentinel');
    if (sentinelElement) {
      observer.observe(sentinelElement);
    }
  }

  function handleLegacyStickyBehavior() {
    // Fallback function for older browsers
    const scrollTop = $(window).scrollTop() || 0;
    const triggerPoint = $('#grid-sentinel').offset()?.top - $(window).height();
    
    if (scrollTop > triggerPoint && !isSticky) {
      transitionInProgress = true;
      makeGridSticky();
    } else if (scrollTop <= triggerPoint && isSticky) {
      transitionInProgress = true;
      revertGridToNormal();
    }
  }

  function handleWelcomeFade() {
    const scrollTop = $(window).scrollTop() || 0;
    
    if (scrollTop > 50) {
      const opacity = Math.max(0, 1 - scrollTop / 150);
      $welcomeMessage.css('opacity', opacity);
    } else {
      $welcomeMessage.css('opacity', 1);
    }
  }

  function updateGridLayout() {
    // Only apply this when not sticky
    if (!isSticky) {
      if (window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT})`).matches) {
        // Desktop: 3 columns
        $gridContainer.css('gridTemplateColumns', 'repeat(3, 1fr)');
      } else {
        // Mobile: 2 columns
        $gridContainer.css('gridTemplateColumns', 'repeat(2, 1fr)');
      }
    }
  }

  function makeGridSticky() {
    // Switch to fixed position
    isSticky = true;
    
    // Determine if we're on mobile or desktop
    const isMobile = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT})`).matches;
    const headerHeight = isMobile ? HEADER_HEIGHTS.mobile : HEADER_HEIGHTS.desktop;
    
    $gridContainer.css({
      ...STICKY_GRID_STYLES,
      top: headerHeight,
      left: '0',
      width: '100%',
      maxWidth: '100%',
      gridTemplateColumns: `repeat(${NAV_ITEMS.length}, 1fr)`, // Always 1 row of 6 items
      gap: '8px',
      padding: '8px 20px'
    });
    
    // Resize spacer to match compact grid height (48px + padding)
    const compactGridHeight = 48 + 16 + 120; // height + padding + adjustment for content position
    $('#grid-spacer').css('height', compactGridHeight + 'px').show();
    
    // Hide text completely and reduce height of nav items
    $gridContainer.find('.nav-text').hide();
    $gridContainer.find('a').css({
      height: '48px',
      padding: '8px',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%'
    });
    
    // Resize and center icons
    $gridContainer.find('svg').css({
      width: '24px',
      height: '24px',
      margin: '0'
    });
  }

  function revertGridToNormal() {
    // Revert to normal flow
    isSticky = false;
    $gridContainer.css({
      position: 'static',
      top: 'auto',
      left: 'auto',
      width: '100%',
      boxShadow: 'none',
      gap: '20px',
      padding: '20px'
    });
    
    // Apply the correct grid layout based on screen size
    updateGridLayout();
    
    $('#grid-spacer').hide();
    
    // Restore text on buttons
    $gridContainer.find('.nav-text').show();
    $gridContainer.find('a').css({
      height: '180px',
      padding: '20px',
      flexDirection: 'column',
      justifyContent: 'center',
      width: ''
    });
    
    // Restore icon size
    $gridContainer.find('svg').css({
      width: '48px',
      height: '48px',
      marginBottom: '15px'
    });
    
    // Update spacer height after transition
    setTimeout(updateSpacerHeight, 300);
  }
}
