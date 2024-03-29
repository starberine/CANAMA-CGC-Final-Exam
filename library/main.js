import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js';
import { ColladaLoader } from './ColladaLoader.js';
import {GLTFLoader} from './GLTFLoader.js';
import { EffectComposer } from './EffectComposer.js';
import { UnrealBloomPass } from './UnrealBloomPass.js';
import { RenderPass } from './RenderPass.js';


// Scene
const scene = new THREE.Scene();
// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 50, 70); // Adjusted camera position
camera.lookAt(0, 0, 0);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('#87CEEB'); // Sets the background color to blue (hexadecimal value)
document.body.appendChild(renderer.domElement);


const composer = new EffectComposer(renderer); // Use EffectComposer from imported module
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

// Create UnrealBloomPass with initial parameters
const bloomParams = {
    exposure: 1,       // Controls the exposure of the bloom effect
    bloomStrength: 1, // Controls the initial strength of the bloom effect
    bloomThreshold: 0, // Controls the luminance threshold for the bloom effect
    bloomRadius: 1,  // Controls the size of the bloom effect
};

const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    bloomParams.bloomStrength,
    bloomParams.bloomRadius,
    bloomParams.bloomThreshold
);

// Add the bloom pass to the composer
composer.addPass(bloomPass);

// Later in your code, you can adjust the bloom strength as needed
bloomPass.strength = 100; // Set the bloom strength to 2 (increase intensity)

// Orbit Controls
const cameraControl = new OrbitControls(camera, renderer.domElement);

// Ensure shadow mapping is enabled
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Ambient Light
const ambientLight = new THREE.AmbientLight("#FFF78A", 1); // Color, Intensity
scene.add(ambientLight);

// Directional Light
const directionalLight = new THREE.DirectionalLight("#fff5b6", 1);
directionalLight.castShadow = true;
directionalLight.position.set(0, 100, 0);
scene.add(directionalLight);

// Configure shadow properties for the light
directionalLight.shadow.mapSize.width = 4000;
directionalLight.shadow.mapSize.height = 4000;
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 5000;

// Point Light
const pointLight = new THREE.PointLight("#fff5b6", 1000, 0, 2);
pointLight.castShadow = true;
pointLight.position.set(0, 100, 0);
pointLight.intensity = 10000; // Adjust intensity if needed
scene.add(pointLight);

// Configure shadow properties for the point light
pointLight.shadow.mapSize.width = 1024;
pointLight.shadow.mapSize.height = 1024;
pointLight.shadow.camera.near = 5;
pointLight.shadow.camera.far = 200;

// Create a helper for the point light's position
//const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
//scene.add(pointLightHelper);


// Traverse through the models and enable shadow casting for meshes
function enableShadowCasting(model) {
    model.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
        }
    });
}

// Tom Hook import
const colladaLoader = new ColladaLoader();
colladaLoader.load(
    './assets/3d/Tom Nook/Tom Nook.dae',
    (collada) => {
        const model = collada.scene;
        model.rotation.x = Math.PI / 0.5;
        model.position.set(19, -0.5, -6);
        const desiredScale = 1;
        model.scale.set(desiredScale, desiredScale, desiredScale);
        enableShadowCasting(model); // Enable shadow casting for the model
        scene.add(model);
    },
    (xhr) => {
        console.log('Collada model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading Collada model:', error);
    }
);

//weeds
const colladaLoader2 = new ColladaLoader();
colladaLoader2.load(
    './assets/3d/Spring Weeds/PltWeedSpr3.dae',
    (collada) => {
        const model = collada.scene;
        model.position.set(15, 0, -5);
        const desiredScale = 1;
        model.scale.set(desiredScale, desiredScale, desiredScale);
        enableShadowCasting(model); // Enable shadow casting for the model
        scene.add(model);
    },
    (xhr) => {
        console.log('Collada model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading Collada model:', error);
    }
);

const colladaLoader3 = new ColladaLoader();
colladaLoader3.load(
    './assets/3d/Spring Weeds/PltWeedSpr3.dae',
    (collada) => {
        const model = collada.scene;
        model.position.set(45, 0, -5);
        const desiredScale = 1;
        model.scale.set(desiredScale, desiredScale, desiredScale);
        enableShadowCasting(model); // Enable shadow casting for the model
        scene.add(model);
    },
    (xhr) => {
        console.log('Collada model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading Collada model:', error);
    }
);

const colladaLoader4 = new ColladaLoader();
colladaLoader4.load(
    './assets/3d/Spring Weeds/PltWeedSpr3.dae',
    (collada) => {
        const model = collada.scene;
        model.position.set(60, 0, 50);
        const desiredScale = 2;
        model.scale.set(desiredScale, desiredScale, desiredScale);
        enableShadowCasting(model); // Enable shadow casting for the model
        scene.add(model);
    },
    (xhr) => {
        console.log('Collada model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading Collada model:', error);
    }
);

const colladaLoader5 = new ColladaLoader();
colladaLoader5.load(
    './assets/3d/Spring Weeds/PltWeedSpr3.dae',
    (collada) => {
        const model = collada.scene;
        model.position.set(80, 0, 50);
        const desiredScale = 2;
        model.scale.set(desiredScale, desiredScale, desiredScale);
        enableShadowCasting(model); // Enable shadow casting for the model
        scene.add(model);
    },
    (xhr) => {
        console.log('Collada model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading Collada model:', error);
    }
);

const colladaLoader6 = new ColladaLoader();
colladaLoader6.load(
    './assets/3d/Spring Weeds/PltWeedSpr3.dae',
    (collada) => {
        const model = collada.scene;
        model.position.set(100, 0, 50);
        const desiredScale = 2;
        model.scale.set(desiredScale, desiredScale, desiredScale);
        enableShadowCasting(model); // Enable shadow casting for the model
        scene.add(model);
    },
    (xhr) => {
        console.log('Collada model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading Collada model:', error);
    }
);

const colladaLoader7 = new ColladaLoader();
colladaLoader7.load(
    './assets/3d/Spring Weeds/PltWeedSpr3.dae',
    (collada) => {
        const model = collada.scene;
        model.position.set(100, 0, 40);
        const desiredScale = 2;
        model.scale.set(desiredScale, desiredScale, desiredScale);
        enableShadowCasting(model); // Enable shadow casting for the model
        scene.add(model);
    },
    (xhr) => {
        console.log('Collada model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading Collada model:', error);
    }
);

const colladaLoader8 = new ColladaLoader();
colladaLoader8.load(
    './assets/3d/Spring Weeds/PltWeedSpr3.dae',
    (collada) => {
        const model = collada.scene;
        model.position.set(80, 0, 40);
        const desiredScale = 2;
        model.scale.set(desiredScale, desiredScale, desiredScale);
        enableShadowCasting(model); // Enable shadow casting for the model
        scene.add(model);
    },
    (xhr) => {
        console.log('Collada model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading Collada model:', error);
    }
);

const colladaLoader9 = new ColladaLoader();
colladaLoader9.load(
    './assets/3d/Spring Weeds/PltWeedSpr3.dae',
    (collada) => {
        const model = collada.scene;
        model.position.set(60, 0, 40);
        const desiredScale = 2;
        model.scale.set(desiredScale, desiredScale, desiredScale);
        enableShadowCasting(model); // Enable shadow casting for the model
        scene.add(model);
    },
    (xhr) => {
        console.log('Collada model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading Collada model:', error);
    }
);

const colladaLoader10 = new ColladaLoader();
colladaLoader10.load(
    './assets/3d/Spring Weeds/PltWeedSpr3.dae',
    (collada) => {
        const model = collada.scene;
        model.position.set(60, 0, 30);
        const desiredScale = 2;
        model.scale.set(desiredScale, desiredScale, desiredScale);
        enableShadowCasting(model); // Enable shadow casting for the model
        scene.add(model);
    },
    (xhr) => {
        console.log('Collada model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading Collada model:', error);
    }
);

const colladaLoader11 = new ColladaLoader();
colladaLoader11.load(
    './assets/3d/Spring Weeds/PltWeedSpr3.dae',
    (collada) => {
        const model = collada.scene;
        model.position.set(80, 0, 30);
        const desiredScale = 2;
        model.scale.set(desiredScale, desiredScale, desiredScale);
        enableShadowCasting(model); // Enable shadow casting for the model
        scene.add(model);
    },
    (xhr) => {
        console.log('Collada model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading Collada model:', error);
    }
);

const colladaLoader12 = new ColladaLoader();
colladaLoader12.load(
    './assets/3d/Spring Weeds/PltWeedSpr3.dae',
    (collada) => {
        const model = collada.scene;
        model.position.set(100, 0, 30);
        const desiredScale = 2;
        model.scale.set(desiredScale, desiredScale, desiredScale);
        enableShadowCasting(model); // Enable shadow casting for the model
        scene.add(model);
    },
    (xhr) => {
        console.log('Collada model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading Collada model:', error);
    }
);

const colladaLoader13 = new ColladaLoader();
colladaLoader13.load(
    './assets/3d/Spring Weeds/PltWeedSpr3.dae',
    (collada) => {
        const model = collada.scene;
        model.position.set(60, 0, 20);
        const desiredScale = 2;
        model.scale.set(desiredScale, desiredScale, desiredScale);
        enableShadowCasting(model); // Enable shadow casting for the model
        scene.add(model);
    },
    (xhr) => {
        console.log('Collada model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading Collada model:', error);
    }
);

const colladaLoader14 = new ColladaLoader();
colladaLoader14.load(
    './assets/3d/Spring Weeds/PltWeedSpr3.dae',
    (collada) => {
        const model = collada.scene;
        model.position.set(80, 0, 20);
        const desiredScale = 2;
        model.scale.set(desiredScale, desiredScale, desiredScale);
        enableShadowCasting(model); // Enable shadow casting for the model
        scene.add(model);
    },
    (xhr) => {
        console.log('Collada model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading Collada model:', error);
    }
);

const colladaLoader15 = new ColladaLoader();
colladaLoader15.load(
    './assets/3d/Spring Weeds/PltWeedSpr3.dae',
    (collada) => {
        const model = collada.scene;
        model.position.set(100, 0, 20);
        const desiredScale = 2;
        model.scale.set(desiredScale, desiredScale, desiredScale);
        enableShadowCasting(model); // Enable shadow casting for the model
        scene.add(model);
    },
    (xhr) => {
        console.log('Collada model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading Collada model:', error);
    }
);

// Load House model
const gltfLoader = new GLTFLoader();
gltfLoader.load(
    './assets/3d/House/scene.gltf',
    (gltf) => {
        const model3 = gltf.scene;
        model3.rotation.y = Math.PI / -2;
        model3.position.set(30, 0, -20);

        // Resize GLTF model
        const desiredScale = 0.15; // Adjust scale factor as needed
        model3.scale.set(desiredScale, desiredScale, desiredScale);

        model3.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
            }
        });
        scene.add(model3);
    },
    (xhr) => {
        console.log('GLTF model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading GLTF model:', error);
    }
);

const gltfLoader5 = new GLTFLoader();
gltfLoader5.load(
    './assets/3d/House/scene.gltf',
    (gltf) => {
        const model3 = gltf.scene;
        model3.position.set(-90, 0, 0);

        // Resize GLTF model
        const desiredScale = 0.15; // Adjust scale factor as needed
        model3.scale.set(desiredScale, desiredScale, desiredScale);

        model3.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
            }
        });
        scene.add(model3);
    },
    (xhr) => {
        console.log('GLTF model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading GLTF model:', error);
    }
);

const gltfLoader6 = new GLTFLoader();
gltfLoader6.load(
    './assets/3d/House/scene.gltf',
    (gltf) => {
        const model3 = gltf.scene;
        model3.position.set(-90, 0, 40);

        // Resize GLTF model
        const desiredScale = 0.15; // Adjust scale factor as needed
        model3.scale.set(desiredScale, desiredScale, desiredScale);

        model3.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
            }
        });
        scene.add(model3);
    },
    (xhr) => {
        console.log('GLTF model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading GLTF model:', error);
    }
);

// Load apple tree model
const gltfLoader2 = new GLTFLoader();
gltfLoader2.load(
    './assets/3d/scene.gltf',
    (gltf) => {
        const model7 = gltf.scene;
        model7.position.set(-30, 0, -20);

        // Resize GLTF model
        const desiredScale = 0.1; // Adjust scale factor as needed
        model7.scale.set(desiredScale, desiredScale, desiredScale);

        model7.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
            }
        });
        scene.add(model7);
    },
    (xhr) => {
        console.log('GLTF model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading GLTF model:', error);
    }
);

const gltfLoader3 = new GLTFLoader();
gltfLoader3.load(
    './assets/3d/scene.gltf',
    (gltf) => {
        const model8 = gltf.scene;
        model8.position.set(-70, 0, -40);

        // Resize GLTF model
        const desiredScale = 0.1; // Adjust scale factor as needed
        model8.scale.set(desiredScale, desiredScale, desiredScale);

        model8.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
            }
        });
        scene.add(model8);
    },
    (xhr) => {
        console.log('GLTF model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading GLTF model:', error);
    }
);

const gltfLoader4 = new GLTFLoader();
gltfLoader4.load(
    './assets/3d/scene.gltf',
    (gltf) => {
        const model9 = gltf.scene;
        model9.position.set(0, 0, -40);

        // Resize GLTF model
        const desiredScale = 0.1; // Adjust scale factor as needed
        model9.scale.set(desiredScale, desiredScale, desiredScale);

        model9.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
            }
        });
        scene.add(model9);
    },
    (xhr) => {
        console.log('GLTF model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading GLTF model:', error);
    }
);

const gltfLoader7 = new GLTFLoader();
gltfLoader7.load(
    './assets/3d/scene.gltf',
    (gltf) => {
        const model9 = gltf.scene;
        model9.position.set(120, 0, -40);

        // Resize GLTF model
        const desiredScale = 0.1; // Adjust scale factor as needed
        model9.scale.set(desiredScale, desiredScale, desiredScale);

        model9.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
            }
        });
        scene.add(model9);
    },
    (xhr) => {
        console.log('GLTF model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading GLTF model:', error);
    }
);

const gltfLoader8 = new GLTFLoader();
gltfLoader8.load(
    './assets/3d/scene.gltf',
    (gltf) => {
        const model9 = gltf.scene;
        model9.position.set(70, 0, -40);

        // Resize GLTF model
        const desiredScale = 0.1; // Adjust scale factor as needed
        model9.scale.set(desiredScale, desiredScale, desiredScale);

        model9.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
            }
        });
        scene.add(model9);
    },
    (xhr) => {
        console.log('GLTF model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading GLTF model:', error);
    }
);

const gltfLoader9 = new GLTFLoader();
gltfLoader9.load(
    './assets/3d/scene.gltf',
    (gltf) => {
        const model9 = gltf.scene;
        model9.position.set(90, 0, -10);

        // Resize GLTF model
        const desiredScale = 0.1; // Adjust scale factor as needed
        model9.scale.set(desiredScale, desiredScale, desiredScale);

        model9.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
            }
        });
        scene.add(model9);
    },
    (xhr) => {
        console.log('GLTF model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading GLTF model:', error);
    }
);

const gltfLoader10 = new GLTFLoader();
gltfLoader10.load(
    './assets/3d/scene.gltf',
    (gltf) => {
        const model9 = gltf.scene;
        model9.position.set(140, 0, -10);

        // Resize GLTF model
        const desiredScale = 0.1; // Adjust scale factor as needed
        model9.scale.set(desiredScale, desiredScale, desiredScale);

        model9.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
            }
        });
        scene.add(model9);
    },
    (xhr) => {
        console.log('GLTF model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading GLTF model:', error);
    }
);

//textures
    //grass
const textureLoader = new THREE.TextureLoader();
const grassTexture = textureLoader.load('./assets/textures/grass.png'); // Adjust the path to your texture
const material = new THREE.MeshStandardMaterial({ map: grassTexture });

    //sand
const textureLoader2 = new THREE.TextureLoader();
const sandTexture = textureLoader2.load('./assets/textures/sand .png'); // Adjust the path to your texture
const material2 = new THREE.MeshStandardMaterial({ map: sandTexture });

    //rock
const rockTextureLoader = new THREE.TextureLoader();
const rockTexture = rockTextureLoader.load('./assets/textures/textures/rock.jpg'); // Adjust the path to your texture
const rockMaterial = new THREE.MeshStandardMaterial({ map: rockTexture });

    //coal
const coalTextureLoader = new THREE.TextureLoader();
const coalTexture = rockTextureLoader.load('./assets/textures/coal.jpg'); // Adjust the path to your texture
const coalMaterial = new THREE.MeshStandardMaterial({ map: coalTexture });

    //fire
const fireTextureLoader = new THREE.TextureLoader();
const fireTexture = fireTextureLoader.load('./assets/textures/lava.jpg'); // Adjust the path to your texture
const fireMaterial = new THREE.MeshStandardMaterial({ map: fireTexture });

// Create island 1
const geometry1 = new THREE.BoxGeometry(350, 5, 120);
const island1 = new THREE.Mesh(geometry1, material);
island1.position.set(0, -3, 0);
island1.receiveShadow = true; // Enable receiving shadows

// Create island 2
const geometry2 = new THREE.BoxGeometry(350, 8, 120);
const island2 = new THREE.Mesh(geometry2, material2);
island2.position.set(0, -10, 0);
island2.receiveShadow = true; // Enable receiving shadows

scene.add(island1, island2);


// rocks
const rockGeometry = new THREE.SphereGeometry(2, 9, 32); // radius, widthSegments, heightSegments
const rockMesh = new THREE.Mesh(rockGeometry, rockMaterial);
rockMesh.position.set(-20, -1, 10);
rockMesh.castShadow = true; // Enable shadow casting for the mesh
rockMesh.receiveShadow = true;

const rockGeometry2 = new THREE.SphereGeometry(2, 9, 32); // radius, widthSegments, heightSegments
const rockMesh2 = new THREE.Mesh(rockGeometry2, rockMaterial);
rockMesh2.position.set(-22, -1, 10);
rockMesh2.castShadow = true; // Enable shadow casting for the mesh
rockMesh2.receiveShadow = true;

const rockGeometry3 = new THREE.SphereGeometry(3, 9, 32); // radius, widthSegments, heightSegments
const rockMesh3 = new THREE.Mesh(rockGeometry3, rockMaterial);
rockMesh3.position.set(-26, -1, 10);
rockMesh3.castShadow = true; // Enable shadow casting for the mesh
rockMesh3.receiveShadow = true;

const rockGeometry4 = new THREE.SphereGeometry(2, 9, 32); // radius, widthSegments, heightSegments
const rockMesh4 = new THREE.Mesh(rockGeometry4, rockMaterial);
rockMesh4.position.set(-30, -1, 12);
rockMesh4.castShadow = true; // Enable shadow casting for the mesh
rockMesh4.receiveShadow = true;

const rockGeometry5 = new THREE.SphereGeometry(1, 9, 32); // radius, widthSegments, heightSegments
const rockMesh5 = new THREE.Mesh(rockGeometry5, rockMaterial);
rockMesh5.position.set(-32, -1, 13);
rockMesh5.castShadow = true; // Enable shadow casting for the mesh
rockMesh5.receiveShadow = true;

const rockGeometry6 = new THREE.SphereGeometry(1, 8, 32); // radius, widthSegments, heightSegments
const rockMesh6 = new THREE.Mesh(rockGeometry6, rockMaterial);
rockMesh6.position.set(-33, -1, 14);
rockMesh6.castShadow = true; // Enable shadow casting for the mesh
rockMesh6.receiveShadow = true;

const rockGeometry7 = new THREE.SphereGeometry(2, 8, 32); // radius, widthSegments, heightSegments
const rockMesh7 = new THREE.Mesh(rockGeometry7, rockMaterial);
rockMesh7.position.set(-34, -1, 12);
rockMesh7.castShadow = true; // Enable shadow casting for the mesh
rockMesh7.receiveShadow = true;

const rockGeometry8 = new THREE.SphereGeometry(2,8, 32); // radius, widthSegments, heightSegments
const rockMesh8 = new THREE.Mesh(rockGeometry8, rockMaterial);
rockMesh8.position.set(-35, -1, 15);
rockMesh8.castShadow = true; // Enable shadow casting for the mesh
rockMesh8.receiveShadow = true;

const rockGeometry9 = new THREE.SphereGeometry(2, 8, 32); // radius, widthSegments, heightSegments
const rockMesh9 = new THREE.Mesh(rockGeometry9, rockMaterial);
rockMesh9.position.set(-30, -1, 14);
rockMesh9.castShadow = true; // Enable shadow casting for the mesh
rockMesh9.receiveShadow = true;

const rockGeometry10 = new THREE.SphereGeometry(3, 9, 32); // radius, widthSegments, heightSegments
const rockMesh10 = new THREE.Mesh(rockGeometry10, rockMaterial);
rockMesh10.position.set(-34, -1, 17);
rockMesh10.castShadow = true; // Enable shadow casting for the mesh
rockMesh10.receiveShadow = true;

const rockGeometry11 = new THREE.SphereGeometry(2, 8, 32); // radius, widthSegments, heightSegments
const rockMesh11 = new THREE.Mesh(rockGeometry11, rockMaterial);
rockMesh11.position.set(-33, -1, 20);
rockMesh11.castShadow = true; // Enable shadow casting for the mesh
rockMesh11.receiveShadow = true;

const rockGeometry12 = new THREE.SphereGeometry(2, 9, 32); // radius, widthSegments, heightSegments
const rockMesh12 = new THREE.Mesh(rockGeometry12, rockMaterial);
rockMesh12.position.set(-33, -1, 22);
rockMesh12.castShadow = true; // Enable shadow casting for the mesh
rockMesh12.receiveShadow = true;

const rockGeometry13 = new THREE.SphereGeometry(2, 8, 32); // radius, widthSegments, heightSegments
const rockMesh13 = new THREE.Mesh(rockGeometry13, rockMaterial);
rockMesh13.position.set(-30, -1, 24);
rockMesh13.castShadow = true; // Enable shadow casting for the mesh
rockMesh13.receiveShadow = true;

const rockGeometry14 = new THREE.SphereGeometry(3, 9, 32); // radius, widthSegments, heightSegments
const rockMesh14 = new THREE.Mesh(rockGeometry14, rockMaterial);
rockMesh14.position.set(-27, -1, 24);
rockMesh14.castShadow = true; // Enable shadow casting for the mesh
rockMesh14.receiveShadow = true;

const rockGeometry15 = new THREE.SphereGeometry(1, 8, 32); // radius, widthSegments, heightSegments
const rockMesh15 = new THREE.Mesh(rockGeometry15, rockMaterial);
rockMesh15.position.set(-24, -1, 23);
rockMesh15.castShadow = true; // Enable shadow casting for the mesh
rockMesh15.receiveShadow = true;

const rockGeometry16 = new THREE.SphereGeometry(1, 9, 32); // radius, widthSegments, heightSegments
const rockMesh16 = new THREE.Mesh(rockGeometry16, rockMaterial);
rockMesh16.position.set(-23, -1, 24);
rockMesh16.castShadow = true; // Enable shadow casting for the mesh
rockMesh16.receiveShadow = true;

const rockGeometry17 = new THREE.SphereGeometry(2, 8, 32); // radius, widthSegments, heightSegments
const rockMesh17 = new THREE.Mesh(rockGeometry17, rockMaterial);
rockMesh17.position.set(-20, -1, 24);
rockMesh17.castShadow = true; // Enable shadow casting for the mesh
rockMesh17.receiveShadow = true;

const rockGeometry18 = new THREE.SphereGeometry(2, 9, 32); // radius, widthSegments, heightSegments
const rockMesh18 = new THREE.Mesh(rockGeometry18, rockMaterial);
rockMesh18.position.set(-17, -1, 23);
rockMesh18.castShadow = true; // Enable shadow casting for the mesh
rockMesh18.receiveShadow = true;

const rockGeometry19 = new THREE.SphereGeometry(2.5, 8, 32); // radius, widthSegments, heightSegments
const rockMesh19 = new THREE.Mesh(rockGeometry19, rockMaterial);
rockMesh19.position.set(-15, -1, 20);
rockMesh19.castShadow = true; // Enable shadow casting for the mesh
rockMesh19.receiveShadow = true;

const rockGeometry20 = new THREE.SphereGeometry(2.5, 9, 32); // radius, widthSegments, heightSegments
const rockMesh20 = new THREE.Mesh(rockGeometry20, rockMaterial);
rockMesh20.position.set(-15, -1, 18);
rockMesh20.castShadow = true; // Enable shadow casting for the mesh
rockMesh20.receiveShadow = true;

const rockGeometry21 = new THREE.SphereGeometry(4, 8, 32); // radius, widthSegments, heightSegments
const rockMesh21 = new THREE.Mesh(rockGeometry21, rockMaterial);
rockMesh21.position.set(-16, -1, 13);
rockMesh21.castShadow = true; // Enable shadow casting for the mesh
rockMesh21.receiveShadow = true;
scene.add(rockMesh, rockMesh2, rockMesh3, rockMesh4, rockMesh5, rockMesh6, rockMesh7, rockMesh8, rockMesh9, rockMesh10, rockMesh11, rockMesh12,rockMesh13, rockMesh14, rockMesh15, rockMesh16, rockMesh17, rockMesh18, rockMesh19, rockMesh20, rockMesh21);

//COAL
const coalGeometry = new THREE.PlaneGeometry(15, 13);
const coalMesh = new THREE.Mesh(coalGeometry, coalMaterial);
coalMesh.position.set(-24, 0, 18);
coalMesh.rotation.x = -Math.PI / 2; // Rotate by -90 degrees around the X axis
coalMesh.castShadow = true;
coalMesh.receiveShadow = true;
scene.add(coalMesh);

//fire
const sphereGeometry = new THREE.SphereGeometry(5, 9, 5);
const fireMesh = new THREE.Mesh(sphereGeometry, fireMaterial); // Red color for the sphere, orange emissive for fire-like effect
fireMesh.position.set(-25,-1, 18);
fireMesh.castShadow = true;
fireMesh.receiveShadow = true;
scene.add(fireMesh);

// Add a light to the scene (e.g., point light or directional light)
const light = new THREE.PointLight(0xffa500, 1000, 1000); // Orange light
light.position.set(-25, 5, 18); // Position the light at the center of the fire sphere
scene.add(light);

//PATH
const pathGeometry = new THREE.PlaneGeometry(13, 83);
const pathMesh = new THREE.Mesh(pathGeometry, material2);
pathMesh.position.set(30, 0, 18);
pathMesh.rotation.x = -Math.PI / 2; // Rotate by -90 degrees around the X axis
pathMesh.castShadow = true;
pathMesh.receiveShadow = true;
scene.add(pathMesh);

const pathGeometry1 = new THREE.PlaneGeometry(120, 13);
const pathMesh1 = new THREE.Mesh(pathGeometry1, material2);
pathMesh1.position.set(-35, 0, 0);
pathMesh1.rotation.x = -Math.PI / 2; // Rotate by -90 degrees around the X axis
pathMesh1.castShadow = true;
pathMesh1.receiveShadow = true;
scene.add(pathMesh1);

const pathGeometry2 = new THREE.PlaneGeometry(120, 13);
const pathMesh2 = new THREE.Mesh(pathGeometry2, material2);
pathMesh2.position.set(-35, 0, 40);
pathMesh2.rotation.x = -Math.PI / 2; // Rotate by -90 degrees around the X axis
pathMesh2.castShadow = true;
pathMesh2.receiveShadow = true;
scene.add(pathMesh2);

// Create particle material with emissive property
const particleTexture = new THREE.TextureLoader().load('./assets/images/star.png');
const particleMaterial = new THREE.PointsMaterial({
    size: 1,
    map: particleTexture,
    transparent: true,
    blending: THREE.AdditiveBlending,
    color: 0xffffff, // Use color instead of emissive
    intensity: 10000,    // Use intensity instead of emissiveIntensity
});

// Create particle system geometry and mesh
const particleGeometry = new THREE.BufferGeometry(); // Use BufferGeometry instead of Geometry

// Define the initial positions for the particles
const numParticles = 1000; // Adjust as needed
const positions = new Float32Array(numParticles * 3); // Each particle has x, y, z coordinates

for (let i = 0; i < numParticles; i++) {
    const index = i * 3;
    // Set initial positions randomly within a certain range
    positions[index] = Math.random() * 200 - 100; // x position
    positions[index + 1] = Math.random() * 200 - 100; // y position
    positions[index + 2] = Math.random() * 200 - 100; // z position
}



// Define velocities array to store particle velocities
const velocities = [];

// Initialize particle velocities
for (let i = 0; i < numParticles; i++) {
    // Random velocities in each direction
    const velocityX = Math.random() * 0.2 - 0.1;
    const velocityY = Math.random() * 0.2 - 0.1;
    const velocityZ = Math.random() * 0.2 - 0.1;
    
    velocities.push(velocityX, velocityY, velocityZ);
}

// Add the positions to the geometry as an attribute
particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

// Create particle system mesh
const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particleSystem);

// Define a function for animation
function animateParticles() {
    const positionsAttribute = particleGeometry.getAttribute('position'); // Get the position attribute

    // Update particle positions based on their velocities
    for (let i = 0; i < numParticles; i++) {
        const index = i * 3;
        positionsAttribute.array[index] += velocities[index]; // Update x position
        positionsAttribute.array[index + 1] += velocities[index + 1]; // Update y position
        positionsAttribute.array[index + 2] += velocities[index + 2]; // Update z position

        // Reset positions if particles go out of bounds (optional)
        if (positionsAttribute.array[index] > 100 || positionsAttribute.array[index] < -100) {
            positionsAttribute.array[index] = Math.random() * 200 - 100;
        }
        if (positionsAttribute.array[index + 1] > 100 || positionsAttribute.array[index + 1] < -100) {
            positionsAttribute.array[index + 1] = Math.random() * 200 - 100;
        }
        if (positionsAttribute.array[index + 2] > 100 || positionsAttribute.array[index + 2] < -100) {
            positionsAttribute.array[index + 2] = Math.random() * 200 - 100;
        }
    }

    positionsAttribute.needsUpdate = true; // Signal that the attribute values are updated

    renderer.render(scene, camera); // Render the scene

    requestAnimationFrame(animateParticles); // Request the next animation frame
}

// Start the particle animation
animateParticles();


// Mouse Control
let isRightMouseDown = false;
let prevMouseX = 0;
let prevMouseY = 0;

function onMouseDown(event) {
    if (event.button === 2) { // Right mouse button
        isRightMouseDown = true;
        prevMouseX = event.clientX;
        prevMouseY = event.clientY;
    }
}

function onMouseUp(event) {
    if (event.button === 2) { // Right mouse button
        isRightMouseDown = false;
    }
}

function onMouseMove(event) {
    if (isRightMouseDown) {
        const deltaX = event.clientX - prevMouseX;
        const deltaY = event.clientY - prevMouseY;

        const sensitivity = 0.001;
        camera.rotation.y -= deltaX * sensitivity;
        camera.rotation.x -= deltaY * sensitivity;

        prevMouseX = event.clientX;
        prevMouseY = event.clientY;
    }
}

document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
document.addEventListener('mousemove', onMouseMove);

// WASD Movement
const keyboard = {};
document.addEventListener('keydown', (event) => {
    keyboard[event.key] = true;
});
document.addEventListener('keyup', (event) => {
    keyboard[event.key] = false;
});

const moveSpeed = 0.1;
const flySpeed = 0.1;

function updateCameraPosition() {
    const moveVector = new THREE.Vector3(); // Vector to store movement direction

    if (keyboard['w']) {
        moveVector.z -= moveSpeed; // Move camera forward
    }
    if (keyboard['s']) {
        moveVector.z += moveSpeed; // Move camera backward
    }
    if (keyboard['a']) {
        moveVector.x -= moveSpeed; // Move camera left
    }
    if (keyboard['d']) {
        moveVector.x += moveSpeed; // Move camera right
    }
    if (keyboard[' ']) { // Spacebar
        camera.position.y += flySpeed; // Move camera upwards
    }

    // Apply movement vector to the camera's position
    camera.position.add(moveVector);
}

// Render Loop
function animate() {
    requestAnimationFrame(animate);

    updateCameraPosition();
    renderer.render(scene, camera);
}

animate();
