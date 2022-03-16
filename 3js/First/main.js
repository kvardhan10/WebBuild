var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5; // from our POV -> the higher, the farther : the lower. the nearer

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor('#b3ccff');
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
})

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

const geometry = new THREE.BoxGeometry( 1, 1, 1 ); // the shape (**args change depending on the geometry. Refer documentation for diff. geometry args)
const material = new THREE.MeshLambertMaterial( { color: 0x9966ff } ); //how it looks
// const mesh = new THREE.Mesh( geometry, material ); // final product. For multiple final products check line 31

// mesh.position.set(0,0,0); // moving final product (x,y,z)
// mesh.rotation.set(10, 40, 0); // rotating final product (x,y,z)
// mesh.scale.set(2,0,0); //sizing final product (x,y,z)
// above functions applies to the mesh only once. If we wanna keep it going on (animating), define them in the requestAnimationFrame()

//Multiple meshes on random randomly generated
for (var i=0; i<101; i++){
  const mesh = new THREE.Mesh( geometry, material );
  // meshes will be overlapped
  mesh.position.x = ((Math.random() - .5) * 10);
  mesh.position.y = ((Math.random() - .5) * 10);
  mesh.position.z = ((Math.random() - .5) * 10);
  scene.add( mesh );
  mesh.rotation.x += .01
} // so 20 objects

// scene.add( mesh );

var light = new THREE.PointLight(0xc299ff,1, 500); //color, intensity, position
light.position.set(-10, 10, 0); //x,y,z
// x <-->  y ^ v  z L 7
scene.add(light);

var light = new THREE.PointLight(0xffffff,1, 500); //color, intensity, position
light.position.set(10, -10, 10); //x,y,z
// x <-->  y ^ v  z L 7
scene.add(light);

var render = function(){
  requestAnimationFrame(render);

  // mesh.rotation.x += .01 // y and z fixed. rotates on x-axis
  // mesh.rotation.y += .01 // x and z fixed. rotates on y-axis
  // mesh.rotation.z += .01 // x and y fixed. rotates on z-axis

  renderer.render(scene, camera);
}

function onMouseMove(event){
  event.preventDefault();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1; //from documentation. Gets x-point of mouse
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1; //from documentation. Gets y-point of mouse

  // console.log('x: ' + mouse.x + ' y: ' + mouse.y);

  raycaster.setFromCamera(mouse, camera);

  var intersects = raycaster.intersectObjects(scene.children, true);
  for (var i=0; i<intersects.length; i++){
    var tl = new TimelineMax();
    tl.to(intersects[i].object.scale, .5, {x: 2, ease: Expo.easeOut})
    tl.to(intersects[i].object.rotation, .5, {y: .5, ease: Expo.easeOut})
    tl.to(intersects[i].object.position, .5, {x: 0, ease: Expo.easeOut})
    tl.to(intersects[i].object.position, .5, {y: 0, ease: Expo.easeOut})
    tl.to(intersects[i].object.position, .5, {z: 0, ease: Expo.easeOut}) // same x,y,z values will take all the objects and place them at the center
    tl.to(intersects[i].object.rotation, .5, {x: .5, ease: Expo.easeOut}, "=-2")
    console.log(i + ' done');
    // tl.to(intersects[i].object.scale, .5, {x: 1, ease: Expo.easeOut})
  }

}

render();

var tl = new TimelineMax({paused:true});
// t1.to(mesh.function, animation_time, {x/y/z: change_in_geometry_value, type_of_animation})
// tl.to(mesh.scale, .5, {x: 2, ease: Expo.easeOut})              //expands total_animation_time = 0.5
// tl.to(mesh.rotation, .5, {y: .5, ease: Expo.easeOut})           //rotates y_axis total_animation_time = 1
// tl.to(mesh.position, .5, {x: 2, ease: Expo.easeOut})           //moves total_animation_time = 1.5
// tl.to(mesh.rotation, .5, {x: .5, ease: Expo.easeOut}, "=-1")  //rotates z_axis total_animation_time = 2
// tl.to(mesh.scale, .5, {x: 1, ease: Expo.easeOut})              //contracts to OG size total_animation_time = 2.5
// for rotates z-axis, since we have given an arg of =-1, it applies the animation before 1 second. So the mesh is rotated at 1th second i.e when y is rotated

// above animation works for single mesh. Used the same code in intersects array

//Using above animation based on EventListener
// where.addEventListener('on_which_event', function_name or () => definition) // declare function and define somewhere else or declare empty function and define using =>
// document.body.addEventListener('click', () => tl.play()) //applies when you 'click' anywhere on the document body
window.addEventListener('mousemove', onMouseMove); //applies only on the specific part of the window whsere you click, based on the x and y value of the mouse
