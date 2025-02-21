const {model, default: mongoose} = require("mongoose")

const {HoldingSchema} = require("../schemas/HoldingSchema")


const HoldingModel = mongoose.model("holding", HoldingSchema)

module.exports = {HoldingModel}