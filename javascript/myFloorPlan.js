function addSingleBlock(flag3D, myX, myY, myZ, inputColour, inputOpacity){

    // console.log("[myFloorPlan.js] addSingleBlock(" + myX + ", " + myY + ", " + myZ + ", " + myColour + "): Hi.");

    let iframe = document.getElementById("myFrame");
    let mySVG = iframe.contentWindow.document.getElementById("mySVG1");

    // this part adds the same data to the 3D map

    if (flag3D == true){

        // camera targets position [9346.5, 772.5, -187.5]

        // console.log("[myFloorPlan.js] addSingleBlock(" + myX + ", " + myY + ", " + myZ + ", " + myColour + "): Adding to 3D map.");

        const geometry = new THREE.BoxGeometry(1,1,1);
        let material = null;

        let myTransparency = null;
        if (inputOpacity == 1.0){ myTransparency = false; } else { myTransparency = true; }

        material = new THREE.MeshPhongMaterial({color: inputColour, transparent: myTransparency, opacity: inputOpacity});
        
        const block = new THREE.Mesh(geometry, material);

        block.position.x = myX + 8700 + 21;  
        block.position.z = -myY;
        block.position.y = myZ + -500 + 6;

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

function addCourseBlocks(){

    // Elytra training course chunks are (from W to E and N to S): [1 16] - [4 30], total of 4x15 = 60 chunks
    // Elytra training course chunks are (from W to E and N to S): [1 16] - [30 30], total of 30*15 = 450 chunks

    // i = 1..30, j = 16..30

    for (let i = 16; i <= 24; i++){

        for (let j = 16; j <= 24; j++){

            eval("addChunk_" + i + "_" + j + "(" + (i-1)*16+ "," + (j-1)*16 + ");");

        }

    }

/*

    addChunk_1_16(0,0);
    addChunk_2_16(1*16,0);
    addChunk_3_16(2*16,0);
    addChunk_4_16(3*16,0);
    addChunk_5_16(4*16,0);
    addChunk_6_16(5*16,0);
    addChunk_7_16(6*16,0);
    addChunk_8_16(7*16,0);
    addChunk_9_16(8*16,0);
    addChunk_10_16(9*16,0);
    addChunk_11_16(10*16,0);
    addChunk_12_16(11*16,0);
    addChunk_13_16(12*16,0);
    addChunk_14_16(13*16,0);
    addChunk_15_16(14*16,0);
    addChunk_16_16(15*16,0);
    addChunk_17_16(16*16,0);
    addChunk_18_16(17*16,0);
    addChunk_19_16(18*16,0);
    addChunk_20_16(19*16,0);
    addChunk_21_16(20*16,0);
    addChunk_22_16(21*16,0);
    addChunk_23_16(22*16,0);
    addChunk_24_16(23*16,0);
    addChunk_25_16(24*16,0);
    addChunk_26_16(25*16,0);
    addChunk_27_16(26*16,0);
    addChunk_28_16(27*16,0);
    addChunk_29_16(28*16,0);
    addChunk_30_16(29*16,0);

    let n = 1;

    addChunk_1_17(0,n*16);
    addChunk_2_17(1*16,n*16);
    addChunk_3_17(2*16,n*16);
    addChunk_4_17(3*16,n*16);
    addChunk_5_17(4*16,n*16);
    addChunk_6_17(5*16,n*16);
    addChunk_7_17(6*16,n*16);
    addChunk_8_17(7*16,n*16);
    addChunk_9_17(8*16,n*16);
    addChunk_10_17(9*16,n*16);
    addChunk_11_17(10*16,n*16);
    addChunk_12_17(11*16,n*16);
    addChunk_13_17(12*16,n*16);
    addChunk_14_17(13*16,n*16);
    addChunk_15_17(14*16,n*16);
    addChunk_16_17(15*16,n*16);
    addChunk_17_17(16*16,n*16);
    addChunk_18_17(17*16,n*16);
    addChunk_19_17(18*16,n*16);
    addChunk_20_17(19*16,n*16);
    addChunk_21_17(20*16,n*16);
    addChunk_22_17(21*16,n*16);
    addChunk_23_17(22*16,n*16);
    addChunk_24_17(23*16,n*16);
    addChunk_25_17(24*16,n*16);
    addChunk_26_17(25*16,n*16);
    addChunk_27_17(26*16,n*16);
    addChunk_28_17(27*16,n*16);
    addChunk_29_17(28*16,n*16);
    addChunk_30_17(29*16,n*16);

    n = 2;

    addChunk_1_18(0,n*16);
    addChunk_2_18(1*16,n*16);
    addChunk_3_18(2*16,n*16);
    addChunk_4_18(3*16,n*16);
    addChunk_5_18(4*16,n*16);
    addChunk_6_18(5*16,n*16);
    addChunk_7_18(6*16,n*16);
    addChunk_8_18(7*16,n*16);
    addChunk_9_18(8*16,n*16);
    addChunk_10_18(9*16,n*16);
    addChunk_11_18(10*16,n*16);
    addChunk_12_18(11*16,n*16);
    addChunk_13_18(12*16,n*16);
    addChunk_14_18(13*16,n*16);
    addChunk_15_18(14*16,n*16);
    addChunk_16_18(15*16,n*16);
    addChunk_17_18(16*16,n*16);
    addChunk_18_18(17*16,n*16);
    addChunk_19_18(18*16,n*16);
    addChunk_20_18(19*16,n*16);
    addChunk_21_18(20*16,n*16);
    addChunk_22_18(21*16,n*16);
    addChunk_23_18(22*16,n*16);
    addChunk_24_18(23*16,n*16);
    addChunk_25_18(24*16,n*16);
    addChunk_26_18(25*16,n*16);
    addChunk_27_18(26*16,n*16);
    addChunk_28_18(27*16,n*16);
    addChunk_29_18(28*16,n*16);
    addChunk_30_18(29*16,n*16);

    n = 3;

    addChunk_1_19(0,n*16);
    addChunk_2_19(1*16,n*16);
    addChunk_3_19(2*16,n*16);
    addChunk_4_19(3*16,n*16);
    addChunk_5_19(4*16,n*16);
    addChunk_6_19(5*16,n*16);
    addChunk_7_19(6*16,n*16);
    addChunk_8_19(7*16,n*16);
    addChunk_9_19(8*16,n*16);
    addChunk_10_19(9*16,n*16);
    addChunk_11_19(10*16,n*16);
    addChunk_12_19(11*16,n*16);
    addChunk_13_19(12*16,n*16);
    addChunk_14_19(13*16,n*16);
    addChunk_15_19(14*16,n*16);
    addChunk_16_19(15*16,n*16);
    addChunk_17_19(16*16,n*16);
    addChunk_18_19(17*16,n*16);
    addChunk_19_19(18*16,n*16);
    addChunk_20_19(19*16,n*16);
    addChunk_21_19(20*16,n*16);
    addChunk_22_19(21*16,n*16);
    addChunk_23_19(22*16,n*16);
    addChunk_24_19(23*16,n*16);
    addChunk_25_19(24*16,n*16);
    addChunk_26_19(25*16,n*16);
    addChunk_27_19(26*16,n*16);
    addChunk_28_19(27*16,n*16);
    addChunk_29_19(28*16,n*16);
    addChunk_30_19(29*16,n*16);

    n = 4;

    addChunk_1_20(0,n*16);
    addChunk_2_20(1*16,n*16);
    addChunk_3_20(2*16,n*16);
    addChunk_4_20(3*16,n*16);
    addChunk_5_20(4*16,n*16);
    addChunk_6_20(5*16,n*16);
    addChunk_7_20(6*16,n*16);
    addChunk_8_20(7*16,n*16);
    addChunk_9_20(8*16,n*16);
    addChunk_10_20(9*16,n*16);
    addChunk_11_20(10*16,n*16);
    addChunk_12_20(11*16,n*16);
    addChunk_13_20(12*16,n*16);
    addChunk_14_20(13*16,n*16);
    addChunk_15_20(14*16,n*16);
    addChunk_16_20(15*16,n*16);
    addChunk_17_20(16*16,n*16);
    addChunk_18_20(17*16,n*16);
    addChunk_19_20(18*16,n*16);
    addChunk_20_20(19*16,n*16);
    addChunk_21_20(20*16,n*16);
    addChunk_22_20(21*16,n*16);
    addChunk_23_20(22*16,n*16);
    addChunk_24_20(23*16,n*16);
    addChunk_25_20(24*16,n*16);
    addChunk_26_20(25*16,n*16);
    addChunk_27_20(26*16,n*16);
    addChunk_28_20(27*16,n*16);
    addChunk_29_20(28*16,n*16);
    addChunk_30_20(29*16,n*16);

    n = 5;

    addChunk_1_21(0,n*16);
    addChunk_2_21(1*16,n*16);
    addChunk_3_21(2*16,n*16);
    addChunk_4_21(3*16,n*16);
    addChunk_5_21(4*16,n*16);
    addChunk_6_21(5*16,n*16);
    addChunk_7_21(6*16,n*16);
    addChunk_8_21(7*16,n*16);
    addChunk_9_21(8*16,n*16);
    addChunk_10_21(9*16,n*16);
    addChunk_11_21(10*16,n*16);
    addChunk_12_21(11*16,n*16);
    addChunk_13_21(12*16,n*16);
    addChunk_14_21(13*16,n*16);
    addChunk_15_21(14*16,n*16);
    addChunk_16_21(15*16,n*16);
    addChunk_17_21(16*16,n*16);
    addChunk_18_21(17*16,n*16);
    addChunk_19_21(18*16,n*16);
    addChunk_20_21(19*16,n*16);
    addChunk_21_21(20*16,n*16);
    addChunk_22_21(21*16,n*16);
    addChunk_23_21(22*16,n*16);
    addChunk_24_21(23*16,n*16);
    addChunk_25_21(24*16,n*16);
    addChunk_26_21(25*16,n*16);
    addChunk_27_21(26*16,n*16);
    addChunk_28_21(27*16,n*16);
    addChunk_29_21(28*16,n*16);
    addChunk_30_21(29*16,n*16);

    n = 6;

    addChunk_1_22(0,n*16);
    addChunk_2_22(1*16,n*16);
    addChunk_3_22(2*16,n*16);
    addChunk_4_22(3*16,n*16);
    addChunk_5_22(4*16,n*16);
    addChunk_6_22(5*16,n*16);
    addChunk_7_22(6*16,n*16);
    addChunk_8_22(7*16,n*16);
    addChunk_9_22(8*16,n*16);
    addChunk_10_22(9*16,n*16);
    addChunk_11_22(10*16,n*16);
    addChunk_12_22(11*16,n*16);
    addChunk_13_22(12*16,n*16);
    addChunk_14_22(13*16,n*16);
    addChunk_15_22(14*16,n*16);
    addChunk_16_22(15*16,n*16);
    addChunk_17_22(16*16,n*16);
    addChunk_18_22(17*16,n*16);
    addChunk_19_22(18*16,n*16);
    addChunk_20_22(19*16,n*16);
    addChunk_21_22(20*16,n*16);
    addChunk_22_22(21*16,n*16);
    addChunk_23_22(22*16,n*16);
    addChunk_24_22(23*16,n*16);
    addChunk_25_22(24*16,n*16);
    addChunk_26_22(25*16,n*16);
    addChunk_27_22(26*16,n*16);
    addChunk_28_22(27*16,n*16);
    addChunk_29_22(28*16,n*16);
    addChunk_30_22(29*16,n*16);

    */

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