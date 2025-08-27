<HTML>

    <HEAD>
        <TITLE>[MrP] Sepia Tower 3D (v206) - Reading Region/Chunk/Block data</TITLE>

        <LINK REL="STYLESHEET" HREF="myStyles.css">

        <script type="importmap">
        {
            "imports": {
                "three": "./three.module.js",
                "three/addons/": "./addons/"
            }
        }
        </script>

    </HEAD>

    <BODY onLoad="init();">

        <TABLE WIDTH="100%" HEIGHT="100%" CELLSPACING="0" CELLPADDING="0" BORDER="1">
            <COLGROUP><COL WIDTH="100%"></COLGROUP>

            <TR HEIGHT="40PX"><TD>
                <P><?php
                    
                    require_once('config.php');

                    $db_link = mysqli_connect(
                        
                        MYSQL_HOST, 
                        MYSQL_USER, 
                        MYSQL_PASSWORD, 
                        MYSQL_DATABASE
                    
                    );

                    if ( $db_link )
                    {

                        print ("Connection to database established at " . date('d.m.Y H:i:s') . ".");
                        /* print_r( $db_link); */

                    }
                    else
                    {

                        die('Cannot establish connection to database :/ ' . mysqli_error());

                    }

                ?></P>
            </TD></TR>

            <TR><TD>
                <CANVAS ID="myCanvas" HEIGHT="800PX" WIDTH="800PX" data-engine="three.js r150">
                    I'm sorry but it appears that your browser does not support canvas elements. :/
                </CANVAS>
            </TD></TR>

            <TR HEIGHT="20PX"><TD COLSPAN="3" STYLE="alignment:right; text-align:right;">
                <IMG SRC="MrPLogo.png" HEIGHT="5%" WIDTH="5%">
            </TD></TR>

        </TABLE>

        <SCRIPT type="text/javascript" src="myAux.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="myFunctions.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="myTests.js"></SCRIPT>  
        <SCRIPT type="text/javascript" src="myControls.js"></SCRIPT> 
        <SCRIPT type="text/javascript" src="trackLive.js"></SCRIPT> 
        <SCRIPT type="text/javascript" src="floorplan.js"></SCRIPT>    
        <SCRIPT type="text/javascript" src="jquery.min.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="addBlocks.js"></SCRIPT>

        <SCRIPT TYPE="module">

            console.log("Importing THREE, OrbitControls, MapControls from libraries.");

            import * as THREE from 'three';
            window.THREE = THREE;

            import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
            window.OrbitControls = OrbitControls;

            import { MapControls } from 'three/addons/controls/MapControls.js';
            window.MapControls = MapControls;

        </SCRIPT>

        <SCRIPT TYPE="text/javascript">

            var canvas, scene, camera, orbit, renderer;
            var axes, grid;
            var raycaster, pointer; // used for highlighting objects when touched by the mouse pointer

            var floorsArray = [];
            var wireframesArray = [];
            var logoGroup = null;

            let telemetry = null;

            let myPlayers = [];
            let myPositions = null;
            let myPosTrackFlag = true;
            let tlm = null;
            let voidIndex = null;
            let voidTime = null;

            let myWalls = [];

            var A = [];

            function init(){

                console.log("init(): Setting up scene, camera, orbit controls, and renderer.");

                canvas = document.getElementById("myCanvas");
                scene = new THREE.Scene();

                camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1,  5000000);
                
                // camera.position.set(9346.5, 772.5, -160);
                camera.position.set(9257, 460, -190);

                camera.up.set(0,0,-1); // we need this to align our THREE coordinate system with Minecraft's COS (as it uses N=-z and S=+z for some reason)

                orbit = new MapControls(camera, canvas);
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

                // orbit.target = new THREE.Vector3(9346.5, 772.5, -65.5);
                orbit.target = new THREE.Vector3(9346.5, 772.5, -187.5);

                // orbit.enableRotate = false;
                // orbit.enableZoom = false;

                renderer = new THREE.WebGLRenderer({
                    antialias: true,
                    canvas,
                    logarithmicDepthBuffer: true,
                });
                renderer.setPixelRatio(window.devicePixelRatio);
                // renderer.setSize(window.innerWidth, window.innerHeight);
                raycaster = new THREE.Raycaster(); // RAYCASTING enables detecting mouse pointer moving over 3D objects
                pointer = new THREE.Vector2();
                renderer.render(scene, camera);

                // gets relative mouse pointer coordinates, goes together with the raycaster
                window.addEventListener('pointermove', onPointerMove); // note that onPointerMove is a function defined in myAux.js

                Main();

            }

            async function render(){

                // this asynchronous function updates the scene
                // all updates to 3D rendered objects must be put in here

                orbit.update();
                camera.rotation.set(-Math.PI, 0, 0); // this belongs right after orbit.update() because orbit.update() overwrites any manual settings

                // this code bit rescales the canvas when the window resized
                // THINKING ABOUT DROPPING THIS
                const canvas = renderer.domElement;
                camera.aspect = canvas.clientWidth / canvas.clientHeight;
                camera.updateProjectionMatrix();

                renderer.render(scene, camera);
                requestAnimationFrame(render);

            }

            function Main(){

                console.log("Main(): Bringing everything to life.");

                fiatLux();
                addGaugeElements();
                // drawFloor();

                requestAnimationFrame(render);
                
                // startAjax();

                //addAllMyBlocks();

            }

        </SCRIPT>

    </BODY>

</HTML>