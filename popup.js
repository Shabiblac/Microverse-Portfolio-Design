const mainBg = document.querySelector('.main-bg');
const modalWrapper = document.querySelector('.modal-wrapper');

const worksContainer = document.querySelector('#work-section');

// define cards elements to be created unto page
const cardObjects = [
  {
    img: './images/Snapshoot Portfolio.png" alt="tonic image',
    title: 'Tonic',
    type: 'CANOPY',
    dev: 'Back End Dev',
    year: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    btn: 'See projects',
  },

  {
    img: './images/Snapshoot Portfolio (1).png',
    title: 'Multi-Post Stories',
    type: 'CANOPY',
    dev: 'Back End Dev',
    year: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    btn: 'See projects',
  },
  {
    img: './images/Snapshoot Portfolio (2).png',
    title: 'Tonic',
    type: 'CANOPY',
    dev: 'Back End Dev',
    year: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    btn: 'See projects',
  },

  {
    img: './images/Snapshoot Portfolio (3).png',
    title: 'Multi-Post Stories',
    type: 'CANOPY',
    dev: 'Back End Dev',
    year: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    btn: 'See projects',
  },
];
/* eslint-disable no-plusplus */
// create card unto page
function createCard() {
  for (let card = 0; card < cardObjects.length; card++) {
    worksContainer.innerHTML += ` 
    <div class="card two">
    <div class="card-img tonic">
        <img src="${cardObjects[card].img}" alt="tonic image">
    </div>
    <div class="card-description">
        <h2 class="card-title">${cardObjects[card].title}</h2>
        <ul class="canopy">
            <li id="canopy-text">${cardObjects[card].type}</li>
            <li>${cardObjects[card].dev}</li>
            <li>${cardObjects[card].year}</li>
        </ul>
        <p class="card-details">
        ${cardObjects[card].description}</p>
        <ul class="card-tools">
            <li>${cardObjects[card].tech[0]}</li>
            <li>${cardObjects[card].tech[1]}</li>
            <li>${cardObjects[card].tech[2]}</li>
        </ul>
        <button type="submit" class="btn project-btn btn-${card + 1}">${cardObjects[card].btn}</button>
    </div>
</div>
    `;
  }
}

const modalElement = [{
  id: 1,
  name: 'Tonic',
  img: './images/desktop-img/Snapshoot Portfolio(4).png',
  type: 'Canopy',
  dev: 'Back End Dev',
  year: 2015,
  source: 'link',
  sourceIcon: 'img-link',
  liveLink: 'link to life project',
  stack: {
    1: 'HTML', 2: 'CSS', 3: 'JavaScript', 4: 'Ruby', 5: 'Bootstrap',
  },
  tag: {
    1: 'pattern', 2: 'poster', 3: 'abstraction', 4: 'people', 5: 'technology', 6: 'media', 7: 'nature', 8: 'food',
  },
  price: '45',
  btn: 'Choose illustration',
  title: 'Nature',
  tagline: 'catchy look inspiring bionic form',
  details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
},

{
  id: 2,
  name: 'Tonic',
  img: './images/desktop-img/Snapshoot Portfolio(2).png',
  type: 'Canopy',
  dev: 'Back End Dev',
  year: 2015,
  source: 'link',
  sourceIcon: 'img-link',
  liveLink: 'link to life project',
  stack: {
    1: 'HTML', 2: 'CSS', 3: 'JavaScript', 4: 'Ruby', 5: 'Bootstrap',
  },
  tag: {
    1: 'pattern', 2: 'poster', 3: 'abstraction', 4: 'people', 5: 'technology', 6: 'media', 7: 'nature', 8: 'food',
  },
  price: '45',
  btn: 'Choose illustration',
  title: 'Nature',
  tagline: 'catchy look inspiring bionic form',
  details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
},

{
  id: 3,
  name: 'Multi-Post Stories',
  img: './images/desktop-img/Snapshoot Portfolio(3).png',
  type: 'Canopy',
  dev: 'Back End Dev',
  year: 2015,
  source: 'link',
  sourceIcon: 'img-link',
  liveLink: 'link to life project',
  stack: {
    1: 'HTML', 2: 'CSS', 3: 'JavaScript', 4: 'Ruby', 5: 'Bootstrap',
  },
  tag: {
    1: 'pattern', 2: 'poster', 3: 'abstraction', 4: 'people', 5: 'technology', 6: 'media', 7: 'nature', 8: 'food',
  },
  price: '45',
  btn: 'Choose illustration',
  title: 'Nature',
  tagline: 'catchy look inspiring bionic form',
  details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
},

{
  id: 4,
  name: 'Multi-Post Stories',
  img: './images/desktop-img/Snapshoot Portfolio(4).png',
  type: 'Canopy',
  dev: 'Back End Dev',
  year: 2015,
  source: 'link',
  sourceIcon: 'img-link',
  liveLink: 'link to life project',
  stack: {
    1: 'HTML', 2: 'CSS', 3: 'JavaScript', 4: 'Ruby', 5: 'Bootstrap',
  },
  tag: {
    1: 'pattern', 2: 'poster', 3: 'abstraction', 4: 'people', 5: 'technology', 6: 'media', 7: 'nature', 8: 'food',
  },
  price: '45',
  btn: 'Choose illustration',
  title: 'Nature',
  tagline: 'catchy look inspiring bionic form',
  details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
}];

const displayModal = (element) => {
  modalWrapper.innerHTML = `
    <div class="ven-modal ven-overlay">
        <ul class="ven-modal-ul">
            <li class="ven-modal-ul-li">
                <ul class="ven-title-canopy-cancel-wrapper">
                    <li class="ven-title-canopy-year">
                        <h2>${element.name}</h2>
                        <ul class="ven-canopy-list ven-canopy-list-wrapper">
                            <li><b>${element.type}</b></li>
                            <li class="ven-card-empty-list"></li>
                            <li>${element.dev}</li>
                            <li class="ven-card-empty-list"></li>
                            <li>${element.year}</li>
                        </ul>
                    </li>
                    <li>
                        <img src="./images/icons/Icon.svg" alt="close icon" class="ven-cancel-icon" style="cursor: pointer">
                    </li>
                </ul>
                <div class="ven-featured-img-wrapper">
                    <img class="" src="${element.img}"">
                </div>
                <div class="ven-detail-stack-wrapper">
                    <p>
                        ${element.details}
                    </p>
                    <ul class="ven-tech-used">
                        <li>
                            <ul class="ven-tech-used-stack">
                                <li>
                                    ${element.stack[1]}
                                </li>
                                <li>
                                    ${element.stack[2]}
                                </li>
                                <li>
                                    ${element.stack[3]}
                                </li>
                                <li>
                                    ${element.stack[4]}
                                </li>
                                <li>
                                    ${element.stack[5]}
                                </li>
                            </ul>
                        </li>
                        <li class="ven-sources">
                            <a href="${element.source}"><button>See live <img src="./images/svg/live-Icon.svg"></button></a>
                            <a href="${element.source}"><button>See source <img src="./images/svg/Vector.svg"></button></a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
    `;
};

window.onload = () => {
  createCard();
  const venBtn = document.querySelectorAll('.project-btn');

  venBtn.forEach((btn) => {
    const body = document.querySelector('body');
    btn.addEventListener('click', () => {
      body.classList.add('no-scroll');
      mainBg.classList.add('bg-blur');

      if (btn.classList.contains('btn-1')) {
        modalWrapper.classList.remove('hide');
        displayModal(modalElement[0]);
      }

      if (btn.classList.contains('btn-2')) {
        modalWrapper.classList.remove('hide');

        displayModal(modalElement[1]);
      }

      if (btn.classList.contains('btn-3')) {
        modalWrapper.classList.remove('hide');
        displayModal(modalElement[2]);
      }

      if (btn.classList.contains('btn-4')) {
        modalWrapper.classList.remove('hide');
        displayModal(modalElement[3]);
      }

      const cancelIcon = document.querySelector('.ven-cancel-icon');
      const modalContainer = document.querySelector('.ven-modal');
      cancelIcon.addEventListener('click', () => {
        body.classList.remove('no-scroll');
        mainBg.classList.remove('bg-blur');
        modalContainer.classList.toggle('hide');
      });
    });
  });
};
