function displayAllMyBlocks(){

    for (let i = 0; i < A.length; i++){

        if ((A[i][3] == 'stone') || (A[i][3] == 'light_gray_stained_glass') || (A[i][3] == 'gray_stained_glass') || (A[i][3] == 'black_stained_glass') || (A[i][3] == 'white_concrete') || (A[i][3] == 'light_gray_concrete') || (A[i][3] == 'gray_concrete') || (A[i][3] == 'black_concrete')){ 
            
            addSingleBlock(A[i][0], A[i][1], A[i][2]); 
        
        }

    }

}

function displayAllBlocksOfType(myType){

    for (let i = 0; i < A.length; i++){

        if (A[i][3] == myType){

            addSingleBlock(A[i][0], A[i][1], A[i][2], "solid_yellow");

        }

    }

}

function displayBlocksBetweenLevels(lowerLevel, upperLevel){

    for (let j = lowerLevel; j <= upperLevel; j++){

        displayBlocksOfCertainLevel(j); 

    }

}

function displayBlocksOfCertainLevel(myLevel, inputColour, myType){

    // console.log("displayBlocksOfCertainLevel(" + myLevel + "): On it, chief!");

    for (let i = 0; i < A.length; i++){

        if (A[i][1] == myLevel){ 
            
            if ((myType == "") || (myType == null)){

                if ((A[i][3] == 'stone') || (A[i][3] == 'light_gray_stained_glass') || (A[i][3] == 'gray_stained_glass') || (A[i][3] == 'black_stained_glass') || (A[i][3] == 'white_concrete') || (A[i][3] == 'light_gray_concrete') || (A[i][3] == 'gray_concrete') || (A[i][3] == 'black_concrete')){

                    addSingleBlock(A[i][0], A[i][1], A[i][2], inputColour);

                }
                
            } else {
                
                if (A[i][3] == myType){ 
                    
                    // console.log("displayBlocksOfCertainLevel(" + myLevel + ", " + inputColour + ", " + myType + "): Jo!");
                    addSingleBlock(A[i][0], A[i][1], A[i][2], inputColour); 
                
                }
            
            }

        }

    }

}

function addSingleBlock(x, y, z, myColour){

    // camera targets position [9346.5, 772.5, -187.5]

    const geometry = new THREE.BoxGeometry(1,1,1);
    let material = null;

    if ((myColour == "") || (myColour == null)) { material = new THREE.MeshPhongMaterial({color: 0xffffff, transparent: true, opacity: 0.2}); }
    if (myColour == "solid_white"){ material = new THREE.MeshPhongMaterial({color: 0xffffff, transparent: true, opacity: 1.0}); }
    if (myColour == "solid_yellow"){ material = new THREE.MeshPhongMaterial({color: 0xffff00, transparent: true, opacity: 1.0}); }
    if (myColour == "solid_red"){ material = new THREE.MeshPhongMaterial({color: 0xff0000, transparent: true, opacity: 1.0}); }
    if (myColour == "solid_green"){ material = new THREE.MeshPhongMaterial({color: 0x00ff00, transparent: true, opacity: 1.0}); }
    if (myColour == "solid_blue"){ material = new THREE.MeshPhongMaterial({color: 0x0000ff, transparent: true, opacity: 1.0}); }
    
    const block = new THREE.Mesh(geometry, material);

    block.position.x = x + 9346 - 50;  
    block.position.z = -y;
    block.position.y = z + 772 - 52;

    /*
    block.position.x = x - 865 - 15;
    block.position.z = -y;
    block.position.y = z - 1712 - 32;
    */

    scene.add(block);    

}

function countBlocks(){

    console.log("[addBlocks.js] countBlocks(): Hey.");

    let myBlockTypes = [];
    let myBlockCounts = [];

    for (let i = 0; i < A.length; i++){

        // console.log("[addBlocks.js] countBlocks(): Going through index " + i);

        if (myBlockTypes.includes(A[i][3])){ 
                     
            let j = null;

            for (j = 0; j < myBlockTypes.length; j++){

                if (A[i][3] == myBlockTypes[j]){ break; }

            }

            myBlockCounts[j] = myBlockCounts[j] + 1;
        
        } else {

            console.log("[addBlocks.js] countBlocks(" + i + "): Adding block type " + A[i][3]);

            myBlockTypes.push(A[i][3]);
            myBlockCounts.push(1);

        }

    }

    console.log("[addBlocks.js] countBlocks(): There are " + myBlockTypes.length + " different types of blocks.");

    let total = 0;

    for (let i = 0; i < myBlockTypes.length; i++){

        total = total + myBlockCounts[i];
        console.log(myBlockTypes[i] + ": " + myBlockCounts[i] + "\n");        

    }

    console.log("[addBlocks.js] countBlocks(): Total block count is " + total + ".");

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

function addAllMyFortressBlocks(){

    console.log("addAllMyFortressBlocks(): Calling individual chunks now.");

    let n = 0;

    addChunk_9_19(0*16,n*16);
    addChunk_10_19(1*16,n*16);
    addChunk_11_19(2*16,n*16);
    addChunk_12_19(3*16,n*16);
    addChunk_13_19(4*16,n*16);
    addChunk_14_19(5*16,n*16);
    addChunk_15_19(6*16,n*16);
    addChunk_16_19(7*16,n*16);
    addChunk_17_19(8*16,n*16);
    addChunk_18_19(9*16,n*16);
    addChunk_19_19(10*16,n*16);

    n = 1;

    addChunk_9_20(0*16,n*16);
    addChunk_10_20(1*16,n*16);
    addChunk_11_20(2*16,n*16);
    addChunk_12_20(3*16,n*16);
    addChunk_13_20(4*16,n*16);
    addChunk_14_20(5*16,n*16);
    addChunk_15_20(6*16,n*16);
    addChunk_16_20(7*16,n*16);
    addChunk_17_20(8*16,n*16);
    addChunk_18_20(9*16,n*16);
    addChunk_19_20(10*16,n*16);

    n = 2;

    addChunk_9_21(0*16,n*16);
    addChunk_10_21(1*16,n*16);
    addChunk_11_21(2*16,n*16);
    addChunk_12_21(3*16,n*16);
    addChunk_13_21(4*16,n*16);
    addChunk_14_21(5*16,n*16);
    addChunk_15_21(6*16,n*16);
    addChunk_16_21(7*16,n*16);
    addChunk_17_21(8*16,n*16);
    addChunk_18_21(9*16,n*16);
    addChunk_19_21(10*16,n*16);

    n = 3;

    addChunk_9_22(0*16,n*16);
    addChunk_10_22(1*16,n*16);
    addChunk_11_22(2*16,n*16);
    addChunk_12_22(3*16,n*16);
    addChunk_13_22(4*16,n*16);
    addChunk_14_22(5*16,n*16);
    addChunk_15_22(6*16,n*16);
    addChunk_16_22(7*16,n*16);
    addChunk_17_22(8*16,n*16);
    addChunk_18_22(9*16,n*16);
    addChunk_19_22(10*16,n*16);

    n = 4;

    addChunk_9_23(0*16,n*16);
    addChunk_10_23(1*16,n*16);
    addChunk_11_23(2*16,n*16);
    addChunk_12_23(3*16,n*16);
    addChunk_13_23(4*16,n*16);
    addChunk_14_23(5*16,n*16);
    addChunk_15_23(6*16,n*16);
    addChunk_16_23(7*16,n*16);
    addChunk_17_23(8*16,n*16);
    addChunk_18_23(9*16,n*16);
    addChunk_19_23(10*16,n*16);

    n = 5;

    addChunk_9_24(0*16,n*16);
    addChunk_10_24(1*16,n*16);
    addChunk_11_24(2*16,n*16);
    addChunk_12_24(3*16,n*16);
    addChunk_13_24(4*16,n*16);
    addChunk_14_24(5*16,n*16);
    addChunk_15_24(6*16,n*16);
    addChunk_16_24(7*16,n*16);
    addChunk_17_24(8*16,n*16);
    addChunk_18_24(9*16,n*16);
    addChunk_19_24(10*16,n*16);

    n = 6;

    addChunk_9_25(0*16,n*16);
    addChunk_10_25(1*16,n*16);
    addChunk_11_25(2*16,n*16);
    addChunk_12_25(3*16,n*16);
    addChunk_13_25(4*16,n*16);
    addChunk_14_25(5*16,n*16);
    addChunk_15_25(6*16,n*16);
    addChunk_16_25(7*16,n*16);
    addChunk_17_25(8*16,n*16);
    addChunk_18_25(9*16,n*16);
    addChunk_19_25(10*16,n*16);

    n = 7;

    addChunk_9_26(0*16,n*16);
    addChunk_10_26(1*16,n*16);
    addChunk_11_26(2*16,n*16);
    addChunk_12_26(3*16,n*16);
    addChunk_13_26(4*16,n*16);
    addChunk_14_26(5*16,n*16);
    addChunk_15_26(6*16,n*16);
    addChunk_16_26(7*16,n*16);
    addChunk_17_26(8*16,n*16);
    addChunk_18_26(9*16,n*16);
    addChunk_19_26(10*16,n*16);

}