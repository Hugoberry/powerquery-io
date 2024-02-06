---
title: Duration.Seconds
---

# Duration.Seconds


Returnerer sekunddelen af en varighed.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Remarks

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
