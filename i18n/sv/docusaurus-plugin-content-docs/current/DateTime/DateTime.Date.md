---
title: DateTime.Date
---

# DateTime.Date


Returnerar date-komponenten för angivet date-, datetime- eller datetimezone-värde.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Returnerar date-komponenten för <code>dateTime</code>, för angivet <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde.


## Examples

### Example #1 
Hitta datumvärdet för #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
