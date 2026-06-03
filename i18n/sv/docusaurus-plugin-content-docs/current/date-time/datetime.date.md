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

Returnerar datumkomponenten för parametern `dateTime` om parametern är ett värde av typen `date`, `datetime` eller `datetimezone-`, eller `null` om parametern är `null`.


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
