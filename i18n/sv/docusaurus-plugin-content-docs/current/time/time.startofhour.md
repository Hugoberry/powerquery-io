---
title: Time.StartOfHour
---

# Time.StartOfHour


Returnerar början på timmen.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

Returnerar början på timmen som representeras av `dateTime`. `dateTime` måste vara ett `date`\-, `time`\- eller `datetimezone`\-värde.


## Examples

### Example #1
Hitta timmens början för den 10 oktober 2011 08:10:32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
