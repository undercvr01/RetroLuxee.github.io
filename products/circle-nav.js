document.addEventListener("DOMContentLoaded", () => {
     const navContainer = document.createElement("div");
     navContainer.classList.add("circle-nav");
     document.body.appendChild(navContainer);

     const toggleBtn = document.createElement("div");
     toggleBtn.classList.add("menu-toggle");
     toggleBtn.textContent = "+";
     navContainer.appendChild(toggleBtn);

     const navItems = [
          { href: "clothing1.html", label: "1", class: "red" },
          { href: "clothing2.html", label: "2", class: "green" },
          { href: "clothing3.html", label: "3", class: "yellow" },
          { href: "clothing4.html", label: "4", class: "black" },
          { href: "clothing5.html", label: "5", class: "cyan" }
     ];

     const buttons = [];

     navItems.forEach(item => {
          const link = document.createElement("a");
          link.href = item.href;
          link.textContent = item.label;
          link.className = `circle-btn ${item.class}`;
          navContainer.appendChild(link);
          buttons.push(link);
     });

     let isOpen = false;
     toggleBtn.addEventListener("click", () => {
          isOpen = !isOpen;
          navContainer.classList.toggle("open", isOpen);
          toggleBtn.textContent = isOpen ? "-" : "+";
     });
});
