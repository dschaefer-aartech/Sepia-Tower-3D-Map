<HTML>

    <HEAD>
        <TITLE>[MrP] Sepia Tower 3D (v310)</TITLE>
        <LINK REL="STYLESHEET" HREF="myStyles.css">

        <SCRIPT type="text/javascript" src="./javascript/myAux.js"></SCRIPT>
        <script type="importmap">
        {
            "imports": {
                "three": "./javascript/three.module.js",
                "three/addons/": "./javascript/addons/"
            }
        }
        </script>
    </HEAD>

    <BODY onLoad="init();">

        <TABLE WIDTH="100%" HEIGHT="100%" CELLSPACING="0" CELLPADDING="0" BORDER="0">
            <COLGROUP><COL WIDTH="100%"></COLGROUP>

            <TR HEIGHT="10PX"><TD CLASS="top" STYLE="text-align:left;" ID="statusbar">
                <SPAN ID="statusDB">
                DB: <?php
				require_once('config.php');

                $db_link = mysqli_connect(
                    
                    MYSQL_HOST, 
                    MYSQL_USER, 
                    MYSQL_PASSWORD, 
                    MYSQL_DATABASE
                
                );

                if ( $db_link )
                { print("OK."); /* print ("Connection to database established at " . date('d.m.Y H:i:s') . "."); */ }
                else { die('NOK :/' . mysqli_error()); } ?>
                </SPAN>
                <SPAN ID="statusTimestamp"></SPAN>
            </TD></TR>

            <TR><TD>
                <IFRAME WIDTH="100%" HEIGHT="100%" BORDER="0" ID="myFrame" frameBorder="0">
                Sorry, but it appears that your browser does not support iframes.
                </IFRAME>
            </TD></TR>

            <TR HEIGHT="10PX"><TD CLASS="bottom" STYLE="text-align:right;">[MrP] Tactical Minecraft</TD></TR>

        </TABLE>

    </BODY>

    <SCRIPT TYPE="module">

        console.log("Importing THREE, OrbitControls, MapControls from libraries.");

        import * as THREE from 'three';
        window.THREE = THREE;

        import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
        window.OrbitControls = OrbitControls;

        import { MapControls } from 'three/addons/controls/MapControls.js';
        window.MapControls = MapControls;

        import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
        window.CSS2DRenderer = CSS2DRenderer;

        import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
        window.CSS2DObject = CSS2DObject;

    </SCRIPT>

    <SCRIPT type="text/javascript" src="./javascript/myTowerElements.js"> /* functions that instantiate elementary geometric objects */ </SCRIPT>
    <SCRIPT type="text/javascript" src="./javascript/myTowerComponents.js"> /* functions that build components out of elementary objects */ </SCRIPT>
    <SCRIPT type="text/javascript" src="./javascript/myTowerFunctions.js"> /* highest-level functions to assemble the complete tower */ </SCRIPT>
    <SCRIPT type="text/javascript" src="./javascript/myPlayerFunctions.js">/* includes all functions for displaying players, including real-time and recorded position tracking */</SCRIPT>
    <SCRIPT type="text/javascript" src="./javascript/myControls.js">/* includes all functions for interface control */</SCRIPT>
    <SCRIPT type="text/javascript" src="./javascript/jquery.min.js">/* for the AJAX contruct */</SCRIPT>
    <SCRIPT type="text/javascript" src="./javascript/BlackAndWhite.js">/* for the Black & White mode */</SCRIPT>

    <SCRIPT type="text/javascript" src="./javascript/myFloorPlan.js">/* scripts for the 2D floor plan */</SCRIPT>

        <!-- The tower chunks scripts -->

        <SCRIPT type="text/javascript" src="chunks/chunk5-13.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk6-13.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk7-13.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk8-13.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk9-13.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk10-13.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk11-13.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk5-14.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk6-14.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk7-14.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk8-14.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk9-14.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk10-14.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk11-14.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk5-15.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk6-15.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk7-15.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk8-15.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk9-15.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk10-15.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk11-15.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk5-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk6-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk7-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk8-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk9-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk10-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk11-16.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk5-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk6-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk7-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk8-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk9-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk10-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk11-17.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk5-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk6-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk7-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk8-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk9-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk10-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk11-18.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk5-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk6-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk7-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk8-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk9-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk10-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk11-19.js"></SCRIPT>
    
    <SCRIPT>

        // THIS IS THE MAIN SCRIPT FLOW

        // STEP 0: DEFINE GLOBAL CONTROL PARAMETERS (mostly for debugging)
        const debugL0 = false; // debug messages from myTowerElements.js
        const debugL1 = false; // debug messages from myTowerComponents.js
        const debugL2 = false; // debug messages from myTowerFunctions.js
        const debugLD = false; // debug messages for data preparation in myPlayerFunctions.js

        // STEP 1a: DECLARING GLOBAL VARIABLES
        // (this is primarily done so that I can access everything for console debugging, duh...)

        var canvas, scene, camera, orbit, renderer, labelRenderer;
        var axes, grid;

        // used for highlighting objects when touched by the mouse pointer
        // (this feature has to be enabled by the user)
        var raycaster, pointer; 

        var floorsArray = [];
        var wireframesArray = [];
        var logoGroup = null;

        let myPlayers = [];

        // for Black & White
        let BW = false; // global flag that a BW game is ongoing
        var BWRooms = [];
        var LockFloors = [];

        // STEP 1b: DELARING VARIABLES FOR CONTROL ELEMENTS

        let myTelemetry = null; // this is where we will save the data obtained from the Minecraft server
        let flagTelemetry = false; // defines whether telemetry data shall be fetched continuously (true) or not (fase)

        let flagReplay = false; // this flag sets the replay loop
        let replayIndex = null; // these two variables are integers to track time when displaying recorded data (aka 'replay')
        let replayTime = null;

        let trackPointsFlag = false;
        let trackPathFlag = false;

        let teamColoursFlag = false; // determines whether Offence and Defence should have team colours

        // STEP 1c: DELARING VARIABLES FOR DISPLAY ELEMENTS

        var svgLevels = null;

        // for Black & White
        var svgneutrals = null;
        var svgcounters = null;

        var myTD2 = null;
        var myH = null; // height for all level indicator elements

        // STEP 1d: DECLARING VARIABLE TO STORE CHUNK DATA IN

        var A = []; // this is where the chunk and block data extracted via Python from the region files are going to be stored
        var selector2D = null; // in this variable we save the selection which player to focus on for the display of the 2D floor map
        var G3D = null; // this group saves indices of blocks added to the scene as children
        var G3Didx = null; // this is where we save the index of the group added to the scene

        // STEP 2: SETTING UP THE 3D ENGINE

        var myFrame = document.getElementById("myFrame");
        console.log("[index.php] Calling getScreenRes() to determine window size to arrange elements.");
        getScreenRes();

        function init(){

            // This timeout is an inelegant solution to overcome issues with browsers that refresh the page to an empty canvas.
            // The issue appears to stem from the canvas defined within the subpages main_h.html and main_v.html within the iFrame
            // - apparently, the canvas is not available quickly enough so that the javascript part of index.php tries to populate the canvas before it's ready.
            // (Given that this page is built to be loaded only once during gameplay, the users can probaby live with this.)
            setTimeout(() => {

                console.log("[index.php] init(): Setting up scene, camera, orbit controls, and renderer.");

                canvas = myFrame.contentWindow.document.getElementById("myCanvas");
                console.log("[index.php] setUpCanvas(): Assigned " + canvas + " to global variable 'canvas'.");

                scene = new THREE.Scene();
                camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1,  5000000);

                // this is the position of the tower in our Minecraft world
                // (setting the camera here enables me to render player positions with native Minecraft coordinates without transformation)
                camera.position.set(9257, 460, -190);

                // we need this to align our three.js coordinate system with Minecraft's COS (as it uses N=-z and S=+z)
                camera.up.set(0,0,-1); 

                renderer = new THREE.WebGLRenderer({
                    antialias: true,
                    canvas,
                    logarithmicDepthBuffer: true,
                });
                renderer.setPixelRatio(window.devicePixelRatio);

                // labelRenderer is used for applying 2D labels, based on the CSS2DRenderer addon
                
                console.log("[index.php] init(): Setting up CSS2DRenderer.");
                labelRenderer = new CSS2DRenderer();
                labelRenderer.domElement.style.position = "absolute";
                labelRenderer.domElement.style.top = "10px";
                labelRenderer.domElement.style.right = "10px";     
                // labelRenderer.domElement.style.backgroundColor = "#ff0000"; // for debugging only
                  
                // document.body.appendChild(labelRenderer.domElement);   
                myFrame.contentWindow.document.getElementById("canvasTD").appendChild(labelRenderer.domElement);                     

                // raycasting enables detecting mouse pointer moving over 3D objects 
                // (see above in the global variable definitions)
                raycaster = new THREE.Raycaster(); 
                pointer = new THREE.Vector2();

                //labelRenderer.render(scene, camera);
                renderer.render(scene, camera);
                labelRenderer.render(scene, camera);

                // enabling MapControls to let the user use the 3D interface

                // orbit = new MapControls(camera, canvas);
                orbit = new MapControls(camera, labelRenderer.domElement);
                orbit.enableDamping = true;
                orbit.dampingFactor = 0.05;
                orbit.screenSpacePanning = false;
                orbit.minDistance = .1;
                orbit.maxDistance = 16384;
                orbit.maxPolarAngle = (Math.PI / 2) - (Math.PI / 360);
                orbit.zoomSpeed = 1;
                orbit.rotateSpeed = 1;
                orbit.autoRotate = true;
                orbit.autoRotateSpeed = .25;
                orbit.target = new THREE.Vector3(9346.5, 772.5, -187.5); // Sepia Tower Skyscraper
                // orbit.target = new THREE.Vector3(8969, -14, -102); // Elytra Flight Field

                // gets relative mouse pointer coordinates, goes together with the raycaster
                window.addEventListener('pointermove', onPointerMove); // note that onPointerMove is a function defined in myAux.js

                console.log("[index.php] init(): Now calling setUpCanvas().");

                setUpDisplays();

            }, 1000);

        }

        async function render(){

            // this asynchronous function updates the scene
            // all updates to 3D rendered objects must be put in here

            orbit.update();

            // this code bit rescales the canvas when the window resized
            const cvs = renderer.domElement;
            camera.aspect = cvs.clientWidth / cvs.clientHeight;
            camera.updateProjectionMatrix();

            labelRenderer.render(scene, camera);
            renderer.render(scene, camera);            
            requestAnimationFrame(render);

        }

        function setUpDisplays(){

            window.addEventListener('resize', resizeDisplays, false);

            function resizeDisplays(){

                console.log("[index.php] setUpDisplays(): resizeDisplays(): Resetting canvas and SVG element widths and heights.");

                let myTD1 = myFrame.contentWindow.document.getElementById("canvasTD");
                let myWidth = parseInt(myTD1.offsetWidth - 20);
                let myHeight = parseInt(myTD1.offsetHeight - 20);

                canvas.width = myWidth;
                canvas.height = myHeight;

                renderer.setSize(canvas.width, canvas.height);
                labelRenderer.setSize(parseInt(myTD1.offsetWidth - 20), parseInt(myTD1.offsetHeight - 20));  
                // labelRenderer.setSize(canvas.width, canvas.height);

                // myFrame.contentWindow.document.getElementById("debug").innerHTML = canvas.width + "x" + canvas.height;

            }

            resizeDisplays();

            svgLevels = myFrame.contentWindow.document.getElementById("levels");
            myTD2 = myFrame.contentWindow.document.getElementById("levelsTD"); // myTD2 was declared globally as it is a parameter for addLevels() in Main()
            myLevels = myFrame.contentWindow.document.getElementById("levels");
            myLevels.style.width = myTD2.offsetWidth;

            let myAvailableVerticalSpace = myTD2.offsetHeight - 20;

            // the next for-loop tries to find the height in pixel of the 35 floor level indicators that fit on the screen
            // (a height of 99 pixels for one element would indicate a very large screen or an extremely high resolution)
            for (let i = 1; i < 99; i++){ if ((i*35 + 34) <= myAvailableVerticalSpace){ myH = i; } } // myH was declared globally as it is a parameter for addLevels() in Main()
            myLevels.style.height = myH*35 + 34;

            console.log("[index.php] setUpDisplays(): Adding floor level indicators by calling [myAux.js]:addLevels().");
            addLevels(myTD2.offsetWidth, myH);

            console.log("[index.php] setUpDisplays(): Now calling [index.php]:Main() to populate the scenery.");
            Main();

        }

        function Main(){

            console.log("[index.php] Main(): Bringing everything to life.");

            // these function calls to [myTowerFunctions.js] populate the 3D scenery with all objects that do not change
            fiatLux();
            addGaugeElements();
            addTower();
            addPomodori();
            addFortress();
            addFactory();

            // Elytra training course is not displayed by default but will only be loaded if the camera is focused on it
            // addFlightField();
            // addAllFlightGates();

            requestAnimationFrame(render);
            
            addAllMyTowerBlocks();

            // startAJAX();
            // colourCodeAllPlayers();

            G3D = new THREE.Group();

        }

    </SCRIPT>

</HTML>