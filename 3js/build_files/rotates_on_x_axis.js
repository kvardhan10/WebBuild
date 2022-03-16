//requires <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/102/three.js"></script>

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 500; //OG: 400

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor('#000000');
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById('canvas').appendChild(renderer.domElement);

particle = new THREE.Object3D();

scene.add(particle);

const stars = new THREE.SphereGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );

for (var i = 0; i < 1000; i++) {
	const mesh = new THREE.Mesh( stars, material );
	mesh.position.set(i, 0, 0)
	particle.add(mesh)
}

var ambientLight = new THREE.AmbientLight(0x999999 );
scene.add(ambientLight);

function animate() {
	requestAnimationFrame( animate );

	particle.rotation.y -= 0.0040;

	renderer.render( scene, camera );

}
animate();
