function cameraFocus(myLocation){

    console.log("[myControls.js] cameraFocus(" + myLocation + "): Hi!");

    if (myLocation == 'Tower'){ 
        
        camera.position.set(9257, 460, -190);
        orbit.target = new THREE.Vector3(9346.5, 772.5, -187.5); 
    
    }

    if (myLocation == 'Course'){ 
        
        addFlightField();
        addAllFlightGates();

        camera.position.set(9257, 460, -190);
        orbit.target = new THREE.Vector3(8969, -14, -102); 
    
    }

    if (myLocation == 'Pomodori'){ 
        
        camera.position.set(9832, 1983, -68);
        orbit.target = new THREE.Vector3(9832, 1683, -68); 
    
    }

    if (myLocation == 'Fortress'){

        camera.position.set(-840, -2080, -120);
        // orbit.target = new THREE.Vector3(-840, -1780, -120); 
        // orbit.target = new THREE.Vector3(-833, -1702, -72); 
        orbit.target = new THREE.Vector3(-829, -1696, -121);   

    }

    if (myLocation == 'Factory'){

        camera.position.set(10250, 150, -132);
        orbit.target = new THREE.Vector3(10366, 296, -71);

    }

}

function toggleTracking(myMode){

    console.log("[myControls.js] toggleTracking(" + myMode + "): Hi!");

    if (myMode == 'points'){

        if (trackPointsFlag == false){ trackPointsFlag = true; } else { trackPointsFlag = false; }

    }
    
    if (myMode == 'path'){

        if (trackPathFlag == false){ trackPathFlag = true; } else { trackPathFlag = false; }

    }

}

function toggleRotation(){

    console.log("[myControls.js] toggleRotation(): Hi!");

    if (orbit.autoRotate == true){ orbit.autoRotate = false; } else { orbit.autoRotate = true; }
    
}