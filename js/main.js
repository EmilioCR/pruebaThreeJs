var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
var renderer = new THREE.WebGLRenderer({
  alpha: true // remove canvas' bg color
});
// Make scene renderer the size of the screen
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

var dae, // graphic
    loader = new THREE.ColladaLoader(); // loader
camera.position.set(-5, 12, 10);
function loadCollada( collada ) {
  dae = collada.scene;
  scene.add(dae);
}
loader.load( '3d/model.dae', loadCollada);
function renderPhone() {
  requestAnimationFrame( renderPhone );
  renderer.render(scene, camera);
}
 
renderPhone();