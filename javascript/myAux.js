function getScreenRes(){
	
	console.log("[myAux.js] getScreenRes(): Your screen resolution is " + window.screen.width + "x" + window.screen.height + " px and your browser window resolution is " + window.innerWidth + "x" + window.innerHeight + " px.");

	if (window.innerWidth / window.innerHeight < 1){
		
		myFrame.src = "main_v.html?";
        console.log("[myAux.js] getScreenRes(): Assigning 'main_v.html' to the iframe.");
		
	} else {
		
		// myFrame.src = "main_h.html?";
        myFrame.src = "video.html?";
        console.log("[myAux.js] getScreenRes(): Assigning 'main_h.html' to the iframe.");
		
	}
	
}

function onPointerMove(event){

    // this function is called from the event handler at the bottom of the init() function in index.php

    pointer.x = (event.clientX / window.innerWidth)*2 - 1;
    pointer.y = -(event.clientY / window.innerHeight)*2 + 1;

}

function getRndInteger(min, max) { return Math.floor(Math.random() * (max - min + 1) ) + min; }

function calcDist(sX, sY, sZ, dX, dY, dZ){

    // returns the euclidian distance between two points in 3D

    let d = 0;
    d = (sX-dX)*(sX-dX);
    d = d + (sY-dY)*(sY-dY);
    d = d + (sZ-dZ)*(sZ-dZ);
    d = Math.sqrt(d);

    // console.log("[myAux.js] calcDist = " + d);

    return d;

}

function convertTimestamp(timestamp){

    var date = new Date(timestamp*1000);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    
    var output = day + "." + month + "." + year + " " + hour + ":" + minutes + ":" + seconds;
    return output;

}

function calcElapsedTime(timestamp){

    let now = parseInt(new Date().getTime()/1000);
    let delta = now - timestamp; 

    deltaDate = new Date(delta*1000);

    let year = deltaDate.getFullYear() - 1970;
    let month = deltaDate.getMonth();
    let day = deltaDate.getDate() - 1;
    let hour = deltaDate.getHours() < 10 ? "0" + deltaDate.getHours() : deltaDate.getHours();
    hour = hour - 1;
    let minutes = deltaDate.getMinutes() < 10 ? "0" + deltaDate.getMinutes() : deltaDate.getMinutes();
    let seconds = deltaDate.getSeconds() < 10 ? "0" + deltaDate.getSeconds() : deltaDate.getSeconds();
    
    let output = year + "y " + month + "m " + day + "d " + hour + ":" + minutes + ":" + seconds;

    // console.log("[myAux.js] calcElapsedTime(" + timestamp + "): This timestamp lies " + output + " in the past (delta equals " + delta + ").");
    return delta;

}

function addRect(myName, xPos, yPos, myWidth, myHeight, mysvg, myDesignation, myFunction){

    // .createElementNS() creates an SVG-native element (which is formatted in XML)
    //      ( by contrast, .createElement() creates a DOM-native element (which is formatted in HTML) )

    // NOTE: http://www.w3.org/2000/svg - while looking like a website - is, in fact, a URL designating the XML namespace for manipulating SVG elements
    // IT IS NOT A WEBSITE! This code will work even without internet access and constitutes no dependency vulnerability

    // this will be the holding object ("g" == group) to which we will attach a rectangle and a text element
    const GG = document.createElementNS("http://www.w3.org/2000/svg", "g");
        GG.setAttribute("x", xPos);
        GG.setAttribute("y", yPos);

    mysvg.appendChild(GG);

    const ZZ = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        ZZ.setAttribute("x", xPos);
        ZZ.setAttribute("y", yPos);
        ZZ.setAttribute("width", myWidth);
        ZZ.setAttribute("height", myHeight);
        ZZ.setAttribute("fill", "#555555");
        ZZ.setAttribute("id", myName);
        ZZ.setAttribute("class", "none");

        ZZ.setAttribute("stroke", null);
        ZZ.setAttribute("stroke-width", null);
        ZZ.setAttribute("opacity", 1.0);

    GG.appendChild(ZZ);

    if (myFunction != null){

        /*

        ZZ.setAttribute("onclick", myFunction);
        let idx = GG.children.length - 1;

        GG.children[idx].addEventListener("mouseover", (event) => {

            // console.log("You have now moved the mouse pointer over element " + event.target.id + ".");
            if (event.target.getAttribute("class") == "none"){

                event.target.setAttribute("class", "preselected");

            }

        })

        GG.children[idx].addEventListener("mouseleave", (event) => {

            // console.log("You have now moved the mouse pointer away from element " + event.target.id + ".");
            if (event.target.getAttribute("class") == "preselected"){

                event.target.setAttribute("class", "none");

            }

        })

        GG.children[idx].addEventListener("click", (event) => {

            if (event.target.getAttribute("class") == "on"){ event.target.setAttribute("class", "none"); }

            if (event.target.getAttribute("class") == "preselected"){ event.target.setAttribute("class", "on"); }

        })

        */

    }

    let offSetX = 0;
    if (myDesignation.length == 1){ offSetX = myWidth/2 - 3; }
    if (myDesignation.length == 2){ offSetX = myWidth/2 - 7; }
    if (myDesignation.length == 3){ offSetX = myWidth/2 - 11; }
    if (myDesignation.length == 6){ offSetX = myWidth/2 - 12; }
    if (myDesignation.length > 6){ offSetX = myWidth/2 - 28; }

    const TT = document.createElementNS("http://www.w3.org/2000/svg", "text");
        TT.setAttribute("x", xPos + offSetX);
        TT.setAttribute("y", yPos + myHeight/2 + 5);
        TT.setAttribute("fill", "#ffffff");
        TT.textContent = myDesignation;
    GG.appendChild(TT);

}

function addLevels(availWidth, myH){

    let w = availWidth;
    let availHeight = myH*35 + 34;
    let h = myH;
    let x = null;
    let y = null;

    console.log("[myAux.js] addLevels(" + availWidth + ", " + availHeight + "): Calculating level indicator dimensions as " + w + "x" + h + "."); 

    for (let i = 0; i < 35; i++){

        let desg = null;
        if (i < 10){ desg = "0" + i; } else { desg = i; }
        desg = String(desg);

        x = 0;
        y = availHeight - (i*(h + 1)) - h;

        addRect(desg, x, y, w, h, svgLevels, desg);

    }
    
}

function getTextDims(refID){

    // This function uses a neat little trick that I learned from the internet (thanks, internet!)
    // It creates a <span> containing the text I would like to measure - text can't be measured directly, but spans can!
    // After the measurement is taken, the <span> is deleted.

    let myText = document.createElement("span");
    document.body.appendChild(myText);

    let myReference = document.getElementById(refID);
    let myStyle = getComputedStyle(myReference);

    // console.log("[myAux.js] getTextDims(" + refID + "): font-family: " + myStyle.fontFamily + ", font-size: " + myStyle.fontSize + ", font-weight: " + myStyle.fontWeight);

    myText.style.fontFamily = myStyle.fontFamily;
    myText.style.fontSize = myStyle.fontSize;
    myText.style.height = 'auto';
    myText.style.width = 'auto';
    myText.style.position = 'absolute';
    myText.style.whiteSpace = 'no-wrap';
    myText.innerHTML = myReference.innerHTML;

    let output = [];
    output.push(Math.ceil(myText.clientWidth));
    output.push(Math.ceil(myText.clientHeight));

    document.body.removeChild(myText);

    return output;

}

function addMyLabel(myLabelText, myY){

    console.log("[myAux.js] addLabel(" + myLabelText + ", " + myY + "): Hi!");

    const myDiv = document.createElement("div");
    myDiv.className = "label";
    myDiv.textContent = myLabelText;
    myDiv.style.color = "#ff0000";

    const myLabel = new CSS2DObject(myDiv);
    myLabel.position.set(0, myY, 0);
    Scene.add(myLabel);

}

function floorIndicator(myPlayersIndex){

    // console.log("[myAux.js] floorIndicator(" + myPlayersIndex + "): Hi!");

    let p = myPlayers[myPlayersIndex];
    let myVec = p[6];
    myVec.z = -myVec.z;

    let currentFloor = null;

    // CORNERS OF THE INTERIOR FLOOR SPACE
    // NW:[9.306, 732], NE:[9.387, 732], SE:[9.387, 813], SW:[9.306, 813]    

    if ((myVec.x >= 9306) && (myVec.x <=9387) && (myVec.y >= 732) && (myVec.y <= 813)){

        if ((myVec.z >= 65) && (myVec.z <= 71)){ currentFloor = 0; }
        if ((myVec.z >= 72) && (myVec.z <= 78)){ currentFloor = 1; }
        if ((myVec.z >= 79) && (myVec.z <= 85)){ currentFloor = 2; }
        if ((myVec.z >= 86) && (myVec.z <= 92)){ currentFloor = 3; }
        if ((myVec.z >= 93) && (myVec.z <= 99)){ currentFloor = 4; }
        if ((myVec.z >= 100) && (myVec.z <= 106)){ currentFloor = 5; }
        if ((myVec.z >= 107) && (myVec.z <= 113)){ currentFloor = 6; }
        if ((myVec.z >= 114) && (myVec.z <= 120)){ currentFloor = 7; }
        if ((myVec.z >= 121) && (myVec.z <= 127)){ currentFloor = 8; }
        if ((myVec.z >= 128) && (myVec.z <= 134)){ currentFloor = 9; }
        if ((myVec.z >= 135) && (myVec.z <= 141)){ currentFloor = 10; }
        if ((myVec.z >= 142) && (myVec.z <= 148)){ currentFloor = 11; }
        if ((myVec.z >= 149) && (myVec.z <= 155)){ currentFloor = 12; }
        if ((myVec.z >= 156) && (myVec.z <= 162)){ currentFloor = 13; }
        if ((myVec.z >= 163) && (myVec.z <= 169)){ currentFloor = 14; }
        if ((myVec.z >= 170) && (myVec.z <= 176)){ currentFloor = 15; }
        if ((myVec.z >= 177) && (myVec.z <= 183)){ currentFloor = 16; }
        if ((myVec.z >= 184) && (myVec.z <= 190)){ currentFloor = 17; }
        if ((myVec.z >= 191) && (myVec.z <= 197)){ currentFloor = 18; }
        if ((myVec.z >= 198) && (myVec.z <= 204)){ currentFloor = 19; }
        if ((myVec.z >= 205) && (myVec.z <= 211)){ currentFloor = 20; }
        if ((myVec.z >= 212) && (myVec.z <= 218)){ currentFloor = 21; }
        if ((myVec.z >= 219) && (myVec.z <= 225)){ currentFloor = 22; }
        if ((myVec.z >= 226) && (myVec.z <= 232)){ currentFloor = 23; }
        if ((myVec.z >= 233) && (myVec.z <= 239)){ currentFloor = 24; }
        if ((myVec.z >= 240) && (myVec.z <= 246)){ currentFloor = 25; }
        if ((myVec.z >= 247) && (myVec.z <= 253)){ currentFloor = 26; }
        if ((myVec.z >= 254) && (myVec.z <= 260)){ currentFloor = 27; }
        if ((myVec.z >= 261) && (myVec.z <= 267)){ currentFloor = 28; }
        if ((myVec.z >= 268) && (myVec.z <= 274)){ currentFloor = 29; }
        if ((myVec.z >= 275) && (myVec.z <= 281)){ currentFloor = 30; }
        if ((myVec.z >= 282) && (myVec.z <= 288)){ currentFloor = 31; }
        if ((myVec.z >= 289) && (myVec.z <= 295)){ currentFloor = 32; }
        if ((myVec.z >= 296) && (myVec.z <= 302)){ currentFloor = 33; }
        if ((myVec.z >= 303) && (myVec.z <= 309)){ currentFloor = 34; }

    }

    // console.log("[myAux.js] floorIndicator(): myVec = [" + myVec.x + ", " + myVec.y + ", " + myVec.z + "]: Player " + p[0] + " is on floor " + currentFloor + ".");

    let thisColour = null;
    
    if (p[4] == "offence"){ thisColour = "#ff0000"; }
    if (p[4] == "defence"){ thisColour = "#006aff"; }

    if ((p[4] == null) || (p[4] == "white") || (p[4] == "black")){ thisColour = p[1]; }

    if (currentFloor != null){ 
        
        // checking if any other floor is currently indicated

        let myBatch = [];
        let thisAffiliation = myPlayers[myPlayersIndex][4];

        for (let i = 0; i < wireframesArray.length; i++){
    
            if (wireframesArray[i].type == "Floor"){ myBatch.push(wireframesArray[i].name); }
    
        }

        for (let i = 0; i < myBatch.length; i++){
    
            let floorInt = myBatch[i].substring(6);
            floorInt = parseInt(floorInt);

            if (floorInt == currentFloor){ 
                
                myFrame.contentWindow.document.getElementById("levels").children[floorInt].children[1].style.fill = "#000000";
                removeWireFrame(floorInt);
                thisColour = "#ffffff"; 
            
            }
    
        }

        highlightFloor(currentFloor, thisColour);
        if (BW == true){ checkBWRooms(currentFloor, thisAffiliation, myPlayersIndex, myVec); }
    
    }

}

function highlightFloor(myFloor, myColour){

    // console.log("[myAux.js] highlightFloor(" + myFloor + ", " + myColour + "): Hi!");

    let myZ = 65 + myFloor*7;
    addWireFrame("Floor " + myFloor, "Floor", 9305, 731, myZ, 84, 84, 5, myColour);

    myFrame.contentWindow.document.getElementById("levels").children[myFloor].children[0].style.fill = myColour;

}

function dehighlightAllFloors(){

    // reset labelling

    let labels = myFrame.contentWindow.document.getElementById("levels");
    for (let i = 0; i < labels.children.length; i++){

        myFrame.contentWindow.document.getElementById("levels").children[i].children[0].style.fill = "#555555";
        myFrame.contentWindow.document.getElementById("levels").children[i].children[1].style.fill = "#ffffff";
        
        myFrame.contentWindow.document.getElementById("levels").children[i].children[0].style.stroke = "none";
        // myFrame.contentWindow.document.getElementById("levels").children[i].children[1].style.fill = "rgb(255, 255, 255)";

    }

    // reset wireframes

    let myBatch = [];

    for (let i = 0; i < wireframesArray.length; i++){

        if (wireframesArray[i].type == "Floor"){ myBatch.push(wireframesArray[i].name); }

    }

    for (let i = 0; i < myBatch.length; i++){

        let floorInt = myBatch[i].substring(6);
        floorInt = parseInt(floorInt);
        removeWireFrame(floorInt);

    }

}

function removeWireFrame(myFloor){

    // console.log("[myAux.js] dehighlightFloor(" + myFloor + "): Deleting selected floor from scene.");

    let deleteUUID = null;
    let deletePointer = null;
    let deleteIndex = null;
    let myFloorName = "Floor " + myFloor;

    // console.log("[myAux.js] dehighlightFloor(" + myFloor + "): Finding floor '" + myFloorName + "'...");
    
    for (let i = 0; i < wireframesArray.length; i++){

        if (wireframesArray[i].name == myFloorName){

            deleteUUID = wireframesArray[i].uuid1; 
            deletePointer = i;           
            // console.log("[myAux.js] dehighlightFloor(" + myFloor + "): Found it! It has scene uuid " + deleteUUID + ".");
            break;

        }

    }

    for (let i = 0; i < scene.children.length; i++){

        if (scene.children[i].uuid == deleteUUID){ 

            deleteIndex = i;
            break;

         }

    }

    if (deleteIndex != null){

        scene.children[deleteIndex].name = "deleteMe";
        let deleteObject = scene.getObjectByName("deleteMe");
        scene.remove(deleteObject);

        wireframesArray.splice(deletePointer, 1);

    }

}