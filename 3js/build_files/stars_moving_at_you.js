var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 400; //OG: 400
camera.position.y = 200;
camera.position.x = 200;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor('#000000');
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById('canvas').appendChild(renderer.domElement);

particle = new THREE.Object3D();

scene.add(particle);

const stars = new THREE.OctahedronGeometry( .5, 2 );
const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );

for (var i = 0; i < 10000; i++) {
		var mesh = new THREE.Mesh( stars, material );
		mesh.position.x = ((Math.random()) * 500);
	  mesh.position.y = ((Math.random()) * 500);
	  mesh.position.z = ((Math.random()) * 500);
		particle.add(mesh)
	}

var ambientLight = new THREE.AmbientLight('red' );
scene.add(ambientLight);

function animate() {
	requestAnimationFrame( animate );
	particle.position.z += .1;
	renderer.render( scene, camera );
}
animate();
