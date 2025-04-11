export function home() {
  // Create the container for the home page
  const $homeContainer = $("<div id='ncm-home-container'></div>").css({
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif'
  });

  // Welcome message
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
  
  // Create grid container for the boxes
  const $gridContainer = $("<div id='grid-container'></div>").css({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxSizing: 'border-box',
    transition: 'box-shadow 0.3s ease'
  });

  // Define the navigation items
  const navItems = [
    { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>', text: 'Book an appointment', url: '#book-appointment' },
    { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>', text: 'My Profile', url: '#profile' },
    { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>', text: 'Messages', url: '#messages' },
    { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>', text: 'Documents', url: '#documents' },
    { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>', text: 'Help Center', url: '#help' },
    { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>', text: 'Security', url: '#security' }
  ];

  // Create and add each navigation box
  navItems.forEach(item => {
    const $box = $("<a></a>").attr('href', item.url).css({
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
    }).hover(
      function(this: any) { $(this).css('transform', 'translateY(-5px)').css('box-shadow', '0 10px 15px rgba(0, 0, 0, 0.1)'); },
      function(this: any) { $(this).css('transform', '').css('box-shadow', '0 4px 6px rgba(0, 0, 0, 0.1)'); }
    );

    const $icon = $(item.icon).css({
      marginBottom: '15px',
      color: '#555',
      transition: 'all 0.3s ease'
    });
    
    const $text = $("<div class='nav-text'></div>").text(item.text).css({
      textAlign: 'center',
      fontWeight: 'bold',
      transition: 'opacity 0.3s ease'
    });

    $box.append($icon).append($text);
    $gridContainer.append($box);
  });

  // Add everything to the container
  $homeContainer.append($welcomeMessage).append($gridContainer);
  
  // Store initial positions and dimensions
  let isSticky = false;
  let gridWidth = 0;
  let gridLeft = 0;
  let gridContainerHeight = 0;

  // Initialize measurements when document is ready
  $(document).ready(function() {
    setTimeout(function() {
      gridWidth = $gridContainer.outerWidth() || 0;
      gridLeft = $gridContainer.offset()?.left || 0;
      gridContainerHeight = $gridContainer.outerHeight() || 0;
      
      // Create a clone of the grid for spacing when fixed
      const $spacer = $("<div id='grid-spacer'></div>").css({
        height: gridContainerHeight + 'px',
        width: '100%',
        display: 'none'
      });
      
      $gridContainer.before($spacer);
      
      // Handle scroll events
      $(window).on('scroll', function() {
        const scrollTop = $(window).scrollTop() || 0;
        
        // Fade welcome message
        if (scrollTop > 50) {
          const opacity = Math.max(0, 1 - scrollTop / 150);
          $welcomeMessage.css('opacity', opacity);
        } else {
          $welcomeMessage.css('opacity', 1);
        }
        
        // Simple fixed position toggle at 200px threshold
        if (scrollTop > 200 && !isSticky) {
          // Switch to fixed position
          isSticky = true;
          $gridContainer.css({
            position: 'fixed',
            top: '110px',
            left: gridLeft + 'px',
            width: gridWidth + 'px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 100
          });
          $('#grid-spacer').show();
          
          // Hide text on buttons
          $gridContainer.find('.nav-text').css('opacity', 0);
          $gridContainer.find('a').css('height', '100px');
        } 
        else if (scrollTop <= 200 && isSticky) {
          // Revert to normal flow
          isSticky = false;
          $gridContainer.css({
            position: 'static',
            top: 'auto',
            left: 'auto',
            width: '100%',
            boxShadow: 'none'
          });
          $('#grid-spacer').hide();
          
          // Restore text on buttons
          $gridContainer.find('.nav-text').css('opacity', 1);
          $gridContainer.find('a').css('height', '180px');
        }
      });
      
      // Update measurements on window resize
      $(window).on('resize', function() {
        // Only update measurements if not in sticky mode
        if (!isSticky) {
          gridWidth = $gridContainer.outerWidth() || 0;
          gridLeft = $gridContainer.offset()?.left || 0;
        }
        // Always update height for spacer
        gridContainerHeight = $gridContainer.outerHeight() || 0;
        $('#grid-spacer').css('height', gridContainerHeight + 'px');
      });
    }, 200);
  });

  return $homeContainer;
}
