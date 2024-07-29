const runner = window.bitbybitRunner.getRunnerInstance();

const model = {
    width: 1,
    length: 1,
    height: 0.5,
    thickness: 0.05,
};

setTimeout(async () => {
    const runnerOptions = {
        canvasId: "myCanvas",
        canvasZoneClass: 'myCanvasZone',
        enablePhysics: false,
        enableOCCT: true,
        enableJSCAD: false,
        enableKeyEventListeners: false,
        backgroundColor: "#0000ff",
        loadFonts: [],
    };

    await runner.run(runnerOptions);
    changeModel(1);
}, 0);

let previousMesh;

async function changeModel(value, name) {
    if (value === undefined || model[name] !== value) {
        if(value !== undefined) {
            model[name] = value;
        }
        const res = await runner.executeScript(getInlineScript(), model);
    
        if(previousMesh) {
            previousMesh.dispose();
        }
        previousMesh = res.table;
    }
}

window.changeSize = changeSize;

function getInlineScript() {
    return '{\"type\":\"rete\",\"version\":\"0.15.14\",\"script\":\"async function(e,t,s,r,n){let a={};a={skybox:[\\"clearSky\\"],size:[1e3],blur:[.1],environmentIntensity:[.7],...a};e.HS.executeBasedOnType(a,!1,(e=>t.babylon.scene.enableSkybox(e)));let o={};o={direction:[[-100,-100,-100]],intensity:[3],diffuse:[\\"#ffffff\\"],specular:[\\"#ffffff\\"],shadowGeneratorMapSize:[1024],enableShadows:[!0],shadowDarkness:[0],...o};e.HS.executeBasedOnType(o,!1,(e=>t.babylon.scene.drawDirectionalLight(e)));let i={};i={property:[\\"width\\"],...i};const u=[{result:[r[i.property[0]]]}];let l={};l={property:[\\"length\\"],...l};const c=[{result:[r[l.property[0]]]}];let p={};p={property:[\\"height\\"],...p};const d=[{result:[r[p.property[0]]]}];let f={};f={property:[\\"thickness\\"],...f};const y=[{result:[r[f.property[0]]]}];let h={};h={radius:[2],center:[[0,0,0]],direction:[[0,1,0]],...h};const S=[{result:await e.HS.executeBasedOnTypeAsync(h,!1,(e=>t.occt.shapes.face.createCircleFace(e))),transformers:[]}];let H={};H={precision:[.01],drawFaces:[!0],faceColour:[\\"#0040ff\\"],drawEdges:[!0],edgeColour:[\\"#ffffff\\"],edgeWidth:[1],...H};const m=[{result:e.HS.executeBasedOnType(H,!1,(e=>t.draw.optionsOcctShapeSimple(e))),transformers:[]}],v={value1:[void 0],value2:[void 0]};let w={};w.value1=u,w.value2=[{result:[1],transformers:[]}],e.HS.updateListInputs(w),w={...v,...w};const O=[{result:e.HS.executeBasedOnType(w,!1,(e=>t.logic.firstDefinedValueGate(e))),transformers:[]}],B={value1:[void 0],value2:[void 0]};let x={};x.value1=c,x.value2=[{result:[1],transformers:[]}],e.HS.updateListInputs(x),x={...B,...x};const b=[{result:e.HS.executeBasedOnType(x,!1,(e=>t.logic.firstDefinedValueGate(e))),transformers:[]}],L={value1:[void 0],value2:[void 0]};let g={};g.value1=d,g.value2=[{result:[.5],transformers:[]}],e.HS.updateListInputs(g),g={...L,...g};const I=[{result:e.HS.executeBasedOnType(g,!1,(e=>t.logic.firstDefinedValueGate(e))),transformers:[]}],T={value1:[void 0],value2:[void 0]};let A={};A.value1=y,A.value2=[{result:[.05],transformers:[]}],e.HS.updateListInputs(A),A={...T,...A};const k=[{result:e.HS.executeBasedOnType(A,!1,(e=>t.logic.firstDefinedValueGate(e))),transformers:[]}];let D={};D.first=k,e.HS.updateListInputs(D),D={first:[1],second:[2],operation:[\\"divide\\"],...D};const N=[{result:e.HS.executeBasedOnType(D,!1,(e=>t.math.twoNrOperation(e))),transformers:[]}];let R={};R.first=O,R.second=k,e.HS.updateListInputs(R),R={first:[1],second:[1],operation:[\\"subtract\\"],...R};const C=[{result:e.HS.executeBasedOnType(R,!1,(e=>t.math.twoNrOperation(e))),transformers:[]}];let E={};E.first=b,E.second=k,e.HS.updateListInputs(E),E={first:[1],second:[1],operation:[\\"subtract\\"],...E};const G=[{result:e.HS.executeBasedOnType(E,!1,(e=>t.math.twoNrOperation(e))),transformers:[]}];let V={};V.first=I,V.second=k,e.HS.updateListInputs(V),V={first:[1],second:[1],operation:[\\"subtract\\"],...V};const z=[{result:e.HS.executeBasedOnType(V,!1,(e=>t.math.twoNrOperation(e))),transformers:[]}];let F={};F.first=I,F.second=N,e.HS.updateListInputs(F),F={first:[1],second:[1],operation:[\\"subtract\\"],...F};const M=[{result:e.HS.executeBasedOnType(F,!1,(e=>t.math.twoNrOperation(e))),transformers:[]}];let W={};W.length=G,W.width=C,e.HS.updateListInputs(W),W={width:[1],length:[2],center:[[0,0,0]],direction:[[0,1,0]],...W};const X=[{result:await e.HS.executeBasedOnTypeAsync(W,!1,(e=>t.occt.shapes.wire.createRectangleWire(e))),transformers:[]}];let Y={};Y.first=z,e.HS.updateListInputs(Y),Y={first:[1],second:[2],operation:[\\"divide\\"],...Y};const Z=[{result:e.HS.executeBasedOnType(Y,!1,(e=>t.math.twoNrOperation(e))),transformers:[]}];let P={};P.y=M,e.HS.updateListInputs(P),P={x:[0],y:[1],z:[0],...P};const j=[{result:e.HS.executeBasedOnType(P,!1,(e=>t.vector.vectorXYZ(e))),transformers:[]}],q={shape:[void 0]};let J={};J.shape=X,e.HS.updateListInputs(J),J={...q,...J};const K=[{result:await e.HS.executeBasedOnTypeAsync(J,!1,(e=>t.occt.shapes.edge.getCornerPointsOfEdgesForShape(e))),transformers:[]}];let Q={};Q.y=Z,e.HS.updateListInputs(Q),Q={x:[0],y:[1],z:[0],...Q};const U=[{result:e.HS.executeBasedOnType(Q,!1,(e=>t.vector.vectorXYZ(e))),transformers:[]}];let $={};$.width=O,$.length=b,$.height=k,$.center=j,e.HS.updateListInputs($),$={width:[1],length:[2],height:[3],center:[[0,0,0]],...$};const _=[{result:await e.HS.executeBasedOnTypeAsync($,!1,(e=>t.occt.shapes.solid.createBox(e))),transformers:[]}];let ee={};ee.width=k,ee.length=k,ee.height=z,ee.center=U,e.HS.updateListInputs(ee),ee={width:[1],length:[2],height:[3],center:[[0,0,0]],...ee};const te=[{result:await e.HS.executeBasedOnTypeAsync(ee,!1,(e=>t.occt.shapes.solid.createBox(e))),transformers:[]}];let se={};se.list=K,e.HS.updateListInputs(se),se={nrLevels:[1],...se};const re=[];for(let e=0;e<se.nrLevels;e++)re.push({type:\\"flat\\"});const ne=[{result:se.list,transformers:re}],ae={shape:[void 0],translation:[[0,0,0]]};let oe={};oe.shape=te,oe.translation=ne,e.HS.updateListInputs(oe),oe={...ae,...oe};const ie=[{result:await e.HS.executeBasedOnTypeAsync(oe,!1,(e=>t.occt.transforms.translate(e))),transformers:[]}];let ue={};ue.listElements=[ie[0],S[0],_[0]],e.HS.updateListInputs(ue),ue={...ue};const le=[{result:[ue.listElements?ue.listElements:[]]}],ce={shapes:[void 0]};let pe={};pe.shapes=le,e.HS.updateListInputs(pe),pe={...ce,...pe};const de=[{result:await e.HS.executeBasedOnTypeAsync(pe,!1,(e=>t.occt.shapes.compound.makeCompound(e))),transformers:[]}],fe={entity:[void 0],options:[void 0],babylonMesh:[void 0]};let ye={};ye.entity=de,ye.options=m,e.HS.updateListInputs(ye),ye={...fe,...ye};const he=[{result:await e.HS.executeBasedOnTypeAsync(ye,!1,(e=>t.draw.drawAnyAsync(e))),transformers:[]}];let Se={};Se.value=he,e.HS.updateListInputs(Se),Se={property:[\\"table\\"],...Se},setBitbybitRunnerResultValue(Se.property[0],Se.value[0])}(BitByBit,bitbybit,bitbybitRunnerResult,bitbybitRunnerInputs,Bit);\"}';
}