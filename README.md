 
# ArtecRobo

[Extension for ArtecRobo](https://www.artec-kk.co.jp/artecrobo/ja/)

## Basic usage

* Set the speed of DC motor

```blocks
 artecrobo.setSpeedDCMotor(connectorDCMotor.M1, 0)
 artecrobo.setSpeedDCMotor(connectorDCMotor.M2, 1023)
```

* Set the direction of DC motor

```blocks
 artecrobo.moveDCMotor(connectorDCMotor.M1, DCmotion.Forward)
 artecrobo.moveDCMotor(connectorDCMotor.M2, DCmotion.Backwar)
```

* Set the servo

```blocks
 artecrobo.moveServoMotorMax(connectorServoMotor.P13, 90)
```

* Set the servo with speed

```blocks
 artecrobo.moveServoMotor(connectorServoMotor.P13, 90, 20)
```

* Set the servos 

```blocks
 artecrobo.AsyncMoveServoMotor(20, 90, 90, 90)
```


## License

MIT


## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)
