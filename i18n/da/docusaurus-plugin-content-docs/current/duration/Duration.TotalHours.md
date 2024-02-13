---
title: Duration.TotalHours
---

# Duration.TotalHours


Returnerer det samlede antal timer, denne varighed strækker sig over.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Remarks

Returnerer det samlede antal timer spændt over <code>duration</code>.


## Examples

### Example #1 
Find det samlede antal timer spændt over en varighedsværdi.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
