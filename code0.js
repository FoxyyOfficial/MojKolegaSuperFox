gdjs.Scena_32bez_32tytu_322uCode = {};
gdjs.Scena_32bez_32tytu_322uCode.localVariables = [];
gdjs.Scena_32bez_32tytu_322uCode.GDmmbgObjects1= [];
gdjs.Scena_32bez_32tytu_322uCode.GDmmbgObjects2= [];
gdjs.Scena_32bez_32tytu_322uCode.GDtsfObjects1= [];
gdjs.Scena_32bez_32tytu_322uCode.GDtsfObjects2= [];
gdjs.Scena_32bez_32tytu_322uCode.GDOrangeBubbleButtonObjects1= [];
gdjs.Scena_32bez_32tytu_322uCode.GDOrangeBubbleButtonObjects2= [];
gdjs.Scena_32bez_32tytu_322uCode.GDOrangeBubbleButton2Objects1= [];
gdjs.Scena_32bez_32tytu_322uCode.GDOrangeBubbleButton2Objects2= [];


gdjs.Scena_32bez_32tytu_322uCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OrangeBubbleButton"), gdjs.Scena_32bez_32tytu_322uCode.GDOrangeBubbleButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("OrangeBubbleButton2"), gdjs.Scena_32bez_32tytu_322uCode.GDOrangeBubbleButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scena_32bez_32tytu_322uCode.GDOrangeBubbleButtonObjects1.length;i<l;++i) {
    if ( gdjs.Scena_32bez_32tytu_322uCode.GDOrangeBubbleButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Scena_32bez_32tytu_322uCode.GDOrangeBubbleButtonObjects1[k] = gdjs.Scena_32bez_32tytu_322uCode.GDOrangeBubbleButtonObjects1[i];
        ++k;
    }
}
gdjs.Scena_32bez_32tytu_322uCode.GDOrangeBubbleButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scena_32bez_32tytu_322uCode.GDOrangeBubbleButton2Objects1.length;i<l;++i) {
    if ( gdjs.Scena_32bez_32tytu_322uCode.GDOrangeBubbleButton2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Scena_32bez_32tytu_322uCode.GDOrangeBubbleButton2Objects1[k] = gdjs.Scena_32bez_32tytu_322uCode.GDOrangeBubbleButton2Objects1[i];
        ++k;
    }
}
gdjs.Scena_32bez_32tytu_322uCode.GDOrangeBubbleButton2Objects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gra", false);
}{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.Scena_32bez_32tytu_322uCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scena_32bez_32tytu_322uCode.GDmmbgObjects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDmmbgObjects2.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDtsfObjects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDtsfObjects2.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDOrangeBubbleButtonObjects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDOrangeBubbleButtonObjects2.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDOrangeBubbleButton2Objects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDOrangeBubbleButton2Objects2.length = 0;

gdjs.Scena_32bez_32tytu_322uCode.eventsList0(runtimeScene);
gdjs.Scena_32bez_32tytu_322uCode.GDmmbgObjects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDmmbgObjects2.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDtsfObjects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDtsfObjects2.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDOrangeBubbleButtonObjects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDOrangeBubbleButtonObjects2.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDOrangeBubbleButton2Objects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDOrangeBubbleButton2Objects2.length = 0;


return;

}

gdjs['Scena_32bez_32tytu_322uCode'] = gdjs.Scena_32bez_32tytu_322uCode;
