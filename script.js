import * as THREE from "three"

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const canvas = document.getElementById("canvas");
const rendrer = new THREE.WebGLRenderer({antialias : true, canvas : canvas});
rendrer.setSize(window.innerWidth, window.innerHeight);
//document.body.append(rendrer.domElement);

const geometry = new THREE.BoxGeometry(2,2,2);
const mat = new THREE.MeshStandardMaterial({color : "green"}); 
const cube = new THREE.Mesh(geometry, mat);
const hemLight = new THREE.HemisphereLight("white", "red", 1);
scene.add(cube)
scene.add(hemLight);
cube.rotation.y = 100
camera.position.z = 5;
function animate(){
    requestAnimationFrame(animate);
    rendrer.render(scene, camera);
}
animate();
function resize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    rendrer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', resize);

