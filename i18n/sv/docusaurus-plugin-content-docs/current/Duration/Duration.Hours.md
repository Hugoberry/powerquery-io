---
title: Duration.Hours
---

# Duration.Hours


## Description

Returnerar timmarnas del av en varaktighet.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Details

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
