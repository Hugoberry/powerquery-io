---
title: Date.StartOfWeek
---

# Date.StartOfWeek


Tiek atgriezts nedēļas sākums.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Atgriež nedēļas sākumu, kas satur `dateTime`. `dateTime` jābūt vērtībai `date`, `datetime` vai `datetimezone`.


## Examples

### Example #1
Atrodiet nedēļas sākumu otrdienai, 2011. gada 11. oktobrim.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2
Atrodiet nedēļas sākumu otrdienai, 2011. gada 11. oktobrim, izmantojot pirmdienu kā nedēļas sākumu.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
