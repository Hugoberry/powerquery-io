---
title: Duration.TotalDays
---

# Duration.TotalDays


Returnerer det samlede antal dage, denne varighed strækker sig over.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Remarks

Returnerer det samlede antal dage spændt over <code>duration</code>.


## Examples

### Example #1 
Find det samlede antal dage spændt over en varighedsværdi.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
