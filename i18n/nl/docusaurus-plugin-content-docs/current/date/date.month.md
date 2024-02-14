---
title: Date.Month
---

# Date.Month


Retourneert het maandgedeelte.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

Retourneert het maandgedeelte van de opgegeven <code>datetime</code>waarde, <code>dateTime</code>.


## Examples

### Example #1 
De maand zoeken in #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
