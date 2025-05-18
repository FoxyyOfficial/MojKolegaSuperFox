gdjs.GraCode = {};
gdjs.GraCode.localVariables = [];
gdjs.GraCode.GDSuperFoxObjects1= [];
gdjs.GraCode.GDSuperFoxObjects2= [];
gdjs.GraCode.GDBGObjects1= [];
gdjs.GraCode.GDBGObjects2= [];
gdjs.GraCode.GDOrangeBubbleButtonObjects1= [];
gdjs.GraCode.GDOrangeBubbleButtonObjects2= [];
gdjs.GraCode.GDPrzywitaj_9595SieObjects1= [];
gdjs.GraCode.GDPrzywitaj_9595SieObjects2= [];
gdjs.GraCode.GDDaj_9595mu_9595czipsyObjects1= [];
gdjs.GraCode.GDDaj_9595mu_9595czipsyObjects2= [];
gdjs.GraCode.GDButtonObjects1= [];
gdjs.GraCode.GDButtonObjects2= [];
gdjs.GraCode.GDNewSpriteObjects1= [];
gdjs.GraCode.GDNewSpriteObjects2= [];
gdjs.GraCode.GDPotatochipsBowlObjects1= [];
gdjs.GraCode.GDPotatochipsBowlObjects2= [];


gdjs.GraCode.mapOfGDgdjs_9546GraCode_9546GDPotatochipsBowlObjects1Objects = Hashtable.newFrom({"PotatochipsBowl": gdjs.GraCode.GDPotatochipsBowlObjects1});
gdjs.GraCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Przywitaj_Sie"), gdjs.GraCode.GDPrzywitaj_9595SieObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GraCode.GDPrzywitaj_9595SieObjects1.length;i<l;++i) {
    if ( gdjs.GraCode.GDPrzywitaj_9595SieObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GraCode.GDPrzywitaj_9595SieObjects1[k] = gdjs.GraCode.GDPrzywitaj_9595SieObjects1[i];
        ++k;
    }
}
gdjs.GraCode.GDPrzywitaj_9595SieObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "chicken-jockey.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GraCode.GDButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GraCode.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.GraCode.GDButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GraCode.GDButtonObjects1[k] = gdjs.GraCode.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.GraCode.GDButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OrangeBubbleButton"), gdjs.GraCode.GDOrangeBubbleButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GraCode.GDOrangeBubbleButtonObjects1.length;i<l;++i) {
    if ( gdjs.GraCode.GDOrangeBubbleButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GraCode.GDOrangeBubbleButtonObjects1[k] = gdjs.GraCode.GDOrangeBubbleButtonObjects1[i];
        ++k;
    }
}
gdjs.GraCode.GDOrangeBubbleButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "minecraft-hit-sfx.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Daj_mu_czipsy"), gdjs.GraCode.GDDaj_9595mu_9595czipsyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GraCode.GDDaj_9595mu_9595czipsyObjects1.length;i<l;++i) {
    if ( gdjs.GraCode.GDDaj_9595mu_9595czipsyObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GraCode.GDDaj_9595mu_9595czipsyObjects1[k] = gdjs.GraCode.GDDaj_9595mu_9595czipsyObjects1[i];
        ++k;
    }
}
gdjs.GraCode.GDDaj_9595mu_9595czipsyObjects1.length = k;
if (isConditionTrue_0) {
gdjs.GraCode.GDPotatochipsBowlObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GraCode.mapOfGDgdjs_9546GraCode_9546GDPotatochipsBowlObjects1Objects, 782, 278, "");
}}

}


};

gdjs.GraCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GraCode.GDSuperFoxObjects1.length = 0;
gdjs.GraCode.GDSuperFoxObjects2.length = 0;
gdjs.GraCode.GDBGObjects1.length = 0;
gdjs.GraCode.GDBGObjects2.length = 0;
gdjs.GraCode.GDOrangeBubbleButtonObjects1.length = 0;
gdjs.GraCode.GDOrangeBubbleButtonObjects2.length = 0;
gdjs.GraCode.GDPrzywitaj_9595SieObjects1.length = 0;
gdjs.GraCode.GDPrzywitaj_9595SieObjects2.length = 0;
gdjs.GraCode.GDDaj_9595mu_9595czipsyObjects1.length = 0;
gdjs.GraCode.GDDaj_9595mu_9595czipsyObjects2.length = 0;
gdjs.GraCode.GDButtonObjects1.length = 0;
gdjs.GraCode.GDButtonObjects2.length = 0;
gdjs.GraCode.GDNewSpriteObjects1.length = 0;
gdjs.GraCode.GDNewSpriteObjects2.length = 0;
gdjs.GraCode.GDPotatochipsBowlObjects1.length = 0;
gdjs.GraCode.GDPotatochipsBowlObjects2.length = 0;

gdjs.GraCode.eventsList0(runtimeScene);
gdjs.GraCode.GDSuperFoxObjects1.length = 0;
gdjs.GraCode.GDSuperFoxObjects2.length = 0;
gdjs.GraCode.GDBGObjects1.length = 0;
gdjs.GraCode.GDBGObjects2.length = 0;
gdjs.GraCode.GDOrangeBubbleButtonObjects1.length = 0;
gdjs.GraCode.GDOrangeBubbleButtonObjects2.length = 0;
gdjs.GraCode.GDPrzywitaj_9595SieObjects1.length = 0;
gdjs.GraCode.GDPrzywitaj_9595SieObjects2.length = 0;
gdjs.GraCode.GDDaj_9595mu_9595czipsyObjects1.length = 0;
gdjs.GraCode.GDDaj_9595mu_9595czipsyObjects2.length = 0;
gdjs.GraCode.GDButtonObjects1.length = 0;
gdjs.GraCode.GDButtonObjects2.length = 0;
gdjs.GraCode.GDNewSpriteObjects1.length = 0;
gdjs.GraCode.GDNewSpriteObjects2.length = 0;
gdjs.GraCode.GDPotatochipsBowlObjects1.length = 0;
gdjs.GraCode.GDPotatochipsBowlObjects2.length = 0;


return;

}

gdjs['GraCode'] = gdjs.GraCode;
