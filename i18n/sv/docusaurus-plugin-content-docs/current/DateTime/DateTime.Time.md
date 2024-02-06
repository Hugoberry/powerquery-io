---
title: DateTime.Time
---

# DateTime.Time


Returnerar time-delen av angivet datetime-värde.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Remarks

Returnerar time-delen av angivet datetime-värde, <code>dateTime</code>.


## Examples

### Example #1 
Hitta tidsvärdet i #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
