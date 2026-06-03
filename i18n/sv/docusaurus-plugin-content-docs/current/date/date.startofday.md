---
title: Date.StartOfDay
---

# Date.StartOfDay


Returnerar början på dagen.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Remarks

Returnerar början på dagen som representeras av `dateTime`. `dateTime` måste vara ett `date`\-, `datetime`\- eller `datetimezone`\-värde.


## Examples

### Example #1
Hitta dagens början för den 10 oktober 2011 08:00.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
