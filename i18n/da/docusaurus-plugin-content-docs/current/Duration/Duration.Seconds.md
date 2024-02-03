---
title: Duration.Seconds
---

# Duration.Seconds


## Description

Returnerer sekunddelen af en varighed.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Details

Returnerer sekunddelen af <code>duration</code>.


## Examples

### Example #1 
Udtræk sekunderne fra en varighedsværdi.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
