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
topMenuEl.classList.add('flex-around');

// Menu data structure
const tabLinks = [
    {href: 'https://spice.com/about', text: 'About'},
    {href: 'https://spice.com/catalog', text: 'Catalog'},
    {href: 'https://spice.com/orders', text: 'Orders'},
    {href: 'https://spice.com/account', text: 'Account'}
];

// Iterate over the entire menuLinks array and for each "link" object:
tabLinks.forEach(link => { 
    // Create an <a> element
   const anchor = document.createElement('a');
    //  On the new element, add an href attribute with its value set to the href property of the "link" object.  
   anchor.setAttribute('href', link.href);
    //  Set the new element's content to the value of the text property of the "link" object.  
   anchor.textContent =link.text;
    // Append the new element to the topMenuEl element.    
   topMenuEl.appendChild(anchor);
});

