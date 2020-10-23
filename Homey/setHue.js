//Get BetterLogic Variable "Bandbredd"
var BLApp = await Homey.apps.getApp({ id: "net.i-dev.betterlogic" });
var apiGet = await BLApp.apiGet('Bandbredd');
var bandbredd = apiGet.value;

//Count % backwards and split it to decimals
var hue = (100 - bandbredd) / 100;

//Get values from "Boll kök"
const device = await Homey.devices.getDevice({ id: 'd44698ea-d854-496d-bfa7-77f17339a31b' });
//Set colour on ikea light from the value of "Bandbredd"
device.setCapabilityValue('onoff', true);
device.setCapabilityValue('dim', 0.5);
device.setCapabilityValue('light_hue', hue);
device.setCapabilityValue('light_saturation', 1);
device.setCapabilityValue('light_temperature', 0);
device.setCapabilityValue('light_mode', 'color');
return true;