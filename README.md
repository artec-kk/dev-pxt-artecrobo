 
# ArtecRobo

[Extension for ArtecRobo](https://www.artec-kk.co.jp/en/images/056720.pdf#page=36)

## Basic usage

* Set the speed of DC motor

The way to set DC motor power is by using the setSpeedDCMotor blocks. With each of these blocks you specify M1 or M2, and a speed from 0 to 1023. 

```blocks
// Set M1 Dcmotor to max power(1023)
artecrobo.setSpeedDCMotor(connectorDCMotor.M1, 1023)
```

* Set the direction of DC motor

The way to move DC motor is by using the moveDCMotor blocks. With each of these blocks you specify M1 or M2, and a Forward, Backward, Brake or Coast.

```blocks
// Control M1 DC motor to Forward
artecrobo.moveDCMotor(connectorDCMotor.M1, DCmotion.Forward)
```

* Set the servo

The way to move Servomotor is by using the moveServoMotorMax blocks. With each of these blocks you specify P13, P14 or P15, and an angle from 0 to 180.

```blocks
// Set P13 servomotor to 90 degree
artecrobo.moveServoMotorMax(connectorServoMotor.P13, 90)
```

* Set the servo with speed

The way to move Servomotor at a specified speed is by using the moveServoMotor blocks. With each of these blocks you specify P13, P14 or P15, an angle from 0 to 180, a speed from 1 to 20.

```blocks
// Set P13 servomotor to 90 degree at speed 20
artecrobo.moveServoMotor(connectorServoMotor.P13, 90, 20)
```

* Set the servos 

The way to move Servomotors at a specified speed is by using the AsyncMoveServoMotor blocks. With each of these blocks you specify a speed from 0 to 20 and an angle from 0 to 180 with P13, P14, or P15.


```blocks
// Set P13, P14, and P15 servomotors to 0, 90, 180 degree at speed 20
artecrobo.AsyncMoveServoMotor(20, 0, 90, 180)
```


## License

MIT


## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)
