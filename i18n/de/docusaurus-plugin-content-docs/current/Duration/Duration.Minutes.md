---
title: Duration.Minutes
---

# Duration.Minutes


## Description

Gibt den Minutenanteil einer Dauer zurück.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Details

Gibt den Minutenanteil von <code>duration</code> zurück.


## Examples

### Example #1 
Die Minuten aus einem Dauerwert extrahieren.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
