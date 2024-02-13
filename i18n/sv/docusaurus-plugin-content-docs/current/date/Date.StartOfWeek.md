---
title: Date.StartOfWeek
---

# Date.StartOfWeek


Returnerar veckans början.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Returnerar början på veckan som innehåller <code>dateTime</code>.      <code>dateTime</code> måste vara ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde.


## Examples

### Example #1 
Hitta veckans början för tisdagen den 11 oktober 2011.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
Hitta veckans början för tisdagen den 11 oktober 2011 med måndag som början på veckan.
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
