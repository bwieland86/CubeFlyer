const gameHeight = 5; // Defines the height of the floor and ceiling in the game.

var camera;

var createScene = function () {
    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);
    
    // This creates and positions a free camera (non-mesh)
    camera = new BABYLON.TargetCamera("camera1", new BABYLON.Vector3(0, 0, -15), scene);

    // This targets the camera to scene origin (where the player is)
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0.3, 0.7, -0.3), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Add a ground and ceiling object
    var ground = BABYLON.MeshBuilder.CreateBox("ground", {width: 100, depth: 6, height: 1}, scene);
    var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
    groundMaterial.diffuseTexture = new BABYLON.Texture("Red", scene);
    groundMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    groundMaterial.emissiveColor = new BABYLON.Color3(2, 2, 2);

    ground.material = groundMaterial;
    ground.receiveShadows = true;
    ground.position.x = -5;

   
    var ceiling = BABYLON.MeshBuilder.CreateBox("ceiling", {width: 100, depth: 6, height: 1}, scene);
    var ceilingMaterial = new BABYLON.StandardMaterial("ceiling", scene);
    ceilingMaterial.diffuseTexture = new BABYLON.Texture("Red", scene);
    ceilingMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    ceilingMaterial.emissiveColor = new BABYLON.Color3(2, 2, 2);

    ceiling.material = ceilingMaterial;
    ceiling.receiveShadows = true;
    ceiling.position.x = -5;
    
    ground.position.y = -gameHeight - 0.5; // +/- 0.5 to account for height of the cubes
    ceiling.position.y = gameHeight + 0.5; 

    createHud();

    return scene;
};

var timer = 0;
var updateGame = function() {
    updateGameState();
};