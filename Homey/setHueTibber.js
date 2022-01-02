//Get value from tibber price and put to value variable
let tibber = await Homey.devices.getDevice({id: 'cb89b897-11ec-4165-9da9-74f14b591d9d'});
let value = tibber.capabilitiesObj.price_level.value;

//Get values from "Boll kök"
const device = await Homey.devices.getDevice({id: 'd44698ea-d854-496d-bfa7-77f17339a31b'});

if (value == "VERY_EXPENSIVE") {
//Set colour on ikea light from the value of "tibber"
device.setCapabilityValue('onoff', true);
device.setCapabilityValue('dim', 0.5);
device.setCapabilityValue('light_hue', 0);
device.setCapabilityValue('light_saturation', 1);
device.setCapabilityValue('light_temperature', 1);
device.setCapabilityValue('light_mode', 'color');
}

if (value == "EXPENSIVE") {
//Set colour on ikea light from the value of "tibber"
device.setCapabilityValue('onoff', true);
device.setCapabilityValue('dim', 0.5);
device.setCapabilityValue('light_hue', 0.06);
device.setCapabilityValue('light_saturation', 0.86);
device.setCapabilityValue('light_temperature', 1);
device.setCapabilityValue('light_mode', 'color');
}

if (value == "NORMAL") {
//Set colour on ikea light from the value of "tibber"
device.setCapabilityValue('onoff', true);
device.setCapabilityValue('dim', 0.5);
device.setCapabilityValue('light_hue', 0.12);
device.setCapabilityValue('light_saturation', 0.79);
device.setCapabilityValue('light_temperature', 1);
device.setCapabilityValue('light_mode', 'color');
}

if (value == "CHEAP") {
//Set colour on ikea light from the value of "tibber"
device.setCapabilityValue('onoff', true);
device.setCapabilityValue('dim', 0.5);
device.setCapabilityValue('light_hue', 0.2);
device.setCapabilityValue('light_saturation', 0.74);
device.setCapabilityValue('light_temperature', 1);
device.setCapabilityValue('light_mode', 'color');
}

if (value == "VERY_CHEAP") {
//Set colour on ikea light from the value of "tibber"
device.setCapabilityValue('onoff', true);
device.setCapabilityValue('dim', 0.5);
device.setCapabilityValue('light_hue', 0.36);
device.setCapabilityValue('light_saturation', 0.88);
device.setCapabilityValue('light_temperature', 1);
device.setCapabilityValue('light_mode', 'color');
}
return true;
