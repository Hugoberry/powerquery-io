---
title: List.Covariance
---

# List.Covariance


Екі сандар тізімінің арасындағы ковариацияны қайтарады.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

`numberList1` және `numberList2` екі тізім арасындағы ковариацияны қайтарады. `numberList1` және `numberList2` `number` мәндерінің бірдей санын қамтуы керек.


## Examples

### Example #1
Екі тізім арасындағы ковариацияны есептеу.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
