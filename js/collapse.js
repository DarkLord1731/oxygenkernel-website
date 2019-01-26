         var collapseElements = document.getElementsByClassName("collapse");
         for (let i = 0; i < collapseElements.length; i++) {
             collapseElements[i].addEventListener("click", function() {
                 this.classList.toggle("--active");
                 var content = this.nextElementSibling;
                 if (content.style.maxHeight)
                     content.style.maxHeight = null;
                 else content.style.maxHeight = content.scrollHeight + "px";
             });
         }
         
         function onCollapseSizeChanged() {
         	var collapseElements = document.getElementsByClassName("collapse");
         	for (let i = 0; i < collapseElements.length; i++) {
         		if (collapseElements[i] && collapseElements[i].classList.contains("--active")) {
         			var content = collapseElements[i].nextElementSibling;
         			content.style.maxHeight = content.scrollHeight + "px";
         		}
         	}
         }
