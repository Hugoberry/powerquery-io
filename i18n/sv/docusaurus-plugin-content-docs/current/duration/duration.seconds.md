---
title: Duration.Seconds
---

# Duration.Seconds


Returnerar sekundernas del av en varaktighet.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Remarks

Returnerar sekundernas del av <code>duration</code>.


## Examples

### Example #1 
Extrahera sekunderna från ett varaktighetsvärde.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
