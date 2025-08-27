function drawFloor(){

    console.log("[floorplan.js] drawFloor(): Hi!");

    addColumns(true);
    drawOuterWalls();
    drawInnerWalls();
    // drawCorners();

}

function drawCorners(){

    addSphere(new THREE.Vector3(9306, 65, 732), "#ff0000");
    addSphere(new THREE.Vector3(9387, 65, 732), "#ffff00");
    addSphere(new THREE.Vector3(9387, 65, 813), "#00ff00");
    addSphere(new THREE.Vector3(9306, 65, 813), "#0000ff");

}

function drawOuterWalls(){

    console.log("[floorplan.js] drawOuterWalls(): Hi!");

    addWall(new THREE.Vector3(9305,65,731), 1, 84, "NW-SW");
    addWall(new THREE.Vector3(9306,65,731), 83, 1, "NW-NE");
    addWall(new THREE.Vector3(9388,65,732), 1, 83, "NE-SE");
    addWall(new THREE.Vector3(9306,65,814), 82, 1, "SW-SE");

}

function drawInnerWalls(){

    console.log("[floorplan.js] drawInnerWalls(): Hi!");

    // CORNER ROOM NORTH-WEST (CRNW)
    addWall(new THREE.Vector3(9317,65,732), 1, 2, "CRNW1");
    addWall(new THREE.Vector3(9317,65,736), 1, 8, "CRNW2");
    addWall(new THREE.Vector3(9306,65,743), 2, 1, "CRNW3");
    addWall(new THREE.Vector3(9310,65,743), 7, 1, "CRNW4");

    // ROOM NORTH-WEST-NORTH (RNWN)
    addWall(new THREE.Vector3(9306,65,746), 2, 1, "RNWN1");
    addWall(new THREE.Vector3(9310,65,746), 7, 1, "RNWN2");
    addWall(new THREE.Vector3(9317,65,746), 1, 14, "RNWN3");
    addWall(new THREE.Vector3(9306,65,760), 2, 1, "RNWN4");
    addWall(new THREE.Vector3(9310,65,760), 8, 1, "RNWN5");

    // ROOM WEST OUTER (RWO)
    addWall(new THREE.Vector3(9306,65,763), 2, 1, "RWO1");
    addWall(new THREE.Vector3(9310,65,763), 7, 1, "RWO2");
    addWall(new THREE.Vector3(9317,65,763), 1, 19, "RWO3");
    addWall(new THREE.Vector3(9306,65,782), 2, 1, "RWO4");
    addWall(new THREE.Vector3(9310,65,782), 8, 1, "RWO5");

    // ROOM WEST-SOUTH-WEST (RWSW)
    addWall(new THREE.Vector3(9306,65,785), 2, 1, "RWSW1");
    addWall(new THREE.Vector3(9310,65,785), 7, 1, "RWSW2");
    addWall(new THREE.Vector3(9317,65,785), 1, 14, "RWSW3");
    addWall(new THREE.Vector3(9306,65,799), 2, 1, "RWSW4");
    addWall(new THREE.Vector3(9310,65,799), 8, 1, "RWSW5");

    // CORNER ROOM SOUTH-WEST (CRSW)
    addWall(new THREE.Vector3(9306,65,802), 2, 1, "CRSW1");
    addWall(new THREE.Vector3(9310,65,802), 8, 1, "CRSW2");
    addWall(new THREE.Vector3(9317,65,803), 1, 7, "CRSW3");
    addWall(new THREE.Vector3(9317,65,812), 1, 2, "CRSW4");

    // ROOM SOUTH-WEST-SOUTH (RSWS)
    addWall(new THREE.Vector3(9320,65,812), 1, 2, "RSWS1");
    addWall(new THREE.Vector3(9320,65,803), 1, 7, "RSWS2");
    addWall(new THREE.Vector3(9320,65,802), 15, 1, "RSWS3");
    addWall(new THREE.Vector3(9334,65,812), 1, 2, "RSWS4");
    addWall(new THREE.Vector3(9334,65,803), 1, 7, "RSWS5");

    // ROOM SOUTH OUTER (RSO)
    addWall(new THREE.Vector3(9337,65,812), 1, 2, "RSO1");
    addWall(new THREE.Vector3(9337,65,803), 1, 7, "RSO2");
    addWall(new THREE.Vector3(9337,65,802), 20, 1, "RSO3");
    addWall(new THREE.Vector3(9356,65,812), 1, 2, "RSO4");
    addWall(new THREE.Vector3(9356,65,803), 1, 7, "RSO5");

    // ROOM SOUTH-EAST-SOUTH (RSES)
    addWall(new THREE.Vector3(9359,65,812), 1, 2, "RSES1");
    addWall(new THREE.Vector3(9359,65,803), 1, 7, "RSES2");
    addWall(new THREE.Vector3(9359,65,802), 15, 1, "RSES3");
    addWall(new THREE.Vector3(9373,65,812), 1, 2, "RSES4");
    addWall(new THREE.Vector3(9373,65,803), 1, 7, "RSES5"); 
    
    // CORNER ROOM SOUTH-EAST (CRSE)
    addWall(new THREE.Vector3(9376,65,812), 1, 2, "CRSE1");
    addWall(new THREE.Vector3(9376,65,802), 1, 8, "CRSE2");
    addWall(new THREE.Vector3(9377,65,802), 7, 1, "CRSE3");
    addWall(new THREE.Vector3(9386,65,802), 2, 1, "CRSE4");

    // MACHINE ROOM (MR)
    addWall(new THREE.Vector3(9386,65,799), 2, 1, "MR1");
    addWall(new THREE.Vector3(9376,65,799), 8, 1, "MR2");
    addWall(new THREE.Vector3(9376,65,763), 1, 20, "MR3");
    addWall(new THREE.Vector3(9376,65,785), 1, 14, "MR4");
    addWall(new THREE.Vector3(9386,65,763), 2, 1, "MR5");
    addWall(new THREE.Vector3(9377,65,763), 7, 1, "MR6");

    // ROOM EAST-NORTH-EAST (RENE)
    addWall(new THREE.Vector3(9386,65,746), 2, 1, "RENE1");
    addWall(new THREE.Vector3(9376,65,746), 8, 1, "RENE2");
    addWall(new THREE.Vector3(9376,65,747), 1, 14, "RENE3");
    addWall(new THREE.Vector3(9386,65,760), 2, 1, "RENE4");
    addWall(new THREE.Vector3(9377,65,760), 7, 1, "RENE5");    

    // CORNER ROOM NORTH-EAST (CRNE)
    addWall(new THREE.Vector3(9376,65,732), 1, 2, "CRNE1");
    addWall(new THREE.Vector3(9376,65,736), 1, 8, "CRNE2");
    addWall(new THREE.Vector3(9377,65,743), 7, 1, "CRNE3");
    addWall(new THREE.Vector3(9386,65,743), 2, 1, "CRNE4");

    // ROOM NORTH-EAST-NORTH (RNEN)
    addWall(new THREE.Vector3(9373,65,732), 1, 2, "RNEN1");
    addWall(new THREE.Vector3(9373,65,736), 1, 8, "RNEN2");
    addWall(new THREE.Vector3(9359,65,732), 1, 2, "RNEN3");
    addWall(new THREE.Vector3(9359,65,736), 1, 8, "RNEN4");
    addWall(new THREE.Vector3(9360,65,743), 13, 1, "RNEN5");

    addWall(new THREE.Vector3(9356,65,732), 1, 2, "RNEN3");
    addWall(new THREE.Vector3(9356,65,736), 1, 8, "RNEN4");

    // ROOM NORTH-WEST-NORTH (RNWN)
    addWall(new THREE.Vector3(9334,65,732), 1, 2, "RNWN1");
    addWall(new THREE.Vector3(9334,65,736), 1, 8, "RNWN2");
    addWall(new THREE.Vector3(9320,65,732), 1, 2, "RNWN3");
    addWall(new THREE.Vector3(9320,65,736), 1, 8, "RNWN4");
    addWall(new THREE.Vector3(9321,65,743), 13, 1, "RNWN5");

    addWall(new THREE.Vector3(9337,65,732), 1, 2, "RNWN1");
    addWall(new THREE.Vector3(9337,65,736), 1, 8, "RNWN2");

    // INNER CORNER ROOM NORTH-EAST (ICRNE)
    addWall(new THREE.Vector3(9356,65,746), 1, 10, "ICRNE1");
    addWall(new THREE.Vector3(9359,65,746), 15, 1, "ICRNE2");
    addWall(new THREE.Vector3(9373,65,747), 1, 14, "ICRNE3");
    addWall(new THREE.Vector3(9373,65,763), 1, 3, "ICRNE4");
    addWall(new THREE.Vector3(9364,65,765), 9, 1, "ICRNE5");
    addWall(new THREE.Vector3(9357,65,755), 8, 1, "ICRNE6");
    addWall(new THREE.Vector3(9364,65,756), 1, 9, "ICRNE7");

    // ROOM EAST INNER (REI)
    addWall(new THREE.Vector3(9364,65,768), 10, 1, "REI1");
    addWall(new THREE.Vector3(9364,65,769), 1, 8, "REI2");
    addWall(new THREE.Vector3(9364,65,777), 10, 1, "REI3");
    addWall(new THREE.Vector3(9373,65,769), 1, 3, "REI4");
    addWall(new THREE.Vector3(9373,65,774), 1, 3, "REI5");

    // INNER CORNER ROOM SOUTH-EAST (ICRSE)
    addWall(new THREE.Vector3(9364,65,780), 10, 1, "ICRSE1");
    addWall(new THREE.Vector3(9364,65,781), 1, 10, "ICRSE2");
    addWall(new THREE.Vector3(9354,65,790), 10, 1, "ICRSE3");
    addWall(new THREE.Vector3(9354,65,791), 1, 9, "ICRSE4");
    addWall(new THREE.Vector3(9355,65,799), 2, 1, "ICRSE5");
    addWall(new THREE.Vector3(9359,65,799), 15, 1, "ICRSE6");
    addWall(new THREE.Vector3(9373,65,781), 1, 2, "ICRSE7");
    addWall(new THREE.Vector3(9373,65,785), 1, 14, "ICRSE8");

    // ROOM SOUT INNER (RSI)
    addWall(new THREE.Vector3(9351,65,790), 1, 10, "RSI1");
    addWall(new THREE.Vector3(9342,65,790), 1, 10, "RSI2");
    addWall(new THREE.Vector3(9343,65,799), 3, 1, "RSI3");
    addWall(new THREE.Vector3(9348,65,799), 3, 1, "RSI4");

    // INNER CORNER ROOM SOUTH-WEST (ICRSW)
    addWall(new THREE.Vector3(9320,65,780), 1, 3, "ICRSW1");
    addWall(new THREE.Vector3(9320,65,785), 1, 15, "ICRSW2");
    addWall(new THREE.Vector3(9321,65,780), 9, 1, "ICRSW3");
    addWall(new THREE.Vector3(9329,65,781), 1, 9, "ICRSW4");
    addWall(new THREE.Vector3(9329,65,790), 10, 1, "ICRSW5");
    addWall(new THREE.Vector3(9339,65,790), 1, 10, "ICRSW6");
    addWall(new THREE.Vector3(9321,65,799), 14, 1, "ICRSW7");
    addWall(new THREE.Vector3(9337,65,799), 2, 1, "ICRSW8");

    // ROOM WEST INNER (RWI)
    addWall(new THREE.Vector3(9320,65,768), 9, 1, "RWI1");
    addWall(new THREE.Vector3(9320,65,769), 1, 3, "RWI2");
    addWall(new THREE.Vector3(9320,65,774), 1, 4, "RWI3");
    addWall(new THREE.Vector3(9321,65,777), 8, 1, "RWI4");
    addWall(new THREE.Vector3(9329,65,768), 1, 10, "RWI5");

    // INNER CORNER ROOM NORTH-WEST (ICRNW)
    addWall(new THREE.Vector3(9320,65,746), 15, 1, "ICRNW1");
    addWall(new THREE.Vector3(9320,65,747), 1, 14, "ICRNW2");
    addWall(new THREE.Vector3(9320,65,763), 1, 3, "ICRNW3");
    addWall(new THREE.Vector3(9321,65,765), 9, 1, "ICRNW4");
    addWall(new THREE.Vector3(9337,65,746), 1, 9, "ICRNW5");
    addWall(new THREE.Vector3(9329,65,755), 9, 1, "ICRNW6");
    addWall(new THREE.Vector3(9329,65,756), 1, 9, "ICRNW7");

}

function addWall(myPos, myWidth, myLength, myName){

    const geometry = new THREE.BoxGeometry(myWidth, myLength, .1);
    const material = new THREE.MeshPhongMaterial({color: 0xffffff, transparent: true, opacity: 0.5});
    const wall = new THREE.Mesh(geometry, material);

    wall.position.x = myPos.x + myWidth/2;  
    wall.position.y = myPos.z + myLength/2;
    wall.position.z = -myPos.y - 1/2;

    scene.add(wall);

    let output = [];
    output.push(myName);
    output.push(scene.children[scene.children.length-1].uuid);
    myWalls.push(output);

}