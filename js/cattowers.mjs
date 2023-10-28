import scene from './scene.js';

//캣타워1
const loader100 = new THREE.GLTFLoader();
loader100.load("./js/gltf/cat_tower_1.gltf", function(gltf){  
    const cattower1 = gltf.scene;                          
    cattower1.position.set(0, 0, 0);
    cattower1.scale.set(0.1, 0.1, 0.1);
    scene.add(cattower1);
});

//캣타워2
const loader101 = new THREE.GLTFLoader();
loader101.load("./js/gltf/cat_tower_2.gltf", function(gltf){  
    const cattower2 = gltf.scene;                          
    cattower2.position.set(0, 0, -100);
    cattower2.scale.set(10, 10, 10);
    scene.add(cattower2);
});

export { scene };