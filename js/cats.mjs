import scene from './scene.js';

//3D 모델링 객체들 로더
//서있는 고양이1 (꼬리가 가로로 일자)
const loader1 = new THREE.GLTFLoader();
loader1.load("./js/gltf/standingcat1.gltf", function(gltf){  
    const standingcat1 = gltf.scene;             
    standingcat1.rotation.x = -0.5 * Math.PI;                
    standingcat1.position.set(100, 0, 0);
    scene.add(standingcat1);
});

//앉아있는 고양이1
const loader10 = new THREE.GLTFLoader();
loader10.load("./js/gltf/sittingcat1.gltf", function(gltf){  
    const sittingcat1 = gltf.scene;              
    sittingcat1.rotation.y = -1 * Math.PI;                   
    sittingcat1.position.set(-100, 0, 0);
    sittingcat1.scale.set(0.09, 0.09, 0.09);
    scene.add(sittingcat1);
});

//앉아있는 고양이2 (식빵굽는, 눈감음)
const loader11 = new THREE.GLTFLoader();
loader11.load("./js/gltf/sittingcat2.gltf", function(gltf){  
    const sittingcat2 = gltf.scene;              
    //sittingcat2.rotation.y = -1 * Math.PI;                   
    sittingcat2.position.set(-100, 0, 150);
    sittingcat2.scale.set(100, 100, 100);
    scene.add(sittingcat2);
});

//앉아있는 고양이3 (식빵굽는, 검정색)
const loader12 = new THREE.GLTFLoader();
loader12.load("./js/gltf/sittingcat3.gltf", function(gltf){  
    const sittingcat3 = gltf.scene;                            
    sittingcat3.position.set(-200, 0, 150);
    sittingcat3.scale.set(1.2, 1.2, 1.2);
    scene.add(sittingcat3);
});

//그루밍하는 고양이1
const loader20 = new THREE.GLTFLoader();
loader20.load("./js/gltf/groomingcat1.gltf", function(gltf){  
    const groomingcat1 = gltf.scene;              
    groomingcat1.rotation.x = 0.5 * Math.PI;                   
    groomingcat1.position.set(-250, 0, 0);
    groomingcat1.scale.set(2, 2, 2);
    scene.add(groomingcat1);
});

//그루밍하는 고양이2
const loader21 = new THREE.GLTFLoader();
loader21.load("./js/gltf/groomingcat2.gltf", function(gltf){  
    const groomingcat2 = gltf.scene;              
    groomingcat2.rotation.y = 0.5 * Math.PI;                   
    groomingcat2.position.set(-250, 80, -50);
    groomingcat2.scale.set(20, 20, 20);
    scene.add(groomingcat2);
});

//그루밍하는 고양이2
const loader22 = new THREE.GLTFLoader();
loader22.load("./js/gltf/groomingcat3.gltf", function(gltf){  
    const groomingcat3 = gltf.scene;              
    //groomingcat3.rotation.y = 0.5 * Math.PI;                   
    groomingcat3.position.set(-50, 0, 70);
    groomingcat3.scale.set(20, 20, 20);
    scene.add(groomingcat3);
});

//자고있는 고양이1
const loader25 = new THREE.GLTFLoader();
loader25.load("./js/gltf/sleepingcat1.gltf", function(gltf){  
    const sleepingcat1 = gltf.scene;              
    sleepingcat1.rotation.y = -1 * Math.PI;                   
    sleepingcat1.position.set(350, 0, 0);
    sleepingcat1.scale.set(40, 40, 40);
    scene.add(sleepingcat1);
});

//자고있는 고양이2
const loader26 = new THREE.GLTFLoader();
loader26.load("./js/gltf/sleepingcat2.gltf", function(gltf){  
    const sleepingcat2 = gltf.scene;              
    sleepingcat2.rotation.y = 0.5 * Math.PI;                   
    sleepingcat2.position.set(250, 0, 0);
    sleepingcat2.scale.set(40, 40, 40);
    scene.add(sleepingcat2);
});

//자고있는 고양이3
const loader27 = new THREE.GLTFLoader();
loader27.load("./js/gltf/sleepingcat3.gltf", function(gltf){  
    const sleepingcat3 = gltf.scene;              
    //sleepingcat3.rotation.y = 0.5 * Math.PI;                   
    sleepingcat3.position.set(250, 10, 50);
    sleepingcat3.scale.set(11, 11, 11);
    scene.add(sleepingcat3);
});

//걷고있는 고양이1 (꼬리 위로 물결)
const loader30 = new THREE.GLTFLoader();
loader30.load("./js/gltf/walkingcat1.gltf", function(gltf){  
    const walkingcat1 = gltf.scene;                            
    walkingcat1.position.set(50, 0, 30);
    scene.add(walkingcat1);
});

//걷고있는 고양이2 (다리 크로스)  ★안나타남, threejs 오류 때문으로 추정
const loader31 = new THREE.GLTFLoader();
loader31.load("./js/gltf/walkingcat2.gltf", function(gltf){  
    const walkingcat2 = gltf.scene;                            
    walkingcat2.position.set(0, 0, 30);                
    walkingcat2.scale.set(100, 100, 100);
    scene.add(walkingcat2);
});

//걷고있는 고양이3 (4발 다 걷는 중)
const loader32 = new THREE.GLTFLoader();
loader32.load("./js/gltf/walkingcat3.gltf", function(gltf){  
    const walkingcat3 = gltf.scene;                            
    walkingcat3.position.set(0, 0, 100);                
    walkingcat3.scale.set(0.8, 0.8, 0.8);
    scene.add(walkingcat3);
});

export { scene };