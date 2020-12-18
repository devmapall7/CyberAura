gdjs.ThanksCode = {};
gdjs.ThanksCode.GDThanksObjects1= [];
gdjs.ThanksCode.GDThanksObjects2= [];
gdjs.ThanksCode.GDNewObjectObjects1= [];
gdjs.ThanksCode.GDNewObjectObjects2= [];
gdjs.ThanksCode.GDScoreObjects1= [];
gdjs.ThanksCode.GDScoreObjects2= [];
gdjs.ThanksCode.GDInfoObjects1= [];
gdjs.ThanksCode.GDInfoObjects2= [];

gdjs.ThanksCode.conditionTrue_0 = {val:false};
gdjs.ThanksCode.condition0IsTrue_0 = {val:false};
gdjs.ThanksCode.condition1IsTrue_0 = {val:false};


gdjs.ThanksCode.eventsList0xb2358 = function(runtimeScene) {

{


gdjs.ThanksCode.condition0IsTrue_0.val = false;
{
gdjs.ThanksCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.ThanksCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


{
gdjs.ThanksCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
{for(var i = 0, len = gdjs.ThanksCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.ThanksCode.GDScoreObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("CyberCoins"))));
}
}}

}


{


{
}

}


}; //End of gdjs.ThanksCode.eventsList0xb2358


gdjs.ThanksCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.ThanksCode.GDThanksObjects1.length = 0;
gdjs.ThanksCode.GDThanksObjects2.length = 0;
gdjs.ThanksCode.GDNewObjectObjects1.length = 0;
gdjs.ThanksCode.GDNewObjectObjects2.length = 0;
gdjs.ThanksCode.GDScoreObjects1.length = 0;
gdjs.ThanksCode.GDScoreObjects2.length = 0;
gdjs.ThanksCode.GDInfoObjects1.length = 0;
gdjs.ThanksCode.GDInfoObjects2.length = 0;

gdjs.ThanksCode.eventsList0xb2358(runtimeScene);
return;
}
gdjs['ThanksCode'] = gdjs.ThanksCode;
