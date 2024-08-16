// Select and cache the <main> element in a variable named mainEl.
const mainEl  = document.querySelector('main');

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = 'var(--main-bg)';

// Set the content of mainEl to <h1>DOM Manipulation</h1>. 
mainEl.innerHTML ='<h1>DOM Manipulation</h1>';

// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add('flex-ctr');

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById('top-menu');

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height ='100%';

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Add a class of flex-around to topMenuEl.
topMenuEl.setAttribute('class','flex-around');

// Menu data structure
// const tabLinks = [
//     {href: 'https://spice.com/about', text: 'About'},
//     {href: 'https://spice.com/catalog', text: 'Catalog'},
//     {href: 'https://spice.com/orders', text: 'Orders'},
//     {href: 'https://spice.com/account', text: 'Account'}
// ];

//  name add assign a top menu 
// var const topMenuEl = document.getElementById('top-menu')

//  set the height of the topMenuEl element to be 100%
// topMenuEl.style.height = '100%'

// set the background color of topMenuEl 
// topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// set flex to topMenuEl
topMenuEl.setAttribute('class', 'flex-around')


const menuLinks = [
    {text: 'About', href: '/about'},
    {text: 'Catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'Orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'Account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  // adding menuLInks to the nav bar
menuLinks.forEach(link => {const a = document.createElement('a')
a.setAttribute('href',link.href)
a.textContent = link.text
topMenuEl.appendChild(a)
});



// Iterate over the entire menuLinks array and for each "link" object:
// menuLinks.forEach(link => { 
//     // Create an <a> element
//    const anchor = document.createElement('a');
//     //  On the new element, add an href attribute with its value set to the href property of the "link" object.  
//    anchor.setAttribute('href', link.href);
//     //  Set the new element's content to the value of the text property of the "link" object.  
//    anchor.textContent =link.text;
//     // Append the new element to the topMenuEl element.    
//    topMenuEl.appendChild(anchor);
// });

const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add ('flex-around');

subMenuEl.style.position = 'absolute';
subMenuEl.style.top = 0;

// grabbing all topMenuEl
const topMenuLinks = document.querySelectorAll ("#top-menu a");
topMenuEl.addEventListener('click', function (e){
    e.preventDefault();
    if (!e.target.matches ('a')){return;}
 
      console.log(e.target.textContent);

    e.target.classList.toggle('active');
// The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
// Hint: Removing a non-existent class from an element does not cause an error!

    topMenuLinks.forEach(link =>{
        if (link !== e.target) {
            link.classList.remove('active');
        }
    });



// Adding Submenu Interaction
// Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
// If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
// Otherwise, set the CSS top property of subMenuEl to 0.
// Hint: Caching the "link" object will come in handy for passing its subLinks array later.

// adding sub menu

const clickedLink = menuLinks.find(link => link.text === e.target.textContent);
if (e.target.classList.contains("active") && clickedLink.subLinks) {
    subMenuEl.style.top = "100%";
buildSubMenu(clickedLink.subLinks);
} else {
    if (! clickedLink.subLinks){
        subMenuEl.style.top = 0 ;
    }
    
}
function buildSubMenu (subLinks){

    subMenuEl.innerHTML = '';
    subLinks.forEach(link => {
        const a = document.createElement('a');

        a.setAttribute('href', link.href);

        a.textContent = link.text;

        subMenuEl.appendChild(a);
    });
}
});

// Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener('click', function (e){


// The first line of code of the event listener function should call the event object's preventDefault() method.
e.preventDefefault()
// The second line of code within the function should immediately return if the element clicked was not an <a> element.
if (!e.target.matches('a')){
    return
}
// Log the content of the <a> to verify the handler is working.
console.log(e.target.textContent);
// Next, the event listener should set the CSS top property of subMenuEl to 0.
subMenuEl.style.top = 0
// Remove the active class from each <a> element in topMenuLinks.
topMenuLinks.forEach (link => {
    link.classList.remove('acitve')
})
// Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
console.log(mainEl);
    if (mainEl.innerHTML == "about"){

    }
    mainEl.innerHTML
mainEl.innerHTML='<h1>${e.target.textcontent}</h1>';
console.log();
// If the ABOUT link is clicked, an <h1>About</h1> should be displayed.

})