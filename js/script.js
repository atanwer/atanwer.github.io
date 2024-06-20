// Get all elements with the 'download-cv-btn' class
const downloadButtons = document.querySelectorAll('.download-cv-btn');

// Attach the click event listener to each button
downloadButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Set the path to your CV file in the "documents" folder
    var cvFilePath = 'documents/AkaleshT_Full_Stack_2.8yrs.docx';

    // Create a temporary anchor element
    var link = document.createElement('a');

    // Set the href attribute to the path of your CV file
    link.href = cvFilePath;

    // Set the download attribute to specify the filename when the user downloads the file
    link.download = 'AkaleshT_Full_Stack_2.8yrs.docx';

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger a click event on the link to start the download
    link.click();

    // Remove the link from the document body after the download
    document.body.removeChild(link);
  });
});