---
title: DateTime.Time
---

# DateTime.Time


Gibt den Uhrzeitanteil des angegebenen datetime-Werts zurück.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Remarks

Gibt den Uhrzeitanteil des angegebenen datetime-Werts (`dateTime`) zurück.


## Examples

### Example #1
Ermittelt den Uhrzeitwert von "#datetime(2010, 12, 31, 11, 56, 02)".
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
