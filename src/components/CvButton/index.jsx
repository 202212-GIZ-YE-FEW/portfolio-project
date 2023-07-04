
import React from "react"

const CV = () => {
    const onClick = () => {
        // using Java Script method to get PDF file
        fetch("rawanCV.pdf").then((response) => {
          response.blob().then((blob) => {
            // Creating new object of PDF file
            // const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement("a");
            alink.href =
              "https://app.enhancv.com/share/8edef988/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic";
            alink.download = "rawanCV.pdf";
            alink.click();
          });
        });
      };
  return (
    <>
           <button class="download-button" onClick={onClick}>
  <div class="docs">CV</div>
  <div class="download">
    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line y2="3" x2="12" y1="15" x1="12"></line></svg>
  </div>
</button>
    </>
  )
}

export default CV;