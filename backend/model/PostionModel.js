const {model}=require("mongoose");
const {positionSchema}=require("../schemas/PositionSchema");
const positionModel=new model("position",positionSchema);
module.exports={positionModel};