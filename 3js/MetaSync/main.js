var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 850;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor('#000000');
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

document.getElementById('canvas').appendChild(renderer.domElement);

//Big Point Ball
const geometry = new THREE.SphereGeometry( 150, 20, 25, 100 );
// const geometry = new THREE.TorusGeometry( 150, 20, 25, 100 );
const material = new THREE.PointsMaterial( { color: 0xffaaff, size: 2 } );
const torus = new THREE.Points( geometry, material );
torus.position.set(0, 0, -1500)
scene.add( torus );

//Small Perspective Ball
const balls = new THREE.SphereGeometry( 10, 20, 25, 1 );
var mat = new THREE.MeshStandardMaterial({ color: 0xffaaff });
for (var i = 0; i < 5000; i++) {
		var mesh = new THREE.Mesh( balls, mat );
    mesh.position.set(Math.random()-.5, Math.random()-.5, Math.random()-.5);
    mesh.position.multiplyScalar(100 + (Math.random() * 2000));
		scene.add(mesh)
}

//Stars
var starMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
var particles = new THREE.SphereGeometry(0.5, 20, 25, 1);
for (var i = 0; i < 10000; i++){
  var particleMesh = new THREE.Mesh( particles, starMat );
  particleMesh.position.set(((Math.random() - 0.5) * 501) * 5, ((Math.random() - 0.5) * 501) * 5, Math.floor(Math.random() * (-1700 + 1200 + 1) - 1200));
  // particleMesh.position.set(((Math.random() - 0.5) * to_determine_how_much_area_does_the_mesh_take) * to_determine_how_much_area_does_the_mesh_spread, ((Math.random() - 0.5) * to_determine_how_much_area_does_the_mesh_spread) * to_determine_how_much_area_does_the_mesh_spread, fixed_z_value_cuz_we're_that_much_behind_the_camera);
  scene.add(particleMesh)

}

var lights = [];
lights[0] = new THREE.PointLight( 0xffffff, 1 );
lights[0].position.set( 0, 0, 0 );
scene.add( lights[0] );

lights[1] = new THREE.PointLight( 0xff0000, 1 );
lights[1].position.set( 0, 0, -1100 );
// scene.add( lights[1] );
//extra light. uncomment if needed

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
	requestAnimationFrame( animate );
  torus.rotation.y += 0.3
	camera.position.z -= 5
  if (camera.position.z <= -1200){
    camera.position.z = -1200
  }
  renderer.render( scene, camera );
}
animate();
