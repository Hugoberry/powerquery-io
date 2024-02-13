---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


Returnerer det samlede antal minutter, denne varighed strækker sig over.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

Returnerer det samlede antal minutter spændt over <code>duration</code>.


## Examples

### Example #1 
Find det samlede antal minutter spændt over en varighedsværdi.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
