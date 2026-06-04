---
title: Date.Month
---

# Date.Month


Palauttaa kuukausiosan.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

Palauttaa annetun `datetime`\-arvon `dateTime` kuukausiosan.


## Examples

### Example #1
Selvitä kuukausi kohteessa #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
