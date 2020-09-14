const container = document.querySelector("#scene-container");
let scene, camera, renderer, donut;
let ADD = 0.1;

// create donut
let createDonut = function()
{
    // create geometry
    const geometry = new THREE.TorusGeometry(1, 0.5, 10, 40);

    // create a default (white) basic material
    const material = new THREE.MeshBasicMaterial({color: Math.random() * 0xffffff});

    // create a mesh containing the geometry and material
    donut = new THREE.Mesh(geometry, material);

    // add it to the scene
    scene.add(donut);
};

// set up the environment
// initialize scene, camera, objects, and renderer
let init = function()
{
    // create the scene
    scene = new THREE.Scene();

    //set background color
    scene.background = new THREE.Color(0x000);

    // create a camera
    const fieldOfView = 35;
    const aspect = (window.innerWidth) / (window.innerHeight);
    const near = 0.1; // the near clipping plane
    const far = 100; // the far clipping plane

    camera = new THREE.PerspectiveCamera(fieldOfView, aspect, near, far);

    // every object is initially created at (0, 0, 0)
    // we'll move the camera back so we can view the scene
    camera.position.set(0, 0, 10);

    createDonut();

    // create the renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // add the automatically created <canvas> element to page
    container.appendChild(renderer.domElement);
};

function animate()
{
    requestAnimationFrame(animate);

    donut.rotation.x += ADD;
    donut.rotation.y += ADD;
    
    renderer.render(scene, camera);
}

init();
animate();