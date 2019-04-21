let navBar = document.getElementById('nav');
let navBarItems = [
  {"href": "/html/index.html", "text": "Home", "newPage": false},
  {"href": "/html/projects.html", "text": "Projects", "newPage": false},
  {"href": "/html/resume.html", "text": "Resume", "newPage": false},
  {"href": "https://medium.com/@mushfiq8194", "text": "Blog", "newPage": true},
];

// Create NavBar Logo
let navLeft = document.createElement('div');
navLeft.classList.add('nav-left');
let logo = document.createElement('img');
logo.src = '/assets/images/logo/logo.svg';
logo.width = 80;
logo.height = 80;
let imgLink = document.createElement('a');
imgLink.href = "/html/index.html";

imgLink.appendChild(logo);
navLeft.appendChild(imgLink);

// NavBar Items
let navRight = document.createElement('div');
navRight.classList.add('nav-right');
let unorderedList = document.createElement('ul');
navRight.appendChild(unorderedList);

for (i=0; i<navBarItems.length; i++) {
  let listItem = document.createElement('li');

  let aTag = document.createElement('a');
  aTag.text = navBarItems[i].text;
  aTag.href = navBarItems[i].href;
  if (navBarItems[i].newPage) aTag.setAttribute('target', '_blank');

  listItem.appendChild(aTag);
  unorderedList.appendChild(listItem);
}

navBar.appendChild(navLeft);
navBar.appendChild(navRight);