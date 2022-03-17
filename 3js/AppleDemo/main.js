const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.setZ(30)
camera.position.setX(-3);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor(0x21282a)
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio)

scene.position.z = -30

document.getElementById('canvas').appendChild(renderer.domElement);

//torus
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshStandardMaterial( { color: 0x4081ec } );
const torus = new THREE.Mesh( geometry, material );
scene.add( torus );

//stars
function stars(){
  const star = new THREE.SphereGeometry(0.5, 16, 10)
  const material = new THREE.MeshStandardMaterial( { color: 0xffffff } );
  const starMesh = new THREE.Mesh( star, material );

  const [x, y, z] = Array(3).fill().map( () => Math.floor(Math.random() * (201) - 100) )
  // x, y, z = goes into single array of 3 cols, fills fully using the map function(f_name => what does it do)

  starMesh.position.set(x, y, z)
  scene.add(starMesh)
}
Array(1000).fill().forEach(stars)

//bg
const bgTex = new THREE.TextureLoader().load('bin/bg2.jpg')
scene.background = bgTex

//avatar
const appleTex = new THREE.TextureLoader().load('bin/apple.png')
const appleLogo = new THREE.Mesh(new THREE.BoxGeometry(3,3,3), new THREE.MeshBasicMaterial({ map: appleTex }))
scene.add(appleLogo)

const jobsTex = new THREE.TextureLoader().load('bin/jobs.jpg')
const jobsLogo = new THREE.Mesh(new THREE.BoxGeometry(3,3,3), new THREE.MeshBasicMaterial({ map: jobsTex }))
jobsLogo.position.set(-10, 0, 35)
scene.add(jobsLogo)

const cookTex = new THREE.TextureLoader().load('bin/cook.jpg')
const cookLogo = new THREE.Mesh(new THREE.BoxGeometry(3,3,3), new THREE.MeshBasicMaterial({ map: cookTex }))
cookLogo.position.set(-10, 0, 50)
scene.add(cookLogo)

//lights
var lights = [];
lights[0] = new THREE.PointLight(0xffffff);
lights[0].position.set( 0, 30, 30 );
scene.add( lights[0] );

//camera movement on scroll
function moveCamera(){
  const t = document.body.getBoundingClientRect().top;
  appleLogo.rotation.y += 0.1
  appleLogo.rotation.z += 0.1

  jobsLogo.rotation.y += 0.1
  jobsLogo.rotation.z += 0.1

  cookLogo.rotation.y += 0.1
  cookLogo.rotation.z += 0.1

  camera.position.z = t * -0.01;
  camera.rotation.y = t * -0.0002;

  console.log(camera.position.x, camera.position.y, camera.position.z);
}

document.body.onscroll = moveCamera
moveCamera()

function animate() {
	requestAnimationFrame( animate );

  torus.rotation.x += 0.02
  torus.rotation.y += 0.02
  torus.rotation.z += 200

  renderer.render(scene, camera)
}

animate()

// -3 0 15, 30
