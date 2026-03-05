<script lang="ts">
  import { T, useTask, useThrelte } from '@threlte/core';
  import * as THREE from 'three';
  import logoSvg from '$lib/assets/logo.svg?raw';

  interface Props {
    isExploded: boolean;
    flipCount: number;
    selectedName: string | null;
  }

  let { isExploded, flipCount, selectedName }: Props = $props();

  const { renderer } = useThrelte();
  renderer.setClearColor(0xd5d0c6, 1);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 2.0;

  // Device dimensions
  const deviceWidth = 2.2;
  const deviceHeight = 3.2;
  const cornerRadius = 0.05;

  // Layer thicknesses — breadboard is the structural core, modules snap on both sides
  const breadboardThickness = 0.1;
  const moduleThickness = 0.06;

  // Z positions — breadboard centered, modules on both sides
  const breadboardZ = 0;
  const frontModuleZ = breadboardZ + breadboardThickness / 2 + moduleThickness / 2;
  const moduleZ = breadboardZ - breadboardThickness / 2 - moduleThickness / 2;

  // Grid config — no padding, modules fill the entire back edge-to-edge
  const gridCols = 4;
  const gridRows = 5;
  const gridGap = 0.03;
  const gridSquareW = (deviceWidth - gridGap * (gridCols - 1)) / gridCols;
  const gridSquareH = (deviceHeight - gridGap * (gridRows - 1)) / gridRows;
  const gridStartX = -deviceWidth / 2 + gridSquareW / 2;
  const gridStartY = -deviceHeight / 2 + gridSquareH / 2;

  // Module colors
  const moduleColors = {
    dac: 0xb0432a,
    amp: 0x2e4d7a,
    battery: 0xb9952e,
    storage: 0x2a5040,
    wireless: 0x44423f
  };

  // Modules layout
  const modules = [
    { gridPos: [0, 4], size: [2, 1], color: moduleColors.dac, name: 'DAC' },
    { gridPos: [2, 4], size: [2, 1], color: moduleColors.amp, name: 'Amp' },
    { gridPos: [0, 3], size: [2, 1], color: moduleColors.storage, name: 'Storage' },
    { gridPos: [2, 3], size: [2, 1], color: moduleColors.wireless, name: 'Wireless' },
    { gridPos: [0, 0], size: [4, 3], color: moduleColors.battery, name: 'Battery' }
  ];

  // Connector pad positions
  const connectorPads: Array<{ x: number; y: number }> = [];
  for (let row = 0; row < gridRows; row++) {
    for (let col = 0; col < gridCols; col++) {
      connectorPads.push({
        x: gridStartX + col * (gridSquareW + gridGap),
        y: gridStartY + row * (gridSquareH + gridGap)
      });
    }
  }

  // Chip positions on breadboard
  const chipPositions = [
    [-0.4, 0.3],
    [0.4, 0.3],
    [-0.5, -0.2],
    [0.5, -0.2],
    [-0.25, -0.5],
    [0.25, -0.5]
  ];

  // Front modules — same grid, sit on front face of breadboard
  const frontModuleThickness = moduleThickness; // same as back modules

  // Front module layout: Screen = 4x4 (top), Speaker = 4x1 (bottom)
  const frontModules = [
    { gridPos: [0, 1], size: [4, 4], color: 0x1a1a1a, name: 'Screen' },
    { gridPos: [0, 0], size: [4, 1], color: 0x2a2a2a, name: 'Speaker' }
  ];

  // Pre-compute front module data (same logic as back modules)
  const frontModuleData = frontModules.map((config) => {
    const modW = config.size[0] * gridSquareW + (config.size[0] - 1) * gridGap;
    const modH = config.size[1] * gridSquareH + (config.size[1] - 1) * gridGap;
    const geo = makeRoundedBoxGeo(modW, modH, frontModuleThickness, cornerRadius);
    geo.translate(0, 0, -frontModuleThickness / 2);
    const modX = gridStartX + config.gridPos[0] * (gridSquareW + gridGap) + modW / 2 - gridSquareW / 2;
    const modY = gridStartY + config.gridPos[1] * (gridSquareH + gridGap) + modH / 2 - gridSquareH / 2;
    return { geo, modW, modH, modX, modY, color: config.color, name: config.name };
  });

  // Speaker grille — 5 rows of circles, bigger toward center, generous border
  const spkRef = frontModuleData[1];
  const grilleCols = 18;
  const grilleRows = 5;
  const grilleMinR = 0.008;
  const grilleMaxR = 0.022;
  const grillePadX = 0.16;
  const grillePadY = 0.08;
  const grilleHoles: Array<{ x: number; y: number; r: number }> = [];
  for (let row = 0; row < grilleRows; row++) {
    for (let col = 0; col < grilleCols; col++) {
      const nx = col / (grilleCols - 1);
      const ny = row / (grilleRows - 1);
      const dx = nx - 0.5;
      const dy = ny - 0.5;
      const dist = Math.sqrt(dx * dx + dy * dy) / 0.5;
      const t = 1 - dist;
      const r = grilleMinR + t * t * (grilleMaxR - grilleMinR);
      const x = spkRef.modX - spkRef.modW / 2 + grillePadX + nx * (spkRef.modW - grillePadX * 2);
      const y = spkRef.modY - spkRef.modH / 2 + grillePadY + ny * (spkRef.modH - grillePadY * 2);
      grilleHoles.push({ x, y, r });
    }
  }

  // Screen display texture — DVD bounce animation
  const screenModRef = frontModuleData[0];
  const canvasW = 512;
  const canvasH = Math.round(512 * (screenModRef.modH / screenModRef.modW));
  const screenCanvas = document.createElement('canvas');
  const screenCtx = screenCanvas.getContext('2d')!;
  screenCanvas.width = canvasW;
  screenCanvas.height = canvasH;

  const screenTexture = new THREE.CanvasTexture(screenCanvas);
  screenTexture.colorSpace = THREE.SRGBColorSpace;

  // DVD bounce state
  const dvdColors = [
    ['#1C8AFF', '#EFBC25'], // original
    ['#FF6B6B', '#4ECDC4'], // coral + teal
    ['#DDA0FF', '#FFE66D'], // purple + gold
    ['#4ECDC4', '#FF6B6B'], // teal + coral
    ['#EFBC25', '#1C8AFF'], // yellow + blue
    ['#FF9F43', '#A29BFE'], // orange + lavender
    ['#E84393', '#00CEC9'], // pink + cyan
    ['#6C5CE7', '#FFEAA7'], // indigo + cream
    ['#00B894', '#FD79A8'], // mint + rose
    ['#F39C12', '#8E44AD'], // amber + violet
    ['#2ECC71', '#E74C3C'], // green + red
    ['#1ABC9C', '#F1C40F'], // turquoise + sunflower
  ];
  let dvdColorIdx = 0;
  let logoImgs: HTMLImageElement[] = [];
  let logoDrawW = 0;
  let logoDrawH = 0;
  let dvdX = 40;
  let dvdY = 60;
  let dvdVx = 0.8;
  let dvdVy = 0.55;

  // Pre-build rounded rect display geometry with proper UVs
  const displayW = screenModRef.modW - 0.06;
  const displayH = screenModRef.modH - 0.06;
  function makeDisplayGeo() {
    const r = cornerRadius;
    const hw = displayW / 2, hh = displayH / 2;
    const s = new THREE.Shape();
    s.moveTo(-hw + r, -hh);
    s.lineTo(hw - r, -hh);
    s.quadraticCurveTo(hw, -hh, hw, -hh + r);
    s.lineTo(hw, hh - r);
    s.quadraticCurveTo(hw, hh, hw - r, hh);
    s.lineTo(-hw + r, hh);
    s.quadraticCurveTo(-hw, hh, -hw, hh - r);
    s.lineTo(-hw, -hh + r);
    s.quadraticCurveTo(-hw, -hh, -hw + r, -hh);
    const geo = new THREE.ShapeGeometry(s);
    const uvAttr = geo.attributes.uv;
    for (let i = 0; i < uvAttr.count; i++) {
      uvAttr.setX(i, (uvAttr.getX(i) + hw) / displayW);
      uvAttr.setY(i, (uvAttr.getY(i) + hh) / displayH);
    }
    uvAttr.needsUpdate = true;
    return geo;
  }
  const displayGeo = makeDisplayGeo();

  // Pre-render colored SVG variants as images
  for (const [c1, c2] of dvdColors) {
    const colored = logoSvg.replace('#1C8AFF', c1).replace('#EFBC25', c2);
    const blob = new Blob([colored], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      if (logoDrawW === 0) {
        const aspect = img.width / img.height;
        logoDrawW = canvasW * 0.25;
        logoDrawH = logoDrawW / aspect;
      }
      URL.revokeObjectURL(url);
    };
    img.src = url;
    logoImgs.push(img);
  }

  function updateScreenCanvas() {
    if (!logoImgs[0]?.complete) return;
    // Move
    dvdX += dvdVx;
    dvdY += dvdVy;
    // Bounce + color switch
    let bounced = false;
    if (dvdX <= 0 || dvdX + logoDrawW >= canvasW) {
      dvdVx *= -1;
      dvdX = Math.max(0, Math.min(dvdX, canvasW - logoDrawW));
      bounced = true;
    }
    if (dvdY <= 0 || dvdY + logoDrawH >= canvasH) {
      dvdVy *= -1;
      dvdY = Math.max(0, Math.min(dvdY, canvasH - logoDrawH));
      bounced = true;
    }
    if (bounced) {
      let next = dvdColorIdx;
      while (next === dvdColorIdx) next = Math.floor(Math.random() * dvdColors.length);
      dvdColorIdx = next;
    }
    // Draw
    screenCtx.fillStyle = '#050508';
    screenCtx.fillRect(0, 0, canvasW, canvasH);
    screenCtx.drawImage(logoImgs[dvdColorIdx], dvdX, dvdY, logoDrawW, logoDrawH);
    screenTexture.needsUpdate = true;
  }

  // Touch strip — flush haptic surface on the right side edge of the device
  const stripLength = 1.2;
  const stripWidth = 0.03; // how far it protrudes from the edge
  const stripThick = breadboardThickness * 0.8; // thin, just the brain layer
  const stripY = 0.2; // slightly above center
  const stripX = deviceWidth / 2; // right edge

  // --- Rounded box geometry helper ---
  function makeRoundedBoxGeo(w: number, h: number, depth: number, r: number): THREE.ExtrudeGeometry {
    const shape = new THREE.Shape();
    const hw = w / 2;
    const hh = h / 2;
    const cr = Math.min(r, hw, hh);
    shape.moveTo(-hw + cr, -hh);
    shape.lineTo(hw - cr, -hh);
    shape.quadraticCurveTo(hw, -hh, hw, -hh + cr);
    shape.lineTo(hw, hh - cr);
    shape.quadraticCurveTo(hw, hh, hw - cr, hh);
    shape.lineTo(-hw + cr, hh);
    shape.quadraticCurveTo(-hw, hh, -hw, hh - cr);
    shape.lineTo(-hw, -hh + cr);
    shape.quadraticCurveTo(-hw, -hh, -hw + cr, -hh);
    return new THREE.ExtrudeGeometry(shape, {
      depth,
      bevelEnabled: false
    });
  }

  // Pre-build rounded geometries
  const breadboardGeo = makeRoundedBoxGeo(deviceWidth, deviceHeight, breadboardThickness, cornerRadius);
  breadboardGeo.translate(0, 0, -breadboardThickness / 2);

  // Module geometries — uniform rounded corners on every module (they need to be removable)
  function makeModuleGeo(config: (typeof modules)[0]) {
    const modW = config.size[0] * gridSquareW + (config.size[0] - 1) * gridGap;
    const modH = config.size[1] * gridSquareH + (config.size[1] - 1) * gridGap;
    const geo = makeRoundedBoxGeo(modW, modH, moduleThickness, cornerRadius);
    geo.translate(0, 0, -moduleThickness / 2);
    return { geo, modW, modH };
  }

  // Pre-compute module data
  const moduleData = modules.map((config) => {
    const { geo, modW, modH } = makeModuleGeo(config);
    const modX =
      gridStartX + config.gridPos[0] * (gridSquareW + gridGap) + modW / 2 - gridSquareW / 2;
    const modY =
      gridStartY + config.gridPos[1] * (gridSquareH + gridGap) + modH / 2 - gridSquareH / 2;

    // Pins
    const pins: Array<{ x: number; y: number }> = [];
    for (let py = 0; py < config.size[1]; py++) {
      for (let px = 0; px < config.size[0]; px++) {
        pins.push({
          x: modX - modW / 2 + gridSquareW / 2 + px * (gridSquareW + gridGap),
          y: modY - modH / 2 + gridSquareH / 2 + py * (gridSquareH + gridGap)
        });
      }
    }
    return { geo, modW, modH, modX, modY, pins, color: config.color, name: config.name };
  });

  // Touch strip geometry — sits on the right side edge
  const stripGeo = makeRoundedBoxGeo(stripWidth, stripLength, stripThick, 0.015);
  stripGeo.translate(0, 0, -stripThick / 2);

  // --- Rotation & zoom state (quaternion-based for free-form rotation) ---
  let isDragging = false;
  let previousMouse = { x: 0, y: 0 };
  let targetZoom = 7.5;

  // Quaternion rotation — no gimbal lock, full free-form
  let currentQuat = new THREE.Quaternion();
  let targetQuaternion = new THREE.Quaternion();

  // Set initial orientation
  {
    const ex = new THREE.Euler(0.15, 0.4, 0, 'YXZ');
    targetQuaternion.setFromEuler(ex);
    currentQuat.copy(targetQuaternion);
  }

  // Explode animation offsets
  let frontModuleOffset = $state(0); // front modules explode forward (+Z)
  let moduleOffset = $state(0); // back modules explode backward (-Z)

  // Pop-out offsets (lerped)
  let popBreadboardOffset = $state(0);
  let modulePopOffsets: number[] = $state(modules.map(() => 0));
  let frontModulePopOffsets: number[] = $state(frontModules.map(() => 0));

  // Flip tracking
  let lastFlipCount = 0;
  $effect(() => {
    if (flipCount !== lastFlipCount) {
      const flips = flipCount - lastFlipCount;
      const flipQ = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI * flips);
      targetQuaternion.premultiply(flipQ);
      targetQuaternion.normalize();
      lastFlipCount = flipCount;
    }
  });

  // --- Input handling ---
  const canvas = renderer.domElement;

  // Mouse drag
  canvas.addEventListener('pointerdown', (e: PointerEvent) => {
    if (e.pointerType === 'touch') return; // handled by touch events
    isDragging = true;
    previousMouse = { x: e.clientX, y: e.clientY };
  });

  function applyDragRotation(dx: number, dy: number) {
    // Rotate around world Y for horizontal drag, world X for vertical drag
    const rotSpeed = 0.01;
    const deltaQY = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), dx * rotSpeed);
    const deltaQX = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), dy * rotSpeed);
    // Apply: first horizontal, then vertical (world-space axes)
    targetQuaternion.premultiply(deltaQY);
    targetQuaternion.premultiply(deltaQX);
    targetQuaternion.normalize();
  }

  canvas.addEventListener('pointermove', (e: PointerEvent) => {
    if (e.pointerType === 'touch') return;
    if (!isDragging) return;
    const dx = e.clientX - previousMouse.x;
    const dy = e.clientY - previousMouse.y;
    applyDragRotation(dx, dy);
    previousMouse = { x: e.clientX, y: e.clientY };
  });

  canvas.addEventListener('pointerup', (e: PointerEvent) => {
    if (e.pointerType === 'touch') return;
    isDragging = false;
  });

  canvas.addEventListener('pointerleave', (e: PointerEvent) => {
    if (e.pointerType === 'touch') return;
    isDragging = false;
  });

  // Mouse wheel zoom
  canvas.addEventListener('wheel', (e: WheelEvent) => {
    targetZoom += e.deltaY * 0.01;
    targetZoom = Math.max(3, Math.min(12, targetZoom));
  });

  // Touch: single finger drag + two finger pinch-to-zoom
  let touchStartDist = 0;
  let touchStartZoom = 0;
  let activeTouches: Touch[] = [];

  canvas.addEventListener(
    'touchstart',
    (e: TouchEvent) => {
      e.preventDefault();
      activeTouches = Array.from(e.touches);
      if (e.touches.length === 1) {
        isDragging = true;
        previousMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else if (e.touches.length === 2) {
        isDragging = false;
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        touchStartDist = Math.sqrt(dx * dx + dy * dy);
        touchStartZoom = targetZoom;
      }
    },
    { passive: false }
  );

  canvas.addEventListener(
    'touchmove',
    (e: TouchEvent) => {
      e.preventDefault();
      if (e.touches.length === 1 && isDragging) {
        const dx = e.touches[0].clientX - previousMouse.x;
        const dy = e.touches[0].clientY - previousMouse.y;
        applyDragRotation(dx, dy);
        previousMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const scale = touchStartDist / dist;
        targetZoom = Math.max(3, Math.min(12, touchStartZoom * scale));
      }
    },
    { passive: false }
  );

  canvas.addEventListener('touchend', (e: TouchEvent) => {
    isDragging = false;
    activeTouches = Array.from(e.touches);
    if (e.touches.length === 1) {
      isDragging = true;
      previousMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  });

  // --- Materials ---
  function makeMaterial(
    baseColor: number,
    name: string,
    metalness = 0.1,
    roughness = 0.3
  ): THREE.MeshStandardMaterial {
    const isSelected = selectedName === name;
    if (isSelected) {
      return new THREE.MeshStandardMaterial({
        color: baseColor,
        metalness: 0.3,
        roughness: 0.15,
        emissive: new THREE.Color(baseColor),
        emissiveIntensity: 0.6
      });
    }
    const dimmed = selectedName !== null;
    return new THREE.MeshStandardMaterial({
      color: baseColor,
      metalness,
      roughness,
      transparent: dimmed,
      opacity: dimmed ? 0.4 : 1.0
    });
  }

  // Refs
  let cameraRef: THREE.PerspectiveCamera | undefined = $state();
  let groupRef: THREE.Group | undefined = $state();

  const POP_DISTANCE = 0.25;

  // Animation loop
  useTask(() => {
    updateScreenCanvas();
    currentQuat.slerp(targetQuaternion, 0.08);
    if (groupRef) {
      groupRef.quaternion.copy(currentQuat);
    }

    const targetFrontOff = isExploded ? 0.8 : 0;
    const targetModuleOff = isExploded ? -0.8 : 0;
    frontModuleOffset += (targetFrontOff - frontModuleOffset) * 0.08;
    moduleOffset += (targetModuleOff - moduleOffset) * 0.08;

    const bbPopTarget = selectedName === 'Breadboard' ? POP_DISTANCE : 0;
    popBreadboardOffset += (bbPopTarget - popBreadboardOffset) * 0.1;

    for (let i = 0; i < modules.length; i++) {
      const target = selectedName === modules[i].name ? POP_DISTANCE : 0;
      modulePopOffsets[i] += (target - modulePopOffsets[i]) * 0.1;
    }

    for (let i = 0; i < frontModules.length; i++) {
      const target = selectedName === frontModules[i].name ? POP_DISTANCE : 0;
      frontModulePopOffsets[i] += (target - frontModulePopOffsets[i]) * 0.1;
    }

    if (!isDragging) {
      const autoRot = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.0008);
      targetQuaternion.premultiply(autoRot);
      targetQuaternion.normalize();
    }

    if (cameraRef) {
      const currentDist = cameraRef.position.length();
      const newDist = currentDist + (targetZoom - currentDist) * 0.08;
      const dir = new THREE.Vector3(3, 2, 5).normalize();
      cameraRef.position.copy(dir.multiplyScalar(newDist));
      cameraRef.lookAt(0, 0, 0);
    }
  });
</script>

<!-- Camera — starts further back -->
<T.PerspectiveCamera makeDefault position={[3, 2, 5]} fov={45} bind:ref={cameraRef} />

<!-- Lighting -->
<T.AmbientLight intensity={1.0} color="#e8e0ff" />
<T.DirectionalLight position={[5, 8, 10]} intensity={2.5} color="#ffffff" />
<T.DirectionalLight position={[-8, 3, 6]} intensity={1.5} color="#4ECDC4" />
<T.DirectionalLight position={[2, -3, -10]} intensity={1.2} color="#FFE66D" />
<T.DirectionalLight position={[0, 12, 0]} intensity={0.8} color="#ffffff" />
<T.PointLight position={[4, -3, 4]} intensity={15} color="#DDA0FF" distance={14} decay={2} />
<T.PointLight position={[-5, 4, 5]} intensity={12} color="#4ECDC4" distance={14} decay={2} />
<T.PointLight position={[0, 0, 8]} intensity={10} color="#FF6B6B" distance={12} decay={2} />

<!-- Device Group -->
<T.Group bind:ref={groupRef}>
  <!-- FRONT MODULES — sit on front face of breadboard -->
  {#each frontModuleData as fmod, i}
    {@const pop = frontModulePopOffsets[i]}
    <T.Mesh
      position={[fmod.modX, fmod.modY, frontModuleZ + frontModuleOffset + pop]}
      geometry={fmod.geo}
      material={makeMaterial(fmod.color, fmod.name, fmod.name === 'Screen' ? 0.3 : 0.2, fmod.name === 'Screen' ? 0.4 : 0.5)}
    />
  {/each}

  <!-- Screen display panel — DVD bounce logo -->
  {@const screenMod = frontModuleData[0]}
  {@const screenPop = frontModulePopOffsets[0]}
  <T.Mesh
    position={[screenMod.modX, screenMod.modY, frontModuleZ + frontModuleThickness / 2 + 0.001 + frontModuleOffset + screenPop]}
    geometry={displayGeo}
    material={new THREE.MeshStandardMaterial({
      map: screenTexture,
      metalness: 0.1,
      roughness: 0.05,
      emissiveMap: screenTexture,
      emissive: new THREE.Color(0xffffff),
      emissiveIntensity: 0.3
    })}
  />

  <!-- Speaker grille — wave of circles -->
  {@const spkPop = frontModulePopOffsets[1]}
  {#each grilleHoles as hole}
    <T.Mesh
      position={[hole.x, hole.y, frontModuleZ + frontModuleThickness / 2 + 0.001 + frontModuleOffset + spkPop]}
      rotation.x={Math.PI / 2}
      material={new THREE.MeshStandardMaterial({
        color: 0x080808,
        metalness: 0.1,
        roughness: 0.9,
        polygonOffset: true,
        polygonOffsetFactor: -1,
        polygonOffsetUnits: -1
      })}
    >
      <T.CylinderGeometry args={[hole.r, hole.r, 0.005, 12]} />
    </T.Mesh>
  {/each}

  <!-- Touch strip — right side edge of device -->
  <T.Mesh
    position={[stripX + stripWidth / 2, stripY, breadboardZ]}
    geometry={stripGeo}
    material={new THREE.MeshStandardMaterial({
      color: 0x151515,
      metalness: 0.7,
      roughness: 0.15
    })}
  />
  <!-- Grip ridges on touch strip -->
  {#each Array(12) as _, ri}
    {@const ridgeY = stripY - stripLength / 2 + 0.08 + ri * (stripLength - 0.16) / 11}
    <T.Mesh
      position={[stripX + stripWidth + 0.002, ridgeY, breadboardZ]}
      material={new THREE.MeshStandardMaterial({
        color: 0x222222,
        metalness: 0.6,
        roughness: 0.2
      })}
    >
      <T.BoxGeometry args={[0.008, 0.008, stripThick * 0.6]} />
    </T.Mesh>
  {/each}

  <!-- LAYER 2: BREADBOARD (rounded) -->
  <T.Mesh
    position.z={breadboardZ + popBreadboardOffset}
    geometry={breadboardGeo}
    material={makeMaterial(0x8a8580, 'Breadboard', 0.2, 0.5)}
  />

  <!-- CPU chip -->
  <T.Mesh
    position={[0, 0.6, breadboardZ + breadboardThickness / 2 + 0.01 + popBreadboardOffset]}
    material={makeMaterial(0x111111, 'Breadboard', 0.8, 0.2)}
  >
    <T.BoxGeometry args={[0.4, 0.4, 0.02]} />
  </T.Mesh>

  <!-- Support chips -->
  {#each chipPositions as pos}
    <T.Mesh
      position={[pos[0], pos[1], breadboardZ + breadboardThickness / 2 + 0.008 + popBreadboardOffset]}
      material={makeMaterial(0x111111, 'Breadboard', 0.8, 0.2)}
    >
      <T.BoxGeometry args={[0.12, 0.12, 0.015]} />
    </T.Mesh>
  {/each}

  <!-- Connector pads -->
  {#each connectorPads as pad}
    <T.Mesh
      position={[pad.x, pad.y, breadboardZ - breadboardThickness / 2 - 0.008 + popBreadboardOffset]}
      material={new THREE.MeshStandardMaterial({
        color: 0xd4af37,
        metalness: 0.9,
        roughness: 0.3
      })}
    >
      <T.BoxGeometry args={[gridSquareW * 0.5, gridSquareH * 0.5, 0.015]} />
    </T.Mesh>
  {/each}

  <!-- LAYER 3: MODULES (rounded corners on device edges) -->
  {#each moduleData as mod, i}
    {@const pop = modulePopOffsets[i]}
    <T.Mesh
      position={[mod.modX, mod.modY, moduleZ + moduleOffset - pop]}
      geometry={mod.geo}
      material={makeMaterial(mod.color, mod.name, 0.1, 0.35)}
    />

    <!-- Module label indent -->
    <T.Mesh
      position={[mod.modX, mod.modY, moduleZ - moduleThickness / 2 - 0.005 + moduleOffset - pop]}
      material={new THREE.MeshBasicMaterial({ color: 0x000000 })}
    >
      <T.BoxGeometry args={[mod.modW * 0.4, 0.05, 0.01]} />
    </T.Mesh>

    <!-- Connector pins -->
    {#each mod.pins as pin}
      <T.Mesh
        position={[pin.x, pin.y, moduleZ + moduleThickness / 2 + 0.012 + moduleOffset - pop]}
        rotation.x={Math.PI / 2}
        material={new THREE.MeshStandardMaterial({
          color: 0xd4af37,
          metalness: 0.9,
          roughness: 0.3
        })}
      >
        <T.CylinderGeometry args={[0.025, 0.025, 0.025, 8]} />
      </T.Mesh>
    {/each}
  {/each}

  <!-- PORTS -->
  <!-- 3.5mm jack — on the amp module, offset toward the right edge -->
  {@const ampMod = moduleData[1]}
  {@const ampPop = modulePopOffsets[1]}
  {@const jackX = ampMod.modX + ampMod.modW / 2 - 0.15}
  {@const jackY = ampMod.modY + ampMod.modH / 2}
  {@const jackBaseZ = moduleZ - moduleThickness / 2 + moduleOffset - ampPop}
  <!-- 3.5mm jack housing — semi-cylindrical bump on amp module -->
  {@const jackZ = moduleZ - moduleThickness / 4 + moduleOffset - ampPop}
  <T.Mesh
    position={[jackX, deviceHeight / 2 - 0.13, jackZ]}
    rotation.y={Math.PI / 2}
    material={makeMaterial(moduleColors.amp, 'Amp', 0.2, 0.35)}
  >
    <T.CylinderGeometry args={[0.07, 0.07, 0.26, 24, 1, false, 0, Math.PI]} />
  </T.Mesh>
  <!-- Spherical cap at bottom of housing -->
  <T.Mesh
    position={[jackX, deviceHeight / 2 - 0.26, jackZ]}
    rotation.y={Math.PI}
    material={makeMaterial(moduleColors.amp, 'Amp', 0.2, 0.35)}
  >
    <T.SphereGeometry args={[0.07, 24, 12, 0, Math.PI, 0, Math.PI]} />
  </T.Mesh>
  <!-- 3.5mm jack hole -->
  <T.Mesh
    position={[jackX, deviceHeight / 2 - 0.005, jackZ]}
    material={new THREE.MeshBasicMaterial({ color: 0x0a0a0a })}
  >
    <T.CylinderGeometry args={[0.04, 0.04, 0.02, 24]} />
  </T.Mesh>

  <!-- USB-C — flat rounded slot on bottom edge -->
  <T.Mesh
    position={[0, -deviceHeight / 2 + 0.02, breadboardZ]}
    rotation.z={Math.PI / 2}
    material={new THREE.MeshBasicMaterial({ color: 0x0a0a0a })}
  >
    <T.CapsuleGeometry args={[0.04, 0.15, 4, 16]} />
  </T.Mesh>
</T.Group>
