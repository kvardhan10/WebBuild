var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 250; //OG: 400
// camera.position.y = 200;
// camera.position.x = 0;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor('#000000');
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById('canvas').appendChild(renderer.domElement);

circle = new THREE.Object3D();
skelet = new THREE.Object3D();
particle = new THREE.Object3D();

scene.add(circle);
scene.add(skelet);
scene.add(particle);

const stars = new THREE.OctahedronGeometry( .5, 2 );
const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );

for (var i = 0; i < 10000; i++) {
		var mesh = new THREE.Mesh( stars, material );
		mesh.position.set(Math.random()-.5, Math.random()-.5, Math.random()-.5);
    mesh.position.multiplyScalar(100 + (Math.random() * 2000));
		//expands stars as much as possible
		particle.add(mesh)
	}

//common material
var mat = new THREE.MeshStandardMaterial({});

var mat2 = new THREE.MeshStandardMaterial({color: 0xffffff, wireframe: true });

var innerCircle = new THREE.Mesh(new THREE.SphereGeometry( 80, 32, 32 ), mat)
circle.add(innerCircle)
var outerCircle = new THREE.Mesh(new THREE.OctahedronGeometry( 10, 2 ), mat2)
outerCircle.scale.x = outerCircle.scale.y = outerCircle.scale.z = 13;
skelet.add(outerCircle)

var lights = [];
lights[0] = new THREE.HemisphereLight( 0x11E8BB, 1 );
lights[0].position.set( -1, 1, 0 );
lights[1] = new THREE.HemisphereLight( 0x2200a9, 0.5 );
lights[1].position.set( 1, -1, 0 );
scene.add( lights[0] );
scene.add( lights[1] );

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('mousemove', onDocumentMouseMove, false);

function onDocumentMouseMove(e) {
		mouseX = e.clientX - (window.innerWidth / 2);
		mouseY = e.clientY - (window.innerHeight / 2);
}

var mouseX = 0
var mouseY = 0

function animate() {
	requestAnimationFrame( animate );
	camera.position.x += (mouseX - camera.position.x) * 0.0003;
	camera.position.z += (-mouseY - camera.position.z) * 0.003;
	// moves stars, but out of the screen
	particle.rotation.y -= .001;
  skelet.rotation.y += 0.010;
  skelet.rotation.z -= 0.020;
	renderer.render( scene, camera );
}
animate();
