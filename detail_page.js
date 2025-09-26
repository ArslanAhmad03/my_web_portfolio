// model
const projectsData = {
    project1: {
        title: 'Coffee Shop',
        description: "This Flutter app was built for a local coffee shop to simplify mobile coffee orders. Users can browse drinks, add items to their cart, select a pickup location, and track their order status in real-time. The app includes a clean UI, user login, product listing with images, cart management, and basic order handling.",
        thumbnail: './images/coffee_shop.png',
        image: './images/coffee_shop.png',
        link: '_black'
    },
    project2: {
        title: 'Food App',
        description: "FoodApp UI Kit is a clean Flutter design for Android and iOS, ideal for food delivery or restaurant apps. It includes essential screens like home, product details, cart, checkout, and profile. Features include real-time order tracking, multiple payment options, order history, in-app chat, and contactless delivery. Fully responsive and easy to customize, it’s perfect for developers to build professional apps quickly. Start your next project with FoodApp UI Kit today!",
        thumbnail: './images/food.jpg',
        image: './images/food.jpg',
        link: '_black'
    },
    project3: {
        title: 'Grocery App',
        description: 'A shared grocery list app that lets family members collaborate in real-time. Users can join or create a family group (1 admin + 4 members), add items to "today" or "tomorrow" lists, and remove them once purchased. Real-time sync ensures no item is missed while shopping.',
        thumbnail: './images/GroceryApp.png',
        image: './images/GroceryApp.png',
        link: '_black'
    },
    project4: {
        title: 'HomeCare',
        description: 'The HomeServices App is a complete Flutter-based mobile solution built for managing and booking household or freelance services. Designed for both customers and sellers, it enables seamless interaction between users and service providers.\nThis app is ideal for local electricians, mechanics, cleaners, tutors, and any gig-based professionals. Whether you’re launching a startup or digitalizing your local business, the HomeServices App provides everything needed to manage and grow.Want this customized with your branding or additional features? Feel free to contact me!',
        thumbnail: './images/onBoard.png',
        image: './images/onBoard.png',
        link: '_black'
    },
};

const modal = document.getElementById('projectModal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalLink = document.getElementById('modal-link');
const closeBtn = document.querySelector('.close-btn');
const projectCards = document.querySelectorAll('.project-card');

function openModal(projectKey) {
    const project = projectsData[projectKey];
    if (project) {
        modalImage.src = project.image;
        modalImage.alt = project.title;
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalLink.href = project.link;
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('modal-visible');
        }, 10);
    }
}

function closeModal() {
    modal.classList.remove('modal-visible');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

projectCards.forEach(card => {
    const projectKey = card.getAttribute('data-project');
    const projectData = projectsData[projectKey];
    const imageElement = card.querySelector('.project-image');

    if (projectData && projectData.thumbnail) {
        imageElement.src = projectData.thumbnail;
    }

    card.addEventListener('click', () => {
        openModal(projectKey);
    });
});

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});