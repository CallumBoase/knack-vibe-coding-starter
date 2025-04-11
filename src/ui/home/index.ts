export function home() {
  const homeContainer = $("<div class='knack-home-container'></div>");
  
  // Add welcome header
  const header = $("<h2 class='knack-home-header'>Welcome to NCM360, Catherine.</h2>");
  homeContainer.append(header);
  
  // Create the grid of menu items
  const menuGrid = $("<div class='knack-menu-grid'></div>");
  
  // Define menu items with their icons, labels and placeholder hash URLs
  const menuItems = [
    { 
      icon: '<svg viewBox="0 0 24 24" width="40" height="40"><path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"/></svg>', 
      label: 'Schedule an Appointment',
      href: '#schedule'
    },
    { 
      icon: '<svg viewBox="0 0 24 24" width="40" height="40"><path fill="currentColor" d="M7,2V4H8V18A2,2 0 0,0 10,20H16A2,2 0 0,0 18,18V4H19V2H7M11,16H10V15H11V16M11,14H10V10H11V14M15,16H14V15H15V16M15,14H14V10H15V14Z"/></svg>', 
      label: 'Test Results',
      href: '#results'
    },
    { 
      icon: '<svg viewBox="0 0 24 24" width="40" height="40"><path fill="currentColor" d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z"/></svg>', 
      label: 'VideoVisitNOW',
      href: '#video'
    },
    { 
      icon: '<svg viewBox="0 0 24 24" width="40" height="40"><path fill="currentColor" d="M19,19H5V8H19M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M16.5,16.95L14,16V14H16.5V16.95Z"/></svg>', 
      label: 'Visits',
      href: '#visits'
    },
    { 
      icon: '<svg viewBox="0 0 24 24" width="40" height="40"><path fill="currentColor" d="M20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V8L12,13L20,8V18M20,6L12,11L4,6V6H20V6Z"/></svg>', 
      label: 'Messages',
      href: '#messages'
    },
    { 
      icon: '<svg viewBox="0 0 24 24" width="40" height="40"><path fill="currentColor" d="M4.22,11.29L11.29,4.22C13.64,1.88 17.43,1.88 19.78,4.22C22.12,6.56 22.12,10.36 19.78,12.71L12.71,19.78C10.36,22.12 6.56,22.12 4.22,19.78C1.88,17.43 1.88,13.64 4.22,11.29M5.64,12.71C4.59,13.75 4.24,15.24 4.6,16.57L10.59,10.59L14.83,14.83L18.36,11.29C19.93,9.73 19.93,7.2 18.36,5.64C16.8,4.07 14.27,4.07 12.71,5.64L5.64,12.71Z"/></svg>', 
      label: 'Medications',
      href: '#medications'
    }
  ];
  
  // Add menu items to the grid
  menuItems.forEach(item => {
    const menuItem = $(`
      <a href="${item.href}" class="knack-menu-item">
        <div class="knack-menu-icon">${item.icon}</div>
        <div class="knack-menu-label">${item.label}</div>
      </a>
    `);
    
    menuGrid.append(menuItem);
  });
  
  homeContainer.append(menuGrid);
  
  // Create a unique ID for the menu grid
  const menuGridId = 'knack-menu-grid-' + Math.floor(Math.random() * 100000);
  menuGrid.attr('id', menuGridId);
  
  // Add CSS
  const style = $(`
    <style>
      .knack-home-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0;
        font-family: 'Helvetica Neue', Arial, sans-serif;
      }
      
      .knack-home-header {
        color: #0D5475;
        margin-bottom: 20px;
        font-weight: 500;
        text-align: center;
      }
      
      .knack-menu-grid {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        gap: 16px;
        transition: all 0.3s ease;
      }
      
      .knack-menu-grid.sticky {
        position: fixed;
        top: 79.25px;
        left: 0;
        right: 0;
        z-index: 100;
        background-color: white;
        padding: 10px 10px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        max-width: none;
        gap: 8px;
        display: flex;
        align-items: center;
      }
      
      .knack-menu-grid.sticky .knack-menu-item {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .knack-menu-grid.sticky .knack-menu-icon {
        margin-bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .knack-menu-item {
        background-color: #f5f9fb;
        border-radius: 10px;
        padding: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        transition: all 0.3s ease;
        border: 1px solid #e5e5e5;
        text-decoration: none;
        flex: 1;
        min-width: 0;
      }
      
      .knack-menu-item:hover {
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        transform: translateY(-2px);
      }
      
      .knack-menu-icon {
        color: #0D5475;
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease;
      }
      
      .knack-menu-icon svg {
        transition: all 0.3s ease;
      }
      
      .knack-menu-label {
        text-align: center;
        font-size: 14px;
        color: #333;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        transition: all 0.3s ease;
      }
      
      /* Tablet breakpoint */
      @media (max-width: 992px) {
        .knack-menu-grid {
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .knack-menu-item {
          flex: 0 0 30%;
          margin-bottom: 16px;
        }
      }
      
      /* Mobile breakpoint */
      @media (max-width: 600px) {
        .knack-menu-grid {
          flex-wrap: wrap;
          gap: 8px;
          justify-content: space-between;
        }
        
        .knack-menu-item {
          flex: 0 0 calc(33.333% - 8px);
          margin-bottom: 8px;
        }
        
        /* Compact state when scrolled */
        .knack-menu-grid.compact {
          flex-wrap: nowrap;
          justify-content: space-between;
          background-color: #f5f9fb;
          padding: 5px 10px;
          margin: -20px -20px 20px -20px;
          border-bottom: 1px solid #e5e5e5;
        }
        
        .knack-menu-item.compact {
          padding: 5px;
          flex: 1;
          border: none;
          background: none;
          margin-bottom: 0;
        }
        
        .knack-menu-icon.compact svg {
          width: 24px;
          height: 24px;
        }
        
        .knack-menu-label.compact {
          display: none;
        }
      }
    </style>
  `);
  
  homeContainer.append(style);
  
  // Add simple scroll behavior
  const scrollScript = $(`
    <script>
      (function() {
        // Run after a slight delay to ensure DOM is ready
        setTimeout(function() {
          const menuGrid = document.getElementById('${menuGridId}');
          if (!menuGrid) return;
          
          const menuItems = menuGrid.querySelectorAll('.knack-menu-item');
          const menuIcons = menuGrid.querySelectorAll('.knack-menu-icon');
          const menuLabels = menuGrid.querySelectorAll('.knack-menu-label');
          
          // Store original position of menu for reference
          const menuRect = menuGrid.getBoundingClientRect();
          const menuOriginalTop = menuRect.top + window.pageYOffset;
          const headerHeight = 59.25; // Height of the sticky header
          
          // Calculate when to transform (when menu gets close to header)
          const transformThreshold = Math.max(10, menuOriginalTop - headerHeight - 20);
          
          window.addEventListener('scroll', function() {
            const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollPos > transformThreshold) {
              // Add sticky class
              menuGrid.classList.add('sticky');
              
              // Only apply compact style on mobile
              if (window.innerWidth <= 600) {
                // Add compact classes
                menuGrid.classList.add('compact');
                menuItems.forEach(item => item.classList.add('compact'));
                menuIcons.forEach(icon => icon.classList.add('compact'));
                menuLabels.forEach(label => label.classList.add('compact'));
              }
            } else {
              // Remove sticky and compact classes
              menuGrid.classList.remove('sticky');
              menuGrid.classList.remove('compact');
              menuItems.forEach(item => item.classList.remove('compact'));
              menuIcons.forEach(icon => icon.classList.remove('compact'));
              menuLabels.forEach(label => label.classList.remove('compact'));
            }
          });
        }, 300);
      })();
    </script>
  `);
  
  homeContainer.append(scrollScript);
  
  return homeContainer;
}
