---
title: DateTime.Date
---

# DateTime.Date


Retourneert het datumgedeelte van de opgegeven waarde voor date, datetime of datetimezone.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Retourneert het datumgedeelte van <code>dateTime</code>, de opgegeven waarde voor <code>date</code>, <code>datetime</code> of <code>datetimezone</code>.


## Examples

### Example #1 
Datumwaarde zoeken van #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
