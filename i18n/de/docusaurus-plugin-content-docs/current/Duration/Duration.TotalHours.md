---
title: Duration.TotalHours
---

# Duration.TotalHours


## Description

Gibt die Gesamtanzahl von Stunden für diese Dauer zurück.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Details

Gibt die Gesamtstunden zurück, die <code>duration</code> umfasst.


## Examples

### Example #1 
Die Gesamtstunden suchen, die sich über einen Dauerwert erstrecken.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
