export async function generateGameAssets() {
  // Simulate a short loading time for effect
  await new Promise(resolve => setTimeout(resolve, 500));

  const createSvgDataUri = (svgContent: string) => {
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgContent.trim())}`;
  };

  const playerSvg0 = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
      <style>.c1{fill:#00ffcc;}.c2{fill:#ffffff;}.c3{fill:#0088aa;}</style>
      <rect x="7" y="1" width="2" height="2" class="c2"/>
      <rect x="7" y="3" width="2" height="6" class="c1"/>
      <rect x="5" y="7" width="6" height="2" class="c1"/>
      <rect x="3" y="9" width="10" height="2" class="c1"/>
      <rect x="1" y="11" width="14" height="2" class="c1"/>
      <rect x="1" y="13" width="2" height="2" class="c2"/>
      <rect x="13" y="13" width="2" height="2" class="c2"/>
      <rect x="5" y="13" width="6" height="2" class="c3"/>
      <rect x="7" y="15" width="2" height="1" class="c2"/>
    </svg>
  `;

  const playerSvg1 = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
      <style>.c1{fill:#00ffcc;}.c2{fill:#ffffff;}.c3{fill:#0088aa;}.c4{fill:#ff9900;}</style>
      <rect x="7" y="1" width="2" height="2" class="c2"/>
      <rect x="7" y="3" width="2" height="6" class="c1"/>
      <rect x="5" y="7" width="6" height="2" class="c1"/>
      <rect x="3" y="9" width="10" height="2" class="c1"/>
      <rect x="1" y="11" width="14" height="2" class="c1"/>
      <rect x="1" y="13" width="2" height="2" class="c2"/>
      <rect x="13" y="13" width="2" height="2" class="c2"/>
      <rect x="5" y="13" width="6" height="2" class="c3"/>
      <rect x="6" y="15" width="4" height="1" class="c4"/>
    </svg>
  `;

  const enemy1Svg0 = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
      <style>.c1{fill:#ffcc00;}.c2{fill:#ffffff;}.c3{fill:#ff6600;}</style>
      <rect x="5" y="2" width="6" height="2" class="c1"/>
      <rect x="3" y="4" width="10" height="2" class="c1"/>
      <rect x="5" y="8" width="2" height="2" class="c2"/>
      <rect x="9" y="8" width="2" height="2" class="c2"/>
      <rect x="5" y="12" width="2" height="2" class="c3"/>
      <rect x="9" y="12" width="2" height="2" class="c3"/>
      <rect x="1" y="6" width="14" height="2" class="c1"/>
      <rect x="1" y="8" width="4" height="2" class="c1"/>
      <rect x="11" y="8" width="4" height="2" class="c1"/>
      <rect x="3" y="10" width="2" height="2" class="c1"/>
      <rect x="11" y="10" width="2" height="2" class="c1"/>
    </svg>
  `;

  const enemy1Svg1 = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
      <style>.c1{fill:#ffcc00;}.c2{fill:#ffffff;}.c3{fill:#ff6600;}</style>
      <rect x="5" y="2" width="6" height="2" class="c1"/>
      <rect x="3" y="4" width="10" height="2" class="c1"/>
      <rect x="5" y="8" width="2" height="2" class="c2"/>
      <rect x="9" y="8" width="2" height="2" class="c2"/>
      <rect x="5" y="12" width="2" height="2" class="c3"/>
      <rect x="9" y="12" width="2" height="2" class="c3"/>
      <rect x="3" y="6" width="10" height="2" class="c1"/>
      <rect x="1" y="8" width="2" height="4" class="c1"/>
      <rect x="13" y="8" width="2" height="4" class="c1"/>
      <rect x="3" y="10" width="2" height="2" class="c1"/>
      <rect x="11" y="10" width="2" height="2" class="c1"/>
    </svg>
  `;

  const enemy1Svg2 = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
      <style>.c1{fill:#ffcc00;}.c2{fill:#ffffff;}.c3{fill:#ff6600;}</style>
      <rect x="5" y="2" width="6" height="2" class="c1"/>
      <rect x="3" y="4" width="10" height="2" class="c1"/>
      <rect x="5" y="8" width="2" height="2" class="c2"/>
      <rect x="9" y="8" width="2" height="2" class="c2"/>
      <rect x="5" y="12" width="2" height="2" class="c3"/>
      <rect x="9" y="12" width="2" height="2" class="c3"/>
      <rect x="3" y="6" width="10" height="2" class="c1"/>
      <rect x="1" y="10" width="2" height="4" class="c1"/>
      <rect x="13" y="10" width="2" height="4" class="c1"/>
      <rect x="3" y="12" width="2" height="2" class="c1"/>
      <rect x="11" y="12" width="2" height="2" class="c1"/>
    </svg>
  `;

  const enemy1Svg3 = enemy1Svg1;

  const enemy2Svg0 = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
      <style>.c1{fill:#ff33cc;}.c2{fill:#ffffff;}</style>
      <rect x="5" y="4" width="6" height="2" class="c1"/>
      <rect x="3" y="6" width="10" height="2" class="c1"/>
      <rect x="1" y="8" width="14" height="2" class="c1"/>
      <rect x="3" y="10" width="2" height="2" class="c2"/>
      <rect x="11" y="10" width="2" height="2" class="c2"/>
      <rect x="7" y="10" width="2" height="2" class="c1"/>
      <rect x="3" y="2" width="2" height="2" class="c1"/>
      <rect x="11" y="2" width="2" height="2" class="c1"/>
      <rect x="1" y="12" width="2" height="2" class="c1"/>
      <rect x="13" y="12" width="2" height="2" class="c1"/>
      <rect x="5" y="14" width="2" height="2" class="c1"/>
      <rect x="9" y="14" width="2" height="2" class="c1"/>
    </svg>
  `;

  const enemy2Svg1 = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
      <style>.c1{fill:#ff33cc;}.c2{fill:#ffffff;}</style>
      <rect x="5" y="4" width="6" height="2" class="c1"/>
      <rect x="3" y="6" width="10" height="2" class="c1"/>
      <rect x="1" y="8" width="14" height="2" class="c1"/>
      <rect x="3" y="10" width="2" height="2" class="c2"/>
      <rect x="11" y="10" width="2" height="2" class="c2"/>
      <rect x="7" y="10" width="2" height="2" class="c1"/>
      <rect x="5" y="2" width="2" height="2" class="c1"/>
      <rect x="9" y="2" width="2" height="2" class="c1"/>
      <rect x="3" y="12" width="2" height="2" class="c1"/>
      <rect x="11" y="12" width="2" height="2" class="c1"/>
      <rect x="3" y="14" width="2" height="2" class="c1"/>
      <rect x="11" y="14" width="2" height="2" class="c1"/>
    </svg>
  `;

  const enemy2Svg2 = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
      <style>.c1{fill:#ff33cc;}.c2{fill:#ffffff;}</style>
      <rect x="5" y="4" width="6" height="2" class="c1"/>
      <rect x="3" y="6" width="10" height="2" class="c1"/>
      <rect x="1" y="8" width="14" height="2" class="c1"/>
      <rect x="3" y="10" width="2" height="2" class="c2"/>
      <rect x="11" y="10" width="2" height="2" class="c2"/>
      <rect x="7" y="10" width="2" height="2" class="c1"/>
      <rect x="7" y="2" width="2" height="2" class="c1"/>
      <rect x="5" y="12" width="2" height="2" class="c1"/>
      <rect x="9" y="12" width="2" height="2" class="c1"/>
      <rect x="1" y="14" width="2" height="2" class="c1"/>
      <rect x="13" y="14" width="2" height="2" class="c1"/>
    </svg>
  `;

  const enemy2Svg3 = enemy2Svg1;

  const enemy3Svg0 = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
      <style>.c1{fill:#33ccff;}.c2{fill:#ffffff;}</style>
      <rect x="5" y="2" width="6" height="2" class="c1"/>
      <rect x="3" y="4" width="10" height="4" class="c1"/>
      <rect x="5" y="6" width="2" height="2" class="c2"/>
      <rect x="9" y="6" width="2" height="2" class="c2"/>
      <rect x="1" y="8" width="14" height="2" class="c1"/>
      <rect x="1" y="10" width="2" height="4" class="c1"/>
      <rect x="5" y="10" width="2" height="4" class="c1"/>
      <rect x="9" y="10" width="2" height="4" class="c1"/>
      <rect x="13" y="10" width="2" height="4" class="c1"/>
    </svg>
  `;

  const enemy3Svg1 = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
      <style>.c1{fill:#33ccff;}.c2{fill:#ffffff;}</style>
      <rect x="5" y="2" width="6" height="2" class="c1"/>
      <rect x="3" y="4" width="10" height="4" class="c1"/>
      <rect x="5" y="6" width="2" height="2" class="c2"/>
      <rect x="9" y="6" width="2" height="2" class="c2"/>
      <rect x="1" y="8" width="14" height="2" class="c1"/>
      <rect x="3" y="10" width="2" height="4" class="c1"/>
      <rect x="7" y="10" width="2" height="4" class="c1"/>
      <rect x="11" y="10" width="2" height="4" class="c1"/>
    </svg>
  `;

  const enemy3Svg2 = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
      <style>.c1{fill:#33ccff;}.c2{fill:#ffffff;}</style>
      <rect x="5" y="2" width="6" height="2" class="c1"/>
      <rect x="3" y="4" width="10" height="4" class="c1"/>
      <rect x="5" y="6" width="2" height="2" class="c2"/>
      <rect x="9" y="6" width="2" height="2" class="c2"/>
      <rect x="1" y="8" width="14" height="2" class="c1"/>
      <rect x="1" y="10" width="2" height="2" class="c1"/>
      <rect x="5" y="10" width="2" height="2" class="c1"/>
      <rect x="9" y="10" width="2" height="2" class="c1"/>
      <rect x="13" y="10" width="2" height="2" class="c1"/>
      <rect x="3" y="12" width="2" height="4" class="c1"/>
      <rect x="7" y="12" width="2" height="4" class="c1"/>
      <rect x="11" y="12" width="2" height="4" class="c1"/>
    </svg>
  `;

  const enemy3Svg3 = enemy3Svg1;

  return {
    player_0: createSvgDataUri(playerSvg0),
    player_1: createSvgDataUri(playerSvg1),
    enemy1_0: createSvgDataUri(enemy1Svg0),
    enemy1_1: createSvgDataUri(enemy1Svg1),
    enemy1_2: createSvgDataUri(enemy1Svg2),
    enemy1_3: createSvgDataUri(enemy1Svg3),
    enemy2_0: createSvgDataUri(enemy2Svg0),
    enemy2_1: createSvgDataUri(enemy2Svg1),
    enemy2_2: createSvgDataUri(enemy2Svg2),
    enemy2_3: createSvgDataUri(enemy2Svg3),
    enemy3_0: createSvgDataUri(enemy3Svg0),
    enemy3_1: createSvgDataUri(enemy3Svg1),
    enemy3_2: createSvgDataUri(enemy3Svg2),
    enemy3_3: createSvgDataUri(enemy3Svg3),
  };
}
