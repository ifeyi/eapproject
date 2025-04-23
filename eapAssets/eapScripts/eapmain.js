let eapOffsetBtn = document.getElementById("eapOffsetBtn");
let eapfloatingnav = document.getElementById("eapfloatingnav");

eapOffsetBtn.addEventListener('click', () => {
    eapfloatingnav.classList.toggle("eapOffsetMenu");
})

// ------ Interactive Map Functionality ------
document.addEventListener('DOMContentLoaded', function() {
    const mapRegions = document.querySelectorAll('.eapMapRegionArea');
    const mapPins = document.querySelectorAll('.eapMapPin');
    const zoneInfos = document.querySelectorAll('.eapMapZoneInfo');
    const defaultZoneInfo = document.getElementById('zone-info-default');
    
    // Function to display zone info
    function showZoneInfo(zoneId) {
        // Hide all zone infos
        zoneInfos.forEach(info => {
            info.classList.add('eapDisplayNone');
        });
        
        // Show the selected zone info
        const targetInfo = document.getElementById(`zone-info-${zoneId}`);
        
        if(targetInfo) {
            targetInfo.classList.remove('eapDisplayNone');
        } else {
            // If no specific zone info found, show default
            if(defaultZoneInfo) {
                defaultZoneInfo.classList.remove('eapDisplayNone');
            }
        }
    }
    
    // Add click events to regions
    if(mapRegions && mapRegions.length > 0) {
        mapRegions.forEach(region => {
            // Extract region id from class or data attribute
            region.addEventListener('click', function() {
                const regionClasses = this.classList;
                let zoneId = '';
                
                // Check if it contains "maroua" in the path
                if(this.parentNode.querySelector('#pin-maroua')) {
                    zoneId = 'maroua';
                } else if(this.parentNode.querySelector('#pin-mokolo')) {
                    zoneId = 'mokolo';
                } else if(this.parentNode.querySelector('#pin-mifi')) {
                    zoneId = 'mifi';
                } else if(this.parentNode.querySelector('#pin-doume')) {
                    zoneId = 'doume';
                }
                
                if(zoneId) {
                    showZoneInfo(zoneId);
                }
            });
        });
    }
    
    // Add click events to pins
    if(mapPins && mapPins.length > 0) {
        mapPins.forEach(pin => {
            pin.addEventListener('click', function() {
                const zoneId = this.id.replace('pin-', '');
                showZoneInfo(zoneId);
            });
        });
    }
});// Main JavaScript for EAP website

// ------ Navigation & Menu Toggle Functionality ------
const eapNavButton = document.querySelector("#eapNavButton");
const eapMenuOpened = document.querySelector("#eapMenuOpened");
const eapX = document.querySelector("#eapX");
const eapY = document.querySelector("#eapY");
const eapZ = document.querySelector("#eapZ");
const eapMenuIcon = document.querySelector("#eapMenuIcon");
const eapHeader = document.querySelector('#eapHeader');
const eapToTop = document.querySelector('#eapTotop');

// Menu toggle
if(eapNavButton) {
    eapNavButton.addEventListener("click", () => {
        eapMenuIcon.classList.toggle("eapMenuIconOpen");
        eapMenuOpened.classList.toggle("eapNavShown");
        eapHeader.classList.toggle("headerStyle");

        eapX.classList.toggle("collapse");
        eapY.classList.toggle("collapse");
        eapZ.classList.toggle("collapse"); 
        
        setTimeout(() => {
            eapY.classList.toggle("eapDisplayNone");
            eapX.classList.toggle("rotate30");
            eapZ.classList.toggle("rotate150");
        }, 70);
        
        setTimeout(() => {
            eapX.classList.toggle("rotate45");
            eapX.classList.toggle("xhover");
            eapZ.classList.toggle("rotate135"); 
        }, 120);
    });
}

// ------ Smooth Scrolling for Anchor Links ------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ------ Fixed header and back-to-top button on scroll ------
window.addEventListener('scroll', function(){
    // Fixed header
    if (eapHeader) {
        eapHeader.classList.toggle("eapFixed", window.scrollY > 100);
    }
    
    // Back to top button
    if (eapToTop) {
        eapToTop.classList.toggle("show", window.scrollY > 300);
    }
});

// Interactive Map Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mapRegions = document.querySelectorAll('[id^="region-"]');
    const mapPins = document.querySelectorAll('.eapMapPin');
    const zoneInfos = document.querySelectorAll('.eapMapZoneInfo');
    const defaultZoneInfo = document.getElementById('zone-info-default');
    
    // Function to display zone info
    function showZoneInfo(zoneId) {
        // Hide all zone infos
        zoneInfos.forEach(info => {
            info.classList.add('eapDisplayNone');
        });
        
        // Show the selected zone info
        const targetInfo = document.getElementById(`zone-info-${zoneId}`);
        
        if(targetInfo) {
            targetInfo.classList.remove('eapDisplayNone');
        } else {
            // If no specific zone info found, show default
            if(defaultZoneInfo) {
                defaultZoneInfo.classList.remove('eapDisplayNone');
            }
        }
    }
    
    // Add click events to regions
    if(mapRegions && mapRegions.length > 0) {
        mapRegions.forEach(region => {
            region.addEventListener('click', function() {
                // Extract region id from the region ID (remove "region-" prefix)
                const regionId = this.id.replace('region-', '');
                
                // Check if the region has intervention zones
                if(regionId === 'extreme-nord') {
                    // For now, let's show the maroua info when clicking on the region
                    showZoneInfo('maroua');
                } else if(regionId === 'est') {
                    showZoneInfo('doume');
                } else if(regionId === 'ouest') {
                    showZoneInfo('mifi');
                } else {
                    showZoneInfo('default');
                }
            });
        });
    }
    
    // Add click events to pins
    if(mapPins && mapPins.length > 0) {
        mapPins.forEach(pin => {
            pin.addEventListener('click', function() {
                // Extract pin ID (remove "pin-" prefix)
                const zoneId = this.id.replace('pin-', '');
                showZoneInfo(zoneId);
            });
        });
    }

    // Add hover effects to regions with CSS
    if(mapRegions && mapRegions.length > 0) {
        mapRegions.forEach(region => {
            region.addEventListener('mouseenter', function() {
                this.style.opacity = '1';
                this.style.transition = 'opacity 0.3s ease';
            });
            
            region.addEventListener('mouseleave', function() {
                this.style.opacity = '1';
            });
        });
    }

    // Add hover effects to pins
    if(mapPins && mapPins.length > 0) {
        mapPins.forEach(pin => {
            pin.addEventListener('mouseenter', function() {
                this.setAttribute('r', '12');
                this.style.fill = '#EE8B0C';
                this.style.transition = 'r 0.3s ease, fill 0.3s ease';
            });
            
            pin.addEventListener('mouseleave', function() {
                this.setAttribute('r', '10');
                this.style.fill = '#EE8B0C';
            });
        });
    }
});

// ------ Animations for Intersection Observer ------
// Animate elements when they come into view
document.addEventListener('DOMContentLoaded', function() {
    // Check if IntersectionObserver is available
    if ('IntersectionObserver' in window) {
        // Items to observe
        const items = document.querySelectorAll('.eapObjectifsItem, .eapPresentationVisual, .eapArticleContent');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Add animation class when element is in viewport
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    // Stop observing once animation is triggered
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });
        
        // Observe each item
        items.forEach(item => {
            observer.observe(item);
        });
    }
});

// ------ Lightbox for Images ------
document.addEventListener('DOMContentLoaded', function() {
    const eapHasLightBox = document.querySelectorAll('.eapHasLightBox');

    if(eapHasLightBox && eapHasLightBox.length > 0){
        eapHasLightBox.forEach((element) => {
            element.addEventListener("click", () => {
                let eapLightbox = document.createElement("picture");
                let eapIconClose = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                let eapIconClosePath1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
                let eapIconClosePath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
                let eapLightboxInner = document.createElement("div");
                let eapImgLightBox = document.createElement("img");
                let eapLightBoxBackground = document.createElement("div");
        
                eapLightbox.setAttribute("class", "eapLightbox");
                eapLightBoxBackground.setAttribute("class", "eapLightBoxBackground");
                eapLightboxInner.setAttribute("class", "eapLightboxInner");
        
                eapImgLightBox.setAttribute(
                    "src",
                    element.getAttribute("src")
                );
                eapImgLightBox.setAttribute(
                    "alt",
                    element.getAttribute("alt")
                );
        
                eapIconClose.setAttributeNS(null, "id", "eapIconClose");
                eapIconClose.setAttributeNS(null, "class", "eapIcon");
                eapIconClose.setAttributeNS(null, "viewBox", "0 0 14 15");
        
                eapIconClosePath1.setAttributeNS(null, "d", "M1.89814 13.8981L0 12L11.2099 0.790148L13.108 2.68829L1.89814 13.8981Z");
                eapIconClosePath2.setAttributeNS(null, "d", "M0.10186 2.89814L2 1L13.2099 12.2099L11.3117 14.108L0.10186 2.89814Z");
                
                eapIconClose.appendChild(eapIconClosePath1);
                eapIconClose.appendChild(eapIconClosePath2);
        
                eapLightboxInner.appendChild(eapIconClose);
                eapLightboxInner.appendChild(eapImgLightBox);
        
                eapLightbox.appendChild(eapLightboxInner);
        
                element.after(eapLightBoxBackground);
                element.after(eapLightbox);
        
                eapIconClose.addEventListener("click", () => {
                    eapLightbox.remove();
                    eapLightBoxBackground.remove();
                });
                
                // Close lightbox with Escape key
                document.addEventListener('keydown', function(e) {
                    if(e.key === 'Escape') {
                        eapLightbox.remove();
                        eapLightBoxBackground.remove();
                    }
                });
            });
        });
    }
});

// ------ Newsletter Form Validation ------
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('#eapColophon03 form');
    const emailInput = document.querySelector('#eapNLInput');
    
    if(newsletterForm && emailInput) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isValidEmail = emailRegex.test(emailInput.value);
            
            if(isValidEmail) {
                // Here you would normally send the form data to your server
                // For demonstration, show success message
                const successMessage = document.createElement('p');
                successMessage.textContent = 'Merci de vous être inscrit à notre newsletter!';
                successMessage.style.color = '#EE8B0C';
                
                newsletterForm.innerHTML = '';
                newsletterForm.appendChild(successMessage);
            } else {
                // Show error
                emailInput.style.borderColor = '#EE8B0C';
                
                const errorMessage = document.createElement('p');
                errorMessage.textContent = 'Veuillez entrer une adresse email valide.';
                errorMessage.style.color = '#EE8B0C';
                errorMessage.style.fontSize = '14px';
                
                // Remove any existing error messages
                const existingError = newsletterForm.querySelector('.error-message');
                if(existingError) {
                    existingError.remove();
                }
                
                errorMessage.classList.add('error-message');
                emailInput.after(errorMessage);
            }
        });
        
        // Remove error styling when user types
        emailInput.addEventListener('input', function() {
            emailInput.style.borderColor = '';
            const existingError = newsletterForm.querySelector('.error-message');
            if(existingError) {
                existingError.remove();
            }
        });
    }
});