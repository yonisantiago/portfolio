// import Spline from '@splinetool/react-spline';

// export default function Workspace() {
//   return (
//     <Spline scene="https://prod.spline.design/035lYSYC8fMJcEX1/scene.splinecode" />
//   );
// }

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';



const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();

loader.load( '../../../public/workspace/miniroom.gltf', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );