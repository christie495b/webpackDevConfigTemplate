<script>
  import "./FileUpload.scss";
  import { dashRoute } from "../../pages/dashboard/router/store/index.js";
  import { currentState, bannerData } from "../../lib/store.js";
  import FileUploadSVG from './metro-folder-upload.svg';

  import * as JSZip from 'jszip';


  let stateData = $currentState,
    globalData = $bannerData;

  let dimensionName = stateData.name;
  let index = globalData.findIndex((x) => x.name === dimensionName);

  function returnMetaData(str) {
    const regex = /<script type="text\/gwd-admetadata">(.*?)<\/script>/g;
    return JSON.parse(regex.exec(str)[1]);
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";

    const k = 1000;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  function getImgDimension(data) {
    // console.log(data);
  }

  function highlight(e) {
    e.target.classList.add("highlight");
  }

  function unhighlight(e) {
    e.target.classList.remove("highlight");
  }

  function handleDrop(e) {
    let dt = e.dataTransfer;
    let files = dt.files;
    // console.warn(dt, files);
    handleFiles(files);
  }

  function uploadFile(file) {
    var reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = function (e) {
      var myZip = e.target.result;
      var zip = new JSZip();
      zip.loadAsync(myZip).then(function (contents) {
        // console.log({stateData, contents, myZip, file})
        stateData.size = formatBytes(file.size)
        stateData.files =  Object.values(contents.files).map((cntnt) => {
            return {
              name: cntnt.name,
              type: cntnt.name.split(".").pop().toUpperCase(),
              dimension: "",
              size: formatBytes(cntnt._data.uncompressedSize),
            };
          })

        Object.keys(contents.files).forEach(function (filename) {
          if (filename.split(".").pop().toUpperCase() === "HTML") {
            zip
              .file(filename)
              .async("string")
              .then(function (content) {
                let metaData = returnMetaData(content);
                stateData.events = metaData.exits;
              });
          }
        });


        globalData[index].size = stateData.size;
        globalData[index].files = stateData.files;
        globalData[index].events = stateData.events;


        currentState.set(stateData);
        bannerData.set(globalData);

        // change current router path
        dashRoute.set("/review");
        // push the path into web browser history API
        window.history.pushState(
          { path: "/review" },
          "",
          window.location.origin + "/review"
        );

      });


      
    };
  }

  function handleFiles(files) {
    if(this && this.files){
      files = this.files;
    }
    [...files].forEach(uploadFile);
  }
</script>

<style>
  img{
    width: 8vh;
  }

  #drop-area p{
    font-size: 0.7em;
  }
</style>

<section class="drop-area-conainer bg-primary pt-3 pb-3 rounded-1">
  <div
    id="drop-area"
    class="d-flex justify-content-center align-items-stretch"
    on:dragenter|preventDefault|stopPropagation={highlight}
    on:dragover|preventDefault|stopPropagation={highlight}
    on:dragleaves|preventDefault|stopPropagation={unhighlight}
    on:drop|preventDefault|stopPropagation={unhighlight}
    on:drop|preventDefault|stopPropagation={handleDrop}
    on:click={(e)=>{
      document.getElementById('fileElem').click();
      //e.target.getElementById('fileElem').click(); 
    }}
    >
    <form class="my-form">
      <img src={FileUploadSVG} class="pt-5 pb-1 rounded mx-auto d-block" alt=" Click to upload files or drag and drop" />
      <p>
        Click to upload files or drag and drop.
      </p>
      <input
        type="file"
        id="fileElem"
        multiple
        accept="image/*"
        on:change={handleFiles} />
      <!-- <label class="button" for="fileElem">Select some files</label> -->
      <!-- <div id="gallery" /> -->
    </form>
  </div>
</section>
