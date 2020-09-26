<script>
  import './FileUpload.scss';
  import { dashRoute } from '../../pages/dashboard/router/store/index.js';
  function highlight(e) {
    e.target.classList.add('highlight')
  }

  function unhighlight(e) {
    e.target.classList.remove('highlight')
  }

  function handleDrop(e) {
    let dt = e.dataTransfer
    let files = dt.files
    console.warn(dt, files)
    handleFiles(files)
  }

  function uploadFile(file) {
    var reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onloadend = function(e){
        var myZip = e.target.result;                 
        var unzipper = new JSUnzip(myZip);

        unzipper.readEntries();    
        var myFiles = unzipper.entries;    

        for(var i=0; i<myFiles.length; i++) {
            var name = myFiles[i].fileName; // This is the file name
            // var content = JSInflate.inflate(myFiles[i].data); // this is the content of the files within the zip file.
        }

         // change current router path
        dashRoute.set('/review');
        // push the path into web browser history API
        window.history.pushState({path: '/review'}, '', window.location.origin + '/review');

        
    }  
  }

  function handleFiles(files) {
    ([...files]).forEach(uploadFile)
  }

  
</script>

<div id="drop-area"

  on:dragenter|preventDefault|stopPropagation = {highlight}
  on:dragover|preventDefault|stopPropagation = {highlight}
  on:dragleave|preventDefault|stopPropagation = {unhighlight}
  on:drop|preventDefault|stopPropagation = {unhighlight}
  on:drop|preventDefault|stopPropagation = {handleDrop}

>
    <form class="my-form">
      <p>Upload multiple files with the file dialog or by dragging and dropping images onto the dashed region</p>
      <input type="file" id="fileElem" multiple accept="image/*" onchange="handleFiles(this.files)">
      <label class="button" for="fileElem">Select some files</label>
      <div id="gallery"></div>
    </form>
  </div>