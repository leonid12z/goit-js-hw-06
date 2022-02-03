const catLiItems = document.querySelectorAll("li.item");
console.log(`Number of categories: ${catLiItems.length}`);

catLiItems.forEach(catLiItem => {
   const textFoH2 = catLiItem.querySelector("h2").textContent;
   console.log(`Category: ${textFoH2}`);

   const elements = catLiItem.querySelectorAll("li");
   console.log(`Elements: ${elements.length}`);
})