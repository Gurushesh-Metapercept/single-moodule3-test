



document.addEventListener("DOMContentLoaded", () => {
  const ditasearch = document.getElementsByClassName("ditasearch")[0];
  ditasearch.classList.add("d-none")

})

document.addEventListener("DOMContentLoaded", () => {
  const pageTitle = document.title;
  const mainDitaMapTitle = document.querySelectorAll(".mainDitaMapTitle");
  const arrLink = window.location.pathname.split("/")
  if (window.location.pathname === "/") {
    localStorage.setItem("DitaMapTitle", pageTitle);
  } else if (arrLink[arrLink.length - 1] === "index.html") {
    localStorage.setItem("DitaMapTitle", pageTitle);
  }

  const storedPageTitle = localStorage.getItem("DitaMapTitle");

  mainDitaMapTitle.forEach((item) => {
    item.innerText = storedPageTitle;
  });
});





// ============================================================ Algolia and Search Modal
 
//  document.addEventListener("DOMContentLoaded", () => {

//   const client = algoliasearch('EJL4RSWRKD', '44ba7951a7a8ab416efcd8163d4bb95b');    // AppID, ApiKey
//   const indexName = "masterworkz"   // Index name

// //  =======================================================================================================



//     const searchInput = document.getElementById('search-input');
//     const searchResults = document.getElementById('search-results');
//     const nosearch = document.getElementById('nosearch');
//     const headerSearchBox = document.getElementById('headerSearchBox');

//     function clearSearchInput() {
//       searchInput.value = '';
//       searchResults.innerHTML = '';
//       nosearch.innerHTML = ""
//       nosearch.style.display = 'none';
//     }

//     function focusSearchInput() {
//         searchInput.focus();
//     }
  
//     searchInput.addEventListener('input', async (event) => {
//       const query = event.target.value;
//       if (query.length > 0) {
//         nosearch.style.display = 'none';
//         const index = client.initIndex(indexName);
//         const { hits } = await index.search(query);
    
//         searchResults.innerHTML = '';

//         function decodeHtmlEntities(text) {
//           const parser = new DOMParser();
//           const decodedString = parser.parseFromString(text, 'text/html').body.textContent;
//           return decodedString;
//         }

//         if(hits.length === 0){
//           nosearch.style.display = 'block';
//           nosearch.innerHTML = `No results for <b>\"${query}\"</b>`
//         }
       
      
//         hits.forEach((hit) => {
//           const resultItem = document.createElement('a');
//           resultItem.classList.add('card');

//           const cardBody = document.createElement('div');
//           cardBody.classList.add('card-body');

//           cardBody.style.whiteSpace = 'normal';
//           cardBody.style.overflow = 'hidden'; 
//           cardBody.style.textOverflow = 'ellipsis'; 
//           cardBody.style.width = '100%';
          
//           resultItem.href = hit.url;

          
//           if (hit._snippetResult && hit._snippetResult.content) {
//             const highlightedContent = hit._snippetResult.content.value;
//             cardBody.innerHTML = highlightedContent;
//           } else {          
//             cardBody.textContent = decodeHtmlEntities(hit._highlightResult.hierarchy.lvl1.value); 
//           }

    
//           resultItem.appendChild(cardBody);

//           resultItem.addEventListener('click', () => {
//             modal.hide();
//           });
//           searchResults.appendChild(resultItem);
//         });
//       } else {
//         searchResults.innerHTML = ''; 

//         nosearch.style.display = 'block';
//         nosearch.innerHTML = "No recent searches"
        
//       }
//     });
     
  
   
//     const modal = new bootstrap.Modal(document.getElementById('searchBoxModal'));
//     modal._element.addEventListener('hidden.bs.modal', clearSearchInput);

//      modal._element.addEventListener('shown.bs.modal', () => {
//       headerSearchBox.blur(); 
//       focusSearchInput();
//     });
//   });
  




// ------------------------------------------------------ Sidebar Menu Icons  - Folder icon


document.addEventListener("DOMContentLoaded", () => {
  const iconAndTitle = document.querySelectorAll("#myUL > ul.map > li > div.caret > .iconAndTitle");
  const iconAndTitle2 = document.querySelectorAll("#myUL2 > ul.map > li > div.caret > .iconAndTitle");
  const sidebarIconAndTitle = document.querySelectorAll("#sidebar_menulist > li.list_style_border > div > div.iconAndTitle");

  const pathArr = [
    `  
      <svg width="20" height="20" viewBox="0 0 20 20" fill="#12636A" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_3_2838" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
      <rect width="20" height="20" fill="#12636A"/>
      </mask>
      <g mask="url(#mask0_3_2838)">
      <path d="M3.33329 16.6667C2.87496 16.6667 2.4826 16.5035 2.15621 16.1771C1.82982 15.8507 1.66663 15.4584 1.66663 15V5.00004C1.66663 4.54171 1.82982 4.14935 2.15621 3.82296C2.4826 3.49657 2.87496 3.33337 3.33329 3.33337H7.64579C7.86802 3.33337 8.07982 3.37504 8.28121 3.45837C8.4826 3.54171 8.65968 3.65976 8.81246 3.81254L9.99996 5.00004H16.6666C17.125 5.00004 17.5173 5.16324 17.8437 5.48962C18.1701 5.81601 18.3333 6.20837 18.3333 6.66671V15C18.3333 15.4584 18.1701 15.8507 17.8437 16.1771C17.5173 16.5035 17.125 16.6667 16.6666 16.6667H3.33329ZM3.33329 5.00004V15H16.6666V6.66671H9.31246L7.64579 5.00004H3.33329Z" fill="#12636A"/>
      </g>
      </svg>
    `
  ];

  function insertSVGIcons(elements) {
    elements.forEach((li, index) => {
      const svgElement = document.createElement("div");
      const pathIndex = index % pathArr.length;
      svgElement.innerHTML = pathArr[pathIndex];
      li.insertBefore(svgElement, li.firstChild);
    });
  }

  insertSVGIcons(iconAndTitle);
  insertSVGIcons(iconAndTitle2);
  insertSVGIcons(sidebarIconAndTitle);
});

// Focus on input field when modal open
document.addEventListener("DOMContentLoaded", () => {
  const myModal = document.getElementById('searchBoxModal');

  myModal.addEventListener('shown.bs.modal', () => {
    const ditaSearchInput = document.querySelector(".ditaSearchInput")
    ditaSearchInput.focus();
  });
});

// Clear input field when modal closes
document.addEventListener("DOMContentLoaded", () => {
  const myModal = document.getElementById('searchBoxModal');

  myModal.addEventListener('hidden.bs.modal', () => {
    const ditaSearchInput = document.querySelector(".ditaSearchInput")
    ditaSearchInput.value = ""
  });
});

// If Mobile Menu is opened and user open sidebar menu then it will be closed automatically
document.addEventListener("DOMContentLoaded", () => {
  const offCanvas = document.getElementById('bdSidebar');

  if(offCanvas !== null){
    offCanvas.addEventListener('shown.bs.offcanvas', () => {
      const navbarToggler = document.querySelector('.menuButtonRight');
  
      if (navbarToggler.getAttribute('aria-expanded') === "true") {
        navbarToggler.click();
      }
    });
  }
});



// document.addEventListener("DOMContentLoaded", () => {
//     const dwnlAndLoader = document.getElementById("dwnlAndLoader")
//     const storedPageTitle = localStorage.getItem("DitaMapTitle");

//     if (storedPageTitle && storedPageTitle.trim() !== "") {
//         dwnlAndLoader.download = storedPageTitle;
//     } else {
//         dwnlAndLoader.download = "online-help";
//     }
// })


