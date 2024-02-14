---
title: Duration.Hours
---

# Duration.Hours


Returnerar timmarnas del av en varaktighet.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Remarks

Returnerar timmarnas del av <code>duration</code>.


## Examples

### Example #1 
Extrahera timmar från ett varaktighetsvärde.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
