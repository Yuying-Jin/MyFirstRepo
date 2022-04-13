import * as THREE from 'three';

// Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// create a new renderer by instating the canvas element in our HTML // file
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});

renderer.render(scene, camera);

// set the pixel ratio, the size, and the camera position
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);
camera.position.setX(-3);

// set a basic cube
const geometry = new THREE.BoxGeometry(10, 10, 10);
//set the color of the basic material in the object parameters `{}`
// const material = new THREE.MeshBasicMaterial( { color: 0xFF6347 } );
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347 } );
const cube = new THREE.Mesh( geometry, material );

// add the cube into the scene
scene.add( cube );

// set properties for the cube
cube.position.z = -15;
cube.position.x = -15;

cube.rotation.x = 2;
cube.rotation.y = .5;

// set another object for test lights
const ico = new THREE.IcosahedronGeometry(10);
const icoMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const icoMesh = new THREE.Mesh(ico, icoMaterial);

scene.add(icoMesh);

icoMesh.position.z= -15;
icoMesh.position.x= 15;

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, -10, 10);

const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.position.set(25, -15, -400);

scene.add(pointLight);
scene.add(ambientLight);