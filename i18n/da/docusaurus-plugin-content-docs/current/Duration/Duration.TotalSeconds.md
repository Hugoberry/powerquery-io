---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


## Description

Returnerer det samlede antal sekunder, denne varighed strækker sig over.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Details

Returnerer det samlede antal sekunder spændt over <code>duration</code>.


## Examples

### Example #1 
Find det samlede antal sekunder spændt over en varighedsværdi.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
