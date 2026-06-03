---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Returnerar början på kvartalet.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

Returnerar början på kvartalet som innehåller `dateTime`. `dateTime` måste vara ett `date`\-, `datetime`\- eller `datetimezone`\-värde.


## Examples

### Example #1
Hitta kvartalets början för den 10 oktober 2011 08:00.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
