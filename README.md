## Note

Description in each question

## 1/4: clock angle

The angle between the hour and minute hands on an analog clock can be calculated using the following formula:

```
Angle = |(hour * 30 + minute * 0.5) - (minute * 6)|
```

Detail of the formula:

hour: The hour on the clock (1-12)

minute: The minute on the clock (0-59)

30: The number of degrees in each hour on the clock face (360°/12)

0.5: The number of degrees the hour hand moves for each minute (30°/60)

6: The number of degrees the minute hand moves for each minute (360°/60)

| |: Absolute value to ensure the result is a positive angle

