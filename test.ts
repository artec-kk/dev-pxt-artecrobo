// on touch sensor [pin] pressed
// Show a heart icon when you press the Touch Sensor:
artecrobo.onTouchSensorPressed(connectorTouchSensor.A, function () {
    basic.showIcon(IconNames.Heart);
});

// touch sensor [pin] pressed
// Press the Touch Sensor to show a heart icon:
if (artecrobo.isTouchSensorPressed(connectorTouchSensor.A)) {
    basic.showIcon(IconNames.Heart);
};

// ultrasonic sensor [pin] distance
// Get the distance of an object to an Ultrasonic Sensor on P0 through serial:
serial.writeLine("" + (artecrobo.ultraSonicSensor(connectorDigitalSensor.P0)));

// water level sensor [pin]
// Get the value of a Water Level on P0 through serial:
serial.writeLine("" + (artecrobo.waterlevelSensor(connectorAnalogSensor.P0)));

// temperature sensor [pin]
// Get the value of a Temperature Sensor on P0 through serial:
serial.writeLine("" + (artecrobo.temperatureSensor(connectorAnalogSensor.P0)));

// ir photoreflector [pin]
// Get the value of a IR Photoreflector on P0 through serial:
serial.writeLine("" + (artecrobo.irPhotoreflector(connectorAnalogSensor.P0)));

// sound sensor [pin]
// Get the value of a Sound Sensor on P0 through serial:
serial.writeLine("" + (artecrobo.soundSensor(connectorAnalogSensor.P0)));

// light sensor [pin]
// Get the value of a Light Sensor on P0 through serial:
serial.writeLine("" + (artecrobo.lightSensor(connectorAnalogSensor.P0)));

// LED [pin] on
// Turn on an LED on P0:
artecrobo.turnOnLED(connectorDigitalSensor.P0);

// LED [pin] off
// Turn off an LED on P0:
artecrobo.turnOffLED(connectorDigitalSensor.P0);

// LED [pin] is on
// Run a command when an LED on P0 is on:
if (artecrobo.isLEDOn(connectorDigitalSensor.P0)) {
};

// speaker and buzzer [pin] on frequency [frequency]
// Play a sound at 262 Hz using the micro:bit and a Buzzer on P0:
artecrobo.turnOnSpeakerAndBuzzer(connectorDigitalSensor.P0, 262);

// speaker and buzzer [pin] off
// Stop playing the micro:bit and a Buzzer on P0:
artecrobo.turnOffSpeakerAndBuzzer(connectorDigitalSensor.P0);

// buzzer [pin] on frequency [frequency]
// Play a sound at 262 Hz using a Buzzer on P0:
artecrobo.turnOnBuzzer(connectorDigitalSensor.P0, 262);

// buzzer [pin] off
// Stop playing a Buzzer on P0:
artecrobo.turnOffBuzzer(connectorDigitalSensor.P0);

// buzzer [pin] playing
// Show a heart icon if a Buzzer on P0 is playing:
if (artecrobo.isBuzzerplaying(connectorDigitalSensor.P0)) {
    basic.showIcon(IconNames.Heart);
};


// DC Motor
// Power & CW
// M1, M2
artecrobo.moveDCMotor(connectorDCMotor.M1, DCmotion.Forward);
for (let i = 1023; i > 0; i--) {
    artecrobo.setSpeedDCMotor(connectorDCMotor.M1, i);
    basic.pause(10);
}
artecrobo.moveDCMotor(connectorDCMotor.M2, DCmotion.Forward);
for (let i = 1023; i > 0; i--) {
    artecrobo.setSpeedDCMotor(connectorDCMotor.M2, i);
    basic.pause(10);
}

// CW & BRAKE
// M1, M2
artecrobo.setSpeedDCMotor(connectorDCMotor.M1, 1023);
artecrobo.moveDCMotor(connectorDCMotor.M1, DCmotion.Forward);
basic.pause(2000);
artecrobo.moveDCMotor(connectorDCMotor.M1, DCmotion.Brake);

artecrobo.setSpeedDCMotor(connectorDCMotor.M2, 1023);
artecrobo.moveDCMotor(connectorDCMotor.M2, DCmotion.Forward);
basic.pause(2000);
artecrobo.moveDCMotor(connectorDCMotor.M2, DCmotion.Brake);

// CCW & COAST
// M1, M2
artecrobo.setSpeedDCMotor(connectorDCMotor.M1, 1023);
artecrobo.moveDCMotor(connectorDCMotor.M1, DCmotion.Backward);
basic.pause(2000);
artecrobo.moveDCMotor(connectorDCMotor.M1, DCmotion.Coast);

artecrobo.setSpeedDCMotor(connectorDCMotor.M2, 1023);
artecrobo.moveDCMotor(connectorDCMotor.M2, DCmotion.Backward);
basic.pause(2000);
artecrobo.moveDCMotor(connectorDCMotor.M2, DCmotion.Coast);

basic.pause(2000);

// Servomotor
// Degree
// P13, P14, P15
artecrobo.moveServoMotorMax(connectorServoMotor.P13, 0);
basic.pause(1000);
for (let i = 0; i <= 180; i++) {
    artecrobo.moveServoMotorMax(connectorServoMotor.P13, i);
    basic.pause(100);
}
artecrobo.moveServoMotorMax(connectorServoMotor.P14, 0);
basic.pause(1000);
for (let i = 0; i <= 180; i++) {
    artecrobo.moveServoMotorMax(connectorServoMotor.P14, i);
    basic.pause(100);
}
artecrobo.moveServoMotorMax(connectorServoMotor.P15, 0);
basic.pause(1000);
for (let i = 0; i <= 180; i++) {
    artecrobo.moveServoMotorMax(connectorServoMotor.P15, i);
    basic.pause(100);
}

// Degree with speed
// P13, P14, P15
for (let i = 1; i <= 20; i+=2) {
    artecrobo.moveServoMotor(connectorServoMotor.P13, 0, i);
    artecrobo.moveServoMotor(connectorServoMotor.P13, 180, i+1);
}
for (let i = 1; i < 20; i+=2) {
    artecrobo.moveServoMotor(connectorServoMotor.P14, 0, i);
    artecrobo.moveServoMotor(connectorServoMotor.P14, 180, i+1);
}
for (let i = 1; i < 20; i+=2) {
    artecrobo.moveServoMotor(connectorServoMotor.P15, 0, i);
    artecrobo.moveServoMotor(connectorServoMotor.P15, 180, i+1);
}

// Degrees with speed
// P13, P14, P15
artecrobo.AsyncMoveServoMotor(1, 0, 90, 180);
basic.pause(300);
artecrobo.AsyncMoveServoMotor(1, 90, 180, 0);
basic.pause(300);
artecrobo.AsyncMoveServoMotor(2, 180, 0, 90);
basic.pause(300);
artecrobo.AsyncMoveServoMotor(3, 0, 90, 180);
basic.pause(300);
artecrobo.AsyncMoveServoMotor(4, 90, 180, 0);
basic.pause(300);
artecrobo.AsyncMoveServoMotor(5, 180, 0, 90);
basic.pause(300);
artecrobo.AsyncMoveServoMotor(6, 0, 90, 180);
basic.pause(300);
artecrobo.AsyncMoveServoMotor(7, 90, 180, 0);
basic.pause(300);
artecrobo.AsyncMoveServoMotor(8, 180, 0, 90);
basic.pause(300);
artecrobo.AsyncMoveServoMotor(9, 0, 90, 180);
basic.pause(300);
artecrobo.AsyncMoveServoMotor(10, 90, 180, 0);
basic.pause(300);
artecrobo.AsyncMoveServoMotor(11, 180, 0, 90);
basic.pause(300);
artecrobo.AsyncMoveServoMotor(12, 0, 90, 180);
basic.pause(300);
artecrobo.AsyncMoveServoMotor(13, 90, 180, 0);
basic.pause(300);
artecrobo.AsyncMoveServoMotor(14, 180, 0, 90);
basic.pause(300);
artecrobo.AsyncMoveServoMotor(15, 0, 90, 180);
basic.pause(300);
artecrobo.AsyncMoveServoMotor(16, 90, 180, 0);
basic.pause(300);
artecrobo.AsyncMoveServoMotor(17, 180, 0, 90);
basic.pause(300);
artecrobo.AsyncMoveServoMotor(18, 0, 90, 180);
basic.pause(300);
artecrobo.AsyncMoveServoMotor(19, 90, 180, 0);
basic.pause(300);
artecrobo.AsyncMoveServoMotor(20, 180, 0, 90);
