function addSphere(myPos, myColour, myRadius){

    if (debugL0 == true){ console.log("[myTowerElements.js] addSphere(): Adding " + myColour + " sphere at (" + myPos.x + ", " + myPos.y + ", " + myPos.z + ")."); }

    const geometry = new THREE.SphereGeometry(myRadius, 32, 16);
    const material = new THREE.MeshPhongMaterial({ color: myColour, transparent: false });
    const sphere = new THREE.Mesh(geometry, material);

    sphere.position.x = myPos.x;
    sphere.position.y = myPos.z;
    sphere.position.z = -myPos.y;

    scene.add(sphere);

}

function addLight(x, y, z, color){

    if (debugL0 == true){ console.log("[myTowerElements.js] addLight(" + x + ", " + y + ", " + z + ", " + color + "): Hi."); }

    const intensity = 3;
    const distance = 0;
    const decay = 2;
    const light = new THREE.DirectionalLight(color, intensity);
    // const light = new THREE.PointLight(color, intensity, distance, decay);
    light.position.set(x, y, z);
    scene.add(light);

    let myX = light.position.x;
    let myY = light.position.y;
    let myZ = light.position.z;

    let myVec = new THREE.Vector3(myX, myY, myZ);
    addSphere(myVec, '#ffffff');

}

function addGaugeElements(){

    if (debugL0 == true){ console.log("[myTowerElements.js] addGaugeElement(): Adding axis helper, grid, and gauge spheres."); }

    axes = new THREE.AxesHelper(5.0);
    axes.position.x = 9059;
    axes.position.y = -50;
    axes.position.z = -65;
    scene.add(axes);

    grid = new THREE.GridHelper(100,10,0x002044,0x202030);
    grid.rotation.x = Math.PI/2;
    grid.position.x = 9059;
    grid.position.y = -50;
    grid.position.z = -65;
    scene.add(grid);

}

function addLine(sX, sY, sZ, dX, dY, dZ, myColour){

    const material = new THREE.LineBasicMaterial({ color: myColour });

    let myStart = new THREE.Vector3(sX, sZ, -sY);
    let myDestination = new THREE.Vector3(dX, dZ, -dY);

    const points = [];
    points.push(myStart);
    points.push(myDestination);

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);

    scene.add(line);

}

function addColumn(columnSize, columnPosition){

    if (debugL0 == true){ console.log("[myTowerElements.js] addColumn(" + columnSize + ", " + columnPosition + "): Hi."); }

    let columnSide = 0;
    if (columnSize==1){ columnSide = 6; }
    if (columnSize==2){ columnSide = 4; }
    if (columnSize==3){ columnSide = 2; }

    const geometry = new THREE.BoxGeometry(columnSide,columnSide,245);
    const material = new THREE.MeshPhongMaterial({color: 0xffffff, transparent: true, opacity: 0.2});
    const column = new THREE.Mesh(geometry, material);

    column.position.x = columnPosition.x + columnSide/2;  
    column.position.y = columnPosition.z + columnSide/2;
    column.position.z = -columnPosition.y - 245/2;

    scene.add(column);

}

function addFloor(index, myZ){

    if (debugL0 == true){ console.log("[myTowerElements.js] addFloor(" + index + ", " + myZ + "): Hi."); }

    const geometry = new THREE.BoxGeometry(84,84,5);
    const material = new THREE.MeshPhongMaterial({color: 0xffffff, transparent: true, opacity: 0.2});
    const floor = new THREE.Mesh(geometry, material);

    floor.position.x = 9305 + 84/2;
    floor.position.y = 731 + 84/2;
    floor.position.z = -myZ - 5/2;

    scene.add(floor);

    let latestIndex = scene.children.length - 1;

    const myFloor = new Object();
    myFloor.name = "Floor " + index;
    myFloor.type = "full";
    myFloor.highlight = false;
    myFloor.highlightMode = null;
    myFloor.highlightColour = null;
    myFloor.index1 = latestIndex;
    myFloor.uuid1 = scene.children[latestIndex].uuid;
    myFloor.index2 = null;
    myFloor.uuid2 = null;
    floorsArray.push(myFloor);

}

function addHalfFloor(myF, index){

    if (debugL0 == true){ console.log("[myTowerElements.js] addFloor(" + myF + ", " + index + "): Hi."); }

    let myZ = 65 + index*7;

    const geometry = new THREE.BoxGeometry(84,33,5);
    const material = new THREE.MeshPhongMaterial({color: 0xffffff, transparent: true, opacity: 0.2});
    const halffloor = new THREE.Mesh(geometry, material);

    halffloor.position.x = 9305 + 84/2;
    halffloor.position.y = 731 + myF*51 + 33/2;
    halffloor.position.z = -myZ - 5/2;

    scene.add(halffloor);  
    
    let latestIndex = scene.children.length - 1;

    if (myF == 0){

        const myFloor = new Object();
        myFloor.name = "Floor " + index;
        myFloor.type = "half";
        myFloor.highlight = false;
        myFloor.highlightMode = null;
        myFloor.highlightColour = null;
        myFloor.index1 = latestIndex;
        myFloor.uuid1 = scene.children[latestIndex].uuid;
        myFloor.index2 = null;
        myFloor.uuid2 = null;
        floorsArray.push(myFloor);

    }

    if (myF == 1){

        floorsArray[index].index2 = latestIndex;
        floorsArray[index].uuid2 = scene.children[latestIndex].uuid;

    }

}

function addWireFrame(myName, myType, xPos, yPos, zPos, myWidth, myLength, myHeight, myColour){

    if (debugL0 == true){ console.log("[myTowerElements.js] addWireFrame(" + myName + ", " + myType + ", ..., " + myColour + "): Hi."); }

    const geometry = new THREE.BoxGeometry(myWidth, myLength, myHeight);
    const edges = new THREE.EdgesGeometry (geometry);
    const wire = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: myColour}));

    wire.position.x = xPos + myWidth/2;  
    wire.position.y = yPos + myLength/2;
    wire.position.z = -zPos - myHeight/2;

    scene.add(wire);

    let latestIndex = scene.children.length - 1;

    const myFrame = new Object();
    myFrame.name = myName;
    myFrame.type = myType;
    myFrame.index1 = latestIndex;
    myFrame.uuid1 = scene.children[latestIndex].uuid;
    myFrame.colour = myColour;
    wireframesArray.push(myFrame);    

}

function addCube(posX, posY, posZ){

    if (debugL0 == true){ console.log("[myTowerElements.js] addCube(" + posX + ", " + posY + ", " + posZ + "): Hi."); }

    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshPhongMaterial({color: 0xffffff, transparent: true, opacity: 0.9});
    const cube = new THREE.Mesh(geometry, material);

    cube.position.x = posX + .5;
    cube.position.y = posZ + .5;
    cube.position.z = -posY + .5;

    logoGroup.add(cube);

}

function addSingleFlightGate(myX, myY1, myY2, myZ, myBearing){

    if (debugL0 == true){ console.log("[myTowerElements.js] addSingleFlightGate(" + myX + ", " + myY1 + ", " + myY2 + + ", " + myZ + ", " + myBearing + "): Hi."); }

    const geometry = new THREE.BoxGeometry(5,1,myY2 - myY1);
    const material = new THREE.MeshPhongMaterial({color: 0xffffff, transparent: true, opacity: 0.2});
    const gate = new THREE.Mesh(geometry, material);

    gate.position.x = myX;  
    gate.position.y = myZ;
    gate.position.z = -myY1 - (myY2 - myY1)/2;  

    if ((myBearing == "west") || (myBearing == "east")){ gate.rotation.z = Math.PI/2;  }

    scene.add(gate);

}

function addDeck(myName, xPos, yPos, zPos, myLength, myWidth, myHeight){

    if (debugL0 == true){ console.log("[myTowerElements.js] addDeck(" + myName + ", " + xPos + ", " + yPos + ", " + zPos + ", " + myLength + "): Hi."); }

    if (myHeight == null) { myHeight = 4; }

    const geometry = new THREE.BoxGeometry(myLength,myWidth,myHeight);
    const material = new THREE.MeshPhongMaterial({color: 0xffffff, transparent: true, opacity: 0.2});
    const floor = new THREE.Mesh(geometry, material);

    floor.position.x = xPos;
    floor.position.y = yPos;
    floor.position.z = -zPos;

    scene.add(floor);

}