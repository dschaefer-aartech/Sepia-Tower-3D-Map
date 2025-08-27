function addTower(){

    if (debugL2 == true){ console.log("[myTowerFunctions.js] addTower(): Enter the main character."); }

    addColumns();
    addFloors();
    addWireElements();
    addLogo();

    addRoom("TowerShuttleIkroh", 9352, 261, 650, 9341, 263, 654, "#adb2f7");
    addRoom("TowerShuttleFortress", 9204, 285, 858, 9208, 287, 869, "#adb2f7");    

    addRoom("ReadyRoom", 9359, 55, 609, 9374, 61, 632, "#a0a0a0");

}

function addColumns(){

    if (debugL2 == true){ console.log("[myTowerFunctions.js] addColumns(): Adding primary, secondary, tertiary columns."); }

    addPrimaryColumns();
    addSecondaryColumns();
    addTertiaryColumns();

}

function addWireElements(){

    if (debugL2 == true){ console.log("[myTowerFunctions.js] addWireElements(): Atriums and Elevators."); }

    addElevators();
    addAtriums();

}

function addElevators(){

    if (debugL2 == true){ console.log("[myTowerFunctions.js] addElevators(): This function is not yet implemented."); }

}

function addAtriums(){

    if (debugL2 == true){ console.log("[myTowerFunctions.js] addAtriums(): Hi."); }

    addWireFrame("Foyer", "Atrium", 9329, 755, 65, 36, 36, 5*7, "#808080");
    addWireFrame("Hotel Lobby", "Atrium", 9329, 755, 65+10*7, 36, 36, 3*7, "#808080");
    addWireFrame("20", "Atrium", 9329, 755, 65+20*7, 36, 36, 3*7-2, "#808080");
    addWireFrame("Art Gallery", "Atrium", 9329, 755, 65+23*7, 36, 36, 2*7, "#808080");
    addWireFrame("30", "Atrium", 9329, 755, 65+30*7, 36, 36, 3*7, "#808080");

}

function addPomodori(){

    if (debugL2 == true){ console.log("[myTowerFunctions.js] addPomodori(): Adding the pride of the fleet."); }

    // addDeck("Deck 1", 9826, 1683, 85, 58, 24);
    addDeck("Deck 2", 9833, 1683, 80, 72, 24);

    addDeck("Deck 3", 9835, 1683, 75, 94, 24);

    addDeck("Deck 4", 9842, 1683, 70, 90, 24);
    addDeck("4-1", 9796, 1683, 70, 3, 20);
    addDeck("4-2", 9791, 1683, 70, 6, 18);
    addDeck("4-3", 9783, 1683, 70, 10, 16);
    addDeck("4-4", 9772, 1683, 70, 10, 14);
    addDeck("4-5", 9763, 1683, 70, 8, 12);
    addDeck("4-6", 9755, 1683, 70, 6, 10);
    addDeck("4-7", 9751, 1683, 70, 2, 8);
    addDeck("4-8", 9748, 1683, 70, 3, 6);

    addDeck("Deck 5", 9850, 1683, 65, 96, 24);
    addDeck("5-1", 9799, 1683, 65, 5, 17);
    addDeck("5-2", 9794, 1683, 65, 5, 16);
    addDeck("5-3", 9790, 1683, 65, 3, 14);
    addDeck("5-4", 9784, 1683, 65, 8, 12);
    addDeck("5-5", 9774, 1683, 65, 10, 10);
    addDeck("5-6", 9764, 1683, 65, 8, 8);
    addDeck("5-7", 9758, 1683, 65, 4, 6);
    addDeck("5-8", 9754, 1683, 65, 3, 4);
    addDeck("5-9", 9752, 1683, 65, 1, 3);
    addDeck("5-10", 9751, 1683, 65, 3, 1);

}

function addFortress(){

    addLogoFortress();
    addRoom("ReadyRoomFortress", -817, 61, -1822, -788, 66, -1799, "#a0a0a0");
    addWireFrame("NeutrinoDetector", "Atrium", -833, -1702, 72, 13, 13, 34, "#808080");
    addWireFrame("ThePit", "Atrium", -842, -1704, 109, 31, 16, 10, "#808080");
    addWireFrame("ThePit2", "Atrium", -832, -1688, 109, 11, 5, 10, "#808080");
    addWireFrame("HangarDeck", "Atrium", -856, -1725, 99, 59, 59, 7, "#808080");
    addRoom("FortressShuttleShuttle", -732, 181, -1562, -721, 183, -1566, "#adb2f7");
    
    addDeck("Collimator", -829, -1696, 121, 14, 14, 6);
    addDeck("SecondFloor1", -826, -1695, 116, 77, 33, 4); // [-865, 116, -1.712] - [-788, 120, -1.679] [77x4x33]e
    addDeck("SecondFloor2", -826, -1667, 116, 33, 21, 4); // [-843, 116, -1.678] - [-810, 120, -1.657] [33x4x21]
    addDeck("SecondFloor3", -829, -1718, 116, 27, 11, 4); // [-846, 116, -1.724] - [-809, 120, -1.713] [37x4x11]
    
    addDeck("FirstFloor1", -826, -1695, 110, 79, 35, 4); // [-866, 110, -1.713], [-866, 110, -1.678], [-787, 110, -1.678], [-787, 110, -1.713] 
    addDeck("FirstFloor2", -824, -1724, 110, 42, 22, 4); // [-803, 110, -1.713], [-803, 110, -1.735], [-845, 110, -1.735], [-845, 110, -1.725]
    addDeck("FirstFloor3", -826, -1666, 110, 37, 21, 4); // [-845, 110, -1.677], [-845, 110, -1.656], [-808, 110, -1.656], [-808, 110, -1.677]
    
    addDeck("RangerTower", -862, -1633, 105, 11, 11, 24); // [-868, 93, -1.628] - [-857, 117, -1.639]
    addDeck("SlenderTower", -710, -1721, 90, 8, 8, 31); // [-708, 79, -1.724] - [-713, 110, -1.719]

    addDeck("EasternEntrance", -777, -1693, 90, 28, 8, 6); // [-763, 88, -1.689] - [-791, 92, -1.697]
    addDeck("Vault", -827, -1695, 65, 30, 23, 8); // [-842, 61, -1.684] - [-812, 69, -1.707]
    addDeck("RedButtonRoom", -820, -1675, 102, 11, 9, 6); // [-826, 99, -1.671] - [-815, 105, -1.680]

}

function addFactory(){

    addDeck("Materials", 10294, 263, 71, 15, 29, 5); // [10.287, 71, 249] - [10.302, 76, 278]

    addDeck("Logistik_Base", 10415, 259, 71, 26, 50, 3); // [10.402, 71, 234] - [10.428, 73, 284]
    addDeck("Logistik", 10417, 259, 77, 22, 50, 9); // [10.406, 74, 234] - [10.428, 83, 284]

    // FOOT-BRIDGE
    // [10.417, 73, 285] - [10.421, 77, 299]

    // basement
    // [10.394, 56, 322] - [10422, 60, 391]
    addWireFrame("Fabrik_Untergeschoss", "Atrium", 10394, 322, 56, 28, 69, 4, "#808080");

    // Entrance
    addDeck("Eingang_1", 10351, 289, 74, 28, 15, 7); // [10.337, 71, 282] - [10.365, 78, 297]
    addDeck("Eingang_2", 10358, 298, 74, 14, 3, 7); // [10.351, 71, 298] - [10.365, 78, 299]

    // Main Building, Ground Floor
    addDeck("Ground_Floor_1", 10387, 308, 74, 73, 16, 7); // [10.351, 71, 300] - [10.424, 77, 316]
    addDeck("Ground_Floor_2", 10397, 354, 74, 53, 75, 7); // [10.371, 71, 317] - [10.424, 77, 392]

    // Main Building, Second Floor
    addDeck("First_Floor_1", 10387, 338, 81, 32, 17, 6); // [10.371, 78, 330] - [10.403, 83, 347]
    addDeck("First_Floor_2", 10397, 370, 81, 53, 44, 6); // [10.371, 78, 348] - [10.424, 83, 392]

    // CHIMNEY
    addWireFrame("Chimney", "Atrium", 10416, 339, 78, 4, 4, 28, "#808080");
    // [10.416, 78, 339] - [10.419, 106, 342]

}

function addFlightField(){

    if (debugL2 == true){ console.log("[myTowerFunctions.js] addFlightField(): Hi."); }

    grid = new THREE.GridHelper(600,60,0x002044,0x202030);
    grid.rotation.x = Math.PI/2;
    grid.position.x = 8969;
    grid.position.y = -14;
    grid.position.z = -102;
    scene.add(grid);

}

function addAllFlightGates(){

    if (debugL2 == true){ console.log("[myTowerFunctions.js] addAllFlightGates(): Hi."); }

    let x = 0;
    let y1 = 0;
    let y2 = 0;
    let z = 0;
    let bearing = null; 

    addSingleFlightGate(9212, 99, 112, -6, "west");
    addSingleFlightGate(9126, 100, 120, 13, "west");
    addSingleFlightGate(9033, 96, 108, 105, "south");
    addSingleFlightGate(8984, 96, 107, 223, "west");
    addSingleFlightGate(8937, 94, 132, 195, "west");
    addSingleFlightGate(8890, 82, 100, 130, "north");
    addSingleFlightGate(8822, 99, 121, 85, "west");
    addSingleFlightGate(8793, 100, 106, 54, "north");
    addSingleFlightGate(8758, 100, 122, -87, "north");
    addSingleFlightGate(8723, 93, 106, -252, "west");

}

