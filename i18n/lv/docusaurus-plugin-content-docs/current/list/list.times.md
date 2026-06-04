---
title: List.Times
---

# List.Times


Tiek ģenerēts laika vērtību saraksts atbilstoši norādītajai sākotnējai vērtībai, vērtību skaitam un pakāpeniska ilguma palielinājuma vērtībai.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Remarks

Tiek atgriezts tipa `time` vērtību saraksts, kura vērtību skaits ir `count` un pirmā vērtība ir `start`. Norādītais palielinājums `step` ir tipa `duration` vērtība, kas tiek pieskaitīta katrai saraksta vērtībai.


## Examples

### Example #1
Izveidojiet 4 vērtību sarakstu, kura pirmā vērtība ir dienas vidus (#time(12, 0, 0)) un katra nākamā vērtība ir palielināta par vienu stundu (#duration(0, 1, 0, 0)).
```powerquery
List.Times(#time(12, 0, 0), 4, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #time(12, 0, 0),
    #time(13, 0, 0),
    #time(14, 0, 0),
    #time(15, 0, 0)
}
```




## Category
List.Generators
