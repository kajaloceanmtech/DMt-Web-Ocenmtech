import React from "react";
import { Button } from "@material-ui/core";
import html2canvas from "html2canvas";
const BigSam = () => {
    return (
        <>
            <div style={{ position: "relative" }}
                id="Parent">

                <video
                    muted
                    loop
                    id="viID"
                    //  ref={videoref}
                    autoPlay
                    poster="/images/w3html5.gif"
                    playsInline
                    // onLoadedData={onLoadedData}
                    width="370" height="282"
                    style={{
                        //     height: item[index]?.height / 2.55,
                        //    width: item[index]?.width / 2.57,
                        position: "relative",
                        //  overflow: "hidden",
                        // opacity: isVideoLoaded ? 1 : 0
                        zIndex: 0
                    }}>

                </video>


                <div style={{
                    position: "absolute",
                    top: 230,
                    left: 50,
                    zIndex: 1
                }}>

                    <form>
                        <p>Content Below Your Video</p>
                        <label for="input">Form Input Label</label>

                    </form>
                </div>
            </div>



            <Button onClick={() => {
                //  console.log(e.target.href);


                //  viRef.current.src = url
         //       const link1 = document.createElement("a");
         //       link1.href = document.getElementById("viID").src;
         //       link1.setAttribute("download", "image.mp4");
         //       document.body.appendChild(link1);
         //       link1.click();


                //        const link1 = document.createElement("a");
                //   link1.href = viRef.current.src;
                //    link1.setAttribute("download", "image.mp4");
                //   document.body.appendChild(link1);
                //   link1.click();


             /*   var xhr = new XMLHttpRequest();
               xhr.open("GET","https://oceanmtech.b-cdn.net/dmt/data_file/20220813165817-550q3k.mp4", true);
               xhr.responseType = "blob";
               xhr.onload = function (e) {
                   var reader = new FileReader();
                   reader.onload = function (event) {
                       var res = event.target.result;
                 console.log("src=",res)
                      document.getElementById("viID").src = res
                   
                   }
                   var file = this.response;
                   reader.readAsDataURL(file)
               };
               xhr.send()
*/
                var link = document.createElement("a");
                html2canvas(document.getElementById("Parent"), { allowTaint: true }).then(function (canvas) {

                    document.body.appendChild(link);
                    link.download = "video.webm";
                    link.href = canvas.toDataURL();
                    link.target = '_blank';
                    link.click(); 
                    /*
                            var theCanvasElementToRecord = canvas.toDataURL()           
                            var stream = theCanvasElementToRecord.captureStream(25); 
                    
                            var options = {mimeType: 'video/webm;codecs=vp9'};
                            var mediaRecorder = new MediaRecorder(stream, options);            
                    
                            mediaRecorder.start();
                    
                            var recordedChunks = [];
                    
                            mediaRecorder.ondataavailable = function(e) {
                    
                                recordedChunks.push(e.data);
                                var blob = new Blob(recordedChunks, {
                                    type: 'video/webm'
                                });
                                console.log(blob);
                    
                                var blobUrl = URL.createObjectURL(blob);   
                    
                                var link = document.createElement("a"); 
                                link.href = blobUrl;
                                link.download = "video.webm";
                                link.innerHTML = "Click here to download the file";
                                document.body.appendChild(link); 
                    
                            }
                    
                    
                            /* Canvas animation code 
                    
                    
                            mediaRecorder.stop();
                    */
                })




                /*       fetch("https://oceanmtech.b-cdn.net/dmt/data_file/20220813165817-550q3k.mp4", {
                           method: "GET",
                           headers: {},
                       })
                           .then((response) => {
                               response.arrayBuffer().then(function (buffer) {
                                   const url = window.URL.createObjectURL(new Blob([buffer]));
                                   viRef.current.src = url
                                   const link = document.createElement("a");
                                   link.href = stageRef.current.toDataURL();
                                   link.setAttribute("download", "image.mp4");
                                   document.body.appendChild(link);
                                   link.click();
                               });
                           })
                           .catch((err) => {
                               console.log(err);
                           });
                       */
            }}>Download</Button>
        </>
    )
}


export default BigSam;