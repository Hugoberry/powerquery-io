---
title: Duration.Hours
---

# Duration.Hours


Gibt den Stundenanteil einer Dauer zurück.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Remarks

Gibt den Stundenbereich von <code>duration</code> zurück.


## Examples

### Example #1 
Die Stunden aus einem Dauerwert extrahieren.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
