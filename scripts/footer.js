let contact = document.getElementById('contact');
let contactInfo = [
  {
    "href": "https://twitter.com/Mushfiq814",
    "imgSrc": "/assets/images/contact/twitter.svg"
  },
  {
    "href": "https://www.youtube.com/channel/UCIpMa1TIioqIYe2RSPTgsTA?view_as=subscriber",
    "imgSrc": "/assets/images/contact/youtube.svg"
  },
  {
    "href": "https://medium.com/@mushfiq8194",
    "imgSrc": "/assets/images/contact/medium.svg"
  },
  {
    "href": "https://www.linkedin.com/in/mushfiq-mahmud/",
    "imgSrc": "/assets/images/contact/linkedin.svg"
  },
  {
    "href": "https://github.com/mushfiq814",
    "imgSrc": "/assets/images/contact/GitHub.svg"
  },
];

for (i=0; i<contactInfo.length; i++) {
  let aTag = document.createElement('a');
  aTag.classList.add('contact');
  aTag.href = contactInfo[i].href;
  aTag.setAttribute('target', '_blank');

  let contactIcon = document.createElement('img');
  contactIcon.src = contactInfo[i].imgSrc;
  contactIcon.height = 40;
  contactIcon.width = 40;

  aTag.appendChild(contactIcon);
  contact.appendChild(aTag);
}

let copyright = document.getElementById('copyright');
copyright.innerHTML = 'Copyright &#169; 2019 Mushfiq Mahmud. All Rights Reserved';
copyright.style.textAlign = 'center';
copyright.style.padding = '10px';