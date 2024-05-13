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


        const activePage = window.location.pathname;
        const activeNav = document.querySelectorAll('.ava').
         forEach(link => {
             
              if(link.href.includes(`${activePage}`)){
              link.classList.add('navactive');
              const divs = document.createElement("div");
              divs.id = "divs";
              document.links.appendChild(divs);
          
        }
      })
