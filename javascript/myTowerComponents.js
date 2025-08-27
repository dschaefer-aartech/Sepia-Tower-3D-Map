function fiatLux(){

    if (debugL1 == true){ console.log("[myTowerComponents.js] fiatLux(): Let there be light."); }

    // lighting with cool shadow effect, NW-NE-SE-SW
    /*
    addLight(9298-50,300,724-50,0xffffff);
    addLight(9390+50,300,724-50,0xffffff);
    addLight(9390+50,300,816+50,0xffffff);
    addLight(9298-50,300,816+50,0xffffff);
    */

    addLight(10, 10, -10, 0xffffff, "light1");
    addLight(10, 10, 10, 0xffffff, "light2");
    addLight(-10, 10, -10, 0xffffff, "light3");
    addLight(10, -10, -10, 0xffffff, "light4");

}

function addPrimaryColumns(){

    if (debugL1 == true){ console.log("[myTowerComponents.js] addPrimaryColumns(): Hi."); }

    addColumn(1, new THREE.Vector3(9298,65,724)); // NW
    addColumn(1, new THREE.Vector3(9390,65,724)); // NE
    addColumn(1, new THREE.Vector3(9390,65,816)); // SE
    addColumn(1, new THREE.Vector3(9298,65,816)); // SW

}

function addSecondaryColumns(){

    if (debugL1 == true){ console.log("[myTowerComponents.js] addSecondaryColumns(): Hi."); }

    addColumn(2, new THREE.Vector3(9334,65,726)); // NW
    addColumn(2, new THREE.Vector3(9356,65,726));

    addColumn(2, new THREE.Vector3(9390,65,760)); // NE
    addColumn(2, new THREE.Vector3(9390,65,782)); 
    
    addColumn(2, new THREE.Vector3(9356,65,816)); // SE
    addColumn(2, new THREE.Vector3(9334,65,816)); 
    
    addColumn(2, new THREE.Vector3(9300,65,782)); // SW
    addColumn(2, new THREE.Vector3(9300,65,760));

}

function addTertiaryColumns(){

    if (debugL1 == true){ console.log("[myTowerComponents.js] addTertiaryColumns(): Hi."); }

    // NW

    addColumn(3, new THREE.Vector3(9310,65,728));
    addColumn(3, new THREE.Vector3(9318,65,728));
    addColumn(3, new THREE.Vector3(9326,65,728));

    addColumn(3, new THREE.Vector3(9366,65,728));
    addColumn(3, new THREE.Vector3(9374,65,728));
    addColumn(3, new THREE.Vector3(9382,65,728));    

    // NE

    addColumn(3, new THREE.Vector3(9390,65,736));
    addColumn(3, new THREE.Vector3(9390,65,744));
    addColumn(3, new THREE.Vector3(9390,65,752));

    addColumn(3, new THREE.Vector3(9390,65,792));
    addColumn(3, new THREE.Vector3(9390,65,800));
    addColumn(3, new THREE.Vector3(9390,65,808));

    // SE

    addColumn(3, new THREE.Vector3(9382,65,816));
    addColumn(3, new THREE.Vector3(9374,65,816));
    addColumn(3, new THREE.Vector3(9366,65,816));

    addColumn(3, new THREE.Vector3(9326,65,816));
    addColumn(3, new THREE.Vector3(9318,65,816));
    addColumn(3, new THREE.Vector3(9310,65,816));

    // SW

    addColumn(3, new THREE.Vector3(9302,65,808));
    addColumn(3, new THREE.Vector3(9302,65,800));
    addColumn(3, new THREE.Vector3(9302,65,792));

    addColumn(3, new THREE.Vector3(9302, 65, 752));
    addColumn(3, new THREE.Vector3(9302, 65, 744));
    addColumn(3, new THREE.Vector3(9302, 65, 736));

}

function addFloors(){

    if (debugL1 == true){ console.log("[myTowerComponents.js] addFloors(): Adding floors."); }

    for (let i = 0; i <= 24; i++){ addFloor(i, 65 + i*7); }

    for (let i = 25; i < 29; i++){ 
        
        addHalfFloor(0, i);  // first half
        addHalfFloor(1, i); // second half } 
    
    }

    for (let i = 29; i <= 34; i++){ addFloor(i, 65 + i*7); }

}

function addRoom(name, X1, Y1, Z1, X2, Y2, Z2, myColour){

    // BEWARE !!!
    // Minecraft uses (x,z) for the 2D plane and y as the height coordinate
    // THREE.js uses (x,y) as the 2D plane and z as the height coordinate
    // Input to this function uses the MINECRAFT CONVENTION

    if (debugL1 == true){ console.log("[myTowerComponents.js] addRoom(" + name + ", ..., " + myColour + "): Hi!"); }

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

    if (debugL1 == true){ console.log("addRoom(): Adding room named " + name + " with dimensions " + myWidth + "x" + myHeight + "x" + myDepth + "."); }
    addWireFrame(name, "Room", myX, myY, myZ, myWidth, myDepth, myHeight, myColour)

}

function addLogo(){

    if (debugL1 == true){ console.log("[myTowerComponents.js] addLogo(): Adding our unmistakable [MrP] brand logo."); }

    logoGroup = new THREE.Group();

    // opening bracket '['
    for (let i = 0; i < 9; i++){ addCube(9387,287-i,726); }
    addCube(9386,287,726);
    addCube(9386,279,726);

    // 'M'
    for (let i = 0; i < 5; i++){ addCube(9385,285-i,726); }
    addCube(9384,285,726);
    for (let i = 0; i < 2; i++){ addCube(9383,284-i,726); }
    addCube(9382,285,726);
    for (let i = 0; i < 5; i++){ addCube(9381,285-i,726); }

    // 'r'
    for (let i = 0; i < 3; i++){ addCube(9379,283-i,726); }
    addCube(9378,283,726);

    // 'P'
    for (let i = 0; i < 5; i++){ addCube(9376,285-i,726); }
    addCube(9375,285,726);
    addCube(9375,283,726);
    for (let i = 0; i < 2; i++){ addCube(9374,284-i,726); }

    // closing bracket ']'
    for (let i = 0; i < 9; i++){ addCube(9372,287-i,726); }
    addCube(9373,287,726);
    addCube(9373,279,726);

    scene.add(logoGroup);

}

function addLogoFortress(){

    if (debugL1 == true){ console.log("[myTowerComponents.js] addLogo(): Adding our unmistakable [MrP] brand logo."); }

    logoGroup = new THREE.Group();

    // opening bracket '['
    for (let i = 0; i < 9; i++){ addCube(-829,87-i,-1728); }
    addCube(-830,87,-1728);
    addCube(-830,79,-1728);

    // 'M'
    for (let i = 0; i < 5; i++){ addCube(-832,85-i,-1728); }
    addCube(-833,85,-1728);
    for (let i = 0; i < 2; i++){ addCube(-834,84-i,-1728); }
    addCube(-835,85,-1728);
    for (let i = 0; i < 5; i++){ addCube(-836,85-i,-1728); }

    // 'r'
    for (let i = 0; i < 3; i++){ addCube(-838,83-i,-1728); }
    addCube(-839,83,-1728);

    // 'P'
    for (let i = 0; i < 5; i++){ addCube(-841,85-i,-1728); }
    addCube(-842,85,-1728);
    addCube(-842,83,-1728);
    for (let i = 0; i < 2; i++){ addCube(-843,84-i,-1728); }

    // closing bracket ']'
    for (let i = 0; i < 9; i++){ addCube(-846,87-i,-1728); }
    addCube(-845,87,-1728);
    addCube(-845,79,-1728);

    scene.add(logoGroup);

}