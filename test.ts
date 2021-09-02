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
