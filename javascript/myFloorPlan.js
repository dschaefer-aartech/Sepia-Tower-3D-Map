function addSingleBlock(flag3D, myX, myY, myZ, myColour){

    // console.log("[myFloorPlan.js] addSingleBlock(" + myX + ", " + myY + ", " + myZ + ", " + myColour + "): Hi.");

    let iframe = document.getElementById("myFrame");
    let mySVG = iframe.contentWindow.document.getElementById("mySVG1");

    let svgns = "http://www.w3.org/2000/svg";
    let rect = document.createElementNS(svgns, 'rect');

    if (myColour == "solid_white"){ inputColour = "#ffffff"; }
    if (myColour == "solid_yellow"){ inputColour = "#ffff00"; }
    if (myColour == "solid_orange"){ inputColour = "#ff8800"; }
    if (myColour == "solid_red"){ inputColour = "#ff0000"; }
    if (myColour == "solid_blue"){ inputColour = "#0000ff"; }
    if (myColour == "solid_green"){ inputColour = "#00ff00"; }
    if (myColour == "solid_brown"){ inputColour = "#aa8866"; }
    if (myColour == "solid_pink"){ inputColour = "#ff00ff"; }
    if (myColour == "lime_green"){ inputColour = "#b9ff66"; }
    if ((myColour == "") || (myColour == null)){ inputColour = "#808080"; }

    rect.setAttribute('x', myX*4 - 4);
    rect.setAttribute('y', myZ*4 - 12);
    rect.setAttribute('height', 4);
    rect.setAttribute('width', 4);
    // rect.setAttribute('fill', '#'+Math.round(0xffffff * Math.random()).toString(16));
    rect.setAttribute('fill', inputColour)
    mySVG.appendChild(rect);

    // this part adds the same data to the 3D map

    if (flag3D == true){

        // camera targets position [9346.5, 772.5, -187.5]

        // console.log("[myFloorPlan.js] addSingleBlock(" + myX + ", " + myY + ", " + myZ + ", " + myColour + "): Adding to 3D map.");

        const geometry = new THREE.BoxGeometry(1,1,1);
        let material = null;

        if ((myColour == "") || (myColour == null)) { material = new THREE.MeshPhongMaterial({color: 0x808080, transparent: false, opacity: 0.2}); }
        if (myColour == "solid_white"){ material = new THREE.MeshPhongMaterial({color: 0xc0c0c0, transparent: false, opacity: 1.0}); }
        if (myColour == "solid_yellow"){ material = new THREE.MeshPhongMaterial({color: 0xffff00, transparent: false, opacity: 1.0}); }
        if (myColour == "solid_red"){ material = new THREE.MeshPhongMaterial({color: 0xff0000, transparent: false, opacity: 1.0}); }
        if (myColour == "solid_orange"){ material = new THREE.MeshPhongMaterial({color: 0xff8800, transparent: false, opacity: 1.0}); }
        if (myColour == "solid_green"){ material = new THREE.MeshPhongMaterial({color: 0x00ff00, transparent: false, opacity: 1.0}); }
        if (myColour == "solid_brown"){ material = new THREE.MeshPhongMaterial({color: 0xaa8866, transparent: false, opacity: 1.0}); }
        if (myColour == "lime_green"){ material = new THREE.MeshPhongMaterial({color: 0xb9ff66, transparent: false, opacity: 1.0}); }
        if (myColour == "solid_blue"){ material = new THREE.MeshPhongMaterial({color: 0x0000ff, transparent: false, opacity: 1.0}); }
        if (myColour == "solid_pink"){ material = new THREE.MeshPhongMaterial({color: 0xff00ff, transparent: false, opacity: 1.0}); }
        
        const block = new THREE.Mesh(geometry, material);

        block.position.x = myX + 9346 - 50;  
        block.position.z = -myY;
        block.position.y = myZ + 772 - 52;

        /*
        block.position.x = x - 865 - 15;
        block.position.z = -y;
        block.position.y = z - 1712 - 32;
        */

        G3D.name = "2DFloorPlan";
        G3D.add(block);

    }

}

function addCircle(myX, myZ, myColour){

    // console.log("[myFloorPlan.js] addCircle(): Hi.");

    let iframe = document.getElementById("myFrame");
    let mySVG = iframe.contentWindow.document.getElementById("mySVG1");

    let svgns = "http://www.w3.org/2000/svg";
    let circ = document.createElementNS(svgns, 'circle'); 
    
    circ.setAttribute('cx', myX*4 - 4);
    circ.setAttribute('cy', myZ*4 - 12);
    circ.setAttribute('r', 4);
    circ.setAttribute('style', 'fill:' + myColour);
    mySVG.appendChild(circ);

}

function changeFocus(){

    let iframe = document.getElementById("myFrame");
    let myOption = iframe.contentWindow.document.getElementById("focusMenu"); 
    
    console.log("[myFloorPlan.js] changeFocus(): Current option is " + myOption.value);
    clearBlocks();
    selector2D = myOption.value;

}

function clearBlocks(){

    let iframe = document.getElementById("myFrame");
    let mySVG = iframe.contentWindow.document.getElementById("mySVG1");

    while (mySVG.lastChild) { mySVG.removeChild(mySVG.lastChild); }

}

function clear3D(){

    console.log("[myFloorPlan.js] clear3D(): Deleting 2D Floor Plan from 3D Map now...");

    let deleteObject = scene.getObjectByName("2DFloorPlan");
    scene.remove(deleteObject);

    G3D = new THREE.Group();

}

function displayBlocksOfCertainLevel(flag3D, myLevel, inputColour, myType){

    // console.log("[myFloorPlan.js] displayBlocksOfCertainLevel(" + myLevel + "): On it, chief!");

    for (let i = 0; i < A.length; i++){

        if (A[i][1] == myLevel){ 
            
            if ((myType == "") || (myType == null)){

                if ((A[i][3] == 'stone') || (A[i][3] == 'light_gray_stained_glass') || (A[i][3] == 'gray_stained_glass') || (A[i][3] == 'black_stained_glass') || (A[i][3] == 'white_concrete') || (A[i][3] == 'light_gray_concrete') || (A[i][3] == 'gray_concrete') || (A[i][3] == 'black_concrete')){

                    addSingleBlock(flag3D, A[i][0], A[i][1], A[i][2], inputColour);

                }
                
            } else {
                
                if (A[i][3] == myType){ 
                    
                    // console.log("displayBlocksOfCertainLevel(" + myLevel + ", " + inputColour + ", " + myType + "): Jo!");
                    addSingleBlock(flag3D, A[i][0], A[i][1], A[i][2], inputColour); 
                
                }
            
            }

        }

    }

    if (flag3D == true){ 

        scene.add(G3D); 
        // console.log("[myFloorPlan.js] displayBlocksOfCertainLevel(" + flag3D +", " + myLevel + "): Added 2D Floor Plan as a new THREE.Group() to the 3D scene.");
    
    }

}

function addAllMyTowerBlocks(){

    console.log("addAllMyTowerBlocks(): Calling individual chunks now.");

    // Tower chunks are (from W to E and N to S): [5 13] - [11 19], total of 7x7 = 49 chunks

    addChunk_5_13(0,0);
    addChunk_6_13(1*16,0);
    addChunk_7_13(2*16,0);
    addChunk_8_13(3*16,0);
    addChunk_9_13(4*16,0);
    addChunk_10_13(5*16,0);
    addChunk_11_13(6*16,0);

    let n = 1;

    addChunk_5_14(0,n*16);
    addChunk_6_14(1*16,n*16);
    addChunk_7_14(2*16,n*16);
    addChunk_8_14(3*16,n*16);
    addChunk_9_14(4*16,n*16);
    addChunk_10_14(5*16,n*16);
    addChunk_11_14(6*16,n*16);

    n = 2;

    addChunk_5_15(0,n*16);
    addChunk_6_15(1*16,n*16);
    addChunk_7_15(2*16,n*16);
    addChunk_8_15(3*16,n*16);
    addChunk_9_15(4*16,n*16);
    addChunk_10_15(5*16,n*16);
    addChunk_11_15(6*16,n*16);  
    
    n = 3;

    addChunk_5_16(0,n*16);
    addChunk_6_16(1*16,n*16);
    addChunk_7_16(2*16,n*16);
    addChunk_8_16(3*16,n*16);
    addChunk_9_16(4*16,n*16);
    addChunk_10_16(5*16,n*16);
    addChunk_11_16(6*16,n*16);

    n = 4;

    addChunk_5_17(0,n*16);
    addChunk_6_17(1*16,n*16);
    addChunk_7_17(2*16,n*16);
    addChunk_8_17(3*16,n*16);
    addChunk_9_17(4*16,n*16);
    addChunk_10_17(5*16,n*16);
    addChunk_11_17(6*16,n*16);

    n = 5;

    addChunk_5_18(0,n*16);
    addChunk_6_18(1*16,n*16);
    addChunk_7_18(2*16,n*16);
    addChunk_8_18(3*16,n*16);
    addChunk_9_18(4*16,n*16);
    addChunk_10_18(5*16,n*16);
    addChunk_11_18(6*16,n*16);

    n = 6;

    addChunk_5_19(0,n*16);
    addChunk_6_19(1*16,n*16);
    addChunk_7_19(2*16,n*16);
    addChunk_8_19(3*16,n*16);
    addChunk_9_19(4*16,n*16);
    addChunk_10_19(5*16,n*16);
    addChunk_11_19(6*16,n*16);

}