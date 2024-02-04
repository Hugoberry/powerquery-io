---
title: Duration.Seconds
---

# Duration.Seconds


## Description

Gibt den Sekundenanteil einer Dauer zurück.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Details

Gibt den Sekundenanteil von <code>duration</code> zurück.


## Examples

### Example #1 
Die Sekunden aus einem Dauerwert extrahieren.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
