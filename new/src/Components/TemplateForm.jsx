// import React from 'react'
import "./TemplateForm.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import TelegramIcon from "@mui/icons-material/Telegram";
import DescriptionIcon from "@mui/icons-material/Description";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { useState } from "react";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import CollectionsIcon from "@mui/icons-material/Collections";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { blue, green, red, yellow } from "@mui/material/colors";
import CloseIcon from '@mui/icons-material/Close';

const TemplateForm = () => {

  const [basedOnType, setBasedOnType] = useState("doctype");
  const [pdfPreviewUrl, setPdfPreviewUrl] = useState("");

  // popup

  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
   
  };


  // create a drag and add text values in empty box


  const [isDragging, setIsDragging] = useState(false);
  const [dropPosition, setDropPosition] = useState({ x: 0, y: 0 });

  const handleDragStart = (e) => {
    setIsDragging(true);

    // Store the mouse position when the drag event starts
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setDropPosition({ x, y });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    // e.preventDefault();

    const pdfPreview = document.querySelector("#pdf-preview");
    const rect = pdfPreview.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    // Ensure the drop position stays within the boundaries of the PDF preview
    x = Math.max(0, Math.min(x, rect.width));
    y = Math.max(0, Math.min(y, rect.height));

    // Create a new empty box at the specified coordinates on the PDF preview
    const pdfSpace = document.querySelector(".pdfspace");
    const newDiv = document.createElement("div");
    newDiv.classList.add("newdiv");
    newDiv.style.top = `${y}px`;
    newDiv.style.left = `${x}px`;

    const res = prompt("Enter Details");

    // append the text within the empty box
    if (res) {
      newDiv.innerText = res;
      pdfSpace.append(newDiv);
    }
    
  };

 

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    setPdfPreviewUrl(URL.createObjectURL(file));
    setShowPopup(false);
  };

  

  return (
    <div>
      <div className="mainline">New Template Form</div>
      <div className="template">
        {/* sideicons */}
        <div className="sideicon">
          <AccountCircleRoundedIcon
            className="temp_icon"
            fontSize="medium"
          ></AccountCircleRoundedIcon>
          <DashboardIcon
            className="temp_icon"
            fontSize="medium"
          ></DashboardIcon>
          <AllInboxIcon className="temp_icon" fontSize="medium"></AllInboxIcon>
          <TelegramIcon className="temp_icon" fontSize="medium"></TelegramIcon>
          <DescriptionIcon
            className="temp_icon"
            fontSize="medium"
          ></DescriptionIcon>
          <FileCopyIcon className="temp_icon" fontSize="medium"></FileCopyIcon>
          <DesignServicesIcon
            className="temp_iconi"
            fontSize="medium"
          ></DesignServicesIcon>
        </div>

        {/* input fields */}

        <div className="templateinput">
          <label className="lables">Name</label>
          <input className="inputf"></input>
          <br />
          <label className="lables">Based On</label>
          <select
            className="inputf"
            onChange={(e) => setBasedOnType(e.target.value)}
          >
            <option value="doctype">Doctype File</option>
            <option value="pdf">Pdf File</option>
          </select>
          <br></br>
          {basedOnType == "doctype" && (
            <>
              <label className="lables">Doctype</label>
              <input className="inputf"></input>
              <br></br>
              <label className="lables">Trigger On</label>
              <input className="inputf"></input>
              <br></br>
              <label className="lablesi">Agreement Based On</label>
              <input className="inputf"></input>
              <br></br>
              <label className="lables">Print Format</label>
              <input className="inputf"></input>
            </>
          )}

          {/* pdf button */}

            <div className="pdfbtn">
            <button className="pbtn" onClick={handleButtonClick}>
              Attach Pdf
            </button>
          </div>
          
          {/* condition box */}
          <div className="text">Condition</div>
          <div className="condition"></div>
        </div>

        {/* drag icons */}

        <div className="dragicons">
          {/* zoom icon */}

          <div className="zoom">
            <div className="inzoom"  draggable
              onDragStart={(e) => handleDragStart(e)}
              onDragEnd={handleDragEnd}>
              <ZoomInIcon className="iconzoom" fontSize="small"></ZoomInIcon>
            </div>
            <div className="inzoom"  draggable
              onDragStart={(e) => handleDragStart(e)}
              onDragEnd={handleDragEnd}>
              <ZoomOutIcon className="iconzoom" fontSize="small"></ZoomOutIcon>
            </div>
          </div>

          <div  className="smallboxes">
            <div  draggable
              onDragStart={(e) => handleDragStart(e)}
              onDragEnd={handleDragEnd}  className="insideiconbox">
              <DesignServicesIcon
                className="iconzoom"
                fontSize="small"
              ></DesignServicesIcon>
            </div>
            <div
              className="insideiconbox"
              draggable
              onDragStart={(e) => handleDragStart(e)}
              onDragEnd={handleDragEnd}
            >
              <AttachEmailIcon
                className="iconzoom"
                fontSize="small"
              ></AttachEmailIcon>
            </div>
            <div className="insideiconbox"     draggable
              onDragStart={(e) => handleDragStart(e)}
              onDragEnd={handleDragEnd}>
              <DriveFileRenameOutlineIcon
                className="iconzoom"
                fontSize="small"
              ></DriveFileRenameOutlineIcon>
            </div>
            <div className="insideiconbox"    draggable
              onDragStart={(e) => handleDragStart(e)}
              onDragEnd={handleDragEnd}>
              <LocalPhoneIcon
                className="iconzoom"
                fontSize="small"
              ></LocalPhoneIcon>
            </div>
            <div className="insideiconbox"   draggable
              onDragStart={(e) => handleDragStart(e)}
              onDragEnd={handleDragEnd}>
              <DriveFileRenameOutlineIcon
                className="iconzoom"
                fontSize="small"
              ></DriveFileRenameOutlineIcon>
            </div>
            <div className="insideiconbox"   draggable
              onDragStart={(e) => handleDragStart(e)}
              onDragEnd={handleDragEnd}>
              <SelectAllIcon
                className="iconzoom"
                fontSize="small"
              ></SelectAllIcon>
            </div>
            <div className="insideiconbox"   draggable
              onDragStart={(e) => handleDragStart(e)}
              onDragEnd={handleDragEnd}>
              <DateRangeIcon
                className="iconzoom"
                fontSize="small"
              ></DateRangeIcon>
            </div>
          </div>
        </div>

        {/* pdf add space */}

        <div className="pdfspace">
          <iframe
            style={{
              width: "100%",
              height: "100%",
            }}
            id="pdf-preview"
            src={pdfPreviewUrl}
          ></iframe>

          <div
            className="uppercontent"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          ></div>

         
        </div>

        {/* signin pdf */}

        <div className="addpdf">
          <div className="signbtn">
            <button className="sbtn">Prepare Sign Request</button>
          </div>

          <div className="assignpdfto">
            <div className="selectassignee">
              <div id="field">Field</div>
              <div id="people">People</div>
            </div>
            <hr />

            <label className="fieldlable">Data Key/ Field Title</label>
            <input
              className="fieldinput"
              type="text"
              placeholder="Notes Here"
            />
            <div className="check_field">
              <input className="fieldcheck" type="checkbox" />
              <p className="fieldpara">Allow Sender to Prefill</p>
            </div>
            <label className="fieldlable">Placeholder Text</label>
            <input
              className="fieldinput"
              type="text"
              placeholder="Put any notes here"
            />
            <div className="check_field">
              <input className="fieldcheck" type="checkbox" />
              <p className="fieldpara">Multiline</p>
            </div>
            <div className="check_fieldi">
              <input className="fieldcheck" type="checkbox" />
              <p className="fieldpara">Required Field</p>
            </div>
            <label className="lable_two">Character Limit</label>
            <div className="emptyfield">
              <div className="emptyF"></div>
              <div className="emptyFtwo">
                <p>Clear</p>
              </div>
            </div>
            <label className="lable_two">Border Thickness</label>
            <div className="emptyfield">
              <div className="emptyF"></div>
              <div className="emptyFtwo">
                <p>Clear</p>
              </div>
            </div>

            <label className="lable_two">Character Limit</label>
            <div id="emptyfield" className="emptyfield">
              <div className="emptyF"></div>
              <div className="emptyFtwo">
                <p>Clear</p>
              </div>
            </div>

            <label className="lable_two">Assignee</label>
            <button className="assigneebtn">Not Assigned</button>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="selectpdf-popup">
          <h5>Upload</h5>
        <div className="closeiconpop">
      <CloseIcon  onClick={() => setShowPopup(false)
         }
          className="cls"  fontSize="small"  sx={{ color: blue[500] }}>
        
         </CloseIcon> 
      
        </div>
          <div className="allpdficons">
            <p>upload files here from</p>
            <div className="flexicons">
              <input
                onChange={handleUploadFile}
                type="file"
                hidden
                id="fileInput"
                accept=".pdf"
              />
              <label htmlFor="fileInput">
                {" "}
                <AddToQueueIcon
                  className="getpdficon"
                  color="secondary"
                  fontSize="medium"
                >
                  <div> </div>
                </AddToQueueIcon>
              </label>
              <CollectionsIcon
                className="getpdficon"
                sx={{ color: green[500] }}
                fontSize="medium"
              >
                <div> </div>
              </CollectionsIcon>
              <AttachFileIcon
                className="getpdficon"
                sx={{ color: yellow[500] }}
                fontSize="medium"
              >
                <div> </div>
              </AttachFileIcon>
              <AddAPhotoIcon
                className="getpdficon"
                sx={{ color: red[500] }}
                fontSize="medium"
              >
                <div> </div>
              </AddAPhotoIcon>
            </div>
          </div>
        
        </div>
      )}
    </div>
  );
};

export default TemplateForm;
