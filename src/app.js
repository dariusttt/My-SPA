let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = ()  => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = ()  => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}

let header = document.querySelector('header');


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);

});


document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cars-container');
  
    // Fetch data from db.json
    fetch('http://localhost:3000/cars')
      .then(response => response.json())
      .then(data => {
        data.forEach(part => {
          // Create the box for each part
          const box = document.createElement('div');
          box.classList.add('box');
  
          // Populate the box with the part details
          box.innerHTML = `
            <img src="${part.image}" alt="${part.name}">
            <h3>${part.name}</h3>
            <span>${part.price}</span>
            <i class='bx bxs-star'>(${part.reviews} Reviews)</i>
            <a href="#" class="btn">Buy Now</a>
            <a href="#" class="details">View Details</a>
          `;
  
          // Append the box to the container
          container.appendChild(box);
        });
      })
      .catch(error => console.error('Error fetching spare parts:', error));
  });
  


