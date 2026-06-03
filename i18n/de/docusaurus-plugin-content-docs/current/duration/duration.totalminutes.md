---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


Gibt die Gesamtanzahl von Minuten für diese Dauer zurück.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

Gibt die Gesamtanzahl von Minuten zurück, die von `duration` umfasst werden.


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
