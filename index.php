<HTML>

    <HEAD>
        <TITLE>[MrP] Sepia Tower 3D (v310surface)</TITLE>
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

        <!-- chunks scripts -->

        <SCRIPT type="text/javascript" src="chunks/chunk1-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk1-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk1-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk1-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk1-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk1-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk1-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk1-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk1-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk1-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk1-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk1-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk1-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk1-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk1-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk2-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk2-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk2-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk2-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk2-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk2-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk2-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk2-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk2-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk2-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk2-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk2-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk2-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk2-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk2-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk3-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk3-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk3-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk3-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk3-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk3-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk3-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk3-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk3-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk3-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk3-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk3-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk3-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk3-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk3-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk4-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk4-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk4-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk4-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk4-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk4-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk4-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk4-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk4-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk4-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk4-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk4-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk4-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk4-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk4-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk5-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk5-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk5-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk5-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk5-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk5-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk5-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk5-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk5-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk5-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk5-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk5-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk5-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk5-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk5-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk6-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk6-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk6-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk6-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk6-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk6-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk6-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk6-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk6-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk6-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk6-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk6-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk6-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk6-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk6-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk7-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk7-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk7-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk7-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk7-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk7-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk7-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk7-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk7-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk7-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk7-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk7-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk7-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk7-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk7-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk8-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk8-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk8-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk8-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk8-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk8-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk8-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk8-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk8-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk8-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk8-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk8-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk8-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk8-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk8-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk9-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk9-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk9-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk9-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk9-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk9-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk9-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk9-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk9-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk9-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk9-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk9-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk9-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk9-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk9-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk10-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk10-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk10-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk10-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk10-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk10-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk10-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk10-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk10-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk10-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk10-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk10-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk10-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk10-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk10-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk11-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk11-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk11-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk11-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk11-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk11-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk11-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk11-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk11-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk11-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk11-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk11-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk11-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk11-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk11-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk12-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk12-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk12-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk12-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk12-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk12-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk12-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk12-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk12-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk12-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk12-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk12-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk12-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk12-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk12-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk13-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk13-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk13-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk13-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk13-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk13-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk13-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk13-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk13-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk13-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk13-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk13-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk13-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk13-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk13-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk14-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk14-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk14-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk14-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk14-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk14-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk14-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk14-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk14-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk14-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk14-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk14-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk14-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk14-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk14-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk15-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk15-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk15-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk15-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk15-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk15-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk15-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk15-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk15-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk15-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk15-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk15-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk15-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk15-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk15-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk16-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk16-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk16-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk16-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk16-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk16-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk16-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk16-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk16-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk16-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk16-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk16-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk16-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk16-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk16-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk17-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk17-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk17-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk17-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk17-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk17-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk17-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk17-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk17-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk17-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk17-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk17-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk17-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk17-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk17-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk18-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk18-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk18-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk18-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk18-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk18-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk18-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk18-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk18-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk18-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk18-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk18-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk18-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk18-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk18-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk19-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk19-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk19-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk19-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk19-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk19-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk19-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk19-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk19-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk19-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk19-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk19-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk19-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk19-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk19-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk20-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk20-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk20-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk20-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk20-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk20-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk20-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk20-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk20-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk20-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk20-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk20-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk20-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk20-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk20-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk21-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk21-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk21-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk21-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk21-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk21-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk21-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk21-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk21-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk21-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk21-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk21-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk21-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk21-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk21-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk22-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk22-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk22-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk22-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk22-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk22-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk22-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk22-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk22-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk22-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk22-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk22-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk22-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk22-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk22-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk23-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk23-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk23-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk23-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk23-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk23-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk23-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk23-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk23-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk23-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk23-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk23-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk23-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk23-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk23-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk24-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk24-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk24-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk24-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk24-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk24-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk24-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk24-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk24-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk24-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk24-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk24-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk24-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk24-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk24-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk25-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk25-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk25-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk25-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk25-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk25-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk25-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk25-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk25-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk25-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk25-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk25-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk25-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk25-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk25-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk26-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk26-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk26-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk26-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk26-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk26-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk26-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk26-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk26-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk26-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk26-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk26-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk26-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk26-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk26-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk27-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk27-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk27-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk27-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk27-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk27-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk27-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk27-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk27-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk27-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk27-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk27-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk27-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk27-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk27-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk28-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk28-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk28-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk28-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk28-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk28-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk28-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk28-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk28-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk28-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk28-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk28-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk28-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk28-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk28-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk29-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk29-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk29-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk29-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk29-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk29-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk29-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk29-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk29-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk29-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk29-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk29-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk29-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk29-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk29-30.js"></SCRIPT>

        <SCRIPT type="text/javascript" src="chunks/chunk30-16.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk30-17.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk30-18.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk30-19.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk30-20.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk30-21.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk30-22.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk30-23.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk30-24.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk30-25.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk30-26.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk30-27.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk30-28.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk30-29.js"></SCRIPT>
        <SCRIPT type="text/javascript" src="chunks/chunk30-30.js"></SCRIPT>
    
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
        var B = []; // this is the transformed array where blocks from A are read in by x and z coordinates
        var typeOfBlocks = [];
        var typeOfBlocksCount = [];

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
                camera.position.set(8978, -357, -195);

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
                orbit.autoRotateSpeed = 1;
                orbit.target = new THREE.Vector3(9059,-166,-50); // 
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
            
            //addTower();
            //addPomodori();
            //addFortress();
            //addFactory();

            // Elytra training course is not displayed by default but will only be loaded if the camera is focused on it
            // addFlightField();
            // addAllFlightGates();

            requestAnimationFrame(render);
            
            //addAllMyTowerBlocks();
            addCourseBlocks();


            transformBlockArray();

            // startAJAX();
            // colourCodeAllPlayers();

            G3D = new THREE.Group();

        }

        function transformBlockArray(){

            let min = [999999999, 999999999, 999999999];
            let max = [0, 0, 0];

            for (let i = 0; i < A.length; i++){

                for (let j = 0; j < 3; j++){

                    if (A[i][j] > max[j]){ max[j] = A[i][j]; }
                    if (A[i][j] < min[j]){ min[j] = A[i][j]; }

                }

            }

            // A[i][j]: j = 1 is the vertical component

            //console.log("[index.php] transformBlockArray(): min=[" + min[0] + ", " + min[1] + ", " + min[2] + "].");
            //console.log("[index.php] transformBlockArray(): max=[" + max[0] + ", " + max[1] + ", " + max[2] + "].");

            for (let i = min[0]; i <= max[0]; i++){

                // console.log("[index.php] transformBlockArray(): Outer loop i=" + i);

                for (let j = min[2]; j <= max[2]; j++){                    

                    let q = [];

                    for (let m = 0; m < A.length; m++){

                        if ((A[m][0] == i) && (A[m][2] == j)){ q.push(A[m]); }

                    }

                    let vertMax = 0;
                    let p = null;

                    for (let m = 0; m < q.length; m++){

                        if (q[m][1] > vertMax){ vertMax = q[m][1]; }

                    }

                    for (let m = 0; m < q.length; m++){

                        if (q[m][1] == vertMax){ p = q[m]; }

                    }

                    if (p != null){ B.push(p); }

                }

            }

            // console.log("[index.php] transformBlockArray(): Done.");

            G3D = new THREE.Group();     
            
            for (let i = 0; i < B.length; i++){

                // console.log("[index.php] transformBlockArray(): Displaying B[" + i + "] = [" + B[i][0] + ", " + B[i][1] + ", " + B[i][2] + ", " + B[i][3] + "].");
                // addSingleBlock(true, B[i][0], B[i][1], B[i][2], "solid_white");

                let inputColour = null;
                let inputOpacity = 1.0;

                if (B[i][3] == "white_terracotta"){ inputColour = 0xd0b4a0; }
                if (B[i][3] == "terracotta"){ inputColour = 0x995f44; }
                if (B[i][3] == "light_gray_terracotta"){ inputColour = 0x856960; }
                if (B[i][3] == "orange_terracotta"){ inputColour = 0xa05427; }
                if (B[i][3] == "brown_terracotta"){ inputColour = 0x4c3224; }
                if (B[i][3] == "yellow_terracotta"){ inputColour = 0xb78123; }
                if (B[i][3] == "red_terracotta"){ inputColour = 0x8e3d2e; }

                // if (B[i][3] == "white_stained_glass"){ inputColour = 0xffffff; }
                // if (B[i][3] == "lime_concrete"){ inputColour = 0x00ff00; }

                if (B[i][3] == "red_sand"){ inputColour = 0xbd6621; }

                if (inputColour != null){ addSingleBlock(true, B[i][0], B[i][1], B[i][2], inputColour, inputOpacity); }

                if (!typeOfBlocks.includes(B[i][3])){
                    
                    typeOfBlocks.push(B[i][3]); 
                
                }

            }

            for (let i = 0; i < A.length; i++){

                let inputColour = null;
                let inputOpacity = null;

                if (A[i][3] == "white_stained_glass"){ inputColour = 0xffffff; inputOpacity = 0.2; }
                if (A[i][3] == "lime_stained_glass"){ inputColour = 0x00ff00; inputOpacity = 0.2; }

                if (A[i][3] == "light_gray_terracotta"){ inputColour = 0x856960; inputOpacity = 1.0; }
                if (A[i][3] == "lime_concrete"){ inputColour = 0x00ff00; inputOpacity = 1.0; }
                if (A[i][3] == "black_concrete"){ inputColour = 0x000000; inputOpacity = 1.0; }

                if (A[i][3] == "verdant_froglight"){ inputColour = 0xaaffaa; inputOpacity = 1.0; }

                if (inputColour != null){ addSingleBlock(true, A[i][0], A[i][1], A[i][2], inputColour, inputOpacity); }

            }
            
            scene.add(G3D);

        }

        function countMyBlocks(){

            for (let i = 0; i < typeOfBlocks.length; i++){

                typeOfBlocksCount.push([typeOfBlocks[i], 0]);

            }

            for (let i = 0; i < typeOfBlocks.length; i++){

                for (let j = 0; j < B.length; j++){

                    if (B[j][3] == typeOfBlocks[i]){ 

                        typeOfBlocksCount[i][1] = typeOfBlocksCount[i][1] + 1;

                     }

                }

            }

        }

    </SCRIPT>

</HTML>