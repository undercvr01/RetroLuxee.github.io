document.addEventListener("DOMContentLoaded", () => {
     const navContainer = document.querySelector(".circle-nav");

     const navItems = [
          { href: "clothing1.html", label: "1", class: "red" },
          { href: "clothing2.html", label: "2", class: "green" },
          { href: "clothing3.html", label: "3", class: "yellow" },
          { href: "clothing4.html", label: "4", class: "black" },
          { href: "clothing5.html", label: "5", class: "cyan" }
     ];

     navItems.forEach(item => {
          const link = document.createElement("a");
          link.href = item.href;
          link.textContent = item.label;
          link.className = `circle-btn ${item.class}`;
          navContainer.appendChild(link);
     });
});
