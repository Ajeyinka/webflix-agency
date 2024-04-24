const toggleButton = document.getElementsByClassName('toggle-button')[0]
        const navLinks = document.getElementsByClassName('navbar-links')[0]
        const barOne = document.getElementsByClassName('bar one')[0]
        const barTwo = document.getElementsByClassName('bar two')[0]
        const barThree = document.getElementsByClassName('bar three')[0]
        
        toggleButton.addEventListener('click',() =>{
            navLinks.classList.toggle('active')
            barOne.classList.toggle('active')
            barTwo.classList.toggle('active')
            barThree.classList.toggle('active')
        });

        let accordionHeaders = Array.from(document.querySelectorAll(".accordion-header"));

        accordionHeaders.map((header) =>
          header.addEventListener("click", () => {
            toggleAccordion(header);
          })
        );
        
        function toggleAccordion(currentTarget) {
          accordionHeaders.map((header) => {
            const accordionContent = header.nextElementSibling;
            const togglerBtn = header.firstElementChild;
        
            if (currentTarget !== header) {
              togglerBtn.classList.remove("active");
             
              accordionContent.classList.remove("active-content");
            } else {
              togglerBtn.classList.toggle("active");
             
              accordionContent.classList.toggle("active-content");
            }
          });
        }

        
        const carousel = document.querySelector('.carousel');
        firstTestiony = document.querySelectorAll('.testiony')[0];
        arrowIcons = document.querySelectorAll('.icon');
        
        let isDragStart = false, prevPageX, preScrollLeft;
        let firstTestionyWidth = firstTestiony.clientWidth + 16;
        let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
        
        const showHideIcons =()=>{
            arrowIcons[0].style.display = carousel.scrollLeft == 0 ? 'none' : 'flex';
            arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? 'none' : 'flex';
        }
        
        arrowIcons.forEach(icon => {
            icon.addEventListener('click', () =>{
                carousel.scrollLeft += icon.id == "left" ? -firstTestionyWidth : firstTestionyWidth;
                setTimeout(() => showHideIcons(), 60);
            })
        });
        
        const dragStart = (e) =>{
            isDragStart = true;
            prevPageX = e.pageX || e.touches[0].pageX;
            preScrollLeft = carousel.scrollLeft;
        }
        
        
        
        const dragging = (e) =>{
           //console.log(e.pageX);
           if(!isDragStart) return;
           e.preventDefault();
           carousel.classList.add('dragging');
           let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
           carousel.scrollLeft = preScrollLeft - positionDiff;
           
        }
        
        const dragStop = () =>{
            isDragStart = false;
            carousel.classList.remove('dragging');
        }
        
        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("touchstart", dragStart);
        
        carousel.addEventListener("mousemove", dragging);
        carousel.addEventListener("touchmove", dragging);
        
        carousel.addEventListener("mouseup", dragStop);
        carousel.addEventListener("mouseleave", dragStop);
        carousel.addEventListener("touchend", dragStop);
        



        
        const glassyButton = document.querySelectorAll(".glassy-button");

        glassyButton.forEach((button) =>{
            button.addEventListener('mousemove', (e) =>{
                const centerX = button.offsetWidth / 2;
                const centerY = button.offsetHeight / 2;
        
                const offsetX = e.offsetX - centerX;
                const offsetY = e.offsetY - centerY;
        
                button.style.setProperty("--_x-motion", `${offsetX}px`);
                button.style.setProperty("--_y-motion", `${offsetY}px`);
            })
        })