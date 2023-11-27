import * as THREE from "three";

//Include canvas
const canvas = document.querySelector('canvas.webgl')
// console.log(canvas)

// Create a scene
const scene = new THREE.Scene()

//Add objects 
// Geometry
const geometry = new THREE.BoxGeometry(1,1,1)

//material
const material = new THREE.MeshBasicMaterial({color: 0xff0000 })
// preview with wireframe
// const material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true })


//mesh
const mesh = new THREE.Mesh(geometry, material)

// add to scene 
scene.add(mesh)


//Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
// move the camera
camera.position.z = 3
// Add camera to the scene
scene.add(camera)



// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


renderer.render(scene, camera)