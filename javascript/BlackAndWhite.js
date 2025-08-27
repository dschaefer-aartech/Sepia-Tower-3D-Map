function switchBW(){

    // console.log("[BlackAndWhite.js] switchBW(): Hi!");

    BW = true;
    scene.background = new THREE.Color('#80a0c0');

    svgneutrals = myFrame.contentWindow.document.getElementById("neutrals");
    svgneutrals.style.width = myTD2.offsetWidth;
    svgneutrals.style.height = myH*35 + 34;

    svgcounters = myFrame.contentWindow.document.getElementById("counters");
    svgcounters.style.width = myTD2.offsetWidth;
    svgcounters.style.height = myH*35 + 34;

    addBWScore();

    addBWIndicators(myTD2.offsetWidth, myH, "n"); // neutrals
    addBWIndicators(myTD2.offsetWidth, myH, "c"); // counter 

    addBWRooms();

    addNexuses();

}

function addBWScore(){

    console.log("[BlackAndWhite.js] addBWScore(): Hi.");

    myFrame.contentWindow.document.getElementById("whiteScore").innerHTML = 0;
    myFrame.contentWindow.document.getElementById("blackScore").innerHTML = 0;
    myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = 0;

}

function addBWIndicators(availWidth, myH, myType){

    let w = availWidth;
    let availHeight = myH*35 + 34;
    let h = myH;
    let x = null;
    let y = null;

    console.log("[BlackAndWhite.js] addBWIndicators(" + availWidth + ", " + availHeight + "): Calculating level indicator dimensions as " + w + "x" + h + "."); 

    for (let i = 0; i < 35; i++){

        let desg = null;
        if (i < 10){ desg = "0" + i; } else { desg = i; }
        desg = desg + myType;

        x = 0;
        y = availHeight - (i*(h + 1)) - h;

        let targetSVG = null;
        if (myType == "n"){ targetSVG = svgneutrals; }
        if (myType == "c"){ targetSVG = svgcounters; }  
        
        if (i == 26){

            if (myType == "n"){ addRect(desg, x, y, w, h, targetSVG, "XX"); }
            if (myType == "c"){ addRect(desg, x, y, w, h, targetSVG, "XX"); }

        } else {

            addRect(desg, x, y, w, h, targetSVG, "--");

        }        

    }
    
}

function addBWWireFrame(myName, myType, xPos, yPos, zPos, myWidth, myLength, myHeight, myAffiliation, myArray){

    // console.log("[BlackAndWhite.js] addBWWireFrame(): Hi!");

    const geometry = new THREE.BoxGeometry(myWidth, myLength, myHeight);
    const edges = new THREE.EdgesGeometry (geometry);
    const wire = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: "#a0a0c0"})); // #0078c8

    wire.position.x = xPos + myWidth/2;  
    wire.position.y = yPos + myLength/2;
    wire.position.z = -zPos - myHeight/2;

    scene.add(wire);

    let latestIndex = scene.children.length - 1;

    let pos = [xPos, xPos + myWidth, zPos, zPos + myHeight, yPos, yPos + myLength];

    const myFrame = new Object();
    myFrame.name = myName;
    myFrame.type = myType;
    myFrame.position = pos;
    myFrame.index1 = latestIndex;
    myFrame.uuid1 = scene.children[latestIndex].uuid;
    myFrame.affiliation = myAffiliation;
    myArray.push(myFrame);    

}

function addBWRoom(name, X1, Y1, Z1, X2, Y2, Z2, myAffiliation, myArray){

    // BEWARE !!!
    // Minecraft uses (x,z) for the 2D plane and y as the height coordinate
    // THREE.js uses (x,y) as the 2D plane and z as the height coordinate
    // Input to this function uses the MINECRAFT CONVENTION

    // console.log("[BlackAndWhite.js] addBWRoom(): Hi.");

    let myX = null;
    let myWidth = null;
    if (X1 < X2){ myWidth = X2 - X1; myX = X1; } else { myWidth = X1 - X2; myX = X2; }
    
    let myZ = null;
    let myHeight = null;
    if (Y1 < Y2){ myHeight = Y2 - Y1; myZ = Y1; } else { myHeight = Y1 - Y2; myZ = Y2; }
    if (myHeight == 0){ myHeight = 5; } // standard height for a room

    let myY = null;
    let myDepth = null;
    if (Z1 < Z2){ myDepth = Z2 - Z1; myY = Z1; } else { myDepth = Z1 - Z2; myY = Z2; }

    // console.log("addRoom(): Adding room named " + name + " with dimensions " + myWidth + "x" + myHeight + "x" + myDepth + ".");
    addBWWireFrame(name, "BWRoom", myX, myY, myZ, myWidth, myDepth, myHeight, myAffiliation, myArray)

}

function changeAffiliation(myFloor, myRoom, myNewAffiliation){

    // console.log("[BlackAndWhite.js] changeAffiliation(" + myFloor + ", " + myRoom + ", " + myNewAffiliation + "): Hi!");

    let pointer = null;

    for (let i = 0; i < BWRooms[myFloor].length; i++){

        if (BWRooms[myFloor][i].name == myRoom){

            pointer = i;
            // console.log("[BlackAndWhite.js] changeAffiliation(): Found room " + myRoom + " at BWRooms[] index " + pointer);
            break;

        }

    }

    let index = null;

    if (pointer != null){

        BWRooms[myFloor][pointer].affiliation = myNewAffiliation;

        for (let i = 0; i < scene.children.length; i++){

            if (scene.children[i].uuid == BWRooms[myFloor][pointer].uuid1){

                index = i;
                break;

            }

        }

    }

    if (index != null){

        let RGB = null;

        if (myNewAffiliation == "black"){ RGB = [0, 0, 0]; }
        if (myNewAffiliation == "neutral"){ RGB = [0, 120, 200]; }
        if (myNewAffiliation == "white"){ RGB = [255, 255, 255]; }

        if (RGB != null) {
            
            scene.children[index].material.color.r = RGB[0];
            scene.children[index].material.color.g = RGB[1];
            scene.children[index].material.color.b = RGB[2];

        }

    }

}

function setPlayerAffiliation(myPlayer, myAffiliation){

    // console.log("[BlackAndWhite.js] setPlayerAffiliation(" + myPlayer + ", " + myAffiliation + "): Hi!");

    let index = null;

    for (let i = 0; i < myPlayers.length; i++){

        if (myPlayers[i][0] == myPlayer){

            index = i;
            break;

        }

    }

    if (index != null){

        console.log("[BlackAndWhite.js] Found player " + myPlayer + ", setting affiliation now to '" + myAffiliation + "'.");
        myPlayers[index][4] = myAffiliation;

    }

}

function checkBWRooms(currentFloor, thisAffiliation, playerIdx, playerVector){

    // console.log("[BlackAndWhite.js] checkBWRooms(" + currentFloor + ", " + thisAffiliation + "): Player " + playerIdx +  " has position [" + playerVector.x + ", " + playerVector.y + ", " + playerVector.z + "].");

    let flag = false;
    let pointer = null;

    let blackFlag = false;
    let whiteFlag = false;

    if (myPlayers[playerIdx][5] == "SURVIVAL"){

        for (let i = 0; i < BWRooms[currentFloor].length; i++){

            if (playerVector.x >= BWRooms[currentFloor][i].position[0] && playerVector.x <= BWRooms[currentFloor][i].position[1]){

                if (playerVector.y >= BWRooms[currentFloor][i].position[4] && playerVector.y <= BWRooms[currentFloor][i].position[5]){

                    // console.log("[BlackAndWhite.js] checkBWRooms(): Player is in room " + BWRooms[currentFloor][i].name + ".");
                    flag = true;
                    pointer = i;
                    
                    if ((currentFloor == 1) && (BWRooms[currentFloor][i].name == "R-12")){ blackFlag = true; }
                    if ((currentFloor == 21) && (BWRooms[currentFloor][i].name == "R-09")){ whiteFlag = true; }
                    
                    break;

                }

            }

        }

        if (flag == true){

            let prevAff = BWRooms[currentFloor][pointer].affiliation;
            // console.log("[BlackAndWhite.js] checkBWRooms(): Room affiliation is " + prevAff + ", player affiliation is " + thisAffiliation + ", LockFloors[" + currentFloor + "] = " + LockFloors[currentFloor][2] + ".");
            if ((prevAff != thisAffiliation) && (LockFloors[currentFloor][2] == false)){

                if (thisAffiliation == "white"){ 
                    
                    myFrame.contentWindow.document.getElementById("whiteScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("whiteScore").innerHTML) + 1);
                    if (prevAff == "black"){ myFrame.contentWindow.document.getElementById("blackScore").innerHTML = myFrame.contentWindow.document.getElementById("blackScore").innerHTML - 1; }   
                    if (prevAff == null){ myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) - 1); }              
                
                }             

                if (thisAffiliation == "black"){ 
                    
                    myFrame.contentWindow.document.getElementById("blackScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("blackScore").innerHTML) + 1);
                    if (prevAff == "white"){ myFrame.contentWindow.document.getElementById("whiteScore").innerHTML = myFrame.contentWindow.document.getElementById("whiteScore").innerHTML - 1; }
                    if (prevAff == null){ myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) - 1); }
                
                } 

                changeAffiliation(currentFloor, BWRooms[currentFloor][pointer].name, thisAffiliation);
                
            }              

        }

        if (blackFlag == true){ setPlayerAffiliation(myPlayers[playerIdx][0], "black"); }
        if (whiteFlag == true){ setPlayerAffiliation(myPlayers[playerIdx][0], "white"); }

    }

}

function BWRoomTally(){

    // console.log("[BlackAndWhite.js] BWRoomTally(): Hello there.");

    for (let i = 0; i <= 34; i++){

        // first loop: cycle through floors 0 to 34

        let neutralRooms = 0;
        for (let j = 1; j < BWRooms[i].length - 1; j++){ if (BWRooms[i][j].affiliation == null){ neutralRooms = neutralRooms + 1; } }

        let fl = i;
        if (fl < 10){ fl = "0" + fl; }
        let cn = fl + "c"; // counters

        let nt = fl + "n"; // neutrals
        myFrame.contentWindow.document.getElementById(nt).parentElement.children[1].innerHTML = neutralRooms;

        if ((i != 26) && (LockFloors[i][2] == false)){

            let allRoomsConquered = true;
            let myAff = BWRooms[i][0].affiliation;

            // console.log("[BlackAndWhite.js] BWRoomTally(): First room on floor " + i + " has affiliation " + myAff + ".");
                
            if (myAff != null){

                for (let j = 1; j < BWRooms[i].length - 1; j++){

                    // secondary loop: cycle through all rooms of floor i

                    if (BWRooms[i][j].affiliation != myAff){

                        allRoomsConquered = false;
                        break;

                    }
        
                }

                if (allRoomsConquered == true){

                    console.log("[BlackAndWhite.js] BWRoomTally(): All rooms on floor " + i + " are conquered by " + myAff + ".");                        
                    
                    if (LockFloors[i][1] == 99){ 
                        
                        LockFloors[i][1] = 60;
                        console.log("[BlackAndWhite.js] BWRoomTally(): STARTING COUNTER."); 
                    
                    }

                    if ((LockFloors[i][1] <= 60) && (LockFloors[i][1] > 0)){ 
                        
                        LockFloors[i][1] = LockFloors[i][1] - 1;
                        console.log("[BlackAndWhite.js] BWRoomTally(): DECREMENT COUNTER TO " + LockFloors[i][1] + "."); 

                        myFrame.contentWindow.document.getElementById(cn).parentElement.children[1].innerHTML = LockFloors[i][1];
                        myFrame.contentWindow.document.getElementById(cn).setAttribute("class", "counterWarning");
                    
                    }

                    if (LockFloors[i][1] == 0){ 
                        
                        LockFloors[i][2] = true;
                        console.log("[BlackAndWhite.js] BWRoomTally(): FLOOR " + i + " IS NOW LOCKED FOR " + myAff + ".");

                        myFrame.contentWindow.document.getElementById(cn).parentElement.children[1].innerHTML = "L";

                        if (myAff == "black"){

                            myFrame.contentWindow.document.getElementById(cn).setAttribute("class", "counterBlack");
                            myFrame.contentWindow.document.getElementById(cn).parentElement.children[1].setAttribute("class", "counterWhite");

                        }

                        if (myAff == "white"){

                            myFrame.contentWindow.document.getElementById(cn).setAttribute("class", "counterWhite");
                            myFrame.contentWindow.document.getElementById(cn).parentElement.children[1].setAttribute("class", "counterBlack");

                        }
                    
                    }                    

                } else {

                    console.log("[BlackAndWhite.js] BWRoomTally(): Floor " + i + " is not yet conquered completely by one side.");
                    LockFloors[i][1] = 99;

                    myFrame.contentWindow.document.getElementById(cn).parentElement.children[1].innerHTML = "--";

                }

            }

        }

    }

}

function addNexuses(){

    // WHITE NEXUS

    let geometry = new THREE.BoxGeometry(10,10,5);
    let material = new THREE.MeshPhongMaterial({color: 0xffffff, transparent: false, opacity: 0.5});
    const wNexus = new THREE.Mesh(geometry, material);

    wNexus.position.x = 9382;
    wNexus.position.y = 808;
    wNexus.position.z = -212 - 5/2;

    scene.add(wNexus); 

    // BLACK NEXUS

    geometry = new THREE.BoxGeometry(10,10,5);
    material = new THREE.MeshPhongMaterial({color: 0x000000, transparent: false, opacity: 0.5});
    const bNexus = new THREE.Mesh(geometry, material);

    bNexus.position.x = 9311;
    bNexus.position.y = 808;
    bNexus.position.z = -72 - 5/2; 
    
    scene.add(bNexus);

}

function addBWRooms(){

    console.log("[BlackAndWhite.js] addBWRooms(): Adding all rooms that are part of Black & White");

    for (let i = 0; i <= 34; i++){ 
        
        let A = [i, 99, false]; // A = [floor number, counter, lock]
        LockFloors.push(A); 
    
    }

    let y1= null;
    let y2 = null;
    let A = [];

    // FLOOR 00
    y1 = 65;
    y2 = y1 + 6;

    A.push([9306, 732, 9316, 742]);
    A.push([9321, 732, 9333, 742]);
    A.push([9360, 732, 9372, 742]);
    A.push([9377, 732, 9387, 742]);
    A.push([9377, 747, 9387, 759]);
    A.push([9377, 764, 9387, 798]);
    A.push([9377, 803, 9387, 813]);
    A.push([9360, 803, 9372, 813]);
    A.push([9338, 803, 9355, 813]);
    A.push([9321, 803, 9333, 813]);
    A.push([9306, 803, 9316, 813]);
    A.push([9306, 786, 9316, 798]);
    A.push([9306, 764, 9316, 781]);
    A.push([9306, 747, 9316, 759]);
    A.push([9365, 769, 9372, 776]);
    A.push([9321, 769, 9328, 776]);

    let temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 01
    y1 = 72;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9316, 742]);
    A.push([9321, 732, 9336, 742]);
    A.push([9357, 732, 9372, 742]);
    A.push([9377, 732, 9387, 742]);
    A.push([9377, 747, 9387, 759]);
    A.push([9377, 764, 9387, 781]);
    A.push([9377, 786, 9387, 798]);
    A.push([9377, 803, 9387, 813]);
    A.push([9360, 803, 9372, 813]);
    A.push([9338, 803, 9355, 813]);
    A.push([9321, 803, 9333, 813]);
    A.push([9306, 803, 9316, 813]);
    A.push([9306, 786, 9316, 798]);
    A.push([9306, 764, 9316, 781]);
    A.push([9306, 747, 9316, 759]);
    A.push([9365, 764, 9372, 781]);
    A.push([9338, 791, 9355, 798]);
    A.push([9321, 764, 9328, 781]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 02
    y1 = 79;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9316, 742]);
    A.push([9321, 732, 9336, 742]);
    A.push([9357, 732, 9372, 742]);
    A.push([9377, 732, 9387, 742]);
    A.push([9377, 747, 9387, 759]);
    A.push([9377, 764, 9387, 781]);
    A.push([9377, 786, 9387, 798]);
    A.push([9377, 803, 9387, 813]);
    A.push([9360, 803, 9372, 813]);
    A.push([9338, 803, 9355, 813]);
    A.push([9321, 803, 9333, 813]);
    A.push([9306, 803, 9316, 813]);
    A.push([9306, 786, 9316, 798]);
    A.push([9306, 764, 9316, 781]);
    A.push([9306, 747, 9316, 759]);
    A.push([9365, 764, 9372, 781]);
    A.push([9338, 791, 9355, 798]);
    A.push([9321, 764, 9328, 781]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 03
    y1 = 86;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9316, 742]);
    A.push([9321, 732, 9336, 742]);
    A.push([9357, 732, 9372, 742]);
    A.push([9377, 732, 9387, 742]);
    A.push([9377, 747, 9387, 759]);
    A.push([9377, 764, 9387, 781]);
    A.push([9377, 786, 9387, 798]);
    A.push([9377, 803, 9387, 813]);
    A.push([9360, 803, 9372, 813]);
    A.push([9338, 803, 9355, 813]);
    A.push([9321, 803, 9333, 813]);
    A.push([9306, 803, 9316, 813]);
    A.push([9306, 786, 9316, 798]);
    A.push([9306, 764, 9316, 781]);
    A.push([9306, 747, 9316, 759]);
    A.push([9365, 764, 9372, 781]);
    A.push([9338, 791, 9355, 798]);
    A.push([9321, 764, 9328, 781]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 04
    y1 = 93;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9316, 742]);
    A.push([9321, 732, 9333, 742]);
    A.push([9338, 732, 9355, 742]);
    A.push([9360, 732, 9372, 742]);
    A.push([9377, 732, 9387, 742]);
    A.push([9377, 747, 9387, 759]);
    A.push([9377, 764, 9387, 781]);
    A.push([9377, 786, 9387, 798]);
    A.push([9377, 803, 9387, 813]);
    A.push([9360, 803, 9372, 813]);
    A.push([9338, 803, 9355, 813]);
    A.push([9321, 803, 9333, 813]);
    A.push([9306, 803, 9316, 813]);
    A.push([9306, 786, 9316, 798]);
    A.push([9306, 764, 9316, 781]);
    A.push([9306, 747, 9316, 759]);
    A.push([9338, 747, 9355, 754]);
    A.push([9365, 764, 9372, 781]);
    A.push([9338, 791, 9355, 798]);
    A.push([9321, 764, 9328, 781]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 05
    y1 = 100;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9316, 742]);
    A.push([9321, 732, 9333, 742]);
    A.push([9360, 732, 9372, 742]);
    A.push([9377, 732, 9387, 742]);
    A.push([9377, 747, 9387, 759]);
    A.push([9377, 764, 9387, 781]);
    A.push([9377, 786, 9387, 798]);
    A.push([9377, 803, 9387, 813]);
    A.push([9360, 803, 9372, 813]);
    A.push([9338, 803, 9355, 813]);
    A.push([9321, 803, 9333, 813]);
    A.push([9306, 803, 9316, 813]);
    A.push([9306, 786, 9316, 798]);
    A.push([9306, 764, 9316, 781]);
    A.push([9306, 747, 9316, 759]);
    A.push([9366, 764, 9372, 781]);
    A.push([9338, 792, 9355, 798]);
    A.push([9321, 764, 9327, 781]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 06
    y1 = 107;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9316, 742]);
    A.push([9321, 732, 9333, 742]);
    A.push([9338, 732, 9355, 742]);
    A.push([9360, 732, 9372, 742]);
    A.push([9377, 732, 9387, 742]);
    A.push([9377, 747, 9387, 759]);
    A.push([9377, 786, 9387, 798]);
    A.push([9377, 803, 9387, 813]);
    A.push([9360, 803, 9372, 813]);
    A.push([9338, 803, 9355, 813]);
    A.push([9321, 803, 9333, 813]);
    A.push([9306, 803, 9316, 813]);
    A.push([9306, 786, 9316, 798]);
    A.push([9306, 764, 9316, 781]);
    A.push([9306, 747, 9316, 759]);
    A.push([9338, 747, 9355, 753]);
    A.push([9338, 792, 9355, 798]);
    A.push([9321, 764, 9327, 781]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 07
    y1 = 114;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9316, 742]);
    A.push([9321, 732, 9333, 742]);
    A.push([9338, 732, 9355, 742]);
    A.push([9360, 732, 9372, 742]);
    A.push([9377, 732, 9387, 742]);
    A.push([9377, 747, 9387, 759]);
    A.push([9377, 764, 9387, 781]);
    A.push([9377, 786, 9387, 798]);
    A.push([9377, 803, 9387, 813]);
    A.push([9360, 803, 9372, 813]);
    A.push([9321, 803, 9333, 813]);
    A.push([9306, 803, 9316, 813]);
    A.push([9306, 786, 9316, 798]);
    A.push([9306, 764, 9316, 781]);
    A.push([9306, 747, 9316, 759]);
    A.push([9344, 747, 9349, 753]);
    A.push([9366, 764, 9372, 781]);
    A.push([9321, 764, 9327, 781]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 08
    y1 = 121;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9316, 742]);
    A.push([9321, 732, 9333, 742]);
    A.push([9338, 732, 9355, 742]);
    A.push([9360, 732, 9372, 742]);
    A.push([9377, 732, 9387, 742]);
    A.push([9377, 747, 9387, 759]);
    A.push([9377, 764, 9387, 781]);
    A.push([9377, 786, 9387, 798]);
    A.push([9377, 803, 9387, 813]);
    A.push([9360, 803, 9372, 813]);
    A.push([9338, 803, 9355, 813]);
    A.push([9321, 803, 9333, 813]);
    A.push([9306, 803, 9316, 813]);
    A.push([9306, 786, 9316, 798]);
    A.push([9306, 747, 9316, 759]);
    A.push([9338, 747, 9355, 753]);
    A.push([9366, 764, 9372, 781]);
    A.push([9338, 792, 9355, 798]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 09
    y1 = 128;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9316, 742]);
    A.push([9321, 732, 9333, 742]);
    A.push([9360, 732, 9372, 742]);
    A.push([9377, 732, 9387, 742]);
    A.push([9377, 747, 9387, 759]);
    A.push([9377, 764, 9387, 781]);
    A.push([9377, 786, 9387, 798]);
    A.push([9377, 803, 9387, 813]);
    A.push([9360, 803, 9372, 813]);
    A.push([9338, 803, 9355, 813]);
    A.push([9321, 803, 9333, 813]);
    A.push([9306, 803, 9316, 813]);
    A.push([9306, 786, 9316, 798]);
    A.push([9306, 764, 9316, 781]);
    A.push([9306, 747, 9316, 759]);
    A.push([9366, 764, 9372, 781]);
    A.push([9338, 792, 9355, 798]);
    A.push([9321, 764, 9327, 781]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 10
    y1 = 135;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9316, 742]);
    A.push([9321, 732, 9333, 742]);
    A.push([9338, 732, 9355, 742]);
    A.push([9360, 732, 9372, 742]);
    A.push([9377, 732, 9387, 742]);
    A.push([9377, 747, 9387, 759]);
    A.push([9377, 764, 9387, 781]);
    A.push([9377, 786, 9387, 798]);
    A.push([9377, 803, 9387, 813]);
    A.push([9360, 803, 9372, 813]);
    A.push([9338, 803, 9355, 813]);
    A.push([9321, 803, 9333, 813]);
    A.push([9306, 803, 9316, 813]);
    A.push([9306, 786, 9316, 798]);
    A.push([9306, 764, 9316, 781]);
    A.push([9306, 747, 9316, 759]);
    A.push([9338, 747, 9355, 753]);
    A.push([9366, 764, 9372, 781]);
    A.push([9338, 792, 9355, 798]);
    A.push([9321, 764, 9327, 781]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 11
    y1 = 142;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9316, 759]);
    A.push([9321, 732, 9333, 742]);
    A.push([9360, 732, 9372, 742]);
    A.push([9377, 732, 9387, 759]);
    A.push([9371, 764, 9387, 781]);
    A.push([9377, 786, 9387, 813]);
    A.push([9360, 797, 9372, 813]);
    A.push([9338, 797, 9355, 813]);
    A.push([9306, 803, 9333, 813]);
    A.push([9306, 786, 9322, 798]);
    A.push([9306, 764, 9322, 781]);    
    A.push([9366, 764, 9369, 781]);
    A.push([9338, 792, 9355, 795]);
    A.push([9324, 764, 9327, 781]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 12

    y1 = 149;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9319, 745]);
    A.push([9321, 732, 9333, 742]);
    A.push([9360, 732, 9372, 742]);
    A.push([9374, 732, 9387, 745]);
    A.push([9377, 747, 9387, 759]);
    A.push([9377, 786, 9387, 798]);
    A.push([9374, 800, 9387, 813]);
    A.push([9360, 803, 9372, 813]);
    A.push([9321, 803, 9333, 813]);
    A.push([9306, 800, 9319, 813]);
    A.push([9306, 786, 9316, 798]);
    A.push([9306, 747, 9316, 759]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 13

    y1 = 156;
    y2 = y1 + 6;
    A = [];

    A.push([9338, 732, 9355, 751]);
    A.push([9377, 764, 9387, 781]);
    A.push([9338, 803, 9355, 813]);
    A.push([9306, 764, 9316, 781]);
    A.push([9341, 756, 9352, 763]);
    A.push([9360, 768, 9372, 781]);
    A.push([9338, 786, 9355, 798]);
    A.push([9321, 764, 9328, 781]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 14

    y1 = 163;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9316, 742]);
    A.push([9321, 732, 9333, 742]);
    A.push([9338, 732, 9355, 742]);
    A.push([9360, 732, 9372, 742]);
    A.push([9377, 732, 9387, 742]);
    A.push([9377, 747, 9387, 759]);
    A.push([9377, 764, 9387, 781]);
    A.push([9377, 786, 9387, 798]);
    A.push([9377, 803, 9387, 813]);
    A.push([9360, 803, 9372, 813]);
    A.push([9338, 803, 9355, 813]);
    A.push([9321, 803, 9333, 813]);
    A.push([9306, 803, 9316, 813]);
    A.push([9306, 786, 9316, 798]);
    A.push([9306, 764, 9316, 781]);
    A.push([9306, 747, 9316, 759]);
    A.push([9338, 747, 9355, 750]);
    A.push([9360, 768, 9372, 781]);
    A.push([9338, 786, 9355, 798]);
    A.push([9321, 768, 9333, 781]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 15

    y1 = 170;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9316, 742]);
    A.push([9321, 732, 9333, 742]);
    A.push([9338, 732, 9355, 742]);
    A.push([9360, 732, 9372, 742]);
    A.push([9377, 732, 9387, 742]);
    A.push([9377, 747, 9387, 759]);
    A.push([9377, 764, 9387, 781]);
    A.push([9377, 786, 9387, 798]);
    A.push([9377, 803, 9387, 813]);
    A.push([9360, 803, 9372, 813]);
    A.push([9338, 803, 9355, 813]);
    A.push([9321, 803, 9333, 813]);
    A.push([9306, 803, 9316, 813]);
    A.push([9306, 786, 9316, 798]);
    A.push([9306, 764, 9316, 781]);
    A.push([9306, 747, 9316, 759]);
    A.push([9338, 747, 9355, 751]);
    A.push([9365, 764, 9372, 781]);
    A.push([9338, 791, 9355, 798]);
    A.push([9321, 768, 9334, 781]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 16

    y1 = 177;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9316, 742]);
    A.push([9321, 732, 9333, 742]);
    A.push([9338, 732, 9355, 742]);
    A.push([9360, 732, 9372, 742]);
    A.push([9377, 732, 9387, 742]);
    A.push([9377, 747, 9387, 759]);
    A.push([9377, 764, 9387, 781]);
    A.push([9377, 786, 9387, 798]);
    A.push([9377, 803, 9387, 813]);
    A.push([9360, 803, 9372, 813]);
    A.push([9338, 803, 9355, 813]);
    A.push([9321, 803, 9333, 813]);
    A.push([9306, 803, 9316, 813]);
    A.push([9306, 786, 9316, 798]);
    A.push([9306, 764, 9316, 781]);
    A.push([9306, 747, 9316, 759]);
    A.push([9338, 747, 9355, 751]);
    A.push([9365, 764, 9372, 781]);
    A.push([9338, 791, 9355, 798]);
    A.push([9321, 764, 9328, 781]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 17

    y1 = 184;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9316, 742]);
    A.push([9321, 732, 9333, 742]);
    A.push([9338, 732, 9355, 742]);
    A.push([9360, 732, 9372, 742]);
    A.push([9377, 732, 9387, 742]);
    A.push([9377, 747, 9387, 759]);
    A.push([9377, 764, 9387, 781]);
    A.push([9377, 786, 9387, 798]);
    A.push([9377, 803, 9387, 813]);
    A.push([9360, 803, 9372, 813]);
    A.push([9338, 803, 9355, 813]);
    A.push([9321, 803, 9333, 813]);
    A.push([9306, 803, 9316, 813]);
    A.push([9306, 786, 9316, 798]);
    A.push([9306, 764, 9316, 781]);
    A.push([9306, 747, 9316, 759]);
    A.push([9338, 747, 9355, 751]);
    A.push([9365, 756, 9372, 786]);
    A.push([9338, 791, 9355, 798]);
    A.push([9321, 756, 9328, 786]);
    A.push([9321, 747, 9333, 751]);
    A.push([9360, 747, 9372, 751]);
    A.push([9360, 791, 9372, 798]);
    A.push([9321, 791, 9333, 798]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 18

    y1 = 191;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9316, 740]);
    A.push([9321, 732, 9333, 742]);
    A.push([9338, 732, 9355, 742]);
    A.push([9360, 732, 9372, 742]);
    A.push([9379, 732, 9387, 742]);
    A.push([9377, 747, 9387, 759]);
    A.push([9377, 764, 9387, 781]);
    A.push([9377, 786, 9387, 798]);
    A.push([9377, 805, 9387, 813]);
    A.push([9360, 803, 9372, 813]);
    A.push([9338, 803, 9355, 813]);
    A.push([9321, 803, 9333, 813]);
    A.push([9306, 803, 9314, 810]);
    A.push([9306, 786, 9316, 798]);
    A.push([9306, 764, 9316, 781]);
    A.push([9306, 747, 9316, 759]);
    A.push([9338, 747, 9355, 751]);
    A.push([9365, 764, 9372, 781]);
    A.push([9338, 791, 9355, 798]);
    A.push([9321, 764, 9328, 781]);
    
    temp = [];
    
    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 19

    y1 = 198;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9316, 740]);
    A.push([9321, 732, 9333, 738]);
    A.push([9338, 732, 9355, 742]);
    A.push([9360, 732, 9371, 742]);
    A.push([9377, 732, 9387, 737]);
    A.push([9381, 747, 9387, 759]);
    A.push([9377, 764, 9387, 781]);
    A.push([9377, 786, 9387, 797]);
    A.push([9377, 805, 9387, 813]);
    A.push([9360, 807, 9372, 813]);
    A.push([9338, 803, 9355, 813]);
    A.push([9322, 803, 9333, 813]);
    A.push([9306, 803, 9314, 813]);
    A.push([9306, 786, 9312, 798]);
    A.push([9306, 764, 9316, 781]);
    A.push([9306, 748, 9316, 759]);
    A.push([9338, 747, 9355, 751]);
    A.push([9365, 764, 9372, 781]);
    A.push([9338, 791, 9355, 798]);
    A.push([9321, 764, 9328, 781]);
    A.push([9323, 786, 9333, 798]);    

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 20

    y1 = 205;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9316, 742]);
    A.push([9321, 732, 9333, 742]);
    A.push([9338, 732, 9355, 742]);
    A.push([9360, 732, 9372, 742]);
    A.push([9377, 732, 9387, 742]);
    A.push([9377, 747, 9387, 759]);
    A.push([9377, 764, 9387, 781]);
    A.push([9377, 786, 9387, 798]);
    A.push([9377, 803, 9387, 813]);
    A.push([9360, 803, 9372, 813]);
    A.push([9338, 803, 9355, 813]);
    A.push([9321, 803, 9333, 813]);
    A.push([9306, 803, 9316, 813]);
    A.push([9306, 786, 9316, 798]);
    A.push([9306, 747, 9316, 759]);
    A.push([9365, 764, 9372, 781]);
    A.push([9338, 791, 9355, 798]);
    A.push([9321, 791, 9333, 798]);    

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);    

    // FLOOR 21
    y1 = 212;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9316, 742]);
    A.push([9321, 732, 9333, 742]);
    A.push([9338, 732, 9355, 742]);
    A.push([9360, 732, 9372, 742]);
    A.push([9377, 732, 9387, 742]);
    A.push([9377, 747, 9387, 759]);
    A.push([9377, 764, 9387, 781]);
    A.push([9377, 786, 9387, 798]);
    A.push([9377, 803, 9387, 813]);
    A.push([9360, 803, 9372, 813]);
    A.push([9338, 803, 9355, 813]);
    A.push([9321, 803, 9333, 813]);
    A.push([9306, 803, 9316, 813]);
    A.push([9306, 786, 9316, 798]);
    A.push([9306, 764, 9316, 781]);
    A.push([9306, 747, 9316, 759]);
    A.push([9365, 764, 9372, 781]);
    A.push([9338, 791, 9355, 798]);
    A.push([9321, 791, 9333, 798]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 22
    y1 = 219;
    y2 = y1 + 6;
    A = [];

    temp = [];

    A.push([9306, 732, 9325, 760]);
    A.push([9326, 732, 9345, 747]);
    A.push([9347, 732, 9367, 747]);
    A.push([9368, 732, 9387, 771]);
    A.push([9368, 773, 9387, 813]);
    A.push([9348, 794, 9367, 813]);
    A.push([9317, 794, 9346, 813]);
    A.push([9306, 774, 9316, 813]);
    A.push([9306, 761, 9316, 772]);    

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 23
    y1 = 226;
    y2 = y1 + 6;
    A = [];

    A.push([9335, 791, 9358, 813]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 24
    y1 = 233;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9316, 742]);
    A.push([9321, 732, 9333, 742]);
    A.push([9338, 732, 9355, 742]);
    A.push([9360, 732, 9372, 742]);
    A.push([9377, 732, 9387, 742]);
    A.push([9377, 747, 9387, 759]);
    A.push([9377, 764, 9387, 781]);
    A.push([9377, 786, 9387, 798]);
    A.push([9377, 803, 9387, 813]);
    A.push([9360, 803, 9372, 813]);
    A.push([9321, 803, 9333, 813]);
    A.push([9306, 803, 9316, 813]);
    A.push([9306, 786, 9316, 798]);
    A.push([9306, 764, 9316, 781]);
    A.push([9306, 747, 9316, 759]);
    A.push([9321, 791, 9333, 798]);    

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 25
    y1 = 240;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9316, 742]);
    A.push([9321, 732, 9333, 742]);
    A.push([9338, 732, 9355, 742]);
    A.push([9360, 732, 9372, 742]);
    A.push([9377, 732, 9387, 742]);
    A.push([9377, 747, 9387, 759]);
    A.push([9377, 786, 9387, 798]);
    A.push([9377, 803, 9387, 813]);
    A.push([9360, 803, 9372, 813]);
    A.push([9338, 803, 9355, 813]);
    A.push([9321, 803, 9333, 813]);
    A.push([9306, 803, 9316, 813]);
    A.push([9306, 786, 9316, 798]);
    A.push([9306, 747, 9316, 759]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 26
    y1 = 247;
    y2 = y1 + 6;
    A = [];

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 27
    y1 = 254;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9316, 742]);
    A.push([9321, 732, 9333, 742]);
    A.push([9338, 732, 9355, 742]);
    A.push([9360, 732, 9372, 742]);
    A.push([9377, 732, 9387, 742]);
    A.push([9377, 747, 9387, 762]);
    A.push([9377, 783, 9387, 813]);
    A.push([9361, 783, 9372, 796]);
    A.push([9321, 783, 9336, 796]);
    A.push([9306, 783, 9316, 813]);
    A.push([9306, 747, 9316, 762]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 28
    y1 = 261;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9316, 742]);
    A.push([9321, 732, 9333, 742]);
    A.push([9338, 732, 9355, 742]);
    A.push([9360, 732, 9372, 742]);
    A.push([9377, 732, 9387, 742]);
    A.push([9377, 747, 9387, 762]);
    A.push([9377, 783, 9387, 798]);
    A.push([9377, 803, 9387, 813]);
    A.push([9338, 803, 9355, 813]);
    A.push([9306, 803, 9315, 813]);
    A.push([9306, 783, 9316, 798]);
    A.push([9306, 747, 9316, 762]);
    A.push([9338, 783, 9355, 798]); 
    A.push([9361, 783, 9372, 798]);
    A.push([9321, 783, 9333, 798]);  
    A.push([9321, 747, 9333, 762]);
    A.push([9360, 747, 9372, 762]);  

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 29
    y1 = 268;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9316, 750]);
    A.push([9377, 732, 9387, 750]);
    A.push([9377, 755, 9387, 762]);
    A.push([9377, 764, 9387, 784]);
    A.push([9377, 786, 9387, 798]);
    A.push([9377, 803, 9387, 813]);
    A.push([9338, 803, 9355, 813]);
    A.push([9306, 803, 9316, 813]);
    A.push([9306, 786, 9316, 798]);
    A.push([9306, 755, 9316, 781]);
    A.push([9338, 790, 9355, 798]);
    A.push([9321, 790, 9333, 798]);
    A.push([9367, 737, 9372, 745]);
    A.push([9322, 737, 9326, 745]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 30
    y1 = 275;
    y2 = y1 + 6;
    A = [];

    A.push([9378, 755, 9386, 762]);
    A.push([9374, 764, 9387, 781]);
    A.push([9374, 786, 9387, 798]);
    A.push([9377, 803, 9387, 813]);
    A.push([9360, 803, 9372, 813]);
    A.push([9338, 803, 9355, 813]);
    A.push([9321, 803, 9333, 813]);
    A.push([9306, 803, 9316, 813]);
    A.push([9306, 786, 9319, 798]);
    A.push([9306, 764, 9319, 781]);
    A.push([9307, 755, 9315, 762]);
    A.push([9360, 764, 9372, 778]);
    A.push([9338, 786, 9355, 798]);
    A.push([9321, 764, 9333, 781]);
    A.push([9321, 786, 9333, 798]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 31
    y1 = 282;
    y2 = y1 + 6;
    A = [];

    A.push([9313, 739, 9328, 763]);
    A.push([9329, 739, 9336, 747]);
    A.push([9357, 739, 9364, 747]);
    A.push([9365, 739, 9380, 760]);
    A.push([9364, 765, 9380, 806]);
    A.push([9334, 786, 9352, 806]);
    A.push([9313, 768, 9333, 806]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 32
    y1 = 289;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9321, 746]);
    A.push([9323, 732, 9333, 742]);
    A.push([9360, 732, 9367, 742]);
    A.push([9370, 732, 9387, 745]);
    A.push([9371, 747, 9387, 759]);
    A.push([9371, 786, 9387, 795]);
    A.push([9374, 797, 9387, 813]);
    A.push([9360, 804, 9372, 813]);
    A.push([9306, 803, 9319, 813]);
    A.push([9306, 786, 9321, 795]);    
    A.push([9306, 748, 9321, 759]);
    A.push([9342, 744, 9350, 749]);
    A.push([9364, 769, 9369, 777]);
    A.push([9343, 790, 9350, 795]);
    A.push([9323, 769, 9328, 776]);    
    A.push([9338, 732, 9344, 742]);
    A.push([9346, 732, 9355, 742]);
    A.push([9371, 764, 9387, 769]);
    A.push([9371, 771, 9387, 781]);
    A.push([9349, 797, 9355, 813]);
    A.push([9338, 797, 9347, 813]);
    A.push([9306, 764, 9321, 770]);
    A.push([9306, 772, 9321, 781]);    

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 33
    y1 = 296;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9316, 749]);
    A.push([9321, 732, 9332, 749]);
    A.push([9361, 732, 9370, 742]);
    A.push([9372, 731, 9387, 747]);
    A.push([9379, 749, 9388, 758]);
    A.push([9362, 765, 9387, 780]);
    A.push([9339, 784, 9354, 813]);
    A.push([9306, 796, 9332, 813]);
    A.push([9361, 744, 9366, 751]);
    A.push([9361, 753, 9370, 758]);   
    A.push([9338, 764, 9355, 781]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);

    // FLOOR 34
    y1 = 303;
    y2 = y1 + 6;
    A = [];

    A.push([9306, 732, 9325, 749]);
    A.push([9326, 732, 9337, 749]);
    A.push([9360, 732, 9374, 741]);
    A.push([9376, 732, 9387, 741]);
    A.push([9381, 743, 9387, 764]);
    A.push([9364, 766, 9387, 780]);
    A.push([9344, 790, 9354, 813]);
    A.push([9329, 801, 9342, 813]);
    A.push([9318, 800, 9327, 813]);
    A.push([9306, 791, 9313, 813]);
    A.push([9338, 783, 9354, 788]);
    A.push([9338, 764, 9355, 776]);    
    A.push([9315, 791, 9325, 798]);

    temp = [];

    for (let i = 0; i < A.length; i++){ 

        let designation = "R-";
        if (i + 1 < 10){ designation = designation + "0" + (i + 1); } else { designation = designation + (i + 1); }

        addBWRoom(designation, A[i][0], y1, A[i][1], A[i][2], y2, A[i][3], null, temp); 
        myFrame.contentWindow.document.getElementById("neutralScore").innerHTML = parseInt(parseInt(myFrame.contentWindow.document.getElementById("neutralScore").innerHTML) + 1);
    
    }

    BWRooms.push(temp);
    
}