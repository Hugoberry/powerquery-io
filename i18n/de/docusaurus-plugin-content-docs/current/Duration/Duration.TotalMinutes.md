---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


## Description

Gibt die Gesamtanzahl von Minuten für diese Dauer zurück.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Details

Gibt die Gesamtanzahl von Minuten zurück, die von <code>duration</code> umfasst werden.


## Examples

### Example #1 
Die Gesamtanzahl von Minuten suchen, die sich über einen Dauerwert erstrecken.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
