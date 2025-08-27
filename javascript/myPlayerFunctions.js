function addAllPlayers(){

    if (debugLD == true){ console.log("[myPlayerFunctions.js] addAllPlayers(): Hi."); }
    
    addSinglePlayer('Hyalan','#00ff00', null, null);
    addSinglePlayer('Robstar558','#ff4400', null, null);
    //addSinglePlayer('M0ost3r','#8800ff', null, null);
    //addSinglePlayer('mas123','#8800ff', null, null);
    addSinglePlayer('fabi_gaming09', '#0000ff', null, null);
    // addSinglePlayer('Laura247', '#ff369b', null, null);
    // addSinglePlayer('NiklasPFR', '#b2ffff', null, null);
    // addSinglePlayer('McLukas1909', '#ffff00', null, null);    
    addSinglePlayer('diamit123', '#880000', null, null);
    //addSinglePlayer('Razoned', '#004400', null, null);
    addSinglePlayer('Preaksan', '#33c7d8', null, null);
    // addSinglePlayer('Lunetix07', '#33c7d8', null, null);
    //addSinglePlayer('T3ipel', '#467dfd', null, null);
    //addSinglePlayer('C0nFeX787', '#836c50', null, null);
    //addSinglePlayer('SamyHilk', '#b772c2', null, null);
    //addSinglePlayer('KaterJones', '#b772c2', null, null);

    // addSinglePlayer('LookasGaming', '#ffff00', null, null); - this is Lukas' old player name

}

function addSinglePlayer(myName, myColour, myAffiliation, myGamemode){

    // tower roof coordinaties: [9348, 772, 310]

    let myX = 0 + getRndInteger(20,40) - getRndInteger(20,40);
    let myZ = 0 + getRndInteger(20,40) - getRndInteger(20,40);
    let myY = 0;

    let myRadius = 2;

    let myVector = new THREE.Vector3(myX, myY, myZ);
    addSphere(myVector, myColour, myRadius);

    let myIndex = scene.children.length;
    myUUID = scene.children[myIndex-1].uuid;

    if (debugLD == true){ console.log("addSinglePlayer(): Player position indicator added with uuid " + myUUID + " at scene.children index " + (myIndex-1) + "."); }

    let temp = [];
    temp.push(myName);
    temp.push(myColour);
    temp.push(myUUID);
    temp.push(myIndex-1);
    temp.push(myAffiliation);
    temp.push(myGamemode);
    temp.push(myVector);
    temp.push(myY); // last known y-Position (used for updating 2D maps)
    myPlayers.push(temp);

    let myCallSign = myName.substring(0,3);
    addLabel(myCallSign.toUpperCase(), myIndex-1, myVector);

}

function addLabel(myName, myIndex, myVector){

    // console.log("[myPlayerFunctions.js] addLabel(" + myName + ", " + myUUID + "): Hi!");

    let myX = myVector.x;
    let myY = myVector.y;
    let myZ = myVector.z;

    const myDiv = document.createElement("div");
    // myDiv.className = "label";
    myDiv.textContent = myName;
    myDiv.style.color = "#ffffff";

    const myLabel = new CSS2DObject(myDiv);
    myLabel.position.set(myX, myY, myZ);
    scene.children[myIndex].add(myLabel);

}

function colourCodeAllPlayers(){

    // this function is used if the user of the 3D GUI chooses to display Offence and Defence with team colours instead of every player having an individual colour
    // this function colours all players RED (Offence)
    // - defencive players will later coded BLUE by the position updating functions as this is determined whether they are within the defence start position square

    // console.log("[myPlayerFunctions.js] colourCodeAllPlayers(): Hi!");
    
    teamColoursFlag = true;

    for (let i = 0; i < myPlayers.length; i++){

        colourCodePlayer(i, "offence");

    }

}

function colourCodePlayer(myPlayerIndex, myTeam){

    let myColour = null;
    let RGB = null;

    if (myTeam == "offence"){ 
        
        myColour = "#ff0000";
        RGB = [1, 0, 0];
    
    }

    if (myTeam == "defence"){

        myColour = "#006aff";
        RGB = [0, .415, 1];

    }

    myPlayers[myPlayerIndex][1] = myColour;

    let mySceneIndex = myPlayers[myPlayerIndex][3];
    scene.children[mySceneIndex].material.color.r = RGB[0];
    scene.children[mySceneIndex].material.color.g = RGB[1];
    scene.children[mySceneIndex].material.color.b = RGB[2];

}

function removeSinglePlayer(myName){

    if (debugLD == true){ console.log("[myPlayerFunctions.js] removeSinglePlayer(" + myName + "): Called."); }

    let myPlayersIdx = null;
    let sceneIdx = null;

    for (let i = 0; i < myPlayers.length; i++){

        if (myPlayers[i][0] == myName){

            if (debugLD == true){ console.log("[myAux.js] removeSinglePlayer(): Found player " + myName + " at myPlayers[" + i + "]."); }

            myPlayersIdx = i;
            break;

        }

    }

    if (myPlayersIdx != null){

        let myUUID = myPlayers[myPlayersIdx][2];

        for (let i = 0; i < scene.children.length; i++){

            if (scene.children[i].uuid == myUUID){

                sceneIdx = i;
                break;

            }

        }

        scene.children[sceneIdx].name = "deleteMe";
        let deleteObject = scene.getObjectByName("deleteMe");
        scene.remove(deleteObject);
        myPlayers.splice(myPlayersIdx, 1);

    } else {

        if (debugLD == true){ console.log("[myAux.js] removePlayer(): ERROR: Could not find player '" + myName + "'."); }

    }

}

function removeAllPlayers(){

    if (debugLD == true){ console.log("[myPlayerFunctions.js] removeAllPlayers(): Hi."); }
    
    removeSinglePlayer('Hyalan');
    removeSinglePlayer('Robstar558');
    removeSinglePlayer('M0ost3r');
    removeSinglePlayer('fabi_gaming09');
    removeSinglePlayer('Laura247');
    removeSinglePlayer('NiklasPFR');
    removeSinglePlayer('McLukas1909');    
    removeSinglePlayer('diamit123');
    removeSinglePlayer('Razoned');
    removeSinglePlayer('Preaksan');
    removeSinglePlayer('Lunetix07');

}

function startAJAX(){

    // console.log("[myPlayerFunctions.js] startAJAX(): Now running."); 

    removeAllPlayers();
    addAllPlayers();

    if (flagReplay = true){ flagReplay = false; }

    flagTelemetry = true;
    ajaxGetTelemetry("whimc_player_positions", myPlayers.length, "live");

    if (BW == true){ BWRoomTally(); }

}

function stopAJAX(){

    flagTelemetry = false;
    // console.log("[myPlayerFunctions.js] stopAJAX(): Stopped.");
    document.getElementById("statusTimestamp").innerHTML = "AJAX() stopped.";
    removeAllPlayers();

}

function startReplay(){

    console.log("[myPlayerFunctions.js] startReplay(): Oh, hi!");

    removeAllPlayers();
    addAllPlayers();

    if (flagTelemetry == true){ stopAJAX(); }

    flagReplay = true;
    // ajaxGetTelemetry("whimc_player_positions", 999999, "replay"); 
    ajaxGetTelemetry("TH20250323", 999999, "replay"); 

    if (BW == true){ BWRoomTally(); }

}

function setReplayToTimeStamp(){
    
    stopReplay();

    let goToDateTime = myFrame.contentWindow.document.getElementById("goToDateTime").value;
    if (goToDateTime != ''){ 
        
        myFrame.contentWindow.document.getElementById("goToTimestamp").value = new Date(goToDateTime).getTime()/1000 
    
    }

    let goToTime = myFrame.contentWindow.document.getElementById("goToTimestamp").value;    
    let goToIndex = null; 

    let msg = null;

    for (let i = 0; i < myTelemetry.length; i++){
        
        if (myTelemetry[i][0] == goToTime){

            goToIndex = i;
            break;

        }

    }

    if (goToIndex != null){

        replayTime = goToTime;
        replayIndex = goToIndex;
        msg = "Set replay to timestamp " + replayTime + " found at index " + replayIndex + ".";

        resumeReplay();

    } else {

        msg = "Could not find timestamp " + goToTime + ".";

    }  

    console.log("[myPlayerFunctions.js] setReplayToTimeStamp(): " + msg);

}

function calcSyncTimes(){

    let T = [null, null, null];
    let O = [null, null, null];

    let t0 = myFrame.contentWindow.document.getElementById("syncStart1").value;
    if (t0 != ""){ t0 = new Date(t0).getTime()/1000; T[0] = t0; }

    let t1 = myFrame.contentWindow.document.getElementById("syncStart2").value;
    if (t1 != ""){ t1 = new Date(t1).getTime()/1000; T[1] = t1; }

    let t2 = myFrame.contentWindow.document.getElementById("syncStart3").value;
    if (t2 != ""){ t2 = new Date(t2).getTime()/1000; T[2] = t2; }

    for (let i = 0; i < 3; i++){

        if (T[i] != null){

            if (T[i] <= replayTime){

                let d = replayTime - T[i];
                let x = null;

                let h = Math.floor(d/3600);
                let m = Math.floor((d-h*3600)/60);
                let s = Math.floor((d-h*3600-m*60));

                if (h < 10){ x = "0" + h + ":"; } else { x = h + ":"; }
                if (m < 10){ x = x + "0" + m + ":"; } else { x = x + m + ":"; }
                if (s < 10){ x = x + "0" + s; } else { x = x + s; }

                let myElement = "syncTime" + (i + 1);

                myFrame.contentWindow.document.getElementById(myElement).innerHTML = x;

            }

        }

    }    

}

function Replay(myIndex, myTime){

    if (debugLD == true){ console.log("[myPlayerFunctions.js] Replay(" + myIndex + ", " + myTime + "): Displaying recording."); }

    let myParameter = [myIndex, myTime];

    if (flagReplay == true){

        document.getElementById("statusTimestamp").innerHTML = "<SPAN STYLE='color:#4444ff'>Replay...</SPAN>";
        myFrame.contentWindow.document.getElementById("timestampDisplay").innerHTML = replayTime;
        myFrame.contentWindow.document.getElementById("timeDisplay").innerHTML = new Date(replayTime*1000);

        if (replayIndex <= myTelemetry[0][0]){

            setTimeout(() => { 

                if (myTelemetry[replayIndex][0] == replayTime){            

                    if (debugLD == true){ console.log("[myPlayerFunctions.js] Replay(): Expected timestamp met."); }

                    updatePlayerTelemetry(myParameter);   
                    replayIndex = myIndex - 1;  

                } else {

                    if (debugLD == true){ console.log("[myPlayerFunctions.js] Replay(): Expected timestamp missed - SKIPPING TO NEXT TIMESTAMP."); }

                }

                replayTime = parseInt(parseInt(myTime) + 1);
                Replay(replayIndex, replayTime);
                if (BW == true){ BWRoomTally(); }

            }, 967); // instead of 1000 ms delay before the next step is shown, we use the empirically found number of 967 ms as the engine lags about 33 ms for every 1000 ms that elapse

        }

        calcSyncTimes();

    } else {

        document.getElementById("statusTimestamp").innerHTML = "<SPAN STYLE='color:#4444ff'>Replay paused.</SPAN>";

    }

}

function resumeReplay(){

    flagReplay = true;
    Replay(replayIndex, replayTime);
    if (debugLD == true){ console.log("[myPlayerFunctions.js] resumeReplay(): OK."); }  
    toggleRotation(); 

}

function stopReplay(){

    flagReplay = false;
    if (debugLD == true){ console.log("[myPlayerFunctions.js] stopReplay(): Kthxbye."); }
    toggleRotation();

}

function ajaxGetTelemetry(myTable, myLimit, myMode){

    // call this function with myTable='whimc_player_positions' to get realtime data of players
    // it's safe to call this function with a myLimit greater than the number of rows in the table, e.g. 99999, the SQL will then simply extract all available rows, i.e. the entire table

    if (debugLD == true){ console.log("ajaxGetTelemetry(): Fetching last " + myLimit + " entries from NITRADO database table " + myTable + " and saving it to array myPositions[]."); }
    myTelemetry = null;

    $.ajax({
        url: "./fetch.php?table="+myTable+"&limit="+myLimit,
        method: "GET",
        success:function(results) {
            myTelemetry = JSON.parse(results);
            convertTelemetry();
            groupTelemetry();
            if (myMode == "live"){

                if (flagTelemetry == true) {

                    setTimeout(() => { 
                            
                        updatePlayerTelemetry(findLatestTimestamp());
                        ajaxGetTelemetry("whimc_player_positions", myPlayers.length, "live");
                        if (BW == true){ BWRoomTally(); }
                    
                    }, 1000);
            
                }

            }
            if (myMode == "replay"){

                replayIndex = myTelemetry.length - 1;
                replayTime = myTelemetry[replayIndex][0];
            
                Replay(replayIndex, replayTime);

            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError);
        }

    });

}

function convertTelemetry(){

    if (debugLD == true){ console.log("[myPlayerFunctions.js] convertTelemetry(): First stage conversion: Transpose."); }

    let temp = [];                

    for (let i = 0; i < myTelemetry[0].length; i++){

        let temprow = [];

        for (let j = 0; j < myTelemetry.length; j++){

            temprow.push(myTelemetry[j][i]);

        }

        temp.push(temprow);

    }

    myTelemetry = temp;

}

function groupTelemetry(){

    if (debugLD == true){ console.log("[myPlayerFunctions.js] groupTelemetry(): Second stage conversion: Group by time index."); }

    let temp = [];
    for (let i = 0; i < myTelemetry.length; i++){ temp.push(myTelemetry[i][0]); }
    temp2 = [...new Set(temp)];

    let tlm = [];
    for (let i = 0; i < temp2.length; i++){ 

        let tmparr = [];
        tmparr.push(temp2[i]);
        //tmparr.push(null);

        tlm.push(tmparr);

    }

    for (let i = 0; i < tlm.length; i++){

        for (let j = 0; j < myTelemetry.length; j++){

            if (tlm[i][0] == myTelemetry[j][0]){

                for (let k = 0; k < myPlayers.length; k++){

                    let temp = null;

                    if (myTelemetry[j][1] == myPlayers[k][0]){

                        temp = [];
                        for (let l = 1; l < myTelemetry[j].length; l++){ temp.push(myTelemetry[j][l]); }

                    }

                    if (temp != null){ tlm[i].push(temp); }

                }

            }

        }

    }

    myTelemetry = tlm;

}

function findLatestTimestamp(){

    let latestTimestamp = 0;
    let latestIndex = null;

    for (let i = 0; i < myTelemetry.length; i++){

        if (myTelemetry[i][0] > latestTimestamp){ 
            
            latestTimestamp = myTelemetry[i][0]; 
            latestIndex = i;
        
        }

    }

    let output = [];
    output.push(latestIndex);
    output.push(latestTimestamp);

    displayLatestEntry(output);

    return output;

}

function displayLatestEntry(myInput){

    let myIndex = myInput[0];
    let myTimestamp = myInput[1];

    let latestTime = convertTimestamp(myTimestamp);
    if (debugLD == true){ console.log("[myPlayerFunctions.js] findLatestTimestamp(): Latest timestamp is " + latestTimestamp + " at myTelemetry[" + latestIndex + "] is equivalent to " + latestTime + "."); }
    
    let output = "Last entry: " + latestTime + " ";
    let t = calcElapsedTime(myTimestamp);

    if (flagTelemetry == true){

        if (t <= 30){ output = output + "(~30s ago)."; }
        if ((t > 30) && (t <= 90)){ output = output + "(about a minute ago)."; }
        if ((t > 90) && (t <= 420)){ output = output + "(a couple of minutes ago)."; }
        if ((t > 420) && (t <= 1200)){ output = output + "(about fifteen minutes ago)."; }
        if ((t > 1200) && (t <= 2400)){ output = output + "(about half an hour ago)."; }
        if ((t > 2400) && (t <= 4800)){ output = output + "(about an hour ago)."; }
        if ((t > 4800) && (t <= 21600)){ output = output + "(a couple of hours ago)."; }
        if ((t > 21600) && (t <= 64800)){ output = output + "(about half a day ago)."; }
        if ((t > 64800) && (t <= 129600)){ output = output + "(about a day ago)."; }
        if ((t > 129600) && (t <= 345600)){ output = output + "(a couple of days ago)."; }
        if ((t > 345600) && (t <= 648000)){ output = output + "<SPAN STYLE='color:#ffff00'>(about a week ago :| )</SPAN>."; }
        if ((t > 648000) && (t <= 1209600)){ output = output + "<SPAN STYLE='color:#ffff00'>(more than a week ago :/ )</SPAN>."; }
        if ((t > 1209600) && (t <= 1814400)){ output = output + "<SPAN STYLE='color:#ffff00'>(more than two weeks ago :// )</SPAN>."; }
        if ((t > 1814400) && (t <= 2419200)){ output = output + "<SPAN STYLE='color:#ffff00'>(more than three weeks ago :'( ))</SPAN>."; }
        if ((t > 2419200) && (t <= 4838400)){ output = output + "<SPAN STYLE='color:#ff0000'>(about a month ago :''( ))</SPAN>."; }
        if (t > 4838400){ output = output + "<SPAN STYLE='color:#ff0000'>(more than a month ago x.x )</SPAN>."; }

    }
    
    document.getElementById("statusTimestamp").innerHTML = output;

}

function updatePlayerTelemetry(myInput){

    let myTimestamp = myInput[1];
    let myIndex = myInput[0];
    // console.log("[myPlayerFunctions.js] updatePlayerTelemetry(): Called with timestamp " + myTimestamp + " found at myTelemetry[" + myIndex + "].");

    // this block is primarily for debugging during development and can be removed later
    // let counter = myTelemetry[myIndex].length - 1;
    // console.log("[myPlayerFunctions.js] updatePlayerTelemetry(): Found " + counter + " entries for this time index.");

    let onlineFlag = false; // this flag is true if the latest timestamp is within the last 10 seconds
    if (calcElapsedTime(myTimestamp) < 10){ onlineFlag = true; }
    let onlinePlayers = []; // this tracks all players that have been active within the last 10 seconds

    dehighlightAllFloors();

    for (let j = 0; j < myPlayers.length; j++){

        for (let i = 1; i < myTelemetry[myIndex].length; i++){

            if (myTelemetry[myIndex][i][0] == myPlayers[j][0]){

                // console.log("[myPlayerFunctions.js] updatePlayerTelemetry(): Found player " + myPlayers[j][0] + " in myTelemetry[] and will update him or her.");

                let sceneIndex = myPlayers[j][3];
                let myNewVec = new THREE.Vector3(myTelemetry[myIndex][i][1], myTelemetry[myIndex][i][3], -myTelemetry[myIndex][i][2]);
                scene.children[sceneIndex].position.x = myNewVec.x;
                scene.children[sceneIndex].position.y = myNewVec.y;
                scene.children[sceneIndex].position.z = myNewVec.z;

                // This next block sets the team colours (if this option is enabled)

                if (teamColoursFlag == true){

                    if (myNewVec.z == -163){

                        if ((myNewVec.x) >= 9344 && (myNewVec.x <= 9351)){

                            if ((myNewVec.y >= 754) && (myNewVec.y <= 761)){

                                colourCodePlayer(j, "defence");

                            }

                        }

                    }
                    
                    if (myNewVec.z == -275){

                        if ((myNewVec.x) >= 9310 && (myNewVec.x <= 9316)){

                            if ((myNewVec.y >= 739) && (myNewVec.y <= 745)){

                                colourCodePlayer(j, "defence");

                            }

                        }                        

                    }

                }

                // This next block traces the player path

                if (trackPointsFlag == true){

                    let myTrack = new THREE.Vector3(myNewVec.x, -myNewVec.z, myNewVec.y);
                    addSphere(myTrack, myPlayers[j][1], .5);

                    if (trackPathFlag == true){

                        // this is the index of the last small position indicating sphere sits at
                        let l = scene.children.length - 1;

                        let sX = myPlayers[j][6].x;
                        let sY = -myPlayers[j][6].z;
                        let sZ = myPlayers[j][6].y;
                        let dX = scene.children[l].position.x;
                        let dY = -scene.children[l].position.z;
                        let dZ = scene.children[l].position.y;

                        let dist = calcDist(sX, sY, sZ, dX, dY, dZ);
                        if ((dist >= .1) && (dist <= 99)){ addLine(sX, sY, sZ, dX, dY, dZ, myPlayers[j][1]); }

                    }

                }

                // this simple line here sets the player sphere to the last coordinates read from the database
                myPlayers[j][6] = myNewVec;
                // console.log("[myPlayerFunctions.js] updatePlayerTelemetry(): Position of player " + myPlayers[j][0] + " updated to [" + myNewVec.x + ", " + myNewVec.y + ", " + myNewVec.z + "].");

                // the next lines here updates the player gamemode
                myPlayers[j][5] = myTelemetry[myIndex][i][4];
                let playerLabelColour = "#ffffff";
                if (myPlayers[j][5] == "SPECTATOR"){ playerLabelColour = "#a0a0a0"; }
                scene.children[sceneIndex].children[0].element.style.color = playerLabelColour;

                // console.log("[myPlayerFunctions.js] updatePlayerTelemetry(): Calling floorIndicator() with parameter j=" + j);
                if (myPlayers[j][5] == "SURVIVAL"){ floorIndicator(j); }

                if (onlineFlag == true){ onlinePlayers.push(myPlayers[j][0]); }

                // this next block displays the 2D floor map for the selected player

                let myVec = myPlayers[j][6];

                if (myPlayers[j][0] == selector2D){ 

                    playerLabelColour = "#ffff00";
                    scene.children[sceneIndex].children[0].element.style.color = playerLabelColour;

                    if ((myVec.x >= 9297) && (myVec.x <= 9396) && (myVec.y >= 723) && (myVec.y <= 822)){
                    
                        if (myVec.z != myPlayers[j][7]){ 
                            
                            clear3D();
                            displayFloorMap(myNewVec.z, true); 

                        } else {

                            displayFloorMap(myNewVec.z, false);

                        }

                    }
               
                    myPlayers[j][7] = myVec.z; // save vertical position

                }                

            }

        }

    }

    if (onlineFlag == true){

        document.getElementById("statusTimestamp").innerHTML = "Players <SPAN STYLE='color:#00ff00'>online:</SPAN> ";
        let temp = document.getElementById("statusTimestamp").innerHTML;
        // console.log("[myPlayerFunctions.js] updatePlayerTelemetry()|onlineFlag: Currently, " + onlinePlayers.length + " players are online.");

        for (let i = 0; i < onlinePlayers.length; i++){ 

            document.getElementById("statusTimestamp").innerHTML = temp + onlinePlayers[i];
            temp = document.getElementById("statusTimestamp").innerHTML;

            if (i < onlinePlayers.length - 1){

                document.getElementById("statusTimestamp").innerHTML = temp + ", ";
                temp = document.getElementById("statusTimestamp").innerHTML;

            }

        }

    }

}

function displayFloorMap(myY, flag3D){

    // console.log("[myPlayerFunctions.js] displayFloorMap(" + myY + "): Hi.");
    clearBlocks();   

    if ((myY - 65)%7 == 5){
        
        displayBlocksOfCertainLevel(flag3D, myY - 1);
        displayBlocksOfCertainLevel(flag3D, myY, "solid_white");

        displayBlocksOfCertainLevel(flag3D, myY - 1, "solid_yellow", "jungle_trapdoor");
        displayBlocksOfCertainLevel(flag3D, myY - 1, "solid_yellow", "dark_oak_trapdoor");

        displayBlocksOfCertainLevel(flag3D, myY-6, "solid_pink", "andesite");

    } else {

        displayBlocksOfCertainLevel(flag3D, myY, "solid_white");

        displayBlocksOfCertainLevel(flag3D, myY, "solid_brown", "ladder");
        displayBlocksOfCertainLevel(flag3D, myY, "", "stone_stairs");
        displayBlocksOfCertainLevel(flag3D, myY, "lime_green", "lime_stained_glass");
        displayBlocksOfCertainLevel(flag3D, myY, "solid_orange", "orange_stained_glass");

        displayBlocksOfCertainLevel(flag3D, myY-1, "solid_pink", "andesite");
                
        let lvl = Math.floor((myY - 65)/7);

        if ((lvl >= 0) && (lvl <= 34)){

            // myFrame.contentWindow.document.getElementById("levels").children[lvl].children[1].style.fill = "rgb(255, 255, 0)";
            myFrame.contentWindow.document.getElementById("levels").children[lvl].children[0].style.stroke = "#ffff00";

        }

    } 
    
    for (let j = 0; j < myPlayers.length; j++){

        let vec = myPlayers[j][6];

        if (vec.z == myY){

            addCircle(vec.x - 9295, vec.y - 719, myPlayers[j][1]);

        }

    }

}