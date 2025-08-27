<HTML>

    <HEAD>
        <TITLE>[MrP] Sepia Tower 3D (v206)</TITLE>

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
            <COLGROUP><COL WIDTH="30%"><COL WIDTH="5%"><COL WIDTH="65%"></COLGROUP>

            <TR HEIGHT="40PX">
                <TD>
                    <P CLASS="section">DATABASE STATUS</P>

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

                </TD>
                <TD ROWSPAN="3"><SVG WIDTH="20PX" HEIGHT="734PX" ID="levels"></SVG></TD>
                <TD ROWSPAN="3">
                    <CANVAS ID="myCanvas" HEIGHT="800PX" WIDTH="800PX" data-engine="three.js r150">
                        I'm sorry but it appears that your browser does not support canvas elements. :/
                    </CANVAS>
                </TD>
            </TD>

            <TR HEIGHT="320PX">
                <TD>

                    <TABLE WIDTH="100%" HEIGHT="100%" CELLSPACING="0" CELLPADDING="0" BORDER="0">
                        <COLGROUP><COL WIDTH="50%"><COL WIDTH="50%"></COLGROUP>

                        <TR HEIGHT="20PX"><TD COLSPAN="2"></TD></TR>

                        <TR><TD COLSPAN="2"><P CLASS="section">MISSION OBJECTIVES INDICATOR</P></TD></TR>

                        <TR>
                            <TD>
                                <P>OPTION A</P>
                                <P><SVG WIDTH="200PX" HEIGHT="240PX" ID="mySVG1"></SVG></P>
                            </TD>
                            <TD>
                                <P>OPTION B</P>
                                <P><SVG WIDTH="200PX" HEIGHT="240PX" ID="mySVG2"></SVG></P>                                
                            </TD>
                        </TR>

                    </TABLE>                    

                </TD>
            </TR>

            <TR><TD>
                <SVG WIDTH="400PX" HEIGHT="250PX" ID="mySVG"></SVG>
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
        <SCRIPT type="text/javascript" src="jquery.min.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="addBlocks.js"></SCRIPT>

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

        <!--

        <SCRIPT type="text/javascript" src="chunks/fortress/chunk9-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk10-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk11-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk12-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk13-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk14-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk15-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk16-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk17-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk18-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk19-19.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/fortress/chunk9-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk10-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk11-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk12-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk13-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk14-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk15-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk16-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk17-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk18-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk19-20.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/fortress/chunk9-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk10-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk11-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk12-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk13-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk14-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk15-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk16-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk17-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk18-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk19-21.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/fortress/chunk9-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk10-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk11-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk12-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk13-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk14-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk15-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk16-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk17-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk18-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk19-22.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/fortress/chunk9-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk10-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk11-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk12-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk13-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk14-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk15-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk16-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk17-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk18-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk19-23.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/fortress/chunk9-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk10-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk11-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk12-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk13-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk14-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk15-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk16-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk17-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk18-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk19-24.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/fortress/chunk9-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk10-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk11-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk12-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk13-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk14-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk15-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk16-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk17-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk18-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk19-25.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/fortress/chunk9-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk10-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk11-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk12-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk13-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk14-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk15-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk16-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk17-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk18-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/fortress/chunk19-26.js"></SCRIPT>

        //-->

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

            let A = []; // this is where the chunk and block data extracted via Python from the region files are going to be stored

            var svg = document.getElementById("mySVG");
            var svg1 = document.getElementById("mySVG1");
            var svg2 = document.getElementById("mySVG2");
            var svglvl = document.getElementById("levels");

            let B = ["Hyalan", null]; // this is to track a specific player and display the correct 2D floor map

            function init(){

                console.log("init(): Setting up scene, camera, orbit controls, and renderer.");

                canvas = document.getElementById("myCanvas");
                scene = new THREE.Scene();

                camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1,  5000000);
                camera.position.set(9257, 1000, -190);
                camera.up.set(0,0,-1); // we need this to align our THREE coordinate system with Minecraft's COS (as it uses N=-z and S=+z for some reason)

                orbit = new MapControls(camera, canvas);
                orbit.enableDamping = true;
                orbit.dampingFactor = 0.05;
                orbit.screenSpacePanning = true;
                orbit.minDistance = .1;
                orbit.maxDistance = 16384;
                orbit.maxPolarAngle = (Math.PI / 2) - (Math.PI / 360);
                orbit.zoomSpeed = 1;
                orbit.rotateSpeed = 1;
                orbit.autoRotate = false;
                orbit.autoRotateSpeed = .25;
                orbit.enableRotate = true;
                orbit.target = new THREE.Vector3(9346.5, 772.5, -187.5);

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
                addTower();
                //addRoom("ReadyRoom", 9359, 55, 609, 9374, 61, 632, "#a0a0a0");

                requestAnimationFrame(render);

                addAllMyTowerBlocks();
                // startAjax();

                //addMOI();
                //addControls();
                //addLevels();                
                startAjax();

            }

            function setFortress(){

                console.log("[index2.php] SetFortress(): Done.");

                addAllMyFortressBlocks();
                camera.position.set(-840, -2080, -120);
                orbit.target = new THREE.Vector3(-829, -1696, -121);

            }

            function clearBlocks(){

                scene.clear();
                fiatLux();
                addGaugeElements();
                myPlayers = [];
                addPlayers();

            }

        </SCRIPT>

    </BODY>

</HTML>